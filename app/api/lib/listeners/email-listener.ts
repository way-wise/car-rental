import {
  sendBookingConfirmationToAdmin,
  sendBookingConfirmationToUser,
  sendNewUserCredentials,
  sendPasswordResetEmail,
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
      console.log("📧 Attempting to send booking confirmation to user:", email);
      await sendBookingConfirmationToUser(email, bookingDetails);
      console.log("✅ Booking confirmation email sent to user:", email);
    } catch (err) {
      console.error("❌ Failed to send booking confirmation to user:", email);
      console.error("Error details:", err);
      // Optional: push to retry queue, Sentry, or log to DB
    }
  },
);

emailEvents.on(
  EmailEventType.BOOKING_CONFIRMATION_ADMIN,
  async ({ bookingDetails }) => {
    try {
      console.log("📧 Attempting to send booking confirmation to admin");
      await sendBookingConfirmationToAdmin(bookingDetails);
      console.log("✅ Booking confirmation email sent to admin");
    } catch (err) {
      console.error("❌ Failed to send booking confirmation to admin");
      console.error("Error details:", err);
      // Optional: push to retry queue, Sentry, or log to DB
    }
  },
);

emailEvents.on(
  EmailEventType.NEW_USER_CREDENTIALS,
  async ({ email, userName, password }) => {
    try {
      console.log("📧 Attempting to send credentials to new user:", email);
      await sendNewUserCredentials(email, userName, email, password);
      console.log("✅ Credentials email sent to new user:", email);
    } catch (err) {
      console.error("❌ Failed to send credentials to new user:", email);
      console.error("Error details:", err);
      // Optional: push to retry queue, Sentry, or log to DB
    }
  },
);

emailEvents.on(EmailEventType.PASSWORD_RESET_EMAIL, async ({ email, url }) => {
  try {
    console.log("📧 Attempting to send password reset email to:", email);
    // Extract user name from email (you might want to fetch from database)
    const userName = email.split("@")[0];
    await sendPasswordResetEmail(email, userName, url);
    console.log("✅ Password reset email sent to:", email);
  } catch (err) {
    console.error("❌ Failed to send password reset email to:", email);
    console.error("Error details:", err);
    // Optional: push to retry queue, Sentry, or log to DB
  }
});
