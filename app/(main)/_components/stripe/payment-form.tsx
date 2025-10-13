"use client";

import { Button } from "@/components/ui/button";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

interface PaymentFormProps {
  bookingId: string;
  amount: number;
  onSuccess?: () => void;
}

export function PaymentForm({
  bookingId,
  amount,
  onSuccess,
}: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    try {
      // Step 1: Confirm payment with Stripe
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment-success?bookingId=${bookingId}`,
        },
        redirect: "if_required",
      });

      if (error) {
        toast.error(error.message || "Payment failed");
        setIsProcessing(false);
        return;
      }

      if (paymentIntent && paymentIntent.status === "succeeded") {
        // Step 2: Update booking status and save payment method
        try {
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
            toast.success("Payment successful!");

            // Step 3: Redirect or call onSuccess
            if (onSuccess) {
              onSuccess();
            } else {
              window.location.href = `/payment-success?bookingId=${bookingId}`;
            }
          } else {
            toast.error("Payment succeeded but booking update failed");
            setIsProcessing(false);
          }
        } catch (confirmError) {
          console.error("Booking confirmation error:", confirmError);
          toast.error("Payment succeeded but booking update failed");
          setIsProcessing(false);
        }
      }
    } catch (err: any) {
      console.error("Payment error:", err);
      toast.error("An error occurred during payment");
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="mb-2 text-lg font-semibold">Payment Details</h3>
        <p className="mb-4 text-sm text-muted-foreground">
          Complete your payment to confirm the booking
        </p>
      </div>

      <PaymentElement
        options={{
          layout: "tabs",
          paymentMethodOrder: ["card"],
        }}
      />

      <div className="flex items-center justify-between rounded-lg bg-muted p-4">
        <span className="text-sm font-medium">Total Amount:</span>
        <span className="text-xl font-bold">${(amount / 100).toFixed(2)}</span>
      </div>

      <Button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full"
        size="lg"
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Your payment is secured by Stripe
      </p>
    </form>
  );
}
