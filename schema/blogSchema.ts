import { array, InferType, mixed, object, string } from "yup";

// Blog Schema for frontend
export const blogSchema = object({
  id: string(),
  title: string().required(),
  slug: string().required(),
  content: string().required(),
  excerpt: string().nullable(),
  featuredImage: string().nullable(),
  status: string().oneOf(["draft", "published", "archived"]).default("draft"),
  publishedAt: mixed().nullable(),
  authorId: string().required(),
  tags: array().of(string()).default([]),
  metaTitle: string().nullable(),
  metaDescription: string().nullable(),
  createdAt: mixed(),
  updatedAt: mixed(),
  author: object({
    id: string(),
    name: string().nullable(),
    email: string(),
    image: string().nullable(),
  }).optional(),
});

export type Blog = InferType<typeof blogSchema>;

// Create blog schema
export const createBlogSchema = object({
  title: string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters")
    .max(200, "Title must be less than 200 characters"),
  content: string()
    .required("Content is required")
    .min(10, "Content must be at least 10 characters"),
  excerpt: string()
    .nullable()
    .max(500, "Excerpt must be less than 500 characters"),
  featuredImage: string().nullable(),
  status: string().oneOf(["draft", "published", "archived"]).default("draft"),
  tags: array().of(string()).default([]),
  metaTitle: string()
    .nullable()
    .max(60, "Meta title must be less than 60 characters"),
  metaDescription: string()
    .nullable()
    .max(160, "Meta description must be less than 160 characters"),
});

export type CreateBlogInput = InferType<typeof createBlogSchema>;

// Update blog schema
export const updateBlogSchema = object({
  title: string()
    .min(3, "Title must be at least 3 characters")
    .max(200, "Title must be less than 200 characters")
    .optional(),
  content: string()
    .min(10, "Content must be at least 10 characters")
    .optional(),
  excerpt: string()
    .nullable()
    .max(500, "Excerpt must be less than 500 characters")
    .optional(),
  featuredImage: string().nullable().optional(),
  status: string().oneOf(["draft", "published", "archived"]).optional(),
  tags: array().of(string()).optional(),
  metaTitle: string()
    .nullable()
    .max(60, "Meta title must be less than 60 characters")
    .optional(),
  metaDescription: string()
    .nullable()
    .max(160, "Meta description must be less than 160 characters")
    .optional(),
});

export type UpdateBlogInput = InferType<typeof updateBlogSchema>;

// Blog query schema for filtering
export const blogQuerySchema = object({
  status: string().oneOf(["draft", "published", "archived"]).optional(),
  authorId: string().optional(),
  search: string().optional(),
  tags: string().optional(), // comma-separated tags
  sortBy: string()
    .oneOf(["createdAt", "updatedAt", "publishedAt", "title"])
    .default("createdAt"),
  sortOrder: string().oneOf(["asc", "desc"]).default("desc"),
});

export type BlogQuery = InferType<typeof blogQuerySchema>;
