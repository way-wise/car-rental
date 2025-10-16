import { generateFAQStructuredData, generateStructuredData } from "@/lib/seo";
import type { Metadata } from "next";
import Script from "next/script";
import CarPlan from "../_components/home-page/CarPlan";
import FaqSection from "../_components/home-page/faqSection";
import HeroSection from "../_components/home-page/HeroSection";
import ServiceSection from "../_components/home-page/ServiceSection";
import Testimonial from "../_components/home-page/Testimonial";

export const metadata: Metadata = {
  title: "Executive Car Service lax | Escalade4lax",
  description:
    "Experience premium comfort with our Executive Car Service to LAX. Professional drivers, luxury SUVs, and on-time rides across Los Angeles and nearby cities.",
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
  openGraph: {
    title: "Executive Car Service lax | Escalade4lax",
    description:
      "Experience premium comfort with our Executive Car Service to LAX. Professional drivers, luxury SUVs, and on-time rides across Los Angeles and nearby cities.",
    type: "website",
    images: ["/logo.png"],
  },
  twitter: {
    title: "Executive Car Service lax | Escalade4lax",
    description:
      "Experience premium comfort with our Executive Car Service to LAX. Professional drivers, luxury SUVs, and on-time rides across Los Angeles and nearby cities.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/",
  },
};

// Sample FAQ data for structured data
const faqData = [
  {
    question: "How do I book an executive car service with Escalade4lax?",
    answer:
      "You can easily book an executive car service through our website by selecting your pickup and drop-off locations, choosing your preferred date and time, and completing the booking process.",
  },
  {
    question: "What types of vehicles do you offer?",
    answer:
      "We offer a wide range of luxury SUVs including Mercedes-Benz S-Class, BMW 7 Series, Audi A8, and Porsche Cayenne to meet all your transportation needs.",
  },
  {
    question: "Do you provide professional drivers?",
    answer:
      "Yes, all our vehicles come with experienced and professional drivers who are familiar with the Los Angeles area and committed to providing excellent service.",
  },
  {
    question: "How is pricing calculated?",
    answer:
      "Our pricing is calculated based on distance, duration, and vehicle type. We offer transparent, competitive rates with no hidden fees. Please contact us for a quote.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, and digital payment methods for your convenience and security. Please contact us for more information.",
  },
];

const LandingPage = () => {
  const structuredData = generateStructuredData();
  const faqStructuredData = generateFAQStructuredData(faqData);

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <div className=" ">
        <HeroSection />
        <ServiceSection />
        <Testimonial />
        <CarPlan />
        <FaqSection />
      </div>
    </>
  );
};

export default LandingPage;
