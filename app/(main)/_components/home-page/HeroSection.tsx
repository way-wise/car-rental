"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DatePicker } from "@/components/ui/date-picker";
import { LocationAutocomplete } from "@/components/ui/location-autocomplete";
import { TimePicker } from "@/components/ui/time-picker";
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  // Form state
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");

  const handleBooking = () => {
    const bookingData = {
      pickupLocation,
      dropLocation,
      selectedDate: selectedDate ? selectedDate.toISOString() : "",
      selectedTime,
    };
    console.log("Booking Data:", bookingData);
  };

  return (
    <section
      id="home"
      className={`min-h-screen bg-[url(/assets/images/hero-bg.png)] bg-cover bg-center py-20`}
    >
      {/* Content Container */}
      <div className="container mx-auto px-2 py-0 lg:px-8">
        <div className="grid min-h-[600px] grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:col-span-8 lg:text-left">
            <div className="animate-fade-in [--animation-delay:600ms]">
              <h1 className="text-3xl leading-tight font-semibold tracking-[-0.50px] text-white lg:text-5xl">
                Executive Airport & City Rides in Los Angeles and Surrounding
                Cities
              </h1>
            </div>
            <p className="animate-fade-in text-lg leading-relaxed font-normal tracking-[-0.50px] text-white [--animation-delay:800ms]">
              Experience premium transportation with our professional drivers.
              Safe, comfortable, and always on time.
            </p>
            <Card className="animate-fade-in rounded-[34px] border-0 bg-[#ffffff33] shadow-[0px_-1.5px_0px_#ffffff66] backdrop-blur-[5px] backdrop-brightness-[100%] [--animation-delay:1000ms] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] lg:w-5/6">
              <CardContent className="p-8">
                <h2 className="mb-6 text-xl leading-[normal] font-semibold tracking-[-0.50px] text-white">
                  Reserve a Ride
                </h2>
                <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <MapPinIcon className="h-4 w-4 text-white" />
                      <label className="text-base leading-[normal] font-normal tracking-[0] text-white">
                        Pickup Location
                      </label>
                    </div>
                    <LocationAutocomplete
                      value={pickupLocation}
                      onChange={setPickupLocation}
                      placeholder="Enter pickup address"
                    />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <MapPinIcon className="h-4 w-4 text-white" />
                      <label className="text-base leading-[normal] font-normal tracking-[0] text-white">
                        Drop Location
                      </label>
                    </div>
                    <LocationAutocomplete
                      value={dropLocation}
                      onChange={setDropLocation}
                      placeholder="Enter drop address"
                    />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4 text-white" />
                      <label className="text-base leading-[normal] font-normal tracking-[0] text-white">
                        Date
                      </label>
                    </div>
                    <DatePicker
                      value={selectedDate}
                      onChange={setSelectedDate}
                      placeholder="Select date"
                    />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <ClockIcon className="h-4 w-4 text-white" />
                      <label className="text-base leading-[normal] font-normal tracking-[0] text-white">
                        Time
                      </label>
                    </div>
                    <TimePicker
                      value={selectedTime}
                      onChange={setSelectedTime}
                      placeholder="Select time"
                      selectedDate={selectedDate}
                    />
                  </div>
                </div>
                <Button
                  onClick={handleBooking}
                  className="h-[50px] w-full rounded-[40px] bg-primary shadow-[inset_0px_-1px_0px_#00000040] transition-colors hover:bg-[#c01234]"
                >
                  <span className="text-base leading-[20.8px] font-semibold tracking-[0] text-white">
                    Book Now
                  </span>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Content - Decorative Images */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
