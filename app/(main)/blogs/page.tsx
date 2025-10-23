import { Blog } from "@/schema/blogSchema";
import type { Metadata } from "next";
import { BlogList } from "../_components/blogs/blog-list";

async function getInitialBlogs(): Promise<{ blogs: Blog[]; total: number }> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
    const response = await fetch(`${baseUrl}/blogs/public?page=1&limit=6`, {});

    if (!response.ok) {
      console.error(
        "Failed to fetch blogs:",
        response.status,
        response.statusText,
      );
      throw new Error("Failed to fetch blogs");
    }

    const data = await response.json();

    return {
      blogs: data.data || [],
      total: data.meta?.total || 0,
    };
  } catch (error) {
    console.error("Error fetching initial blogs:", error);
    return { blogs: [], total: 0 };
  }
}

// SEO Metadata
export const metadata: Metadata = {
  title: "Our Blog | Latest News, Tips & Insights",
  description:
    "Stay updated with the latest news, tips, and insights from our team. Discover expert advice, industry trends, and helpful guides.",
  keywords: [
    "blog",
    "news",
    "tips",
    "insights",
    "car rental",
    "transportation",
    "travel",
    "guide",
    "industry news",
  ],
  openGraph: {
    title: "Our Blog | Latest News, Tips & Insights",
    description:
      "Stay updated with the latest news, tips, and insights from our team. Discover expert advice, industry trends, and helpful guides.",
    type: "website",
    url: "/blogs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Blog | Latest News, Tips & Insights",
    description:
      "Stay updated with the latest news, tips, and insights from our team. Discover expert advice, industry trends, and helpful guides.",
  },
  alternates: {
    canonical: "/blogs",
  },
};

const BlogsPage = async () => {
  const { blogs, total } = await getInitialBlogs();
  const baseUrl = process.env.APP_URL || "https://escalade4lax.com";
  const frontendUrl = baseUrl.replace("/api", "");

  // Structured data for blog collection
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Our Blog",
    description:
      "Stay updated with the latest news, tips, and insights from our team. Discover expert advice, industry trends, and helpful guides.",
    url: `${frontendUrl}/blogs`,
    publisher: {
      "@type": "Organization",
      name: "Escalade4lax",
      url: frontendUrl,
    },
    blogPost: blogs.map((blog) => ({
      "@type": "BlogPosting",
      headline: blog.title,
      description: blog.metaDescription || blog.excerpt || blog.title,
      url: `${frontendUrl}/blogs/${blog.slug}`,
      datePublished: blog.publishedAt || blog.createdAt,
      dateModified: blog.updatedAt,
      author: {
        "@type": "Person",
        name: blog.author?.name || blog.author?.email || "Unknown Author",
      },
      image: blog.featuredImage || undefined,
      keywords:
        blog.tags
          ?.filter((tag): tag is string => tag !== undefined)
          .join(", ") || "",
    })),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        {/* <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Our Blog
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Stay updated with the latest news, tips, and insights from our team
          </p>
        </div> */}

        {/* Blog List */}
        <BlogList initialBlogs={blogs} initialTotal={total} />
      </div>
    </div>
  );
};

export default BlogsPage;
