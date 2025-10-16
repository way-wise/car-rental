"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useBlogOperations } from "@/hooks/useBlogOperations";
import { formatDate } from "@/lib/date-format";
import { ArrowLeft, Calendar, Edit, Tag, Trash, User } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import useSWR from "swr";

interface BlogViewPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function BlogViewPage({ params }: BlogViewPageProps) {
  const router = useRouter();
  const { invalidateBlogCache, invalidatePublicBlogs } = useBlogOperations();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Fetch blog data
  const {
    data: blog,
    isLoading,
    error,
  } = useSWR(
    `/api/blogs/${params}`,
    async () => {
      const resolvedParams = await params;
      const response = await fetch(`/api/blogs/${resolvedParams.id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch blog");
      }
      return response.json();
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  const handleEdit = () => {
    if (blog?.id) {
      router.push(`/dashboard/blogs/${blog.id}/edit`);
    }
  };

  const handleDelete = async () => {
    if (!blog?.id) return;

    setIsDeleting(true);
    try {
      const response = await fetch(`/api/blogs/${blog.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to delete blog");
      }

      toast.success("Blog deleted successfully");

      // Invalidate caches
      await invalidateBlogCache();

      if (blog.status === "published") {
        await invalidatePublicBlogs();
      }

      router.push("/dashboard/blogs");
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to delete blog";
      toast.error(errorMessage);
    } finally {
      setIsDeleting(false);
      setDeleteModalOpen(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-4xl space-y-6 p-6">
        <div className="animate-pulse">
          <div className="mb-4 h-8 w-1/3 rounded bg-gray-200"></div>
          <div className="mb-8 h-64 w-full rounded bg-gray-200"></div>
          <div className="space-y-4">
            <div className="h-8 w-3/4 rounded bg-gray-200"></div>
            <div className="h-4 w-1/2 rounded bg-gray-200"></div>
            <div className="space-y-2">
              <div className="h-4 w-full rounded bg-gray-200"></div>
              <div className="h-4 w-full rounded bg-gray-200"></div>
              <div className="h-4 w-3/4 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="container mx-auto max-w-4xl space-y-6 p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Blog not found</h1>
          <p className="mt-2 text-gray-600">
            The blog you're looking for doesn't exist or you don't have
            permission to view it.
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
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.back()}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>

        <div className="flex gap-2">
          <Button onClick={handleEdit} variant="outline">
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Button>
          <Button
            onClick={() => setDeleteModalOpen(true)}
            variant="destructive"
            disabled={isDeleting}
          >
            <Trash className="mr-2 h-4 w-4" />
            Delete
          </Button>
        </div>
      </div>

      {/* Blog Content */}
      <article className="mx-auto max-w-4xl">
        {/* Featured Image */}
        {blog.featuredImage && (
          <div className="relative mb-8 h-64 w-full overflow-hidden rounded-lg md:h-96">
            <Image
              src={blog.featuredImage}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Blog Header */}
        <header className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            <Badge
              className={
                blog.status === "published"
                  ? "bg-green-100 text-green-800"
                  : blog.status === "draft"
                    ? "bg-gray-100 text-gray-800"
                    : "bg-red-100 text-red-800"
              }
            >
              {blog.status}
            </Badge>
          </div>

          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            {blog.title}
          </h1>

          {/* Meta Information */}
          <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{blog.author?.name || blog.author?.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Created: {formatDate(blog.createdAt)}</span>
            </div>
            {blog.publishedAt && (
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Published: {formatDate(blog.publishedAt)}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Updated: {formatDate(blog.updatedAt)}</span>
            </div>
          </div>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mb-6 flex items-center gap-2">
              <Tag className="h-4 w-4 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag: string, index: number) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Excerpt */}
          {blog.excerpt && (
            <div className="mb-6 rounded-lg bg-gray-50 p-4 text-lg leading-relaxed text-gray-700">
              {blog.excerpt}
            </div>
          )}
        </header>

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none">
          <div className="leading-relaxed whitespace-pre-wrap text-gray-800">
            {blog.content}
          </div>
        </div>

        {/* SEO Information */}
        {(blog.metaTitle || blog.metaDescription) && (
          <Card className="mt-12">
            <CardHeader>
              <h3 className="text-lg font-semibold">SEO Information</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              {blog.metaTitle && (
                <div>
                  <h4 className="font-medium text-gray-900">Meta Title</h4>
                  <p className="text-sm text-gray-600">{blog.metaTitle}</p>
                </div>
              )}
              {blog.metaDescription && (
                <div>
                  <h4 className="font-medium text-gray-900">
                    Meta Description
                  </h4>
                  <p className="text-sm text-gray-600">
                    {blog.metaDescription}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Author Card */}
        <Card className="mt-12">
          <CardHeader>
            <h3 className="text-lg font-semibold">Author Information</h3>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-200">
                {blog.author?.name?.charAt(0) ||
                  blog.author?.email?.charAt(0) ||
                  "?"}
              </div>
              <div>
                <h4 className="font-medium text-gray-900">
                  {blog.author?.name || blog.author?.email}
                </h4>
                <p className="text-sm text-gray-600">
                  Created on {formatDate(blog.createdAt)}
                </p>
                {blog.publishedAt && (
                  <p className="text-sm text-gray-600">
                    Published on {formatDate(blog.publishedAt)}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </article>

      {/* Delete Confirmation Modal */}
      {deleteModalOpen && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-lg font-semibold">Delete Blog</h3>
            <p className="mb-6 text-gray-600">
              Are you sure you want to delete this blog? This action cannot be
              undone.
            </p>
            <div className="rounded bg-gray-50 p-3">
              <h4 className="font-medium">{blog.title}</h4>
              <p className="text-sm text-gray-600">
                by {blog.author?.name || blog.author?.email}
              </p>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => setDeleteModalOpen(false)}
                disabled={isDeleting}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={handleDelete}
                disabled={isDeleting}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
