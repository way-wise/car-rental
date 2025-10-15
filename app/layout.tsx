import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import { ProgressProvider } from "@/providers/progress-provider";
import { SwrConfigProvider } from "@/providers/swr-config-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Escalade4lax - Premium Car Rental Service",
    template: "%s | Escalade4lax",
  },
  description:
    "Professional car rental service with premium vehicles. Book your ride with Escalade4lax for reliable, comfortable, and affordable transportation solutions.",
  keywords: [
    "car rental",
    "premium car rental",
    "luxury car rental",
    "transportation service",
    "ride booking",
    "car hire",
    "vehicle rental",
    "Escalade4lax",
  ],
  authors: [{ name: "Escalade4lax Team" }],
  creator: "Escalade4lax",
  publisher: "Escalade4lax",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://escalade4lax.com",
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://escalade4lax.com",
    siteName: "Escalade4lax",
    title: "Escalade4lax - Premium Car Rental Service",
    description:
      "Professional car rental service with premium vehicles. Book your ride with Escalade4lax for reliable, comfortable, and affordable transportation solutions.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Escalade4lax - Premium Car Rental Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Escalade4lax - Premium Car Rental Service",
    description:
      "Professional car rental service with premium vehicles. Book your ride with Escalade4lax for reliable, comfortable, and affordable transportation solutions.",
    images: ["/logo.png"],
    creator: "@escalade4lax",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    yahoo: process.env.YAHOO_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <ProgressProvider>
          <SwrConfigProvider>{children}</SwrConfigProvider>
        </ProgressProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
