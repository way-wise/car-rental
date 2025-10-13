import { getPaginationQuery } from "@/app/api/lib/pagination";
import prisma from "@/lib/prisma";
import type { PaginationQuery } from "@/schema/paginationSchema";
import { HTTPException } from "hono/http-exception";

export const bookingService = {
  // Get all bookings with pagination and search
  getBookings: async (query: PaginationQuery) => {
    const { skip, take, page, limit } = getPaginationQuery(query);

    const [bookings, total] = await prisma.$transaction([
      prisma.bookings.findMany({
        where: {
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
                  {
                    paymentStatus: {
                      contains: query.search,
                      mode: "insensitive",
                    },
                  },
                ],
              }
            : {}),
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
                  {
                    paymentStatus: {
                      contains: query.search,
                      mode: "insensitive",
                    },
                  },
                ],
              }
            : {}),
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

  // Update booking status
  updateBookingStatus: async (id: string, paymentStatus: string) => {
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
};
