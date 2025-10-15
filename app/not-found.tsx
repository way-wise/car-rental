"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br p-4">
      <div className="mx-auto w-full max-w-2xl rounded-lg bg-white p-8 text-center shadow-xl">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="mb-4 text-8xl font-bold text-primary">404</div>
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">
            <div className="text-4xl">🚗</div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            Page Not Found
          </h1>
          <p className="mb-2 text-lg text-gray-600">
            Oops! It looks like you&apos;ve taken a wrong turn.
          </p>
          <p className="text-gray-500">
            The page you&apos;re looking for seems to have driven away.
            Don&apos;t worry, we&apos;ll help you get back on track!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-white hover:bg-primary/90"
          >
            🏠 Go Home
          </Link>
        </div>

        {/* Quick Links */}
        <div className="border-t pt-6">
          <p className="mb-4 text-sm text-gray-500">Quick Links:</p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/auth/sign-in"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Login
            </Link>
            <Link
              href="/about-us"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              About Us
            </Link>
            <Link
              href="/privacy-policy"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-6">
          <button
            onClick={() => window.history.back()}
            className="mx-auto inline-flex h-8 items-center justify-center rounded-md px-3 text-sm text-gray-600 hover:bg-gray-100"
          >
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
