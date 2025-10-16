"use client";
import { BookingFormCard } from "@/components/ui/booking-form-card";

const HeroSection = () => {
  return (
    <section
      id="home"
      className={`min-h-screen bg-[url(/assets/images/hero-bg.png)] bg-cover bg-center pt-30 pb-20`}
    >
      {/* Content Container */}
      <div className="container py-0">
        <div className="grid min-h-[600px] grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Content */}
          <div className="space-y-4 text-center lg:col-span-8 lg:text-left">
            <div className="animate-fade-in space-y-4 [--animation-delay:600ms]">
              <h1 className="text-3xl leading-tight font-semibold tracking-[-0.50px] text-white lg:text-5xl">
                Executive Car Service lax
              </h1>
              <h2 className="text-3xl leading-tight font-semibold tracking-[-0.50px] text-white lg:text-4xl">
                Executive Airport & City Rides in Los Angeles and Surrounding
                Cities
              </h2>
            </div>
            <p className="animate-fade-in text-lg leading-relaxed font-normal tracking-[-0.50px] text-white [--animation-delay:800ms]">
              Experience premium transportation across Los Angeles with our
              professional chauffeurs. We take pride in offering Executive Car
              Service to LAX, private airport transfers, and luxury SUV rides
              that are always safe, comfortable, and on time.
            </p>
            <BookingFormCard
              title="Reserve a Ride"
              buttonText="Book Now"
              showAnimation={true}
              animationDelay="1000ms"
            />
          </div>

          {/* Right Content - Decorative Images */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
