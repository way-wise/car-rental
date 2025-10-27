import { InferType, mixed, number, object, string } from "yup";

// Booking Schema for frontend
export const bookingSchema = object({
  id: string(),
  userId: string(),
  pickupLocation: string().required(),
  dropLocation: string().required(),
  bookingDate: mixed(),
  bookingTime: string().required(),
  distance: number().nullable(),
  duration: number().nullable(),
  stripePaymentIntentId: string().nullable(),
  paymentStatus: string()
    .oneOf(["pending", "succeeded", "failed"])
    .default("pending"),
  bookingStatus: string()
    .oneOf(["upcoming", "ongoing", "completed"])
    .default("upcoming"),
  amount: number().required(),
  createdAt: mixed(),
  updatedAt: mixed(),
  user: object({
    id: string(),
    name: string(),
    email: string(),
    phone: string(),
  }).optional(),
});

export type Booking = InferType<typeof bookingSchema>;

// Create booking schema (for booking creation)
export const createBookingSchema = object({
  pickupLocation: string()
    .required("Pickup location is required")
    .min(3, "Pickup location must be at least 3 characters"),
  dropLocation: string()
    .required("Drop location is required")
    .min(3, "Drop location must be at least 3 characters"),
  date: string().required("Date is required"),
  time: string().required("Time is required"),
  distance: number().optional(),
  duration: number().optional(),
  userEmail: string()
    .required("Email is required")
    .email("Must be a valid email"),
  userPhone: string().optional(),
});

export type CreateBookingInput = {
  pickupLocation: string;
  dropLocation: string;
  date: string;
  time: string;
  distance?: number;
  duration?: number;
  userEmail: string;
  userPhone?: string;
};
