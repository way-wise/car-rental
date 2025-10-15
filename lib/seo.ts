import { Metadata } from "next";

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  openGraph?: {
    title?: string;
    description?: string;
    type?: "website" | "article";
    images?: string[];
  };
  twitter?: {
    title?: string;
    description?: string;
    images?: string[];
  };
}

export function generateMetadata(config: SEOConfig): Metadata {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://escalade4lax.com";

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    alternates: {
      canonical: config.canonical ? `${baseUrl}${config.canonical}` : undefined,
    },
    robots: {
      index: !config.noindex,
      follow: !config.nofollow,
    },
    openGraph: {
      title: config.openGraph?.title || config.title,
      description: config.openGraph?.description || config.description,
      type: config.openGraph?.type || "website",
      url: config.canonical ? `${baseUrl}${config.canonical}` : baseUrl,
      siteName: "Escalade4lax",
      images: config.openGraph?.images?.map((image) => ({
        url: image,
        width: 1200,
        height: 630,
        alt: config.title,
      })),
    },
    twitter: {
      card: "summary_large_image",
      title: config.twitter?.title || config.title,
      description: config.twitter?.description || config.description,
      images: config.twitter?.images || config.openGraph?.images,
    },
  };
}

// Structured Data for Car Rental Business
export function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "CarRental",
    name: "Escalade4lax",
    description:
      "Professional car rental service with premium vehicles. Book your ride with Escalade4lax for reliable, comfortable, and affordable transportation solutions.",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://escalade4lax.com",
    logo: `${process.env.NEXT_PUBLIC_BASE_URL || "https://escalade4lax.com"}/logo.png`,
    image: `${process.env.NEXT_PUBLIC_BASE_URL || "https://escalade4lax.com"}/logo.png`,
    telephone: process.env.NEXT_PUBLIC_PHONE || "+1-XXX-XXX-XXXX",
    email: process.env.NEXT_PUBLIC_EMAIL || "info@escalade4lax.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        process.env.NEXT_PUBLIC_ADDRESS_STREET || "Your Street Address",
      addressLocality: process.env.NEXT_PUBLIC_ADDRESS_CITY || "Your City",
      addressRegion: process.env.NEXT_PUBLIC_ADDRESS_STATE || "Your State",
      postalCode: process.env.NEXT_PUBLIC_ADDRESS_ZIP || "Your ZIP",
      addressCountry: process.env.NEXT_PUBLIC_ADDRESS_COUNTRY || "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: process.env.NEXT_PUBLIC_LATITUDE || "0",
      longitude: process.env.NEXT_PUBLIC_LONGITUDE || "0",
    },
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Credit Card, Debit Card, PayPal",
    areaServed: {
      "@type": "Country",
      name: process.env.NEXT_PUBLIC_SERVICE_AREA || "United States",
    },
    serviceType: "Car Rental",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Car Rental Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Premium Car Rental",
            description:
              "High-quality vehicles for all your transportation needs",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Luxury Car Rental",
            description: "Luxury vehicles for special occasions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Car Rental",
            description: "Professional vehicles for business travel",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      process.env.NEXT_PUBLIC_FACEBOOK_URL,
      process.env.NEXT_PUBLIC_TWITTER_URL,
      process.env.NEXT_PUBLIC_INSTAGRAM_URL,
      process.env.NEXT_PUBLIC_LINKEDIN_URL,
    ].filter(Boolean),
  };
}

// FAQ Structured Data
export function generateFAQStructuredData(
  faqs: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Breadcrumb Structured Data
export function generateBreadcrumbStructuredData(
  items: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${process.env.NEXT_PUBLIC_BASE_URL || "https://escalade4lax.com"}${item.url}`,
    })),
  };
}
