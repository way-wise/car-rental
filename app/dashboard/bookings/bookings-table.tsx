"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
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

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 600);

    return () => clearTimeout(timer);
  }, [search]);

  // Get bookings data
  const url = `/api/bookings?page=${pagination.pageIndex}&limit=${pagination.pageSize}${debouncedSearch.trim() ? `&search=${encodeURIComponent(debouncedSearch.trim())}` : ""}`;
  const { isValidating, data } = useSWR(url);
  console.log(data);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
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
    } catch (error: any) {
      toast.error(error.message || "Failed to delete booking");
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
    } catch (error: any) {
      toast.error(error.message || "Failed to update status");
    }
  };

  // Format amount from cents to dollars
  const formatAmount = (cents: number) => {
    return `$${(cents / 100).toFixed(2)}`;
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
      <div className="rounded-xl border bg-card p-6">
        <div className="flex items-center justify-between gap-4 pb-6">
          <Input
            type="search"
            placeholder="Search location, user, status..."
            value={search}
            onChange={handleSearchChange}
            className="max-w-xs"
          />
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
