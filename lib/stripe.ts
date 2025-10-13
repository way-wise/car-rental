import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set in environment variables");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-09-30.clover",
  typescript: true,
});

/**
 * Create or retrieve a Stripe customer
 */
export async function getOrCreateStripeCustomer(
  userId: string,
  email: string,
  name: string,
  existingCustomerId?: string | null,
): Promise<string> {
  // If customer already exists, return the ID
  if (existingCustomerId) {
    return existingCustomerId;
  }

  // Create a new Stripe customer
  const customer = await stripe.customers.create({
    email,
    name,
    metadata: {
      userId,
    },
  });

  return customer.id;
}

/**
 * Create a payment intent for a booking
 * Sets up for future off-session payments
 */
export async function createPaymentIntent(
  amount: number,
  currency: string,
  customerId: string,
  bookingId: string,
  paymentMethodId?: string,
): Promise<Stripe.PaymentIntent> {
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency,
    customer: customerId,
    payment_method_types: ["card"], // Only allow card payments
    setup_future_usage: "off_session", // Save for future use
    ...(paymentMethodId && { payment_method: paymentMethodId }), // Use saved payment method if provided
    metadata: {
      bookingId,
    },
  });

  return paymentIntent;
}

/**
 * Create and confirm payment intent with saved payment method (off-session)
 * For repeat customers with saved cards
 */
export async function createAndConfirmPaymentIntent(
  amount: number,
  currency: string,
  customerId: string,
  bookingId: string,
  paymentMethodId: string,
): Promise<Stripe.PaymentIntent> {
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency,
    customer: customerId,
    payment_method_types: ["card"], // Only allow card payments
    payment_method: paymentMethodId,
    off_session: true, // Charge saved card without user present
    confirm: true, // Auto-confirm the payment
    metadata: {
      bookingId,
    },
  });

  return paymentIntent;
}

/**
 * Retrieve user's saved payment method details
 */
export async function getPaymentMethod(
  paymentMethodId: string,
): Promise<Stripe.PaymentMethod | null> {
  try {
    const paymentMethod = await stripe.paymentMethods.retrieve(paymentMethodId);
    return paymentMethod;
  } catch (error) {
    console.error("Error retrieving payment method:", error);
    return null;
  }
}
