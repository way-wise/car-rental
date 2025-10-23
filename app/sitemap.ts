import { readdirSync, statSync } from "fs";
import { MetadataRoute } from "next";
import { join } from "path";

// Function to recursively get all image files from a directory
function getAllImages(dirPath: string, baseUrl: string): string[] {
  const images: string[] = [];
  const imageExtensions = [
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".webp",
    ".svg",
    ".ico",
  ];

  try {
    const items = readdirSync(dirPath);

    for (const item of items) {
      const fullPath = join(dirPath, item);
      const stat = statSync(fullPath);

      if (stat.isDirectory()) {
        // Recursively scan subdirectories
        images.push(...getAllImages(fullPath, baseUrl));
      } else if (stat.isFile()) {
        // Check if file has image extension
        const ext = item.toLowerCase().substring(item.lastIndexOf("."));
        if (imageExtensions.includes(ext)) {
          // Convert file path to URL path
          const relativePath = fullPath
            .replace(join(process.cwd(), "public"), "")
            .replace(/\\/g, "/");
          images.push(`${baseUrl}${relativePath}`);
        }
      }
    }
  } catch (error) {
    console.warn(`Could not read directory ${dirPath}:`, error);
  }

  return images;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://escalade4lax.com";
  const currentDate = new Date().toISOString();

  const publicDir = join(process.cwd(), "public");
  const allImages = getAllImages(publicDir, baseUrl);

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
      images: allImages,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
      images: allImages.filter(
        (img) =>
          img.includes("logo") ||
          img.includes("hero-bg") ||
          img.includes("driver") ||
          img.includes("testimonial") ||
          img.includes("faq-bg"),
      ),
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
      images: allImages.filter((img) => img.includes("logo")),
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
      images: allImages.filter((img) => img.includes("logo")),
    },
    {
      url: `${baseUrl}/auth/sign-in`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
      images: allImages.filter(
        (img) => img.includes("logo") || img.includes("hero-bg"),
      ),
    },
    {
      url: `${baseUrl}/auth/sign-up`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
      images: allImages.filter(
        (img) => img.includes("logo") || img.includes("hero-bg"),
      ),
    },
  ];

  return [...staticRoutes];
}

async function generateDynamicRoutes(): Promise<MetadataRoute.Sitemap> {
  return [];
}
