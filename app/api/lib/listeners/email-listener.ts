import {
  sendBookingConfirmationToAdmin,
  sendBookingConfirmationToUser,
  sendVerificationEmail,
} from "@/lib/email";
import { emailEvents, EmailEventType } from "../events/email_event";

emailEvents.on(EmailEventType.VERIFY_EMAIL, async ({ email, token, url }) => {
  try {
    await sendVerificationEmail(email, token, url);
    console.log("✅ Verification email sent to:", email);
  } catch (err) {
    console.error("❌ Failed to send verification email", err);
    // Optional: push to retry queue, Sentry, or log to DB
  }
});

emailEvents.on(
  EmailEventType.BOOKING_CONFIRMATION_USER,
  async ({ email, bookingDetails }) => {
    try {
      await sendBookingConfirmationToUser(email, bookingDetails);
      console.log("✅ Booking confirmation email sent to user:", email);
    } catch (err) {
      console.error("❌ Failed to send booking confirmation to user", err);
      // Optional: push to retry queue, Sentry, or log to DB
    }
  },
);

emailEvents.on(
  EmailEventType.BOOKING_CONFIRMATION_ADMIN,
  async ({ bookingDetails }) => {
    try {
      await sendBookingConfirmationToAdmin(bookingDetails);
      console.log("✅ Booking confirmation email sent to admin");
    } catch (err) {
      console.error("❌ Failed to send booking confirmation to admin", err);
      // Optional: push to retry queue, Sentry, or log to DB
    }
  },
);
