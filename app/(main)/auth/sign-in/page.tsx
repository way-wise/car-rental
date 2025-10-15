import type { Metadata } from "next";
import SigninForm from "./signin-form";

export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Sign in to your Escalade4lax account to access your bookings, manage your profile, and enjoy our premium car rental services.",
  keywords: [
    "sign in",
    "login",
    "user account",
    "escalade4lax login",
    "car rental account",
    "access bookings",
  ],
  openGraph: {
    title: "Sign In - Escalade4lax",
    description:
      "Sign in to your Escalade4lax account to access your bookings, manage your profile, and enjoy our premium car rental services.",
    type: "website",
  },
  twitter: {
    title: "Sign In - Escalade4lax",
    description:
      "Sign in to your Escalade4lax account to access your bookings, manage your profile, and enjoy our premium car rental services.",
  },
  alternates: {
    canonical: "/auth/sign-in",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const SignInPage = () => {
  return (
    <div className="min-h-[70vh]">
      <SigninForm />
    </div>
  );
};

export default SignInPage;
