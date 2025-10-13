import { object, string } from "yup";

export const createBookingSchema = object({
  pickupLocation: string()
    .required("Pickup location is required")
    .min(3, "Pickup location must be at least 3 characters"),
  dropLocation: string()
    .required("Drop location is required")
    .min(3, "Drop location must be at least 3 characters"),
  date: string().required("Date is required"),
  time: string().required("Time is required"),
  userEmail: string()
    .required("Email is required")
    .email("Must be a valid email"),
  userName: string().optional(),
});

export type CreateBookingInput = {
  pickupLocation: string;
  dropLocation: string;
  date: string;
  time: string;
  userEmail: string;
  userName?: string;
};
