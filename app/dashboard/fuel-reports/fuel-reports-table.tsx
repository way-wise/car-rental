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
import { Textarea } from "@/components/ui/textarea";
import { formatDate } from "@/lib/date-format";
import { FuelReports } from "@/schema/fuelReportsSchema";
import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import { Edit, Eye, MoreVertical, Plus, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useSWR, { mutate } from "swr";

export const FuelReportsTable = () => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [viewDetailsModalOpen, setViewDetailsModalOpen] = useState(false);
  const [fuelReportsId, setFuelReportsId] = useState<string | undefined>("");
  const [selectedFuelReports, setSelectedFuelReports] =
    useState<FuelReports | null>(null);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10,
  });
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 600);

    return () => clearTimeout(timer);
  }, [search]);

  // Get fuel reports data
  const url = `/api/fuel-reports?page=${pagination.pageIndex}&limit=${pagination.pageSize}${debouncedSearch.trim() ? `&search=${encodeURIComponent(debouncedSearch.trim())}` : ""}`;
  const { isValidating, data } = useSWR(url);

  // Get fuel reports statistics
  const { data: stats } = useSWR("/api/fuel-reports/stats");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPagination({
      pageIndex: 1,
      pageSize: 10,
    });
  };

  // Create Form
  const createForm = useForm({
    defaultValues: {
      currentOdometer: "",
      previousOdometer: "",
      fuelVolume: "",
      fuelUnitPrice: "",
      notes: "",
    },
  });

  // Update Form
  const updateForm = useForm({
    defaultValues: {
      currentOdometer: "",
      previousOdometer: "",
      fuelVolume: "",
      fuelUnitPrice: "",
      notes: "",
    },
  });

  // Delete Form
  const deleteForm = useForm();

  // Handle Create Fuel Reports
  const handleCreateFuelReports = async (values: any) => {
    try {
      const response = await fetch("/api/fuel-reports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentOdometer: parseFloat(values.currentOdometer),
          previousOdometer: parseFloat(values.previousOdometer),
          fuelVolume: parseFloat(values.fuelVolume),
          fuelUnitPrice: parseFloat(values.fuelUnitPrice),
          notes: values.notes,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        toast.error(result.error || "Failed to create fuel reports record");
        return;
      }

      toast.success("Fuel reports record created successfully");
      setCreateModalOpen(false);
      createForm.reset();
      mutate(url);
      mutate("/api/fuel-reports/stats");
    } catch (error: any) {
      toast.error(error.message || "Failed to create fuel reports record");
    }
  };

  // Handle Update Fuel Reports
  const handleUpdateFuelReports = async (values: any) => {
    try {
      const response = await fetch(`/api/fuel-reports/${fuelReportsId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentOdometer: values.currentOdometer
            ? parseFloat(values.currentOdometer)
            : undefined,
          previousOdometer: values.previousOdometer
            ? parseFloat(values.previousOdometer)
            : undefined,
          fuelVolume: values.fuelVolume
            ? parseFloat(values.fuelVolume)
            : undefined,
          fuelUnitPrice: values.fuelUnitPrice
            ? parseFloat(values.fuelUnitPrice)
            : undefined,
          notes: values.notes,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        toast.error(result.error || "Failed to update fuel reports record");
        return;
      }

      toast.success("Fuel reports record updated successfully");
      setUpdateModalOpen(false);
      updateForm.reset();
      mutate(url);
      mutate("/api/fuel-reports/stats");
    } catch (error: any) {
      toast.error(error.message || "Failed to update fuel reports record");
    }
  };

  // Handle Delete Fuel Reports
  const handleDeleteFuelReports = async () => {
    try {
      const response = await fetch(`/api/fuel-reports/${fuelReportsId}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        toast.error(result.error || "Failed to delete fuel reports record");
        return;
      }

      toast.success("Fuel reports record deleted successfully");
      setDeleteModalOpen(false);
      mutate(url);
      mutate("/api/fuel-reports/stats");
    } catch (error: any) {
      toast.error(error.message || "Failed to delete fuel reports record");
    }
  };

  // Format numbers
  const formatNumber = (num: number, decimals: number = 2) => {
    return num.toFixed(decimals);
  };

  // Get summary stats from backend
  const summaryStats = {
    totalRecords: stats?.totalRecords || 0,
    totalFuelCost: stats?.totalFuelCost || 0,
    totalMileage: stats?.totalMileage || 0,
    avgFuelPrice: stats?.avgFuelPrice || 0,
  };

  // Table columns
  const columns: ColumnDef<FuelReports>[] = [
    {
      header: "Current Odometer",
      accessorKey: "currentOdometer",
      cell: ({ row }) => (
        <div className="font-medium">
          {formatNumber(row.original.currentOdometer)} km
        </div>
      ),
    },
    {
      header: "Previous Odometer",
      accessorKey: "previousOdometer",
      cell: ({ row }) => (
        <div>{formatNumber(row.original.previousOdometer)} km</div>
      ),
    },
    {
      header: "Mileage",
      accessorKey: "mileage",
      cell: ({ row }) => (
        <div>
          <Badge variant="secondary">
            {formatNumber(row.original.mileage)} km
          </Badge>
        </div>
      ),
    },
    {
      header: "Fuel Volume",
      accessorKey: "fuelVolume",
      cell: ({ row }) => <div>{formatNumber(row.original.fuelVolume)} L</div>,
    },
    {
      header: "Fuel Unit Price",
      accessorKey: "fuelUnitPrice",
      cell: ({ row }) => <div>${formatNumber(row.original.fuelUnitPrice)}</div>,
    },
    {
      header: "Fuel Cost",
      accessorKey: "fuelCost",
      cell: ({ row }) => (
        <div className="font-medium text-green-600">
          ${formatNumber(row.original.fuelCost)}
        </div>
      ),
    },
    {
      header: "Avg Mileage",
      accessorKey: "avgMileage",
      cell: ({ row }) => (
        <div className="font-medium text-blue-600">
          {formatNumber(row.original.mileage / row.original.fuelVolume)} km/L
        </div>
      ),
    },
    {
      header: "Date",
      accessorKey: "createdAt",
      cell: ({ row }) => formatDate(row.original.createdAt),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const { id } = row.original;

        return (
          <>
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger>
                <MoreVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem
                  onClick={() => {
                    setSelectedFuelReports(row.original);
                    setViewDetailsModalOpen(true);
                  }}
                >
                  <Eye />
                  <span>View Details</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setFuelReportsId(id);
                    updateForm.setValue(
                      "currentOdometer",
                      row.original.currentOdometer.toString(),
                    );
                    updateForm.setValue(
                      "previousOdometer",
                      row.original.previousOdometer.toString(),
                    );
                    updateForm.setValue(
                      "fuelVolume",
                      row.original.fuelVolume.toString(),
                    );
                    updateForm.setValue(
                      "fuelUnitPrice",
                      row.original.fuelUnitPrice.toString(),
                    );
                    updateForm.setValue("notes", row.original.notes || "");
                    setUpdateModalOpen(true);
                  }}
                >
                  <Edit />
                  <span>Edit</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  variant="destructive"
                  onClick={() => {
                    setFuelReportsId(id);
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
        <h1 className="text-2xl font-medium">Fuel Reports Records</h1>
        <Button onClick={() => setCreateModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Record
        </Button>
      </div>

      {/* Summary Stats Boxes */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total Records */}
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Records
              </p>
              <h3 className="mt-2 text-3xl font-bold">
                {summaryStats.totalRecords}
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

        {/* Total Fuel Cost */}
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Fuel Cost
              </p>
              <h3 className="mt-2 text-3xl font-bold">
                ${formatNumber(summaryStats.totalFuelCost)}
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

        {/* Total Mileage */}
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Mileage
              </p>
              <h3 className="mt-2 text-3xl font-bold">
                {formatNumber(summaryStats.totalMileage, 0)} km
              </h3>
            </div>
            <div className="rounded-full bg-purple-500/10 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Average Fuel Price */}
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Avg Fuel Price
              </p>
              <h3 className="mt-2 text-3xl font-bold">
                ${formatNumber(summaryStats.avgFuelPrice)}
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border bg-card p-6">
        <div className="flex items-center justify-between gap-4 pb-6">
          <Input
            type="search"
            placeholder="Search notes, odometer..."
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

      {/* Create Fuel Reports Modal */}
      <Modal
        isOpen={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        title="Add Fuel Reports Record"
        isPending={createForm.formState.isSubmitting}
      >
        <Form {...createForm}>
          <form onSubmit={createForm.handleSubmit(handleCreateFuelReports)}>
            <FormFieldset disabled={createForm.formState.isSubmitting}>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={createForm.control}
                  name="currentOdometer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Odometer (km)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          step="0.01"
                          placeholder="0.00"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={createForm.control}
                  name="previousOdometer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Previous Odometer (km)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          step="0.01"
                          placeholder="0.00"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={createForm.control}
                  name="fuelVolume"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fuel Volume (L)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          step="0.01"
                          placeholder="0.00"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={createForm.control}
                  name="fuelUnitPrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fuel Unit Price ($)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          step="0.01"
                          placeholder="0.00"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={createForm.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Notes (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Add any additional notes..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end gap-3 py-5">
                <Button
                  type="button"
                  onClick={() => {
                    setCreateModalOpen(false);
                    createForm.reset();
                  }}
                  variant="secondary"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  isLoading={createForm.formState.isSubmitting}
                >
                  Create
                </Button>
              </div>
            </FormFieldset>
          </form>
        </Form>
      </Modal>

      {/* Update Fuel Reports Modal */}
      <Modal
        isOpen={updateModalOpen}
        onClose={() => setUpdateModalOpen(false)}
        title="Update Fuel Reports Record"
        isPending={updateForm.formState.isSubmitting}
      >
        <Form {...updateForm}>
          <form onSubmit={updateForm.handleSubmit(handleUpdateFuelReports)}>
            <FormFieldset disabled={updateForm.formState.isSubmitting}>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={updateForm.control}
                  name="currentOdometer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Odometer (km)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          step="0.01"
                          placeholder="0.00"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={updateForm.control}
                  name="previousOdometer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Previous Odometer (km)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          step="0.01"
                          placeholder="0.00"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={updateForm.control}
                  name="fuelVolume"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fuel Volume (L)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          step="0.01"
                          placeholder="0.00"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={updateForm.control}
                  name="fuelUnitPrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fuel Unit Price ($)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          step="0.01"
                          placeholder="0.00"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={updateForm.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Notes (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Add any additional notes..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end gap-3 py-5">
                <Button
                  type="button"
                  onClick={() => {
                    setUpdateModalOpen(false);
                    updateForm.reset();
                  }}
                  variant="secondary"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  isLoading={updateForm.formState.isSubmitting}
                >
                  Update
                </Button>
              </div>
            </FormFieldset>
          </form>
        </Form>
      </Modal>

      {/* Delete Fuel Reports Modal */}
      <Modal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        title="Delete Fuel Reports Record"
        isPending={deleteForm.formState.isSubmitting}
      >
        <Form {...deleteForm}>
          <form onSubmit={deleteForm.handleSubmit(handleDeleteFuelReports)}>
            <FormFieldset disabled={deleteForm.formState.isSubmitting}>
              <p className="text-muted-foreground">
                This action cannot be undone. This will permanently delete the
                fuel reports record.
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

      {/* View Fuel Reports Details Modal */}
      <Modal
        isOpen={viewDetailsModalOpen}
        onClose={() => setViewDetailsModalOpen(false)}
        title=""
        isPending={false}
      >
        {selectedFuelReports && (
          <div>
            <div className="flex items-center justify-between pb-2">
              <h1 className="text-2xl font-medium">Fuel Reports Details</h1>
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
              {/* Odometer Information */}
              <div>
                <h3 className="mb-3 text-sm font-semibold">
                  Odometer Information
                </h3>
                <div className="space-y-2 rounded-lg border p-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Current Odometer:
                    </span>
                    <span className="text-sm font-medium">
                      {formatNumber(selectedFuelReports.currentOdometer)} km
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Previous Odometer:
                    </span>
                    <span className="text-sm font-medium">
                      {formatNumber(selectedFuelReports.previousOdometer)} km
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Mileage:
                    </span>
                    <span className="text-sm font-semibold text-blue-600">
                      {formatNumber(selectedFuelReports.mileage)} km
                    </span>
                  </div>
                </div>
              </div>

              {/* Fuel Information */}
              <div>
                <h3 className="mb-3 text-sm font-semibold">Fuel Information</h3>
                <div className="space-y-2 rounded-lg border p-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Fuel Volume:
                    </span>
                    <span className="text-sm font-medium">
                      {formatNumber(selectedFuelReports.fuelVolume)} L
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Fuel Unit Price:
                    </span>
                    <span className="text-sm font-medium">
                      ${formatNumber(selectedFuelReports.fuelUnitPrice)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Total Fuel Cost:
                    </span>
                    <span className="text-lg font-semibold text-green-600">
                      ${formatNumber(selectedFuelReports.fuelCost)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Notes */}
              {selectedFuelReports.notes && (
                <div>
                  <h3 className="mb-3 text-sm font-semibold">Notes</h3>
                  <div className="rounded-lg border p-4">
                    <p className="text-sm">{selectedFuelReports.notes}</p>
                  </div>
                </div>
              )}

              {/* Timestamps */}
              <div>
                <h3 className="mb-3 text-sm font-semibold">Timestamps</h3>
                <div className="space-y-2 rounded-lg border p-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Created At:
                    </span>
                    <span className="text-sm font-medium">
                      {formatDate(selectedFuelReports.createdAt)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Updated At:
                    </span>
                    <span className="text-sm font-medium">
                      {formatDate(selectedFuelReports.updatedAt)}
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
