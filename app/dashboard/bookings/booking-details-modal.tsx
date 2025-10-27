import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { formatDate } from "@/lib/date-format";
import { Booking } from "@/schema/bookingSchema";
import { Phone } from "lucide-react";

interface BookingDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBooking: Booking | null;
}

export const BookingDetailsModal = ({
  isOpen,
  onClose,
  selectedBooking,
}: BookingDetailsModalProps) => {
  // Format amount from cents to dollars
  const formatAmount = (cents: number) => {
    return `$${(cents / 100).toFixed(2)}`;
  };

  if (!selectedBooking) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="" isPending={false}>
      <div>
        <div className="flex items-center justify-between pb-2">
          <h1 className="text-2xl font-medium">Booking Details</h1>
          <div className="flex justify-end">
            <Button
              className="mt-[-20px] p-2 text-[32px] font-medium"
              onClick={onClose}
            >
              X
            </Button>
          </div>
        </div>
        <hr />
        <div className="space-y-6 p-2">
          {/* User Information */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">User Information</h3>

            <div className="space-y-2 rounded-lg border p-4">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Name:</span>
                <span className="text-sm font-medium">
                  {selectedBooking.user?.name}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Email:</span>
                <span className="text-sm font-medium">
                  {selectedBooking.user?.email}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Phone:</span>
                <div className="mt-2 text-sm text-muted-foreground">
                  <a
                    href={`tel:${selectedBooking.user?.phone}`}
                    className="flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="h-4 w-4" />
                    {selectedBooking.user?.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Information */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Booking Information</h3>

            <div className="space-y-2 rounded-lg border p-4">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Booking ID:
                </span>
                <span className="font-mono text-sm font-medium">
                  {selectedBooking.id}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Pickup Location:
                </span>
                <span className="max-w-[60%] text-right text-sm font-medium">
                  {selectedBooking.pickupLocation}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Drop Location:
                </span>
                <span className="max-w-[60%] text-right text-sm font-medium">
                  {selectedBooking.dropLocation}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Date:</span>
                <span className="text-sm font-medium">
                  {formatDate(selectedBooking.bookingDate)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Time:</span>
                <span className="text-sm font-medium">
                  {selectedBooking.bookingTime}
                </span>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Payment Information</h3>
            <div className="space-y-2 rounded-lg border p-4">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Amount:</span>
                <span className="text-lg font-semibold">
                  {formatAmount(selectedBooking.amount)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Payment Status:
                </span>
                <Badge
                  variant={
                    selectedBooking.paymentStatus === "succeeded"
                      ? "success"
                      : selectedBooking.paymentStatus === "failed"
                        ? "destructive"
                        : "secondary"
                  }
                >
                  {selectedBooking.paymentStatus.charAt(0).toUpperCase() +
                    selectedBooking.paymentStatus.slice(1)}
                </Badge>
              </div>
              {selectedBooking.stripePaymentIntentId && (
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Payment Intent ID:
                  </span>
                  <span className="font-mono text-sm font-medium">
                    {selectedBooking.stripePaymentIntentId}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Timestamps */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Timestamps</h3>
            <div className="space-y-2 rounded-lg border p-4">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Created At:
                </span>
                <span className="text-sm font-medium">
                  {formatDate(selectedBooking.createdAt)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Updated At:
                </span>
                <span className="text-sm font-medium">
                  {formatDate(selectedBooking.updatedAt)}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Button onClick={onClose}>Close</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
