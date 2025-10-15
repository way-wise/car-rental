import type { Metadata } from "next";
import AboutUs from "../_components/about-us/AboutUs";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Escalade4lax - your trusted car rental partner. Discover our story, mission, and commitment to providing premium transportation services.",
  keywords: [
    "about escalade4lax",
    "car rental company",
    "transportation service provider",
    "our story",
    "mission",
    "team",
  ],
  openGraph: {
    title: "About Us - Escalade4lax",
    description:
      "Learn about Escalade4lax - your trusted car rental partner. Discover our story, mission, and commitment to providing premium transportation services.",
    type: "website",
  },
  twitter: {
    title: "About Us - Escalade4lax",
    description:
      "Learn about Escalade4lax - your trusted car rental partner. Discover our story, mission, and commitment to providing premium transportation services.",
  },
  alternates: {
    canonical: "/about-us",
  },
};

const AboutUsPage = () => {
  return (
    <div>
      <AboutUs />
    </div>
  );
};

export default AboutUsPage;
