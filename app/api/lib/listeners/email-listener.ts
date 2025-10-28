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
  } catch (err) {
    console.error("❌ Failed to send verification email", err);
  }
});

emailEvents.on(
  EmailEventType.BOOKING_CONFIRMATION_USER,
  async ({ email, bookingDetails }) => {
    try {
      await sendBookingConfirmationToUser(email, bookingDetails);
    } catch (err) {
      console.error("❌ Failed to send booking confirmation to user:", email);
      console.error("Error details:", err);
    }
  },
);

emailEvents.on(
  EmailEventType.BOOKING_CONFIRMATION_ADMIN,
  async ({ bookingDetails }) => {
    try {
      await sendBookingConfirmationToAdmin(bookingDetails);
    } catch (err) {
      console.error("❌ Failed to send booking confirmation to admin");
      console.error("Error details:", err);
    }
  },
);

emailEvents.on(
  EmailEventType.NEW_USER_CREDENTIALS,
  async ({ email, userName, password }) => {
    try {
      await sendNewUserCredentials(email, userName, email, password);
    } catch (err) {
      console.error("❌ Failed to send credentials to new user:", email);
      console.error("Error details:", err);
    }
  },
);

emailEvents.on(EmailEventType.PASSWORD_RESET_EMAIL, async ({ email, url }) => {
  try {
    const userName = email.split("@")[0];
    await sendPasswordResetEmail(email, userName, url);
  } catch {
    console.error("❌ Failed to send password reset email to:", email);
  }
});
