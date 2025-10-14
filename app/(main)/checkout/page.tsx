"use client";

import { PaymentForm } from "@/app/(main)/_components/stripe/payment-form";
import { StripeProvider } from "@/app/(main)/_components/stripe/stripe-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDate } from "@/lib/date-format";
import { ArrowLeft, Calendar, Clock, MapPin, Route } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

interface BookingDetails {
  id: string;
  pickupLocation: string;
  dropLocation: string;
  bookingDate: string;
  bookingTime: string;
  amount: number;
  paymentStatus: string;
  clientSecret: string;
}

interface DistanceInfo {
  distance: {
    text: string;
    value: number; // in meters
  };
  duration: {
    text: string;
    value: number; // in seconds
  };
  pricing: {
    calculatedPrice: number; // in cents
    pricingType: string;
    basePrice: number;
    minimumPrice: number;
    pricePerKilometer?: number;
    pricePerHour?: number;
  };
}

function CheckoutContent() {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get("bookingId");
  const clientSecret = searchParams.get("clientSecret");

  const [booking, setBooking] = useState<BookingDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [distanceInfo, setDistanceInfo] = useState<DistanceInfo | null>(null);
  const [isLoadingDistance, setIsLoadingDistance] = useState(false);

  const calculateDistance = async (pickup: string, drop: string) => {
    setIsLoadingDistance(true);
    try {
      const response = await fetch("/api/distance/calculate-with-pricing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pickupLocation: pickup,
          dropLocation: drop,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setDistanceInfo({
          distance: data.distance,
          duration: data.duration,
          pricing: data.pricing,
        });
      } else {
        console.error("Distance calculation failed:", data.error);
      }
    } catch (error) {
      console.error("Error calculating distance:", error);
    } finally {
      setIsLoadingDistance(false);
    }
  };

  useEffect(() => {
    if (!bookingId || !clientSecret) {
      setError("Missing booking information");
      setIsLoading(false);
      return;
    }

    // Set booking details from URL params or fetch from API
    // For now, we'll use the data passed from the booking creation
    const storedBooking = sessionStorage.getItem(`booking_${bookingId}`);

    if (storedBooking) {
      const bookingData = JSON.parse(storedBooking);
      setBooking({
        ...bookingData,
        clientSecret,
      });
      setIsLoading(false);

      // Calculate distance after booking is loaded
      calculateDistance(bookingData.pickupLocation, bookingData.dropLocation);
    } else {
      setError("Booking details not found");
      setIsLoading(false);
    }
  }, [bookingId, clientSecret]);

  const handlePaymentSuccess = () => {
    // Clear session storage
    if (bookingId) {
      sessionStorage.removeItem(`booking_${bookingId}`);
    }
    // Redirect to success page with hard redirect
    window.location.href = `/payment-success?bookingId=${bookingId}`;
  };

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-4xl py-12">
        <Skeleton className="mb-8 h-10 w-64" />
        <div className="grid gap-6 md:grid-cols-2">
          <Skeleton className="h-[400px]" />
          <Skeleton className="h-[400px]" />
        </div>
      </div>
    );
  }

  if (error || !booking || !clientSecret) {
    return (
      <div className="container mx-auto max-w-4xl py-12">
        <Card>
          <CardContent className="py-12 text-center">
            <h2 className="mb-2 text-xl font-semibold text-destructive">
              Error
            </h2>
            <p className="mb-6 text-muted-foreground">
              {error || "Unable to load booking details"}
            </p>
            <Button onClick={() => (window.location.href = "/")}>
              Return Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl py-12">
      <Button
        variant="ghost"
        onClick={() => window.history.back()}
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <h1 className="mb-8 text-3xl font-bold">Complete Your Booking</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Booking Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Booking Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm font-medium">Pickup Location</p>
                <p className="text-sm text-muted-foreground">
                  {booking.pickupLocation}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm font-medium">Drop-off Location</p>
                <p className="text-sm text-muted-foreground">
                  {booking.dropLocation}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="mt-1 h-5 w-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm font-medium">Date</p>
                <p className="text-sm text-muted-foreground">
                  {formatDate(booking.bookingDate)}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm font-medium">Time</p>
                <p className="text-sm text-muted-foreground">
                  {booking.bookingTime}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Route className="mt-1 h-5 w-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm font-medium">Distance & Duration</p>
                {isLoadingDistance ? (
                  <p className="text-sm text-muted-foreground">
                    Calculating...
                  </p>
                ) : distanceInfo ? (
                  <div className="text-sm text-muted-foreground">
                    <p>{distanceInfo.distance.text}</p>
                    <p>{distanceInfo.duration.text}</p>
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Unable to calculate
                  </p>
                )}
              </div>
            </div>

            {distanceInfo?.pricing && (
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                  <span className="text-xs font-bold text-white">$</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Dynamic Pricing</p>
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold text-green-600">
                      ${(distanceInfo.pricing.calculatedPrice / 100).toFixed(2)}
                    </p>
                    <p className="text-xs">
                      {distanceInfo.pricing.pricingType === "kilometer"
                        ? `$${distanceInfo.pricing.pricePerKilometer}/km + $${distanceInfo.pricing.basePrice} base`
                        : `$${distanceInfo.pricing.pricePerHour}/hour + $${distanceInfo.pricing.basePrice} base`}
                    </p>
                    <p className="text-xs">
                      Min: ${distanceInfo.pricing.minimumPrice}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="border-t pt-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Booking ID:</span>
                <span className="font-mono text-sm text-muted-foreground">
                  {booking.id}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Form */}
        <Card>
          <CardHeader>
            <CardTitle>Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <StripeProvider clientSecret={clientSecret}>
              <PaymentForm
                bookingId={booking.id}
                amount={booking.amount}
                onSuccess={handlePaymentSuccess}
              />
            </StripeProvider>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto max-w-4xl py-12">
          <div className="mb-8 h-10 w-64 animate-pulse rounded bg-muted" />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="h-[400px] animate-pulse rounded-xl bg-muted" />
            <div className="h-[400px] animate-pulse rounded-xl bg-muted" />
          </div>
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
