import { emailEvents, EmailEventType } from "@/app/api/lib/events/email_event";
import { getPaginationQuery } from "@/app/api/lib/pagination";
import prisma from "@/lib/prisma";
import {
  createAndConfirmPaymentIntent,
  createPaymentIntent,
  getOrCreateStripeCustomer,
  stripe,
} from "@/lib/stripe";
import type { PaginationQuery } from "@/schema/paginationSchema";
import { hashPassword } from "better-auth/crypto";
import { HTTPException } from "hono/http-exception";
import { ulid } from "ulid";
import { distanceService } from "../distance/distanceService";

export const bookingService = {
  // Get all bookings with pagination and search
  getBookings: async (query: PaginationQuery & { userId?: string }) => {
    const { skip, take, page, limit } = getPaginationQuery(query);

    // Build date range filter
    const dateFilter = (() => {
      if (query.startDate && query.endDate) {
        const startDate = new Date(query.startDate);
        const endDate = new Date(query.endDate);
        // Set start date to beginning of day
        startDate.setHours(0, 0, 0, 0);
        // Set end date to end of day to include the entire end date
        endDate.setHours(23, 59, 59, 999);
        return {
          bookingDate: {
            gte: startDate,
            lte: endDate,
          },
        };
      } else if (query.startDate) {
        const startDate = new Date(query.startDate);
        // Set start date to beginning of day
        startDate.setHours(0, 0, 0, 0);
        return {
          bookingDate: {
            gte: startDate,
          },
        };
      } else if (query.endDate) {
        const endDate = new Date(query.endDate);
        // Set end date to end of day
        endDate.setHours(23, 59, 59, 999);
        return {
          bookingDate: {
            lte: endDate,
          },
        };
      }
      return {};
    })();

    const [bookings, total] = await prisma.$transaction([
      prisma.bookings.findMany({
        where: {
          ...(query.userId
            ? {
                userId: query.userId,
              }
            : {}),
          ...(query.search
            ? {
                OR: [
                  {
                    pickupLocation: {
                      contains: query.search,
                      mode: "insensitive",
                    },
                  },
                  {
                    dropLocation: {
                      contains: query.search,
                      mode: "insensitive",
                    },
                  },
                  {
                    user: {
                      name: {
                        contains: query.search,
                        mode: "insensitive",
                      },
                    },
                  },
                  {
                    user: {
                      email: {
                        contains: query.search,
                        mode: "insensitive",
                      },
                    },
                  },
                ],
              }
            : {}),
          ...dateFilter,
        },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              image: true,
            },
          },
        },
        skip,
        take,
        orderBy: {
          createdAt: "desc",
        },
      }),
      prisma.bookings.count({
        where: {
          ...(query.userId
            ? {
                userId: query.userId,
              }
            : {}),
          ...(query.search
            ? {
                OR: [
                  {
                    pickupLocation: {
                      contains: query.search,
                      mode: "insensitive",
                    },
                  },
                  {
                    dropLocation: {
                      contains: query.search,
                      mode: "insensitive",
                    },
                  },
                  {
                    user: {
                      name: {
                        contains: query.search,
                        mode: "insensitive",
                      },
                    },
                  },
                  {
                    user: {
                      email: {
                        contains: query.search,
                        mode: "insensitive",
                      },
                    },
                  },
                ],
              }
            : {}),
          ...dateFilter,
        },
      }),
    ]);

    return {
      data: bookings,
      meta: {
        page,
        limit,
        total,
      },
    };
  },

  // Get a single booking by ID
  getBookingById: async (id: string) => {
    const booking = await prisma.bookings.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
      },
    });

    if (!booking) {
      throw new HTTPException(404, {
        message: "Booking not found",
      });
    }

    return booking;
  },

  // Delete a booking
  deleteBooking: async (id: string) => {
    const booking = await prisma.bookings.delete({
      where: { id },
    });

    return booking;
  },

  // Update booking payment status
  updateBookingStatus: async (
    id: string,
    paymentStatus: "pending" | "succeeded" | "failed" | "canceled" | "refunded",
  ) => {
    const booking = await prisma.bookings.update({
      where: { id },
      data: { paymentStatus },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return booking;
  },

  // Update booking status (upcoming, ongoing, completed)
  updateBookingLifecycleStatus: async (
    id: string,
    bookingStatus: "upcoming" | "ongoing" | "completed" | "canceled",
  ) => {
    const booking = await prisma.bookings.update({
      where: { id },
      data: { bookingStatus },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return booking;
  },

  // Get booking statistics
  getBookingStats: async (query?: { startDate?: string; endDate?: string }) => {
    // Build date range filter for stats
    const dateFilter = (() => {
      if (query?.startDate && query?.endDate) {
        const startDate = new Date(query.startDate);
        const endDate = new Date(query.endDate);
        // Set start date to beginning of day
        startDate.setHours(0, 0, 0, 0);
        // Set end date to end of day to include the entire end date
        endDate.setHours(23, 59, 59, 999);
        return {
          bookingDate: {
            gte: startDate,
            lte: endDate,
          },
        };
      } else if (query?.startDate) {
        const startDate = new Date(query.startDate);
        // Set start date to beginning of day
        startDate.setHours(0, 0, 0, 0);
        return {
          bookingDate: {
            gte: startDate,
          },
        };
      } else if (query?.endDate) {
        const endDate = new Date(query.endDate);
        // Set end date to end of day
        endDate.setHours(23, 59, 59, 999);
        return {
          bookingDate: {
            lte: endDate,
          },
        };
      }
      return {};
    })();

    const [
      totalBookings,
      successfulBookings,
      pendingBookings,
      failedBookings,
      totalIncomeResult,
    ] = await prisma.$transaction([
      // Total bookings count
      prisma.bookings.count({
        where: dateFilter,
      }),

      // Successful bookings count
      prisma.bookings.count({
        where: {
          paymentStatus: "succeeded",
          ...dateFilter,
        },
      }),

      // Pending bookings count
      prisma.bookings.count({
        where: {
          paymentStatus: "pending",
          ...dateFilter,
        },
      }),

      // Failed bookings count
      prisma.bookings.count({
        where: {
          paymentStatus: "failed",
          ...dateFilter,
        },
      }),

      // Total income (sum of successful payments)
      prisma.bookings.aggregate({
        where: {
          paymentStatus: "succeeded",
          ...dateFilter,
        },
        _sum: {
          amount: true,
        },
      }),
    ]);

    return {
      totalBookings,
      successfulBookings,
      pendingBookings,
      failedBookings,
      totalIncome: totalIncomeResult._sum.amount || 0,
    };
  },

  // Get bookings for calendar view
  getBookingsByDateRange: async (query: {
    startDate: string;
    endDate: string;
  }) => {
    const { startDate, endDate } = query;

    // Ensure we include the full start and end dates
    const start = new Date(startDate);
    const end = new Date(endDate);
    start.setHours(0, 0, 0, 0);
    end.setHours(23, 59, 59, 999);

    const bookings = await prisma.bookings.findMany({
      where: {
        bookingDate: {
          gte: start,
          lte: end,
        },
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
      },
      orderBy: {
        bookingDate: "asc",
      },
    });

    // Group bookings by date
    const bookingsByDate: Record<
      string,
      {
        count: number;
        bookings: typeof bookings;
      }
    > = {};

    bookings.forEach((booking: (typeof bookings)[0]) => {
      const dateKey = booking.bookingDate.toISOString().split("T")[0];
      if (!bookingsByDate[dateKey]) {
        bookingsByDate[dateKey] = {
          count: 0,
          bookings: [],
        };
      }
      bookingsByDate[dateKey].count += 1;
      bookingsByDate[dateKey].bookings.push(booking);
    });

    return bookingsByDate;
  },

  // Create a new booking with Stripe payment integration
  createBooking: async (data: {
    pickupLocation: string;
    dropLocation: string;
    date: string;
    time: string;
    distance?: number;
    duration?: number;
    userEmail: string;
    userPhone?: string;
  }) => {
    const { pickupLocation, dropLocation, date, time, userEmail, userPhone } =
      data;

    // Step 1: Check if user exists, create if not
    let user = await prisma.users.findUnique({
      where: { email: userEmail },
      select: {
        id: true,
        email: true,
        name: true,
        phone: true,
        stripeCustomerId: true,
        defaultPaymentMethod: true,
      },
    });

    // Track if user is newly created
    let plainPassword = "";

    // Create user if doesn't exist
    if (!user) {
      // Generate random password for new users
      plainPassword = `12345678`;
      const hashedPassword = await hashPassword(plainPassword);

      const now = new Date();

      // Create user with account
      user = await prisma.users.create({
        data: {
          id: ulid(),
          email: userEmail,
          name: userEmail.split("@")[0],
          phone: userPhone,
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
          phone: true,
          stripeCustomerId: true,
          defaultPaymentMethod: true,
        },
      });

      // Send credentials email to new user
      emailEvents.emit(EmailEventType.NEW_USER_CREDENTIALS, {
        email: user.email,
        userName: user.name,
        password: plainPassword,
      });
    }

    // Step 2: Get or create Stripe customer
    const stripeCustomerId = await getOrCreateStripeCustomer(
      user.id,
      user.email,
      user.name || user.email.split("@")[0],
      user.stripeCustomerId,
    );

    // Update user with Stripe customer ID if it was just created
    if (!user.stripeCustomerId) {
      await prisma.users.update({
        where: { id: user.id },
        data: { stripeCustomerId },
      });
    }

    // Step 3: Calculate dynamic pricing based on distance
    const bookingDate = new Date(date);
    const distanceInfo = await distanceService.calculateDistanceWithPricing({
      pickupLocation,
      dropLocation,
      bookingDate,
      bookingTime: time,
    });

    const dynamicAmount = distanceInfo.pricing.calculatedPrice;

    // Calculate distance in miles and duration in minutes for storage
    const distanceMiles = distanceInfo.distance.value / 1609.34;
    const durationMinutes = distanceInfo.duration.value / 60;

    // Step 4: Create booking record with dynamic amount
    const booking = await prisma.bookings.create({
      data: {
        id: ulid(),
        userId: user.id,
        pickupLocation,
        dropLocation,
        bookingDate,
        bookingTime: time,
        distance: distanceMiles, // Store in miles
        duration: durationMinutes, // Store in minutes
        paymentStatus: "pending",
        bookingStatus: "upcoming",
        amount: dynamicAmount, // Dynamic amount based on distance/duration
      },
      select: {
        id: true,
        pickupLocation: true,
        dropLocation: true,
        bookingDate: true,
        bookingTime: true,
        distance: true,
        duration: true,
        amount: true,
        paymentStatus: true,
        bookingStatus: true,
      },
    });

    // Step 5: Handle payment based on whether user has saved payment method
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
            userPhone: user.phone,
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
          return {
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
              distance: booking.distance,
              duration: booking.duration,
              amount: booking.amount,
              paymentStatus: "succeeded" as const,
              bookingStatus: booking.bookingStatus,
            },
          };
        }
      } catch (error: unknown) {
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

      // Update booking with payment intent ID
      await prisma.bookings.update({
        where: { id: booking.id },
        data: {
          stripePaymentIntentId: paymentIntent.id,
        },
      });

      // Return client secret for user to enter card
      return {
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
          distance: booking.distance,
          duration: booking.duration,
          amount: booking.amount,
          paymentStatus: booking.paymentStatus,
          bookingStatus: booking.bookingStatus,
        },
      };
    }
  },

  // Confirm booking after successful payment
  confirmBooking: async (data: {
    bookingId: string;
    paymentIntentId: string;
  }) => {
    const { bookingId, paymentIntentId } = data;

    if (!bookingId || !paymentIntentId) {
      throw new HTTPException(400, {
        message: "Missing bookingId or paymentIntentId",
      });
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
            phone: true,
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
      userPhone: booking.user.phone,
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

    return {
      success: true,
      booking,
      paymentMethodSaved: !!paymentMethodId,
    };
  },
};
