"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { LocationAutocomplete } from "@/components/ui/location-autocomplete";
import { TimePicker } from "@/components/ui/time-picker";
import { CalendarIcon, ClockIcon, Mail, MapPinIcon, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export interface BookingFormCardProps {
  title?: string;
  buttonText?: string;
  className?: string;
  cardClassName?: string;
  showAnimation?: boolean;
  animationDelay?: string;
  disabled?: boolean;
}

export const BookingFormCard = ({
  title = "Reserve a Ride",
  buttonText = "Book Now",
  className = "",
  cardClassName = "",
  showAnimation = true,
  animationDelay = "1000ms",
  disabled = false,
}: BookingFormCardProps) => {
  const router = useRouter();

  // Form state
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  // const resetForm = () => {
  //   setPickupLocation("");
  //   setDropLocation("");
  //   setSelectedDate(undefined);
  //   setSelectedTime("");
  //   setUserEmail("");
  //   setUserName("");
  // };

  const handleBooking = () => {
    // Validation
    if (
      !pickupLocation ||
      !dropLocation ||
      !selectedDate ||
      !selectedTime ||
      !userEmail
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Store booking details in session storage for confirmation page
    const bookingDetails = {
      pickupLocation,
      dropLocation,
      date: selectedDate.toISOString(),
      time: selectedTime,
      userEmail,
      userName: userName || undefined,
    };

    sessionStorage.setItem("pending_booking", JSON.stringify(bookingDetails));

    // Navigate to booking confirmation page using Next.js router
    router.push("/booking-confirm");
  };

  const animationClass = showAnimation ? "animate-fade-in" : "";
  const animationStyle = showAnimation
    ? ({ "--animation-delay": animationDelay } as React.CSSProperties)
    : {};

  return (
    <div className={className}>
      <Card
        className={`rounded-[34px] border-0 bg-[#ffffff33] shadow-[0px_-1.5px_0px_#ffffff66] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] lg:w-5/6 xl:w-4/6 ${animationClass} ${cardClassName}`}
        style={animationStyle}
      >
        <CardContent className="p-8">
          <h2 className="mb-6 text-xl leading-[normal] font-semibold tracking-[-0.50px] text-white">
            {title}
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
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Mail className="h-4 w-4 text-white" />
                <label className="text-base leading-[normal] font-normal tracking-[0] text-white">
                  Email *
                </label>
              </div>
              <Input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-[44px] border-white/20 bg-white"
                required
                disabled={disabled}
              />
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2">
                <User className="h-4 w-4 text-white" />
                <label className="text-base leading-[normal] font-normal tracking-[0] text-white">
                  Name (Optional)
                </label>
              </div>
              <Input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your name"
                className="h-[44px] border-white/20 bg-white"
                disabled={disabled}
              />
            </div>
          </div>
          <Button
            onClick={handleBooking}
            disabled={disabled}
            className="h-[50px] w-full rounded-[40px] bg-primary shadow-[inset_0px_-1px_0px_#00000040] transition-colors hover:bg-[#c01234] disabled:opacity-50"
          >
            <span className="text-base leading-[20.8px] font-semibold tracking-[0] text-white">
              {buttonText}
            </span>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingFormCard;
