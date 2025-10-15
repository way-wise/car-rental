import { object, string } from "yup";

// Sign Up Schema
export const signUpSchema = object({
  name: string().required("Name is required"),
  email: string().email("Invalid email").required("Email is required"),
  password: string().required("Password is required"),
});

// Sign In Schema
export const signInSchema = object({
  email: string().email("Invalid email").required("Email is required"),
  password: string().required("Password is required"),
});

// Request Password Reset Schema
export const requestPasswordResetSchema = object({
  email: string().email("Invalid email").required("Email is required"),
});

// Reset Password Schema
export const resetPasswordSchema = object({
  password: string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
