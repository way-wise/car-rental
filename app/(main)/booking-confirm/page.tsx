"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

interface BookingDetails {
  pickupLocation: string;
  dropLocation: string;
  date: string;
  time: string;
  userEmail: string;
  userPhone?: string;
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
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);

  const calculateDistance = useCallback(
    async (pickup: string, drop: string) => {
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
        console.log(data);
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
    },
    [],
  );

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
  }, [router, calculateDistance]);

  const handleConfirmBooking = async () => {
    if (!bookingDetails) return;

    setIsConfirming(true);

    try {
      // Prepare booking data with distance and duration
      const bookingData = {
        ...bookingDetails,
        distance: distanceInfo ? distanceInfo.distance.value / 5280 : undefined, // Convert feet to miles
        duration: distanceInfo ? distanceInfo.duration.value / 60 : undefined, // Convert seconds to minutes
      };

      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      if (data.success) {
        // Clear pending booking from session storage
        sessionStorage.removeItem("pending_booking");

        // Show success toast
        toast.success("Booking confirmed successfully!");

        // Set modal state
        setIsNewUser(data.isNewUser || false);
        setIsSuccessModalOpen(true);
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
    <div className="container mx-auto min-h-screen max-w-4xl py-12">
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
        <CardContent className="space-y-6 px-1 sm:px-4">
          <div className="space-y-4">
            <div className="flex w-full flex-col items-start justify-between gap-8 sm:flex-row">
              <div className="w-full space-y-4 sm:w-1/2">
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
              </div>

              <div className="flex w-full items-start space-y-4 gap-x-12 sm:w-1/2 sm:flex-col">
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
              </div>
            </div>
            <div className="flex items-start gap-x-12">
              {bookingDetails.userPhone && (
                <div className="flex w-full items-start gap-3 sm:w-1/2">
                  <User className="mt-1 h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">
                      {bookingDetails.userPhone}
                    </p>
                  </div>
                </div>
              )}
              <div className="flex w-full items-start gap-3 sm:w-1/2">
                <Mail className="mt-1 h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">
                    {bookingDetails.userEmail}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-x-4 sm:gap-x-12">
              <div className="flex w-full items-start gap-3 sm:w-1/2">
                <Route className="mt-1 h-5 w-5 text-muted-foreground" />
                <div className="flex flex-1 items-center gap-6">
                  <p className="text-xl font-medium">Distance :</p>
                  {isLoadingDistance ? (
                    <p className="text-sm text-muted-foreground">
                      Calculating...
                    </p>
                  ) : distanceInfo ? (
                    <div className="text-xl font-semibold text-black">
                      <p>{distanceInfo.distance.text}</p>
                      {/* <p>{distanceInfo.duration.text}</p> */}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Unable to calculate
                    </p>
                  )}
                </div>
              </div>

              {/* {distanceInfo && (
                <div className="flex w-full items-start gap-3 sm:w-1/2">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                    <span className="text-xs font-bold text-white">$</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium"> Amount</p>
                    <div className="text-lg text-muted-foreground">
                      <p className="font-semibold text-green-600">
                        $
                        {(distanceInfo.pricing.calculatedPrice / 100).toFixed(
                          2,
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              )} */}
            </div>
            <div className="pt-4 text-center text-lg">
              <p>
                Please confirm the booking, An Agent will call you within 30
                minutes.
              </p>
            </div>
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

      {/* Success Modal */}
      <Dialog open={isSuccessModalOpen} onOpenChange={() => {}}>
        <DialogContent
          showCloseButton={true}
          className="sm:max-w-[500px]"
          onEscapeKeyDown={(e) => {
            setIsSuccessModalOpen(false);
            router.push("/profile");
          }}
          onPointerDownOutside={(e) => e.preventDefault()}
          onInteractOutside={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">
              Booking Confirmed!
            </DialogTitle>
            <DialogDescription className="pt-4 text-center text-base">
              {isNewUser ? (
                <div className="space-y-3">
                  <p className="text-foreground">
                    Email sent to your email address.
                  </p>
                  <div className="rounded-lg bg-primary/10 p-4">
                    <p className="font-semibold text-primary">
                      Welcome! Your account has been created.
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Your login credentials have been sent to your email.
                      Please check your inbox.
                    </p>
                  </div>
                  <p className="text-muted-foreground">
                    Please check your email and review your booking details.
                  </p>
                </div>
              ) : (
                <p className="text-foreground">
                  A confirmation email has been sent to your email address.
                  Please check your inbox and review your booking details.
                </p>
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-6">
            <Button
              onClick={() => {
                setIsSuccessModalOpen(false);
                router.push("/profile");
              }}
              className="w-full"
              size="lg"
            >
              Go to Profile
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
