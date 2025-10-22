import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://escalade4lax.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/about-us", "/privacy-policy", "/terms-of-service"],
        disallow: [
          "/dashboard/",
          "/auth/sign-in",
          "/auth/sign-up",
          "/profile",
          "/booking-confirm",
          "/checkout",
          "/payment-success",
          "/api/",
          "/_next/",
          "/admin/",
        ],
      },
      {
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        disallow: "/",
      },
      {
        userAgent: "CCBot",
        disallow: "/",
      },
      {
        userAgent: "anthropic-ai",
        disallow: "/",
      },
      {
        userAgent: "Claude-Web",
        disallow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
