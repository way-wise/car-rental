"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { formatDate } from "@/lib/date-format";
import { Blog } from "@/schema/blogSchema";
import { Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  blog: Blog;
}

export const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
      {blog.featuredImage && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={blog.featuredImage}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <CardHeader className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <User className="h-4 w-4" />
          <span>{blog.author?.name || blog.author?.email}</span>
          <Calendar className="ml-2 h-4 w-4" />
          <span>{formatDate(blog.publishedAt || blog.createdAt)}</span>
        </div>

        <h3 className="line-clamp-2 text-xl font-semibold transition-colors group-hover:text-blue-600">
          <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
        </h3>

        {blog.excerpt && (
          <p className="line-clamp-3 text-gray-600">{blog.excerpt}</p>
        )}
      </CardHeader>

      <CardContent>
        {blog.tags && blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {blog.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {blog.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{blog.tags.length - 3}
              </Badge>
            )}
          </div>
        )}
        <div className="mt-4">
          <p className="line-clamp-2 text-gray-600">
            {blog.content?.slice(0, 200)}
          </p>
        </div>
      </CardContent>

      <CardFooter>
        <Link
          href={`/blogs/${blog.slug}`}
          className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
        >
          Read more →
        </Link>
      </CardFooter>
    </Card>
  );
};
