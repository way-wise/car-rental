import CarPlan from "../_components/home-page/CarPlan";
import FaqSection from "../_components/home-page/faqSection";
import HeroSection from "../_components/home-page/HeroSection";
import ServiceSection from "../_components/home-page/ServiceSection";
import Testimonial from "../_components/home-page/Testimonial";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "About Driver", href: "#about" },
];

const LandingPage = () => {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <ServiceSection />
      <Testimonial />
      <CarPlan />
      <FaqSection />
    </div>
  );
};

export default LandingPage;
