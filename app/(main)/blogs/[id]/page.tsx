import { Blog } from "@/schema/blogSchema";
import { notFound } from "next/navigation";
import { BlogDetail } from "../../_components/blogs/blog-detail";

async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/blogs/slug/${slug}`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
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

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
  const resolvedParams = await params;
  const blog = await getBlogBySlug(resolvedParams.id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <BlogDetail blog={blog} />
      </div>
    </div>
  );
};

export default BlogDetailPage;
