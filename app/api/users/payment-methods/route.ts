import { getSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getPaymentMethod, stripe } from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/users/payment-methods
 * Get user's saved payment method details
 */
export async function GET(request: NextRequest) {
  try {
    const session = await getSession();
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId") || session?.user?.id;

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          error: "User ID is required",
        },
        { status: 400 },
      );
    }

    // Get user's saved payment method
    const user = await prisma.users.findUnique({
      where: { id: userId },
      select: {
        defaultPaymentMethod: true,
      },
    });

    if (!user?.defaultPaymentMethod) {
      return NextResponse.json({
        success: true,
        paymentMethod: null,
      });
    }

    // Retrieve payment method details from Stripe
    const paymentMethod = await getPaymentMethod(user.defaultPaymentMethod);

    if (!paymentMethod) {
      return NextResponse.json({
        success: true,
        paymentMethod: null,
      });
    }

    // Return safe payment method details
    return NextResponse.json({
      success: true,
      paymentMethod: {
        id: paymentMethod.id,
        type: paymentMethod.type,
        card: paymentMethod.card
          ? {
              brand: paymentMethod.card.brand,
              last4: paymentMethod.card.last4,
              expMonth: paymentMethod.card.exp_month,
              expYear: paymentMethod.card.exp_year,
            }
          : null,
      },
    });
  } catch (error: any) {
    console.error("Error fetching payment method:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch payment method",
        message: error.message,
      },
      { status: 500 },
    );
  }
}

/**
 * DELETE /api/users/payment-methods
 * Remove user's saved payment method
 */
export async function DELETE(request: NextRequest) {
  try {
    const session = await getSession();
    const body = await request.json();
    const { paymentMethodId, userId } = body;

    const userIdToUse = userId || session?.user?.id;

    if (!userIdToUse) {
      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized",
        },
        { status: 401 },
      );
    }

    // Remove payment method from user
    await prisma.users.update({
      where: { id: userIdToUse },
      data: {
        defaultPaymentMethod: null,
      },
    });

    // Optionally detach payment method from Stripe customer
    if (paymentMethodId) {
      try {
        await stripe.paymentMethods.detach(paymentMethodId);
      } catch (error) {
        console.error("Error detaching payment method from Stripe:", error);
        // Continue even if detach fails
      }
    }

    return NextResponse.json({
      success: true,
      message: "Payment method removed successfully",
    });
  } catch (error: any) {
    console.error("Error removing payment method:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to remove payment method",
        message: error.message,
      },
      { status: 500 },
    );
  }
}
