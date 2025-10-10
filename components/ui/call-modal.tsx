"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Phone } from "lucide-react";

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumber?: string;
  title?: string;
  description?: string;
}

export const CallModal = ({
  isOpen,
  onClose,
  phoneNumber = "+1 (555) 123-4567",
  title = "Call Us Now",
  description = "",
}: CallModalProps) => {
  const handleCall = () => {
    // Remove all non-numeric characters for the tel: link
    const cleanNumber = phoneNumber.replace(/\D/g, "");
    window.location.href = `tel:+${cleanNumber}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">{title}</DialogTitle>
          <DialogDescription className="text-center">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-6 py-6">
          {/* Phone Icon */}
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Phone className="h-8 w-8 text-primary" />
          </div>

          {/* Phone Number Display */}
          <div className="text-center">
            <p className="mb-2 text-sm text-muted-foreground">Call us at</p>
            <a
              href={`tel:+${phoneNumber.replace(/\D/g, "")}`}
              className="text-3xl font-bold text-primary hover:underline"
            >
              {phoneNumber}
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex w-full gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Close
            </Button>
            <Button
              onClick={handleCall}
              className="flex-1 bg-primary hover:bg-[#c01234]"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
