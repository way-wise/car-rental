import { emailEvents, EmailEventType } from "@/app/api/lib/events/email_event";
import prisma from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/bookings/confirm
 * Update booking status after successful payment
 * Also saves the payment method as the user's default
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { bookingId, paymentIntentId } = body;

    if (!bookingId || !paymentIntentId) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing bookingId or paymentIntentId",
        },
        { status: 400 },
      );
    }

    // Retrieve PaymentIntent from Stripe to get payment method
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    // Get the payment method ID
    const paymentMethodId =
      typeof paymentIntent.payment_method === "string"
        ? paymentIntent.payment_method
        : paymentIntent.payment_method?.id;

    // Update booking with payment status
    const booking = await prisma.bookings.update({
      where: {
        id: bookingId,
      },
      data: {
        paymentStatus: "succeeded",
        stripePaymentIntentId: paymentIntentId,
      },
      select: {
        id: true,
        userId: true,
        paymentStatus: true,
        pickupLocation: true,
        dropLocation: true,
        bookingDate: true,
        bookingTime: true,
        amount: true,
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    // Save payment method as user's default if available
    if (paymentMethodId && booking.userId) {
      await prisma.users.update({
        where: {
          id: booking.userId,
        },
        data: {
          defaultPaymentMethod: paymentMethodId,
        },
      });
    }

    // Send booking confirmation emails
    const bookingDetails = {
      bookingId: booking.id,
      userName: booking.user.name,
      userEmail: booking.user.email,
      pickupLocation: booking.pickupLocation,
      dropLocation: booking.dropLocation,
      bookingDate: booking.bookingDate.toISOString(),
      bookingTime: booking.bookingTime,
      amount: booking.amount,
    };

    // Emit email events
    emailEvents.emit(EmailEventType.BOOKING_CONFIRMATION_USER, {
      email: booking.user.email,
      bookingDetails,
    });

    emailEvents.emit(EmailEventType.BOOKING_CONFIRMATION_ADMIN, {
      bookingDetails,
    });

    return NextResponse.json(
      {
        success: true,
        booking,
        paymentMethodSaved: !!paymentMethodId,
      },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("Booking confirmation error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to confirm booking",
        message: error.message || "An unexpected error occurred",
      },
      { status: 500 },
    );
  }
}
