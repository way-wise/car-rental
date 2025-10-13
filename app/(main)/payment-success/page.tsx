"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get("bookingId");

  return (
    <div className="container mx-auto flex min-h-screen max-w-2xl items-center justify-center py-12">
      <Card className="w-full">
        <CardContent className="py-12 text-center">
          <div className="mb-6 flex justify-center">
            <CheckCircle className="h-20 w-20 text-green-500" />
          </div>

          <h1 className="mb-2 text-3xl font-bold">Payment Successful!</h1>
          <p className="mb-6 text-muted-foreground">
            Your booking has been confirmed
          </p>

          {bookingId ? (
            <div className="mb-8 rounded-lg bg-muted p-4">
              <p className="text-sm font-medium">Booking ID</p>
              <p className="font-mono text-lg">{bookingId}</p>
            </div>
          ) : (
            <div className="mb-8 rounded-lg bg-muted p-4">
              <p className="text-sm text-muted-foreground">
                Your booking has been confirmed successfully
              </p>
            </div>
          )}

          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              A confirmation email has been sent to your email address.
            </p>
            <p className="text-sm text-muted-foreground">
              Please save your booking ID for future reference.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" onClick={() => (window.location.href = "/")}>
              Return Home
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = "/profile")}
            >
              View My Bookings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto flex min-h-screen max-w-2xl items-center justify-center py-12">
          <Card className="w-full">
            <CardContent className="py-12 text-center">
              <p>Loading...</p>
            </CardContent>
          </Card>
        </div>
      }
    >
      <PaymentSuccessContent />
    </Suspense>
  );
}
