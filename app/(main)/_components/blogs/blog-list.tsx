import { Blog } from "@/schema/blogSchema";
import { Filter } from "lucide-react";
import { BlogCard } from "./blog-card";

interface BlogListProps {
  blogs?: Blog[];
}

export const BlogList = ({ blogs = [] }: BlogListProps) => {
  return (
    <div className="space-y-6">
      {/* Blog Grid */}
      {blogs.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog: Blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}

      {/* Empty State */}
      {blogs.length === 0 && (
        <div className="py-12 text-center">
          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
            <Filter className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            No blogs available
          </h3>
          <p className="text-gray-600">Check back later for new blog posts</p>
        </div>
      )}
    </div>
  );
};
