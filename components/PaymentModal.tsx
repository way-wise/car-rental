"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  clientSecret: string;
  bookingId: string;
  amount: number;
  onSuccess?: () => void;
}

export function PaymentModal({
  isOpen,
  onClose,
  clientSecret,
  bookingId,
  amount,
  onSuccess,
}: PaymentModalProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      return;
    }

    setIsProcessing(true);

    try {
      // Confirm the payment with Stripe
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
          },
        },
      );

      if (error) {
        toast.error(error.message || "Payment failed");
        setIsProcessing(false);
        return;
      }

      if (paymentIntent && paymentIntent.status === "succeeded") {
        // Update booking status on backend
        const response = await fetch("/api/bookings/confirm", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bookingId,
            paymentIntentId: paymentIntent.id,
          }),
        });

        const data = await response.json();

        if (data.success) {
          setPaymentSuccess(true);
          toast.success("Payment successful!");

          // Call onSuccess callback if provided
          if (onSuccess) {
            setTimeout(() => {
              onSuccess();
            }, 1500);
          }
        } else {
          toast.error("Payment succeeded but booking update failed");
        }
      }
    } catch (err: unknown) {
      console.error("Payment error:", err);
      toast.error("An error occurred during payment");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClose = () => {
    if (!isProcessing) {
      onClose();
      // Reset success state after closing
      setTimeout(() => setPaymentSuccess(false), 300);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
        fontFamily: "system-ui, sans-serif",
      },
      invalid: {
        color: "#9e2146",
      },
    },
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {paymentSuccess ? "Payment Successful!" : "Complete Payment"}
          </DialogTitle>
          <DialogDescription>
            {paymentSuccess
              ? "Your booking has been confirmed."
              : "Enter your card details to complete the booking."}
          </DialogDescription>
        </DialogHeader>

        {paymentSuccess ? (
          <div className="space-y-4 py-4">
            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Your payment of ${(amount / 100).toFixed(2)} has been processed
              successfully.
            </p>
            <Button onClick={handleClose} className="w-full">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Card Details</label>
              <div className="rounded-md border border-input bg-background p-3">
                <CardElement options={cardElementOptions} />
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-muted p-4">
              <span className="text-sm font-medium">Total Amount:</span>
              <span className="text-xl font-bold">
                ${(amount / 100).toFixed(2)}
              </span>
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                disabled={isProcessing}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={!stripe || isProcessing}
                className="flex-1"
              >
                {isProcessing ? "Processing..." : "Pay Now"}
              </Button>
            </div>

            <p className="text-center text-xs text-muted-foreground">
              Your payment is secured by Stripe
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
