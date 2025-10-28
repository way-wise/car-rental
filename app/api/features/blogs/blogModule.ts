import {
  blogQuerySchema,
  createBlogSchema,
  updateBlogSchema,
} from "@/schema/blogSchema";
import { paginationQuerySchema } from "@/schema/paginationSchema";
import { Hono } from "hono";
import { object, string } from "yup";
import { requiresAuth } from "../../lib/authHandler";
import { validateInput } from "../../lib/validateInput";
import { blogService } from "./blogService";

const app = new Hono();

/*
  @route    POST: /blogs
  @access   private
  @desc     Create a new blog
*/
app.post("/", requiresAuth, async (c) => {
  try {
    const body = await c.req.json();

    const validatedData = await validateInput({
      type: "form",
      schema: createBlogSchema,
      data: body,
    });

    // Get author ID from context (set by requiresAuth middleware)
    const authorId = (c as { get: (key: string) => string }).get("userId");

    if (!authorId) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    const result = await blogService.createBlog({
      ...validatedData,
      authorId,
    });

    return c.json(result, 201);
  } catch (error: unknown) {
    console.error("Error creating blog:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    return c.json({ error: errorMessage }, 500);
  }
});

/*
  @route    GET: /blogs
  @access   private
  @desc     Get all blogs with pagination and search
*/
app.get("/", requiresAuth, async (c) => {
  const validatedQuery = await validateInput({
    type: "query",
    schema: paginationQuerySchema.concat(blogQuerySchema),
    data: c.req.query(),
  });

  const result = await blogService.getBlogs(validatedQuery);
  return c.json(result);
});

/*
  @route    GET: /blogs/public
  @access   public
  @desc     Get all published blogs for public consumption (no pagination)
*/
app.get("/public", async (c) => {
  const result = await blogService.getAllPublishedBlogs();
  return c.json(result);
});

/*
  @route    GET: /blogs/stats
  @access   private
  @desc     Get blog statistics
*/
app.get("/stats", requiresAuth, async (c) => {
  const authorId = (c as { get: (key: string) => string }).get("userId");
  const result = await blogService.getBlogStats(authorId);
  return c.json(result);
});

/*
  @route    GET: /blogs/recent
  @access   private
  @desc     Get recent blogs
*/
app.get("/recent", requiresAuth, async (c) => {
  const authorId = (c as { get: (key: string) => string }).get("userId");
  const limit = parseInt(c.req.query("limit") || "5");

  const result = await blogService.getRecentBlogs(limit, authorId);
  return c.json(result);
});

/*
  @route    GET: /blogs/tags
  @access   public
  @desc     Get blogs by tags
*/
app.get("/tags", async (c) => {
  const tags = c.req.query("tags");
  const limit = parseInt(c.req.query("limit") || "10");

  if (!tags) {
    return c.json({ error: "Tags parameter is required" }, 400);
  }

  const tagsArray = tags.split(",").map((tag) => tag.trim());
  const result = await blogService.getBlogsByTags(tagsArray, limit);
  return c.json(result);
});

/*
  @route    GET: /blogs/:id
  @access   private
  @desc     Get a single blog by ID
*/
app.get("/:id", requiresAuth, async (c) => {
  const validatedParam = await validateInput({
    type: "param",
    schema: object({
      id: string().required(),
    }),
    data: c.req.param(),
  });

  const result = await blogService.getBlogById(validatedParam.id);
  return c.json(result);
});

/*
  @route    GET: /blogs/slug/:slug
  @access   public
  @desc     Get a single blog by slug (for public consumption)
*/
app.get("/slug/:slug", async (c) => {
  const validatedParam = await validateInput({
    type: "param",
    schema: object({
      slug: string().required(),
    }),
    data: c.req.param(),
  });

  const result = await blogService.getBlogBySlug(validatedParam.slug);
  return c.json(result);
});

/*
  @route    PUT: /blogs/:id
  @access   private
  @desc     Update a blog
*/
app.put("/:id", requiresAuth, async (c) => {
  const validatedParam = await validateInput({
    type: "param",
    schema: object({
      id: string().required(),
    }),
    data: c.req.param(),
  });

  const body = await c.req.json();
  const validatedData = await validateInput({
    type: "form",
    schema: updateBlogSchema,
    data: body,
  });

  const result = await blogService.updateBlog(validatedParam.id, validatedData);
  return c.json(result);
});

/*
  @route    PATCH: /blogs/:id/status
  @access   private
  @desc     Update blog status
*/
app.patch("/:id/status", requiresAuth, async (c) => {
  const validatedParam = await validateInput({
    type: "param",
    schema: object({
      id: string().required(),
    }),
    data: c.req.param(),
  });

  const body = await c.req.json();
  const validatedData = await validateInput({
    type: "form",
    schema: object({
      status: string().required().oneOf(["draft", "published", "archived"]),
    }),
    data: body,
  });

  const result = await blogService.updateBlog(validatedParam.id, {
    status: validatedData.status as "draft" | "published" | "archived",
  });

  return c.json(result);
});

/*
  @route    DELETE: /blogs/:id
  @access   private
  @desc     Delete a blog
*/
app.delete("/:id", requiresAuth, async (c) => {
  const validatedParam = await validateInput({
    type: "param",
    schema: object({
      id: string().required(),
    }),
    data: c.req.param(),
  });

  const result = await blogService.deleteBlog(validatedParam.id);
  return c.json(result);
});

export default app;
