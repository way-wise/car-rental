import type { Metadata } from "next";
import SignupForm from "./signup-form";

export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "Create your Escalade4lax account to start booking premium car rental services. Join thousands of satisfied customers today.",
  keywords: [
    "sign up",
    "register",
    "create account",
    "escalade4lax registration",
    "car rental signup",
    "new user account",
  ],
  openGraph: {
    title: "Sign Up - Escalade4lax",
    description:
      "Create your Escalade4lax account to start booking premium car rental services. Join thousands of satisfied customers today.",
    type: "website",
  },
  twitter: {
    title: "Sign Up - Escalade4lax",
    description:
      "Create your Escalade4lax account to start booking premium car rental services. Join thousands of satisfied customers today.",
  },
  alternates: {
    canonical: "/auth/sign-up",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const SignupPage = () => {
  return (
    <div className="min-h-[70vh]">
      <SignupForm />
    </div>
  );
};

export default SignupPage;
