"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ImageUpload } from "@/components/ui/image-upload";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useBlogOperations } from "@/hooks/useBlogOperations";
import { CreateBlogInput } from "@/schema/blogSchema";
import { ArrowLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useSWR from "swr";

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const blogId = params.id as string;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { invalidateBlogCache, invalidatePublicBlogs } = useBlogOperations();

  // Fetch blog data
  const { data: blog, isLoading } = useSWR(
    blogId ? `/api/blogs/${blogId}` : null,
    async (url: string) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch blog");
      }
      return response.json();
    },
  );

  const form = useForm<CreateBlogInput>({
    defaultValues: {
      title: "",
      content: "",
      excerpt: "",
      featuredImage: "",
      status: "draft",
      tags: [],
      metaTitle: "",
      metaDescription: "",
    },
  });

  // Update form when blog data is loaded
  useEffect(() => {
    if (blog) {
      form.reset({
        title: blog.title || "",
        content: blog.content || "",
        excerpt: blog.excerpt || "",
        featuredImage: blog.featuredImage || "",
        status: (blog.status as "draft" | "published" | "archived") || "draft",
        tags: blog.tags || [],
        metaTitle: blog.metaTitle || "",
        metaDescription: blog.metaDescription || "",
      });
    }
  }, [blog, form]);

  const handleSubmit = async (data: CreateBlogInput) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/blogs/${blogId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to update blog");
      }

      toast.success("Blog updated successfully");

      // Invalidate SWR cache to refresh the blog list
      await invalidateBlogCache();

      // Also invalidate public blogs cache if the blog status changed to/from published
      const wasPublished = blog?.status === "published";
      const isNowPublished = data.status === "published";

      if (wasPublished || isNowPublished) {
        await invalidatePublicBlogs();
      }

      router.push("/dashboard/blogs");
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to update blog";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTagsChange = (value: string) => {
    const tags = value
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);
    form.setValue("tags", tags);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-4xl space-y-6 p-6">
        <div className="animate-pulse">
          <div className="mb-4 h-8 w-1/3 rounded bg-gray-200"></div>
          <div className="mb-8 h-4 w-1/2 rounded bg-gray-200"></div>
          <div className="space-y-4">
            <div className="h-10 rounded bg-gray-200"></div>
            <div className="h-20 rounded bg-gray-200"></div>
            <div className="h-32 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container mx-auto max-w-4xl space-y-6 p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Blog not found</h1>
          <p className="mt-2 text-gray-600">
            The blog you&apos;re looking for doesn&apos;t exist.
          </p>
          <Button
            onClick={() => router.push("/dashboard/blogs")}
            className="mt-4"
          >
            Back to Blogs
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.back()}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Edit Blog</h1>
          <p className="text-gray-600">Update your blog post</p>
        </div>
      </div>

      {/* Form */}
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter blog title"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="excerpt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Excerpt</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter blog excerpt (optional)"
                      {...field}
                      value={field.value || ""}
                      rows={3}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter blog content"
                      {...field}
                      value={field.value || ""}
                      rows={12}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      disabled={isSubmitting}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="featuredImage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Featured Image</FormLabel>
                    <FormControl>
                      <ImageUpload
                        value={field.value || ""}
                        onChange={field.onChange}
                        disabled={isSubmitting}
                        placeholder="Upload a featured image for your blog post"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter tags separated by commas (e.g., travel, tips, guide)"
                      onChange={(e) => handleTagsChange(e.target.value)}
                      value={field.value.join(", ")}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="metaTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meta Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="SEO title (optional)"
                        {...field}
                        value={field.value || ""}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="metaDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meta Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="SEO description (optional)"
                        {...field}
                        value={field.value || ""}
                        rows={2}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end gap-4 pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Updating..." : "Update Blog"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
