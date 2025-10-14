"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import BookingFormCard from "./booking-form-card";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full border-none bg-black/50 p-0 sm:rounded-[40px]">
        <div className="w-full">
          <BookingFormCard
            title="Reserve a Ride"
            buttonText="Book Now"
            showAnimation={false}
            cardClassName="!w-full lg:!w-full xl:!w-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
