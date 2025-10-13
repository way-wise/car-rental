"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { PaymentModal } from "./PaymentModal";

// Load Stripe with your publishable key
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

interface PaymentModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  clientSecret: string;
  bookingId: string;
  amount: number;
  onSuccess?: () => void;
}

export function PaymentModalWrapper({
  isOpen,
  onClose,
  clientSecret,
  bookingId,
  amount,
  onSuccess,
}: PaymentModalWrapperProps) {
  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
      variables: {
        colorPrimary: "#E01238",
        colorBackground: "#ffffff",
        colorText: "#1a1a1a",
        colorDanger: "#df1b41",
        fontFamily: "system-ui, sans-serif",
        spacingUnit: "4px",
        borderRadius: "8px",
      },
    },
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <PaymentModal
        isOpen={isOpen}
        onClose={onClose}
        clientSecret={clientSecret}
        bookingId={bookingId}
        amount={amount}
        onSuccess={onSuccess}
      />
    </Elements>
  );
}
