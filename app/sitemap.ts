import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://escalade4lax.com";
  const currentDate = new Date().toISOString();

  // Static routes with their priorities and change frequencies
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/auth/sign-in`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/auth/sign-up`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // You can add dynamic routes here in the future
  // For example, if you have blog posts, car listings, etc.
  // const dynamicRoutes = await generateDynamicRoutes()

  return [...staticRoutes];
}

// Helper function to generate dynamic routes (for future use)
async function generateDynamicRoutes(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://escalade4lax.com";
  const currentDate = new Date().toISOString();

  // Example: If you have dynamic car listings
  // const cars = await getCars()
  // return cars.map((car) => ({
  //   url: `${baseUrl}/cars/${car.slug}`,
  //   lastModified: car.updatedAt,
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.7,
  // }))

  return [];
}
