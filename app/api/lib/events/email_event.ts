import { EventEmitter } from "events";

export const emailEvents = new EventEmitter();

export enum EmailEventType {
  VERIFY_EMAIL = "verify-email",
  BOOKING_CONFIRMATION_USER = "booking-confirmation-user",
  BOOKING_CONFIRMATION_ADMIN = "booking-confirmation-admin",
  NEW_USER_CREDENTIALS = "new-user-credentials",
  PASSWORD_RESET_EMAIL = "password-reset",
}
