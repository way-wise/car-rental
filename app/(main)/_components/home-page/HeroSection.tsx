"use client";
import { BookingFormCard } from "@/components/ui/booking-form-card";
import { BookingModal, type BookingData } from "@/components/ui/booking-modal";
import { useState } from "react";

const HeroSection = () => {
  // Modal states
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleModalBooking = (bookingData: BookingData) => {
    console.log("Modal Booking Data:", bookingData);
  };

  return (
    <section
      id="home"
      className={`min-h-screen bg-[url(/assets/images/hero-bg.png)] bg-cover bg-center pt-40 pb-20`}
    >
      {/* Content Container */}
      <div className="container py-0">
        <div className="grid min-h-[600px] grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:col-span-8 lg:text-left">
            <div className="animate-fade-in [--animation-delay:600ms]">
              <h1 className="text-3xl leading-tight font-semibold tracking-[-0.50px] text-white lg:text-5xl">
                Executive Airport & City Rides in{" "}
                <br className="hidden xl:block" /> Los Angeles and Surrounding
                Cities
              </h1>
            </div>
            <p className="animate-fade-in text-lg leading-relaxed font-normal tracking-[-0.50px] text-white [--animation-delay:800ms]">
              Experience premium transportation with our professional drivers.{" "}
              <br />
              Safe, comfortable, and always on time.
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

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onSubmit={handleModalBooking}
      />
    </section>
  );
};

export default HeroSection;
