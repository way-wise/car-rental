import { Blog } from "@/schema/blogSchema";
import { BlogList } from "../_components/blogs/blog-list";

async function getInitialBlogs(): Promise<{ blogs: Blog[]; total: number }> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/blogs/public?page=1&limit=6`, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        "Failed to fetch blogs:",
        response.status,
        response.statusText,
      );
      throw new Error("Failed to fetch blogs");
    }

    const data = await response.json();
    console.log("Initial blogs data:", data);
    return {
      blogs: data.data || [],
      total: data.meta?.total || 0,
    };
  } catch (error) {
    console.error("Error fetching initial blogs:", error);
    return { blogs: [], total: 0 };
  }
}

const BlogsPage = async () => {
  const { blogs, total } = await getInitialBlogs();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Our Blog
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Stay updated with the latest news, tips, and insights from our team
          </p>
        </div>

        {/* Blog List */}
        <BlogList initialBlogs={blogs} initialTotal={total} />
      </div>
    </div>
  );
};

export default BlogsPage;
