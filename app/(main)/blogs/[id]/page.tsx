import { Blog } from "@/schema/blogSchema";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogDetail } from "../../_components/blogs/blog-detail";

async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
    const response = await fetch(`${baseUrl}/blogs/slug/${slug}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      console.error(
        "Failed to fetch blog:",
        response.status,
        response.statusText,
      );
      throw new Error("Failed to fetch blog");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

interface BlogDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Generate dynamic metadata for each blog post
export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const blog = await getBlogBySlug(resolvedParams.id);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
  const frontendUrl = baseUrl.replace("/api", "");
  const blogUrl = `${frontendUrl}/blogs/${blog.slug}`;

  // Filter out undefined tags
  const validTags =
    blog.tags?.filter((tag): tag is string => tag !== undefined) || [];

  return {
    title: blog.metaTitle || blog.title,
    description:
      blog.metaDescription ||
      blog.excerpt ||
      `Read ${blog.title} - ${blog.author?.name || blog.author?.email}`,
    keywords: validTags,
    authors: [
      { name: blog.author?.name || blog.author?.email || "Unknown Author" },
    ],
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt || `Read ${blog.title}`,
      type: "article",
      url: blogUrl,
      publishedTime: blog.publishedAt || blog.createdAt,
      modifiedTime: blog.updatedAt,
      authors: [blog.author?.name || blog.author?.email || "Unknown Author"],
      tags: validTags,
      images: blog.featuredImage
        ? [
            {
              url: blog.featuredImage,
              width: 1200,
              height: 630,
              alt: blog.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt || `Read ${blog.title}`,
      images: blog.featuredImage ? [blog.featuredImage] : [],
    },
    alternates: {
      canonical: blogUrl,
    },
  };
}

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
  const resolvedParams = await params;
  const blog = await getBlogBySlug(resolvedParams.id);

  if (!blog) {
    notFound();
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
  const frontendUrl = baseUrl.replace("/api", "");
  const blogUrl = `${frontendUrl}/blogs/${blog.slug}`;

  // Filter out undefined tags
  const validTags =
    blog.tags?.filter((tag): tag is string => tag !== undefined) || [];

  // Structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.metaDescription || blog.excerpt || blog.title,
    image: blog.featuredImage ? [blog.featuredImage] : [],
    author: {
      "@type": "Person",
      name: blog.author?.name || blog.author?.email || "Unknown Author",
    },
    publisher: {
      "@type": "Organization",
      name: "Way-Wise Car Rental",
      url: frontendUrl,
    },
    datePublished: blog.publishedAt || blog.createdAt,
    dateModified: blog.updatedAt,
    url: blogUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": blogUrl,
    },
    keywords: validTags.join(", ") || "",
    articleBody: blog.content,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <div className="container mx-auto px-4 py-8">
        <BlogDetail blog={blog} />
      </div>
    </div>
  );
};

export default BlogDetailPage;
