import { getPaginationQuery } from "@/app/api/lib/pagination";
import prisma from "@/lib/prisma";
import type {
  BlogQuery,
  CreateBlogInput,
  UpdateBlogInput,
} from "@/schema/blogSchema";
import type { PaginationQuery } from "@/schema/paginationSchema";
import { HTTPException } from "hono/http-exception";
import { ulid } from "ulid";

// Helper function to generate slug from title
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

// Helper function to ensure unique slug
const ensureUniqueSlug = async (
  slug: string,
  excludeId?: string,
): Promise<string> => {
  let uniqueSlug = slug;
  let counter = 1;

  while (true) {
    const existing = await prisma.blogs.findFirst({
      where: {
        slug: uniqueSlug,
        ...(excludeId ? { id: { not: excludeId } } : {}),
      },
    });

    if (!existing) {
      break;
    }

    uniqueSlug = `${slug}-${counter}`;
    counter++;
  }

  return uniqueSlug;
};

export const blogService = {
  // Get all blogs with pagination and search
  getBlogs: async (query: PaginationQuery & BlogQuery) => {
    const { skip, take, page, limit } = getPaginationQuery(query);

    // Build where clause
    const whereClause: Record<string, unknown> = {};

    // Filter by status
    if (query.status) {
      whereClause.status = query.status;
    }

    // Filter by author
    if (query.authorId) {
      whereClause.authorId = query.authorId;
    }

    // Search functionality
    if (query.search) {
      whereClause.OR = [
        {
          title: {
            contains: query.search,
            mode: "insensitive",
          },
        },
        {
          content: {
            contains: query.search,
            mode: "insensitive",
          },
        },
        {
          excerpt: {
            contains: query.search,
            mode: "insensitive",
          },
        },
      ];
    }

    // Filter by tags
    if (query.tags) {
      const tagsArray = query.tags.split(",").map((tag) => tag.trim());
      whereClause.tags = {
        hasSome: tagsArray,
      };
    }

    // Build order by clause
    const orderBy: Record<string, string> = {};
    orderBy[query.sortBy || "createdAt"] = query.sortOrder || "desc";

    const [blogs, total] = await prisma.$transaction([
      prisma.blogs.findMany({
        where: whereClause,
        include: {
          author: {
            select: {
              id: true,
              name: true,
              email: true,
              image: true,
            },
          },
        },
        skip,
        take,
        orderBy,
      }),
      prisma.blogs.count({
        where: whereClause,
      }),
    ]);

    return {
      data: blogs,
      meta: {
        page,
        limit,
        total,
      },
    };
  },

  // Get published blogs for public consumption
  getPublishedBlogs: async (
    query: PaginationQuery & Omit<BlogQuery, "status">,
  ) => {
    return blogService.getBlogs({
      ...query,
      status: "published",
    });
  },

  // Get all published blogs without pagination
  getAllPublishedBlogs: async () => {
    const blogs = await prisma.blogs.findMany({
      where: {
        status: "published",
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
      },
      orderBy: {
        publishedAt: "desc",
      },
    });

    return { data: blogs };
  },

  // Get a single blog by ID
  getBlogById: async (id: string) => {
    const blog = await prisma.blogs.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
      },
    });

    if (!blog) {
      throw new HTTPException(404, {
        message: "Blog not found",
      });
    }

    return blog;
  },

  // Get a single blog by slug (for public consumption)
  getBlogBySlug: async (slug: string) => {
    const blog = await prisma.blogs.findFirst({
      where: {
        slug,
        status: "published",
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
      },
    });

    if (!blog) {
      throw new HTTPException(404, {
        message: "Blog not found",
      });
    }

    return blog;
  },

  // Create a new blog
  createBlog: async (data: CreateBlogInput & { authorId: string }) => {
    try {
      const { authorId, ...blogData } = data;

      // Generate slug from title
      const baseSlug = generateSlug(blogData.title);
      const slug = await ensureUniqueSlug(baseSlug);

      // Set publishedAt if status is published
      const publishedAt = blogData.status === "published" ? new Date() : null;

      // Filter out undefined values from tags
      const filteredTags =
        blogData.tags?.filter((tag): tag is string => tag !== undefined) || [];

      const blog = await prisma.blogs.create({
        data: {
          id: ulid(),
          ...blogData,
          tags: filteredTags,
          slug,
          authorId,
          publishedAt,
        },
        include: {
          author: {
            select: {
              id: true,
              name: true,
              email: true,
              image: true,
            },
          },
        },
      });

      return blog;
    } catch (error) {
      console.error("Error in createBlog service:", error);
      throw error;
    }
  },

  // Update a blog
  updateBlog: async (id: string, data: UpdateBlogInput) => {
    const existingBlog = await prisma.blogs.findUnique({
      where: { id },
    });

    if (!existingBlog) {
      throw new HTTPException(404, {
        message: "Blog not found",
      });
    }

    // Generate new slug if title is being updated
    let slug = existingBlog.slug;
    if (data.title && data.title !== existingBlog.title) {
      const baseSlug = generateSlug(data.title);
      slug = await ensureUniqueSlug(baseSlug, id);
    }

    // Set publishedAt if status is being changed to published
    let publishedAt = existingBlog.publishedAt;
    if (data.status === "published" && existingBlog.status !== "published") {
      publishedAt = new Date();
    } else if (data.status && data.status !== "published") {
      publishedAt = null;
    }

    // Filter out undefined values from tags if provided
    const { tags, ...dataWithoutTags } = data;
    const updateData = {
      ...dataWithoutTags,
      slug,
      publishedAt,
      ...(tags && {
        tags: tags.filter((tag): tag is string => tag !== undefined),
      }),
    };

    const blog = await prisma.blogs.update({
      where: { id },
      data: updateData,
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
      },
    });

    return blog;
  },

  // Delete a blog
  deleteBlog: async (id: string) => {
    const blog = await prisma.blogs.findUnique({
      where: { id },
    });

    if (!blog) {
      throw new HTTPException(404, {
        message: "Blog not found",
      });
    }

    await prisma.blogs.delete({
      where: { id },
    });

    return { success: true, message: "Blog deleted successfully" };
  },

  // Get blog statistics
  getBlogStats: async (authorId?: string) => {
    const whereClause = authorId ? { authorId } : {};

    const [totalBlogs, publishedBlogs, draftBlogs, archivedBlogs] =
      await prisma.$transaction([
        // Total blogs count
        prisma.blogs.count({
          where: whereClause,
        }),

        // Published blogs count
        prisma.blogs.count({
          where: {
            ...whereClause,
            status: "published",
          },
        }),

        // Draft blogs count
        prisma.blogs.count({
          where: {
            ...whereClause,
            status: "draft",
          },
        }),

        // Archived blogs count
        prisma.blogs.count({
          where: {
            ...whereClause,
            status: "archived",
          },
        }),
      ]);

    return {
      totalBlogs,
      publishedBlogs,
      draftBlogs,
      archivedBlogs,
    };
  },

  // Get recent blogs
  getRecentBlogs: async (limit: number = 5, authorId?: string) => {
    const whereClause = authorId ? { authorId } : {};

    const blogs = await prisma.blogs.findMany({
      where: whereClause,
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: limit,
    });

    return blogs;
  },

  // Get blogs by tags
  getBlogsByTags: async (tags: string[], limit: number = 10) => {
    const blogs = await prisma.blogs.findMany({
      where: {
        status: "published",
        tags: {
          hasSome: tags,
        },
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
      },
      orderBy: {
        publishedAt: "desc",
      },
      take: limit,
    });

    return blogs;
  },
};
