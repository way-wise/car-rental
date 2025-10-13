"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { ReactNode } from "react";

// Load Stripe with your publishable key
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

interface StripeProviderProps {
  clientSecret: string;
  children: ReactNode;
}

export function StripeProvider({
  clientSecret,
  children,
}: StripeProviderProps) {
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
      {children}
    </Elements>
  );
}
