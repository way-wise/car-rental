import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Car, Home, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="mx-auto w-full max-w-2xl shadow-xl">
        <CardContent className="p-8 text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="mb-4 text-8xl font-bold text-blue-600">404</div>
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">
              <Car className="h-12 w-12 text-blue-600" />
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
            <Button asChild size="lg" className="flex items-center gap-2">
              <Link href="/">
                <Home className="h-4 w-4" />
                Go Home
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
            >
              <Link href="/dashboard">
                <Search className="h-4 w-4" />
                Browse Cars
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="border-t pt-6">
            <p className="mb-4 text-sm text-gray-500">Quick Links:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
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
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.history.back()}
              className="mx-auto flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
