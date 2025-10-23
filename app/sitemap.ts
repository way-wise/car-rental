import { blogService } from "@/app/api/features/blogs/blogService";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.APP_URL || "https://escalade4lax.com";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  // Dynamic blog posts
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const blogsData = await blogService.getPublishedBlogs({
      page: 1,
      limit: 1000,
      sortBy: "publishedAt",
      sortOrder: "desc",
    });
    blogPages = blogsData.data.map((blog) => ({
      url: `${baseUrl}/blogs/${blog.slug}`,
      lastModified: blog.updatedAt || blog.publishedAt || blog.createdAt,
      changeFrequency: "weekly" as const,
      priority: 0.7,
      ...(blog.featuredImage && {
        images: [
          blog.featuredImage.startsWith("http")
            ? blog.featuredImage
            : `${baseUrl}${blog.featuredImage}`,
        ],
      }),
    }));
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
  }

  // Public folder images
  const publicImages: MetadataRoute.Sitemap = [
    // Root public images
    {
      url: `${baseUrl}/logo.png`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/web-app-manifest-192x192.png`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/web-app-manifest-512x512.png`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    // Assets/images folder
    {
      url: `${baseUrl}/assets/images/Airplane.svg`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/assets/images/www.escalade4lax.com.png`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/assets/images/Building.svg`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/assets/images/car.svg`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/assets/images/Seung-Lee-Best-car-service-LAX.png`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/assets/images/luxury-SUV-service-Los-Angeles.png`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/assets/images/Jack-luxury-SUV-service-Los-Angeles.png`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/assets/images/limo-service-Los-Angeles.png`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/assets/images/Zara -Best-LAX-airport-limo-service.png`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/assets/images/best-private-limo-service-in-Los-Angele.png`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/assets/images/Danny-private-car-service-LAX.jpg`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/assets/images/fidden-executive-car-services.png`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/assets/images/limo-rental-Los-Angeles.png`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/assets/images/car-service-Los-Angeles.png`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/assets/images/sara.jpg`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/assets/images/airport-transfer-LA.png`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/assets/images/executive-car-service-LAX.png`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/assets/images/watch.svg`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Combine all sitemap entries and sort by priority (highest first)
  const allPages = [...staticPages, ...blogPages, ...publicImages];

  return allPages.sort((a, b) => (b.priority || 0) - (a.priority || 0));
}
