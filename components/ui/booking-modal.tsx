"use client";

import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LocationAutocomplete } from "@/components/ui/location-autocomplete";
import { TimePicker } from "@/components/ui/time-picker";
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";
import { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (bookingData: BookingData) => void;
}

export interface BookingData {
  pickupLocation: string;
  dropLocation: string;
  selectedDate: string;
  selectedTime: string;
}

export const BookingModal = ({
  isOpen,
  onClose,
  onSubmit,
}: BookingModalProps) => {
  // Form state
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");

  const handleBooking = () => {
    const bookingData: BookingData = {
      pickupLocation,
      dropLocation,
      selectedDate: selectedDate ? selectedDate.toISOString() : "",
      selectedTime,
    };

    if (onSubmit) {
      onSubmit(bookingData);
    } else {
      console.log("Booking Data:", bookingData);
    }

    // Reset form
    setPickupLocation("");
    setDropLocation("");
    setSelectedDate(undefined);
    setSelectedTime("");

    // Close modal
    onClose();
  };

  const handleClose = () => {
    // Reset form on close
    setPickupLocation("");
    setDropLocation("");
    setSelectedDate(undefined);
    setSelectedTime("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Reserve a Ride</DialogTitle>
          <DialogDescription>
            Fill in your ride details to complete your booking.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Pickup Location */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <MapPinIcon className="h-4 w-4 text-muted-foreground" />
                <label className="text-sm font-medium">Pickup Location</label>
              </div>
              <LocationAutocomplete
                value={pickupLocation}
                onChange={setPickupLocation}
                placeholder="Enter pickup address"
              />
            </div>

            {/* Drop Location */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <MapPinIcon className="h-4 w-4 text-muted-foreground" />
                <label className="text-sm font-medium">Drop Location</label>
              </div>
              <LocationAutocomplete
                value={dropLocation}
                onChange={setDropLocation}
                placeholder="Enter drop address"
              />
            </div>

            {/* Date */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                <label className="text-sm font-medium">Date</label>
              </div>
              <DatePicker
                value={selectedDate}
                onChange={setSelectedDate}
                placeholder="Select date"
              />
            </div>

            {/* Time */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <ClockIcon className="h-4 w-4 text-muted-foreground" />
                <label className="text-sm font-medium">Time</label>
              </div>
              <TimePicker
                value={selectedTime}
                onChange={setSelectedTime}
                placeholder="Select time"
                selectedDate={selectedDate}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handleBooking}
              className="flex-1 bg-primary hover:bg-[#c01234]"
            >
              Confirm Booking
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
