"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDate } from "@/lib/date-format";
import { Booking } from "@/schema/bookingSchema";
import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import {
  ArrowLeft,
  Check,
  CircleX,
  ShieldUser,
  UserRound,
  X,
} from "lucide-react";
import { useState } from "react";
import useSWR from "swr";

// UserDetails component
const UserDetails = ({ id }: { id: string }) => {
  const router = useRouter();
  const { data: userData, isLoading, error } = useSWR(`/api/users/${id}`);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 5,
  });

  // Get user's bookings
  const bookingsUrl = `/api/bookings?page=${pagination.pageIndex}&limit=${pagination.pageSize}&userId=${id}`;
  const { data: bookingsData, isValidating } = useSWR(bookingsUrl);

  // Get all user bookings for stats calculation
  const { data: allBookingsData } = useSWR(
    `/api/bookings?userId=${id}&limit=1000`,
  );

  // Format amount from cents to dollars
  const formatAmount = (cents: number) => {
    return `$${(cents / 100).toFixed(2)}`;
  };

  // Calculate user booking stats
  const userStats = {
    totalBookings: allBookingsData?.meta?.total || 0,
    totalSpent:
      allBookingsData?.data?.reduce((sum: number, booking: Booking) => {
        return booking.paymentStatus === "succeeded"
          ? sum + booking.amount
          : sum;
      }, 0) || 0,
    successfulBookings:
      allBookingsData?.data?.filter(
        (b: Booking) => b.paymentStatus === "succeeded",
      ).length || 0,
    pendingBookings:
      allBookingsData?.data?.filter(
        (b: Booking) => b.paymentStatus === "pending",
      ).length || 0,
    failedBookings:
      allBookingsData?.data?.filter(
        (b: Booking) => b.paymentStatus === "failed",
      ).length || 0,
  };

  // Table columns for bookings
  const columns: ColumnDef<Booking>[] = [
    {
      header: "Pickup Location",
      accessorKey: "pickupLocation",
      cell: ({ row }) => (
        <div className="max-w-[200px] truncate">
          {row.original.pickupLocation}
        </div>
      ),
    },
    {
      header: "Drop Location",
      accessorKey: "dropLocation",
      cell: ({ row }) => (
        <div className="max-w-[200px] truncate">
          {row.original.dropLocation}
        </div>
      ),
    },
    {
      header: "Booking Date",
      accessorKey: "bookingDate",
      cell: ({ row }) => (
        <div>
          <div>{formatDate(row.original.bookingDate)}</div>
          <div className="text-sm text-muted-foreground">
            {row.original.bookingTime}
          </div>
        </div>
      ),
    },
    {
      header: "Amount",
      accessorKey: "amount",
      cell: ({ row }) => (
        <div className="font-medium">{formatAmount(row.original.amount)}</div>
      ),
    },
    {
      header: "Payment Status",
      accessorKey: "paymentStatus",
      cell: ({ row }) => {
        const status = row.original.paymentStatus;
        return (
          <Badge
            variant={
              status === "succeeded"
                ? "success"
                : status === "failed"
                  ? "destructive"
                  : "secondary"
            }
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        );
      },
    },
    {
      header: "Created At",
      accessorKey: "createdAt",
      cell: ({ row }) => formatDate(row.original.createdAt),
    },
  ];

  return (
    <>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <Button variant="outline" onClick={() => router.back()}>
          <ArrowLeft />
          <span>Go Back</span>
        </Button>
      </div>

      <div className="rounded-xl border bg-card p-6">
        {isLoading ? (
          <UserDetailsSkeleton />
        ) : error ? (
          <div className="text-center text-destructive">
            Failed to load user data. Please try again.
          </div>
        ) : !userData ? (
          <div className="text-center text-muted-foreground">
            No user data available.
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-start sm:text-left">
              {userData?.image ? (
                <Image
                  src={userData.image}
                  alt="Profile Image"
                  width={150}
                  height={150}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="flex size-[150px] items-center justify-center rounded-full bg-muted">
                  <UserRound className="size-20 stroke-[1.5] text-muted-foreground" />
                </div>
              )}
              <div className="flex-1">
                <h1 className="flex items-center justify-center gap-2 text-2xl font-medium sm:justify-start">
                  <span>{userData.name}</span>

                  {userData.emailVerified ? (
                    <Badge variant="success" size="icon">
                      <Check className="size-4" />
                    </Badge>
                  ) : (
                    <Badge variant="destructive" size="icon">
                      <X className="size-4" />
                    </Badge>
                  )}
                </h1>
                <Link
                  href={`mailto:${userData.email}`}
                  className="text-muted-foreground"
                >
                  {userData.email}
                </Link>
                <p className="text-muted-foreground">
                  Member since{" "}
                  {userData.createdAt && formatDate(userData.createdAt)}
                </p>
                <div className="flex items-center gap-2 py-3">
                  <div className="flex items-center gap-1.5 rounded-full bg-muted py-1.5 pr-2.5 pl-2 text-muted-foreground">
                    <ShieldUser className="size-6 stroke-[1.5]" />
                    <span className="capitalize">{userData.role}</span>
                  </div>
                  {userData.banned ? (
                    <div className="flex items-center gap-1.5 rounded-full bg-destructive/70 py-1.5 pr-2.5 pl-2 text-white">
                      <CircleX className="size-6 stroke-[1.5]" />
                      <span className="capitalize">Banned</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 rounded-full bg-muted py-1.5 pr-2.5 pl-2 text-muted-foreground">
                      <Check className="size-6 stroke-[1.5]" />
                      <span className="capitalize">Active</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* User Statistics */}
            <div className="mt-6 grid grid-cols-1 gap-4 border-t pt-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Total Bookings */}
              <div className="rounded-lg border bg-background p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Total Bookings
                    </p>
                    <h3 className="mt-1 text-2xl font-bold">
                      {userStats.totalBookings}
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
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Total Spent */}
              <div className="rounded-lg border bg-background p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Total Spent
                    </p>
                    <h3 className="mt-1 text-2xl font-bold">
                      {formatAmount(userStats.totalSpent)}
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
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Successful Bookings */}
              <div className="rounded-lg border bg-background p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Successful
                    </p>
                    <h3 className="mt-1 text-2xl font-bold">
                      {userStats.successfulBookings}
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="mt-5 rounded-xl border bg-card p-6">
        <h3 className="mb-4 text-lg font-semibold">Bookings History</h3>
        <DataTable
          data={bookingsData}
          columns={columns}
          isPending={isValidating}
          pagination={pagination}
          onPaginationChange={setPagination}
        />
      </div>
    </>
  );
};

// Skeleton loader for user profile
const UserDetailsSkeleton = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 text-center sm:flex-row sm:justify-start sm:text-left">
        <Skeleton className="size-[150px] rounded-full" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-9 w-64 rounded" />
          <Skeleton className="h-6 w-48 rounded" />
          <Skeleton className="h-6 w-48 rounded" />
          <div className="flex gap-2 pt-3">
            <Skeleton className="h-8 w-24 rounded-full" />
            <Skeleton className="h-8 w-24 rounded-full" />
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 border-t pt-6 sm:grid-cols-2 lg:grid-cols-4">
        <Skeleton className="h-24 rounded-lg" />
        <Skeleton className="h-24 rounded-lg" />
        <Skeleton className="h-24 rounded-lg" />
        <Skeleton className="h-24 rounded-lg" />
      </div>
    </>
  );
};

export default UserDetails;
