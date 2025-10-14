"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDate } from "@/lib/date-format";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Mail,
  MapPin,
  Route,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface BookingDetails {
  pickupLocation: string;
  dropLocation: string;
  date: string;
  time: string;
  userEmail: string;
  userName?: string;
}

interface DistanceInfo {
  distance: {
    text: string;
    value: number;
  };
  duration: {
    text: string;
    value: number;
  };
  pricing: {
    calculatedPrice: number;
    pricingType: string;
    basePrice: number;
    minimumPrice: number;
    pricePerKilometer?: number;
    pricePerHour?: number;
  };
}

export default function BookingConfirmPage() {
  const router = useRouter();
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(
    null,
  );
  const [distanceInfo, setDistanceInfo] = useState<DistanceInfo | null>(null);
  const [isLoadingDistance, setIsLoadingDistance] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
        toast.error("Unable to calculate distance");
      }
    } catch (error) {
      console.error("Error calculating distance:", error);
      toast.error("Error calculating distance");
    } finally {
      setIsLoadingDistance(false);
    }
  };

  useEffect(() => {
    // Get booking details from session storage
    const storedDetails = sessionStorage.getItem("pending_booking");

    if (storedDetails) {
      const details = JSON.parse(storedDetails);
      setBookingDetails(details);
      setIsLoading(false);

      // Calculate distance
      calculateDistance(details.pickupLocation, details.dropLocation);
    } else {
      toast.error("No booking details found");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }, []);

  const handleConfirmBooking = async () => {
    if (!bookingDetails) return;

    setIsConfirming(true);

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingDetails),
      });

      const data = await response.json();

      if (data.success) {
        // Clear pending booking from session storage
        sessionStorage.removeItem("pending_booking");

        // Check if payment was instant (saved card charged)
        if (data.instantPayment && data.paymentStatus === "succeeded") {
          toast.success(
            "Booking confirmed! Payment processed with your saved card.",
          );
          // Redirect to success page
          router.push(`/payment-success?bookingId=${data.bookingId}`);
        } else {
          // Normal flow - need to collect payment
          toast.success("Booking created! Redirecting to payment...");

          // Store booking details in session storage for checkout page
          sessionStorage.setItem(
            `booking_${data.bookingId}`,
            JSON.stringify(data.booking),
          );

          // Navigate to checkout page with booking ID and client secret
          router.push(
            `/checkout?bookingId=${data.bookingId}&clientSecret=${data.clientSecret}`,
          );
        }
      } else {
        toast.error(data.error || "Failed to create booking");
      }
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("An error occurred while creating your booking");
    } finally {
      setIsConfirming(false);
    }
  };

  const handleBack = () => {
    // Clear pending booking
    sessionStorage.removeItem("pending_booking");
    router.back();
  };

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-4xl py-12">
        <Skeleton className="mb-8 h-10 w-64" />
        <Skeleton className="h-[500px]" />
      </div>
    );
  }

  if (!bookingDetails) {
    return (
      <div className="container mx-auto max-w-4xl py-12">
        <Card>
          <CardContent className="py-12 text-center">
            <h2 className="mb-2 text-xl font-semibold text-destructive">
              Error
            </h2>
            <p className="mb-6 text-muted-foreground">
              No booking details found
            </p>
            <Button onClick={() => router.push("/")}>Return Home</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl py-12">
      <Button
        variant="ghost"
        onClick={handleBack}
        className="mb-6 cursor-pointer"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <h1 className="mb-8 text-3xl font-bold">Confirm Your Booking</h1>

      <Card>
        <CardHeader>
          <CardTitle>Booking Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm font-medium">Pickup Location</p>
                <p className="text-sm text-muted-foreground">
                  {bookingDetails.pickupLocation}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm font-medium">Drop-off Location</p>
                <p className="text-sm text-muted-foreground">
                  {bookingDetails.dropLocation}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="mt-1 h-5 w-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm font-medium">Date</p>
                <p className="text-sm text-muted-foreground">
                  {formatDate(bookingDetails.date)}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm font-medium">Time</p>
                <p className="text-sm text-muted-foreground">
                  {bookingDetails.time}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">
                  {bookingDetails.userEmail}
                </p>
              </div>
            </div>

            {bookingDetails.userName && (
              <div className="flex items-start gap-3">
                <User className="mt-1 h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Name</p>
                  <p className="text-sm text-muted-foreground">
                    {bookingDetails.userName}
                  </p>
                </div>
              </div>
            )}

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

            {distanceInfo && (
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                  <span className="text-xs font-bold text-white">$</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Estimated Amount</p>
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold text-green-600">
                      ${(distanceInfo.pricing.calculatedPrice / 100).toFixed(2)}
                    </p>
                    <p className="text-xs">
                      Dynamic pricing based on distance & duration
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="border-t pt-6">
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={handleBack}
                className="flex-1"
                disabled={isConfirming}
              >
                Cancel
              </Button>
              <Button
                onClick={handleConfirmBooking}
                className="flex-1"
                disabled={isConfirming || isLoadingDistance}
              >
                {isConfirming ? "Confirming..." : "Confirm Booking"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
