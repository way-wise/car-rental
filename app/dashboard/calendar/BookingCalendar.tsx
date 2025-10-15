"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { formatDate } from "@/lib/date-format";
import { Booking } from "@/schema/bookingSchema";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import useSWR from "swr";

interface BookingsByDate {
  [date: string]: {
    count: number;
    bookings: Booking[];
  };
}

export const BookingCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedBookings, setSelectedBookings] = useState<Booking[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calculate date range for current month
  const startDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  );
  const endDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  );

  // Format dates for API
  const startDateStr = startDate.toISOString().split("T")[0];
  const endDateStr = endDate.toISOString().split("T")[0];

  // Fetch bookings for current month
  const { data: bookingsByDate, isLoading } = useSWR<BookingsByDate>(
    `/api/bookings/calendar?startDate=${startDateStr}&endDate=${endDateStr}`,
  );

  // Calendar navigation
  const previousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  // Generate calendar days
  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const daysInMonth = lastDay.getDate();
    const startDayOfWeek = firstDay.getDay();

    const days: (Date | null)[] = [];

    // Add empty cells for days before month starts
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const days = getDaysInMonth();
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Handle date click
  const handleDateClick = (date: Date) => {
    const dateKey = date.toISOString().split("T")[0];
    const bookingsForDate = bookingsByDate?.[dateKey];

    if (bookingsForDate && bookingsForDate.count > 0) {
      setSelectedDate(dateKey);
      setSelectedBookings(bookingsForDate.bookings);
      setIsModalOpen(true);
    }
  };

  // Check if date is today
  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  // Get booking count for a date
  const getBookingCount = (date: Date) => {
    const dateKey = date.toISOString().split("T")[0];
    return bookingsByDate?.[dateKey]?.count || 0;
  };

  // Format amount from cents to dollars
  const formatAmount = (cents: number) => {
    return `$${(cents / 100).toFixed(2)}`;
  };

  // Calculate monthly statistics
  const getMonthlyStats = () => {
    if (!bookingsByDate) {
      return {
        totalBookings: 0,
        totalRevenue: 0,
        successfulBookings: 0,
      };
    }

    let totalBookings = 0;
    let totalRevenue = 0;
    let successfulBookings = 0;

    Object.values(bookingsByDate).forEach((dateData) => {
      dateData.bookings.forEach((booking) => {
        totalBookings++;
        if (booking.paymentStatus === "succeeded") {
          totalRevenue += booking.amount;
          successfulBookings++;
        }
      });
    });

    return { totalBookings, totalRevenue, successfulBookings };
  };

  const monthlyStats = getMonthlyStats();

  return (
    <div className="space-y-6">
      {/* Monthly Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border bg-card p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Bookings
              </p>
              <h3 className="mt-1 text-2xl font-bold">
                {monthlyStats.totalBookings}
              </h3>
            </div>
            <div className="rounded-full bg-blue-500/10 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-card p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Successful
              </p>
              <h3 className="mt-1 text-2xl font-bold">
                {monthlyStats.successfulBookings}
              </h3>
            </div>
            <div className="rounded-full bg-green-500/10 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-card p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Monthly Revenue
              </p>
              <h3 className="mt-1 text-2xl font-bold">
                {formatAmount(monthlyStats.totalRevenue)}
              </h3>
            </div>
            <div className="rounded-full bg-emerald-500/10 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={goToToday}>
            Today
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={previousMonth}
            disabled={isLoading}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextMonth}
            disabled={isLoading}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="rounded-xl border bg-card">
        <div className="grid grid-cols-7 gap-px bg-border">
          {/* Week day headers */}
          {weekDays.map((day) => (
            <div
              key={day}
              className="bg-card p-3 text-center text-sm font-medium text-muted-foreground"
            >
              {day}
            </div>
          ))}

          {/* Calendar days */}
          {days.map((day, index) => {
            if (!day) {
              return <div key={`empty-${index}`} className="bg-card p-3"></div>;
            }

            const bookingCount = getBookingCount(day);
            const hasBookings = bookingCount > 0;

            return (
              <div
                key={day.toISOString()}
                onClick={() => hasBookings && handleDateClick(day)}
                className={`relative min-h-[100px] bg-card p-3 transition-colors ${
                  hasBookings
                    ? "cursor-pointer hover:bg-accent"
                    : "cursor-default"
                } ${isToday(day) ? "ring-2 ring-primary ring-inset" : ""}`}
              >
                <div className="flex flex-col gap-2">
                  <span
                    className={`text-sm ${
                      isToday(day)
                        ? "font-bold text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {day.getDate()}
                  </span>
                  {isLoading ? (
                    <div className="h-5 w-20 animate-pulse rounded bg-muted" />
                  ) : (
                    hasBookings && (
                      <div className="flex flex-col gap-1">
                        <Badge
                          variant="secondary"
                          className="w-fit px-2 py-0.5 text-xs"
                        >
                          {bookingCount}{" "}
                          {bookingCount === 1 ? "booking" : "bookings"}
                        </Badge>
                      </div>
                    )
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Booking Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-h-[80vh] !max-w-4xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="">
              Bookings for{" "}
              {selectedDate && formatDate(new Date(selectedDate + "T00:00:00"))}
            </DialogTitle>
          </DialogHeader>

          <div className="mt-4 space-y-4">
            {selectedBookings.map((booking) => (
              <div
                key={booking.id}
                className="space-y-3 rounded-lg border bg-card p-4"
              >
                {/* User Information */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{booking.user?.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {booking.user?.email}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Badge
                      variant={
                        booking.paymentStatus === "succeeded"
                          ? "success"
                          : booking.paymentStatus === "failed"
                            ? "destructive"
                            : "secondary"
                      }
                    >
                      {booking.paymentStatus.charAt(0).toUpperCase() +
                        booking.paymentStatus.slice(1)}
                    </Badge>
                    <Badge variant="outline">
                      {booking.bookingStatus.charAt(0).toUpperCase() +
                        booking.bookingStatus.slice(1)}
                    </Badge>
                  </div>
                </div>

                {/* Booking Details */}
                <div className="grid grid-cols-1 gap-3 text-sm md:grid-cols-2">
                  <div>
                    <span className="text-muted-foreground">Booking ID:</span>
                    <p className="font-mono">{booking.id}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Time:</span>
                    <p>{booking.bookingTime}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Pickup:</span>
                    <p className="break-words">{booking.pickupLocation}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Drop:</span>
                    <p className="break-words">{booking.dropLocation}</p>
                  </div>
                  {booking.distance && (
                    <div>
                      <span className="text-muted-foreground">Distance:</span>
                      <p>{booking.distance} km</p>
                    </div>
                  )}
                  {booking.duration && (
                    <div>
                      <span className="text-muted-foreground">Duration:</span>
                      <p>{booking.duration} mins</p>
                    </div>
                  )}
                  <div>
                    <span className="text-muted-foreground">Amount:</span>
                    <p className="text-lg font-semibold">
                      {formatAmount(booking.amount)}
                    </p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Created:</span>
                    <p>{formatDate(booking.createdAt)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-end">
            <Button onClick={() => setIsModalOpen(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
