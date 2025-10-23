import prisma from "@/lib/prisma";
import { MetadataRoute } from "next";

// Blog interface for type safety
interface Blog {
  id: string;
  slug: string;
  title: string;
  publishedAt: string | null;
  updatedAt: string;
  createdAt: string;
  featuredImage?: string | null;
}

// Comprehensive image collection for SEO optimization
function getAllImages(baseUrl: string): string[] {
  return [
    // Core branding images
    `${baseUrl}/logo.png`,
    `${baseUrl}/favicon.ico`,
    `${baseUrl}/web-app-manifest-192x192.png`,
    `${baseUrl}/web-app-manifest-512x512.png`,

    // Hero and main content images
    `${baseUrl}/assets/images/hero-bg.png`,
    `${baseUrl}/assets/images/service-bg.png`,
    `${baseUrl}/assets/images/plan-bg.png`,
    `${baseUrl}/assets/images/faq-bg.png`,

    // Service and feature images
    `${baseUrl}/assets/images/car.svg`,
    `${baseUrl}/assets/images/driver.png`,
    `${baseUrl}/assets/images/inside.png`,
    `${baseUrl}/assets/images/Black1.png`,
    `${baseUrl}/assets/images/fidden1.png`,

    // Testimonial and social proof
    `${baseUrl}/assets/images/testimonial.png`,
    `${baseUrl}/assets/images/sara.jpg`,

    // Additional content images
    `${baseUrl}/assets/images/image1.png`,
    `${baseUrl}/assets/images/image2.jpg`,
    `${baseUrl}/assets/images/image5.png`,
    `${baseUrl}/assets/images/image11.png`,

    // Icons and UI elements
    `${baseUrl}/assets/images/Airplane.svg`,
    `${baseUrl}/assets/images/Building.svg`,
    `${baseUrl}/assets/images/watch.svg`,
    `${baseUrl}/file.svg`,
    `${baseUrl}/globe.svg`,
    `${baseUrl}/next.svg`,
    `${baseUrl}/placeholder-video.svg`,
    `${baseUrl}/vercel.svg`,
    `${baseUrl}/window.svg`,
  ];
}

// Essential images for high-priority pages
function getEssentialImages(baseUrl: string): string[] {
  return [
    `${baseUrl}/logo.png`,
    `${baseUrl}/favicon.ico`,
    `${baseUrl}/assets/images/hero-bg.png`,
    `${baseUrl}/assets/images/car.svg`,
  ];
}

// Function to fetch all published blogs directly from database
async function getAllBlogs(): Promise<Blog[]> {
  const blogs = await prisma.blogs.findMany({
    where: {
      status: "published",
    },
    select: {
      id: true,
      slug: true,
      title: true,
      publishedAt: true,
      updatedAt: true,
      createdAt: true,
      featuredImage: true,
    },
    orderBy: {
      publishedAt: "desc",
    },
    take: 100,
  });

  // Convert Date objects to strings to match our interface
  return blogs.map((blog) => ({
    ...blog,
    publishedAt: blog.publishedAt?.toISOString() || null,
    updatedAt: blog.updatedAt.toISOString(),
    createdAt: blog.createdAt.toISOString(),
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.APP_URL || "https://escalade4lax.com";
  const currentDate = new Date().toISOString();

  // Get comprehensive images for SEO
  const allImages = getAllImages(baseUrl);
  const essentialImages = getEssentialImages(baseUrl);

  // Fetch blogs for dynamic routes
  const blogs = await getAllBlogs();

  // Main public routes with optimized priorities and change frequencies
  const staticRoutes: MetadataRoute.Sitemap = [
    // Homepage - highest priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
      images: essentialImages,
    },

    // Core service pages - high priority
    {
      url: `${baseUrl}/blogs`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
      images: essentialImages,
    },
    {
      url: `${baseUrl}/checkout`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
      images: essentialImages,
    },
    {
      url: `${baseUrl}/booking-confirm`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
      images: essentialImages,
    },
    {
      url: `${baseUrl}/payment-success`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
      images: essentialImages,
    },

    // User account pages - medium priority
    {
      url: `${baseUrl}/profile`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
      images: essentialImages,
    },

    // Authentication pages - medium priority
    {
      url: `${baseUrl}/auth/sign-in`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
      images: essentialImages,
    },
    {
      url: `${baseUrl}/auth/sign-up`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
      images: essentialImages,
    },
    {
      url: `${baseUrl}/auth/request-password-reset`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.4,
      images: essentialImages,
    },
    {
      url: `${baseUrl}/auth/reset-password`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.4,
      images: essentialImages,
    },

    // Legal pages - low priority but important for compliance
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
      images: essentialImages,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
      images: essentialImages,
    },
  ];

  // Dashboard routes - protected but included for completeness
  const dashboardRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/dashboard`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.8,
      images: essentialImages,
    },
    {
      url: `${baseUrl}/dashboard/users`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
      images: essentialImages,
    },
    {
      url: `${baseUrl}/dashboard/bookings`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.7,
      images: essentialImages,
    },
    {
      url: `${baseUrl}/dashboard/blogs`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
      images: essentialImages,
    },
    {
      url: `${baseUrl}/dashboard/blogs/create`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
      images: essentialImages,
    },
    {
      url: `${baseUrl}/dashboard/maintenance`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
      images: essentialImages,
    },
    {
      url: `${baseUrl}/dashboard/fuel-reports`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
      images: essentialImages,
    },
    {
      url: `${baseUrl}/dashboard/calendar`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.7,
      images: essentialImages,
    },
    {
      url: `${baseUrl}/dashboard/settings`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.4,
      images: essentialImages,
    },
  ];

  // Generate dynamic blog routes with proper metadata
  const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => {
    const lastModified = blog.publishedAt || blog.updatedAt || blog.createdAt;
    const blogImages = blog.featuredImage
      ? [blog.featuredImage, ...essentialImages]
      : essentialImages;

    return {
      url: `${baseUrl}/blogs/${blog.slug}`,
      lastModified: new Date(lastModified).toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: blogImages,
    };
  });

  // Generate dynamic dashboard blog routes
  const dashboardBlogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => {
    const lastModified = blog.publishedAt || blog.updatedAt || blog.createdAt;

    return {
      url: `${baseUrl}/dashboard/blogs/${blog.id}/view`,
      lastModified: new Date(lastModified).toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
      images: essentialImages,
    };
  });

  // Generate dynamic user routes
  const userRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/dashboard/users/1`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.5,
      images: essentialImages,
    },
  ];

  // Combine all routes following Google's recommendations
  return [
    ...staticRoutes,
    ...blogRoutes,
    ...dashboardRoutes,
    ...dashboardBlogRoutes,
    ...userRoutes,
  ];
}
