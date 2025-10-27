import { createBookingSchema } from "@/schema/bookingSchema";
import { paginationQuerySchema } from "@/schema/paginationSchema";
import { validateInput } from "@api/lib/validateInput";
import { Hono } from "hono";
import { number, object, string } from "yup";
import { bookingService } from "./bookingService";

const app = new Hono();

/*
  @route    POST: /bookings
  @access   public
  @desc     Create a new booking with Stripe payment integration
*/
app.post("/", async (c) => {
  const body = await c.req.json();

  const validatedData = await validateInput({
    type: "form",
    schema: createBookingSchema,
    data: body,
  });

  const result = await bookingService.createBooking(validatedData);

  return c.json(result, 201);
});

/*
  @route    POST: /bookings/confirm
  @access   public
  @desc     Confirm booking after successful payment
*/
app.post("/confirm", async (c) => {
  const body = await c.req.json();

  const validatedData = await validateInput({
    type: "form",
    schema: object({
      bookingId: string().required("Booking ID is required"),
      paymentIntentId: string().required("Payment Intent ID is required"),
    }),
    data: body,
  });

  const result = await bookingService.confirmBooking(validatedData);

  return c.json(result, 200);
});

/*
  @route    GET: /bookings/stats
  @access   private
  @desc     Get booking statistics
*/
app.get("/stats", async (c) => {
  const validatedQuery = await validateInput({
    type: "query",
    schema: object({
      startDate: string().optional(),
      endDate: string().optional(),
    }),
    data: c.req.query(),
  });

  const result = await bookingService.getBookingStats(validatedQuery);
  return c.json(result);
});

/*
  @route    GET: /bookings/calendar
  @access   private
  @desc     Get bookings for calendar view by date range
*/
app.get("/calendar", async (c) => {
  const validatedQuery = await validateInput({
    type: "query",
    schema: object({
      startDate: string().required("Start date is required"),
      endDate: string().required("End date is required"),
    }),
    data: c.req.query(),
  });

  const result = await bookingService.getBookingsByDateRange(validatedQuery);
  return c.json(result);
});

/*
  @route    GET: /bookings
  @access   private
  @desc     Get all bookings with pagination and search
*/
app.get("/", async (c) => {
  const validatedQuery = await validateInput({
    type: "query",
    schema: paginationQuerySchema.shape({
      userId: string().optional(),
    }),
    data: c.req.query(),
  });

  const result = await bookingService.getBookings(validatedQuery);

  return c.json(result);
});

/*
  @route    GET: /bookings/:id
  @access   private
  @desc     Get a single booking by ID
*/
app.get("/:id", async (c) => {
  const validatedParam = await validateInput({
    type: "param",
    schema: object({
      id: string().required(),
    }),
    data: c.req.param(),
  });

  const result = await bookingService.getBookingById(validatedParam.id);
  return c.json(result);
});

/*
  @route    DELETE: /bookings/:id
  @access   private
  @desc     Delete a booking
*/
app.delete("/:id", async (c) => {
  const validatedParam = await validateInput({
    type: "param",
    schema: object({
      id: string().required(),
    }),
    data: c.req.param(),
  });

  await bookingService.deleteBooking(validatedParam.id);
  return c.json({ success: true, message: "Booking deleted successfully" });
});

/*
  @route    PATCH: /bookings/:id/status
  @access   private
  @desc     Update booking payment status
*/
app.patch("/:id/status", async (c) => {
  const validatedParam = await validateInput({
    type: "param",
    schema: object({
      id: string().required(),
    }),
    data: c.req.param(),
  });

  const body = await c.req.json();
  const validatedData = await validateInput({
    type: "form",
    schema: object({
      paymentStatus: string()
        .required()
        .oneOf(["pending", "succeeded", "failed"]),
      amount: number().min(0).optional(),
    }),
    data: body,
  });

  const result = await bookingService.updateBookingStatus(
    validatedParam.id,
    validatedData.paymentStatus,
    validatedData.amount,
  );

  return c.json({ success: true, booking: result });
});

/*
  @route    PATCH: /bookings/:id/booking-status
  @access   private
  @desc     Update booking lifecycle status (upcoming, ongoing, completed)
*/
app.patch("/:id/booking-status", async (c) => {
  const validatedParam = await validateInput({
    type: "param",
    schema: object({
      id: string().required(),
    }),
    data: c.req.param(),
  });

  const body = await c.req.json();
  const validatedData = await validateInput({
    type: "form",
    schema: object({
      bookingStatus: string()
        .required()
        .oneOf(["upcoming", "ongoing", "completed"]),
    }),
    data: body,
  });

  const result = await bookingService.updateBookingLifecycleStatus(
    validatedParam.id,
    validatedData.bookingStatus,
  );

  return c.json({ success: true, booking: result });
});

export default app;
