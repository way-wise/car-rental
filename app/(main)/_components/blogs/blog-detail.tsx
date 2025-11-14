"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatDate } from "@/lib/date-format";
import { Blog } from "@/schema/blogSchema";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogDetailProps {
  blog: Blog;
}

export const BlogDetail = ({ blog }: BlogDetailProps) => {
  const router = useRouter();

  return (
    <article className="mx-auto max-w-4xl">
      {/* Back Button */}
      <div className="mb-6">
        <Button
          variant="outline"
          onClick={() => router.back()}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blogs
        </Button>
      </div>

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
            <span>{formatDate(blog.publishedAt || blog.createdAt)}</span>
          </div>
        </div>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="mb-6 flex items-center gap-2">
            <Tag className="h-4 w-4 text-gray-500" />
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag: string | undefined, index: number) => (
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
      <div className="prose prose-lg max-w-none leading-relaxed text-gray-800">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ ...props }) => (
              <h1 className="mb-4 text-3xl font-bold" {...props} />
            ),
            h2: ({ ...props }) => (
              <h2 className="mb-3 mt-6 text-2xl font-semibold" {...props} />
            ),
            h3: ({ ...props }) => (
              <h3 className="mb-2 mt-4 text-xl font-semibold" {...props} />
            ),
            p: ({ ...props }) => (
              <p className="mb-4 leading-7" {...props} />
            ),
            ul: ({ ...props }) => (
              <ul className="mb-4 ml-6 list-disc" {...props} />
            ),
            ol: ({ ...props }) => (
              <ol className="mb-4 ml-6 list-decimal" {...props} />
            ),
            li: ({ ...props }) => (
              <li className="mb-2" {...props} />
            ),
            blockquote: ({ ...props }) => (
              <blockquote
                className="my-4 border-l-4 border-gray-300 pl-4 italic"
                {...props}
              />
            ),
            code: (props) => {
              const { inline, ...rest } = props as { inline?: boolean } & React.ComponentPropsWithoutRef<"code">;
              return inline ? (
                <code
                  className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm"
                  {...rest}
                />
              ) : (
                <code
                  className="block rounded bg-gray-100 p-4 font-mono text-sm"
                  {...rest}
                />
              );
            },
            pre: ({ ...props }) => (
              <pre className="mb-4 overflow-x-auto rounded bg-gray-100 p-4" {...props} />
            ),
            a: ({ ...props }) => (
              <a
                className="text-blue-600 underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
                {...props}
              />
            ),
            strong: ({ ...props }) => (
              <strong className="font-semibold" {...props} />
            ),
            em: ({ ...props }) => <em className="italic" {...props} />,
          }}
        >
          {blog.content}
        </ReactMarkdown>
      </div>

      {/* Author Card */}
      <Card className="mt-12">
        <CardHeader>
          <h3 className="text-lg font-semibold">About the Author</h3>
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
                Published on {formatDate(blog.publishedAt || blog.createdAt)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="mt-12 border-t border-gray-200 pt-8">
        <div className="flex items-center justify-between">
          <Link
            href="/blogs"
            className="font-medium text-blue-600 hover:text-blue-800"
          >
            ← All Blog Posts
          </Link>
          <Button
            variant="outline"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to Top
          </Button>
        </div>
      </div>
    </article>
  );
};
