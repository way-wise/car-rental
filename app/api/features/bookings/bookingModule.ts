import { paginationQuerySchema } from "@/schema/paginationSchema";
import { validateInput } from "@api/lib/validateInput";
import { Hono } from "hono";
import { object, string } from "yup";
import { bookingService } from "./bookingService";

const app = new Hono();

/*
  @route    GET: /bookings/stats
  @access   private
  @desc     Get booking statistics
*/
app.get("/stats", async (c) => {
  const result = await bookingService.getBookingStats();
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
    schema:
      paginationQuerySchema &&
      object({
        search: string().optional(),
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
    }),
    data: body,
  });

  const result = await bookingService.updateBookingStatus(
    validatedParam.id,
    validatedData.paymentStatus,
  );

  return c.json({ success: true, booking: result });
});

export default app;
