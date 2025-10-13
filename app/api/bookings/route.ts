import { emailEvents, EmailEventType } from "@/app/api/lib/events/email_event";
import prisma from "@/lib/prisma";
import {
  createAndConfirmPaymentIntent,
  createPaymentIntent,
  getOrCreateStripeCustomer,
} from "@/lib/stripe";
import { createBookingSchema } from "@/schema/bookingSchema";
import { validateInput } from "@api/lib/validateInput";
import { hashPassword } from "better-auth/crypto";
import { NextRequest, NextResponse } from "next/server";
import { ulid } from "ulid";

/**
 * POST /api/bookings
 * Create a new booking with Stripe payment integration
 */
export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();

    const validatedData = await validateInput({
      type: "form",
      schema: createBookingSchema,
      data: body,
    });

    const { pickupLocation, dropLocation, date, time, userEmail, userName } =
      validatedData;

    // Step 1: Check if user exists, create if not
    let user = await prisma.users.findUnique({
      where: { email: userEmail },
      select: {
        id: true,
        email: true,
        name: true,
        stripeCustomerId: true,
        defaultPaymentMethod: true,
      },
    });

    // Create user if doesn't exist
    if (!user) {
      // Generate random password for new users
      const randomPassword = `temp_${ulid()}_${Math.random().toString(36).slice(2)}`;
      const hashedPassword = await hashPassword(randomPassword);

      const now = new Date();

      // Create user with account
      user = await prisma.users.create({
        data: {
          id: ulid(),
          email: userEmail,
          name: userName || userEmail.split("@")[0],
          emailVerified: false,
          createdAt: now,
          updatedAt: now,
          accounts: {
            create: {
              id: ulid(),
              accountId: ulid(),
              providerId: "credential",
              password: hashedPassword,
              createdAt: now,
              updatedAt: now,
            },
          },
        },
        select: {
          id: true,
          email: true,
          name: true,
          stripeCustomerId: true,
          defaultPaymentMethod: true,
        },
      });
    }

    // Step 2: Get or create Stripe customer
    const stripeCustomerId = await getOrCreateStripeCustomer(
      user.id,
      user.email,
      user.name,
      user.stripeCustomerId,
    );

    // Update user with Stripe customer ID if it was just created
    if (!user.stripeCustomerId) {
      await prisma.users.update({
        where: { id: user.id },
        data: { stripeCustomerId },
      });
    }

    // Step 3: Create booking record
    const bookingDate = new Date(date);
    const booking = await prisma.bookings.create({
      data: {
        id: ulid(),
        userId: user.id,
        pickupLocation,
        dropLocation,
        bookingDate,
        bookingTime: time,
        paymentStatus: "pending",
        amount: 10000, // $100.00 in cents
      },
      select: {
        id: true,
        pickupLocation: true,
        dropLocation: true,
        bookingDate: true,
        bookingTime: true,
        amount: true,
        paymentStatus: true,
      },
    });

    // Step 4: Handle payment based on whether user has saved payment method
    let paymentIntent;
    let instantPayment = false;

    if (user.defaultPaymentMethod) {
      // User has saved payment method - charge instantly (off-session)
      try {
        paymentIntent = await createAndConfirmPaymentIntent(
          booking.amount,
          "usd",
          stripeCustomerId,
          booking.id,
          user.defaultPaymentMethod,
        );

        // Check if payment succeeded
        if (paymentIntent.status === "succeeded") {
          instantPayment = true;

          // Update booking with payment status
          await prisma.bookings.update({
            where: { id: booking.id },
            data: {
              stripePaymentIntentId: paymentIntent.id,
              paymentStatus: "succeeded",
            },
          });

          // Send booking confirmation emails
          const bookingDetails = {
            bookingId: booking.id,
            userName: user.name,
            userEmail: user.email,
            pickupLocation: booking.pickupLocation,
            dropLocation: booking.dropLocation,
            bookingDate: booking.bookingDate.toISOString(),
            bookingTime: booking.bookingTime,
            amount: booking.amount,
          };

          // Emit email events
          emailEvents.emit(EmailEventType.BOOKING_CONFIRMATION_USER, {
            email: user.email,
            bookingDetails,
          });

          emailEvents.emit(EmailEventType.BOOKING_CONFIRMATION_ADMIN, {
            bookingDetails,
          });

          // Return success without clientSecret
          return NextResponse.json(
            {
              success: true,
              instantPayment: true,
              paymentStatus: "succeeded",
              bookingId: booking.id,
              booking: {
                id: booking.id,
                pickupLocation: booking.pickupLocation,
                dropLocation: booking.dropLocation,
                bookingDate: booking.bookingDate,
                bookingTime: booking.bookingTime,
                amount: booking.amount,
                paymentStatus: "succeeded",
              },
            },
            { status: 201 },
          );
        }
      } catch (error: any) {
        console.error("Off-session payment failed:", error);
        // Fall back to normal flow if saved card fails
        // (card may be expired, insufficient funds, etc.)
      }
    }

    // If no saved payment method OR saved payment failed, use normal flow
    if (!instantPayment) {
      paymentIntent = await createPaymentIntent(
        booking.amount,
        "usd",
        stripeCustomerId,
        booking.id,
        undefined, // Don't use saved method if it failed
      );

      // Step 5: Update booking with payment intent ID
      await prisma.bookings.update({
        where: { id: booking.id },
        data: {
          stripePaymentIntentId: paymentIntent.id,
        },
      });

      // Step 6: Return client secret for user to enter card
      return NextResponse.json(
        {
          success: true,
          instantPayment: false,
          clientSecret: paymentIntent.client_secret,
          bookingId: booking.id,
          booking: {
            id: booking.id,
            pickupLocation: booking.pickupLocation,
            dropLocation: booking.dropLocation,
            bookingDate: booking.bookingDate,
            bookingTime: booking.bookingTime,
            amount: booking.amount,
            paymentStatus: booking.paymentStatus,
          },
        },
        { status: 201 },
      );
    }
  } catch (error: any) {
    console.error("Booking creation error:", error);

    // Handle validation errors
    if (error.name === "ValidationError") {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: error.errors,
        },
        { status: 400 },
      );
    }

    // Handle Stripe errors
    if (error.type?.startsWith("Stripe")) {
      return NextResponse.json(
        {
          success: false,
          error: "Payment processing failed",
          message: error.message,
        },
        { status: 500 },
      );
    }

    // Generic error response
    return NextResponse.json(
      {
        success: false,
        error: "Failed to create booking",
        message: error.message || "An unexpected error occurred",
      },
      { status: 500 },
    );
  }
}

/**
 * GET /api/bookings
 * Retrieve bookings (optional: add pagination and filtering)
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userEmail = searchParams.get("userEmail");

    const bookings = await prisma.bookings.findMany({
      where: userEmail
        ? {
            user: {
              email: userEmail,
            },
          }
        : undefined,
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 50,
    });

    return NextResponse.json({
      success: true,
      bookings,
    });
  } catch (error: any) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch bookings",
        message: error.message,
      },
      { status: 500 },
    );
  }
}
