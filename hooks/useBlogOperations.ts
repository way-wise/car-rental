import { mutate } from "swr";

export const useBlogOperations = () => {
  const invalidateBlogCache = async () => {
    // Invalidate all blog-related cache entries
    await mutate(
      (key) => {
        if (typeof key === "string") {
          return key.startsWith("/api/blogs");
        }
        return false;
      },
      undefined,
      { revalidate: true },
    );
  };

  const invalidateSpecificBlog = async (blogId: string) => {
    // Invalidate specific blog cache
    await mutate(`/api/blogs/${blogId}`, undefined, { revalidate: true });
  };

  const invalidatePublicBlogs = async () => {
    // Invalidate public blogs cache
    await mutate(
      (key) => {
        if (typeof key === "string") {
          return key.startsWith("/api/blogs/public");
        }
        return false;
      },
      undefined,
      { revalidate: true },
    );
  };

  return {
    invalidateBlogCache,
    invalidateSpecificBlog,
    invalidatePublicBlogs,
  };
};
