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
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useSWR, { mutate } from "swr";

export const BookingsTable = () => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [updateStatusModalOpen, setUpdateStatusModalOpen] = useState(false);
  const [bookingId, setBookingId] = useState<string | undefined>("");
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
                <DropdownMenuItem asChild>
                  <Link href={`/dashboard/bookings/${id}`}>
                    <Eye />
                    <span>View Details</span>
                  </Link>
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
    </>
  );
};
