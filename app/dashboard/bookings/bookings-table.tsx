"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormField,
  FormFieldset,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatDate } from "@/lib/date-format";
import { Booking } from "@/schema/bookingSchema";
import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import { Eye, MoreVertical, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useSWR, { mutate } from "swr";

export const BookingsTable = () => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [updateStatusModalOpen, setUpdateStatusModalOpen] = useState(false);
  const [viewDetailsModalOpen, setViewDetailsModalOpen] = useState(false);
  const [bookingId, setBookingId] = useState<string | undefined>("");
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10,
  });
  // debounce search
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // date range filter
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 600);

    return () => clearTimeout(timer);
  }, [search]);

  // Get bookings data
  const buildUrl = () => {
    const params = new URLSearchParams({
      page: pagination.pageIndex.toString(),
      limit: pagination.pageSize.toString(),
    });

    if (debouncedSearch.trim()) {
      params.append("search", debouncedSearch.trim());
    }

    if (dateRange.from) {
      params.append("startDate", dateRange.from.toISOString().split("T")[0]);
    }

    if (dateRange.to) {
      params.append("endDate", dateRange.to.toISOString().split("T")[0]);
    }

    return `/api/bookings?${params.toString()}`;
  };

  const url = buildUrl();
  const { isValidating, data } = useSWR(url);

  // Get booking statistics with date range filter
  const buildStatsUrl = () => {
    const params = new URLSearchParams();

    if (dateRange.from) {
      params.append("startDate", dateRange.from.toISOString().split("T")[0]);
    }

    if (dateRange.to) {
      params.append("endDate", dateRange.to.toISOString().split("T")[0]);
    }

    return `/api/bookings/stats?${params.toString()}`;
  };

  const statsUrl = buildStatsUrl();
  const { data: stats } = useSWR(statsUrl);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPagination({
      pageIndex: 1,
      pageSize: 10,
    });
  };

  const handleDateRangeChange = (range: {
    from: Date | undefined;
    to: Date | undefined;
  }) => {
    setDateRange(range);
    setPagination({
      pageIndex: 1,
      pageSize: 10,
    });
  };

  // Delete Form
  const deleteForm = useForm();

  // Handle Booking Deletion
  const handleDeleteBooking = async () => {
    try {
      const response = await fetch(`/api/bookings/${bookingId}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        toast.error(result.error || "Failed to delete booking");
        return;
      }

      toast.success("Booking deleted successfully");
      setDeleteModalOpen(false);
      mutate(url);
    } catch (error: unknown) {
      toast.error(
        error instanceof Error ? error.message : "Failed to delete booking",
      );
    }
  };

  // Update Status Form
  const updateStatusForm = useForm({
    defaultValues: {
      paymentStatus: "pending",
    },
  });

  // Handle Status Update
  const handleUpdateStatus = async (values: { paymentStatus: string }) => {
    try {
      const response = await fetch(`/api/bookings/${bookingId}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ paymentStatus: values.paymentStatus }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        toast.error(result.error || "Failed to update status");
        return;
      }

      toast.success("Booking status updated successfully");
      setUpdateStatusModalOpen(false);
      updateStatusForm.reset();
      mutate(url);
    } catch (error: unknown) {
      toast.error(
        error instanceof Error ? error.message : "Failed to update status",
      );
    }
  };

  // Format amount from cents to dollars
  const formatAmount = (cents: number) => {
    return `$${(cents / 100).toFixed(2)}`;
  };

  // Get summary stats from backend
  const summaryStats = {
    totalBookings: stats?.totalBookings || 0,
    totalIncome: stats?.totalIncome || 0,
    pendingBookings: stats?.pendingBookings || 0,
    successfulBookings: stats?.successfulBookings || 0,
  };

  // Table columns
  const columns: ColumnDef<Booking>[] = [
    {
      header: "User",
      accessorKey: "user.name",
      cell: ({ row }) => (
        <div>
          <div className="font-medium">{row.original.user?.name}</div>
          <div className="text-sm text-muted-foreground">
            {row.original.user?.email}
          </div>
        </div>
      ),
    },
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
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const { id, paymentStatus } = row.original;

        return (
          <>
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger>
                <MoreVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem
                  onClick={() => {
                    setSelectedBooking(row.original);
                    setViewDetailsModalOpen(true);
                  }}
                >
                  <Eye />
                  <span>View Details</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setBookingId(id);
                    updateStatusForm.setValue("paymentStatus", paymentStatus);
                    setUpdateStatusModalOpen(true);
                  }}
                >
                  <span>Update Status</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  variant="destructive"
                  onClick={() => {
                    setBookingId(id);
                    setDeleteModalOpen(true);
                  }}
                >
                  <Trash />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-medium">Bookings</h1>
      </div>

      {/* Summary Stats Boxes */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total Bookings */}
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Bookings
              </p>
              <h3 className="mt-2 text-3xl font-bold">
                {summaryStats.totalBookings}
              </h3>
            </div>
            <div className="rounded-full bg-blue-500/10 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
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

        {/* Total Income */}
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Income
              </p>
              <h3 className="mt-2 text-3xl font-bold">
                {formatAmount(summaryStats.totalIncome)}
              </h3>
            </div>
            <div className="rounded-full bg-green-500/10 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500"
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
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Successful
              </p>
              <h3 className="mt-2 text-3xl font-bold">
                {summaryStats.successfulBookings}
              </h3>
            </div>
            <div className="rounded-full bg-emerald-500/10 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-emerald-500"
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

        {/* Pending Bookings */}
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Pending
              </p>
              <h3 className="mt-2 text-3xl font-bold">
                {summaryStats.pendingBookings}
              </h3>
            </div>
            <div className="rounded-full bg-orange-500/10 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border bg-card p-6">
        <div className="flex flex-col gap-4 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Input
              type="search"
              placeholder="Search location, user, status..."
              value={search}
              onChange={handleSearchChange}
              className="max-w-xs"
            />
            <DateRangePicker
              value={dateRange}
              onChange={handleDateRangeChange}
              placeholder="Filter by date range"
              className="max-w-xs"
            />
          </div>
          {(dateRange.from || dateRange.to) && (
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                handleDateRangeChange({ from: undefined, to: undefined })
              }
            >
              Clear Date Filter
            </Button>
          )}
        </div>
        <DataTable
          data={data}
          columns={columns}
          isPending={isValidating}
          pagination={pagination}
          onPaginationChange={setPagination}
        />
      </div>

      {/* Update Status Modal */}
      <Modal
        isOpen={updateStatusModalOpen}
        onClose={() => setUpdateStatusModalOpen(false)}
        title="Update Payment Status"
        isPending={updateStatusForm.formState.isSubmitting}
      >
        <Form {...updateStatusForm}>
          <form onSubmit={updateStatusForm.handleSubmit(handleUpdateStatus)}>
            <FormFieldset disabled={updateStatusForm.formState.isSubmitting}>
              <FormField
                control={updateStatusForm.control}
                name="paymentStatus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payment Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="succeeded">Succeeded</SelectItem>
                        <SelectItem value="failed">Failed</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end gap-3 py-5">
                <Button
                  type="button"
                  onClick={() => {
                    setUpdateStatusModalOpen(false);
                    updateStatusForm.reset();
                  }}
                  variant="secondary"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  isLoading={updateStatusForm.formState.isSubmitting}
                >
                  Update
                </Button>
              </div>
            </FormFieldset>
          </form>
        </Form>
      </Modal>

      {/* Delete Booking Modal */}
      <Modal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        title="Delete Booking"
        isPending={deleteForm.formState.isSubmitting}
      >
        <Form {...deleteForm}>
          <form onSubmit={deleteForm.handleSubmit(handleDeleteBooking)}>
            <FormFieldset disabled={deleteForm.formState.isSubmitting}>
              <p className="text-muted-foreground">
                This action cannot be undone. This will permanently delete the
                booking.
              </p>
              <div className="flex justify-end gap-3 py-5">
                <Button
                  type="button"
                  onClick={() => setDeleteModalOpen(false)}
                  variant="secondary"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="destructive"
                  isLoading={deleteForm.formState.isSubmitting}
                >
                  Continue
                </Button>
              </div>
            </FormFieldset>
          </form>
        </Form>
      </Modal>

      {/* View Booking Details Modal */}
      <Modal
        isOpen={viewDetailsModalOpen}
        onClose={() => setViewDetailsModalOpen(false)}
        title=""
        isPending={false}
      >
        {selectedBooking && (
          <div>
            <div className="flex items-center justify-between pb-2">
              <h1 className="text-2xl font-medium">Booking Details</h1>
              <div className="flex justify-end">
                <Button
                  className="mt-[-20px] p-2 text-[32px] font-medium"
                  onClick={() => setViewDetailsModalOpen(false)}
                >
                  X
                </Button>
              </div>
            </div>
            <hr />
            <div className="space-y-6 p-2">
              {/* User Information */}
              <div>
                <h3 className="mb-3 text-sm font-semibold">User Information</h3>

                <div className="space-y-2 rounded-lg border p-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Name:</span>
                    <span className="text-sm font-medium">
                      {selectedBooking.user?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Email:
                    </span>
                    <span className="text-sm font-medium">
                      {selectedBooking.user?.email}
                    </span>
                  </div>
                </div>
              </div>

              {/* Booking Information */}
              <div>
                <h3 className="mb-3 text-sm font-semibold">
                  Booking Information
                </h3>

                <div className="space-y-2 rounded-lg border p-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Booking ID:
                    </span>
                    <span className="font-mono text-sm font-medium">
                      {selectedBooking.id}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Pickup Location:
                    </span>
                    <span className="max-w-[60%] text-right text-sm font-medium">
                      {selectedBooking.pickupLocation}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Drop Location:
                    </span>
                    <span className="max-w-[60%] text-right text-sm font-medium">
                      {selectedBooking.dropLocation}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Date:</span>
                    <span className="text-sm font-medium">
                      {formatDate(selectedBooking.bookingDate)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Time:</span>
                    <span className="text-sm font-medium">
                      {selectedBooking.bookingTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div>
                <h3 className="mb-3 text-sm font-semibold">
                  Payment Information
                </h3>
                <div className="space-y-2 rounded-lg border p-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Amount:
                    </span>
                    <span className="text-lg font-semibold">
                      {formatAmount(selectedBooking.amount)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Payment Status:
                    </span>
                    <Badge
                      variant={
                        selectedBooking.paymentStatus === "succeeded"
                          ? "success"
                          : selectedBooking.paymentStatus === "failed"
                            ? "destructive"
                            : "secondary"
                      }
                    >
                      {selectedBooking.paymentStatus.charAt(0).toUpperCase() +
                        selectedBooking.paymentStatus.slice(1)}
                    </Badge>
                  </div>
                  {selectedBooking.stripePaymentIntentId && (
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Payment Intent ID:
                      </span>
                      <span className="font-mono text-sm font-medium">
                        {selectedBooking.stripePaymentIntentId}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Timestamps */}
              <div>
                <h3 className="mb-3 text-sm font-semibold">Timestamps</h3>
                <div className="space-y-2 rounded-lg border p-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Created At:
                    </span>
                    <span className="text-sm font-medium">
                      {formatDate(selectedBooking.createdAt)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Updated At:
                    </span>
                    <span className="text-sm font-medium">
                      {formatDate(selectedBooking.updatedAt)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <Button onClick={() => setViewDetailsModalOpen(false)}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};
