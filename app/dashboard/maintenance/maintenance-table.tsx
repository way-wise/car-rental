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
import { Maintenance } from "@/schema/maintenanceSchema";
import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import { Edit, Eye, MoreVertical, Plus, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useSWR, { mutate } from "swr";

export const MaintenanceTable = () => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [viewDetailsModalOpen, setViewDetailsModalOpen] = useState(false);
  const [maintenanceId, setMaintenanceId] = useState<string | undefined>("");
  const [selectedMaintenance, setSelectedMaintenance] =
    useState<Maintenance | null>(null);
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

  // Get maintenance data
  const url = `/api/maintenance?page=${pagination.pageIndex}&limit=${pagination.pageSize}${debouncedSearch.trim() ? `&search=${encodeURIComponent(debouncedSearch.trim())}` : ""}`;
  const { isValidating, data } = useSWR(url);

  // Get maintenance statistics
  const { data: stats } = useSWR("/api/maintenance/stats");

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
      maintenanceType: "",
      cost: "",
      odometerReading: "",
      details: "",
      serviceProvider: "",
      nextServiceDue: "",
      notes: "",
    },
  });

  // Update Form
  const updateForm = useForm({
    defaultValues: {
      maintenanceType: "",
      cost: "",
      odometerReading: "",
      details: "",
      serviceProvider: "",
      nextServiceDue: "",
      notes: "",
    },
  });

  // Delete Form
  const deleteForm = useForm();

  // Handle Create Maintenance
  const handleCreateMaintenance = async (values: any) => {
    try {
      const response = await fetch("/api/maintenance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          maintenanceType: values.maintenanceType,
          cost: parseFloat(values.cost),
          odometerReading: parseFloat(values.odometerReading),
          details: values.details,
          serviceProvider: values.serviceProvider || undefined,
          nextServiceDue: values.nextServiceDue || undefined,
          notes: values.notes || undefined,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        toast.error(result.error || "Failed to create maintenance record");
        return;
      }

      toast.success("Maintenance record created successfully");
      setCreateModalOpen(false);
      createForm.reset();
      mutate(url);
      mutate("/api/maintenance/stats");
    } catch (error: any) {
      toast.error(error.message || "Failed to create maintenance record");
    }
  };

  // Handle Update Maintenance
  const handleUpdateMaintenance = async (values: any) => {
    try {
      const response = await fetch(`/api/maintenance/${maintenanceId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          maintenanceType: values.maintenanceType || undefined,
          cost: values.cost ? parseFloat(values.cost) : undefined,
          odometerReading: values.odometerReading
            ? parseFloat(values.odometerReading)
            : undefined,
          details: values.details || undefined,
          serviceProvider: values.serviceProvider || undefined,
          nextServiceDue: values.nextServiceDue || undefined,
          notes: values.notes || undefined,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        toast.error(result.error || "Failed to update maintenance record");
        return;
      }

      toast.success("Maintenance record updated successfully");
      setUpdateModalOpen(false);
      updateForm.reset();
      mutate(url);
      mutate("/api/maintenance/stats");
    } catch (error: any) {
      toast.error(error.message || "Failed to update maintenance record");
    }
  };

  // Handle Delete Maintenance
  const handleDeleteMaintenance = async () => {
    try {
      const response = await fetch(`/api/maintenance/${maintenanceId}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        toast.error(result.error || "Failed to delete maintenance record");
        return;
      }

      toast.success("Maintenance record deleted successfully");
      setDeleteModalOpen(false);
      mutate(url);
      mutate("/api/maintenance/stats");
    } catch (error: any) {
      toast.error(error.message || "Failed to delete maintenance record");
    }
  };

  // Format numbers
  const formatNumber = (num: number, decimals: number = 2) => {
    return num.toFixed(decimals);
  };

  // Get summary stats from backend
  const summaryStats = {
    totalRecords: stats?.totalRecords || 0,
    totalCost: stats?.totalCost || 0,
    avgCost: stats?.avgCost || 0,
    maintenanceTypes: stats?.maintenanceTypes || [],
  };

  // Table columns
  const columns: ColumnDef<Maintenance>[] = [
    {
      header: "Type",
      accessorKey: "maintenanceType",
      cell: ({ row }) => (
        <div className="font-medium">
          <Badge variant="outline">{row.original.maintenanceType}</Badge>
        </div>
      ),
    },
    {
      header: "Cost",
      accessorKey: "cost",
      cell: ({ row }) => (
        <div className="font-medium text-green-600">
          ${formatNumber(row.original.cost)}
        </div>
      ),
    },
    {
      header: "Odometer",
      accessorKey: "odometerReading",
      cell: ({ row }) => (
        <div>{formatNumber(row.original.odometerReading)} km</div>
      ),
    },
    {
      header: "Service Provider",
      accessorKey: "serviceProvider",
      cell: ({ row }) => <div>{row.original.serviceProvider || "N/A"}</div>,
    },
    {
      header: "Next Service",
      accessorKey: "nextServiceDue",
      cell: ({ row }) => <div>{row.original.nextServiceDue || "N/A"}</div>,
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
                    setSelectedMaintenance(row.original);
                    setViewDetailsModalOpen(true);
                  }}
                >
                  <Eye />
                  <span>View Details</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setMaintenanceId(id);
                    updateForm.setValue(
                      "maintenanceType",
                      row.original.maintenanceType,
                    );
                    updateForm.setValue("cost", row.original.cost.toString());
                    updateForm.setValue(
                      "odometerReading",
                      row.original.odometerReading.toString(),
                    );
                    updateForm.setValue("details", row.original.details);
                    updateForm.setValue(
                      "serviceProvider",
                      row.original.serviceProvider || "",
                    );
                    updateForm.setValue(
                      "nextServiceDue",
                      row.original.nextServiceDue || "",
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
                    setMaintenanceId(id);
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
        <h1 className="text-2xl font-medium">Maintenance Records</h1>
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

        {/* Total Cost */}
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Cost
              </p>
              <h3 className="mt-2 text-3xl font-bold">
                ${formatNumber(summaryStats.totalCost)}
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

        {/* Average Cost */}
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Average Cost
              </p>
              <h3 className="mt-2 text-3xl font-bold">
                ${formatNumber(summaryStats.avgCost)}
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Top Maintenance Type */}
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Top Type
              </p>
              <h3 className="mt-2 text-lg font-bold">
                {summaryStats.maintenanceTypes[0]?.maintenanceType || "N/A"}
              </h3>
              <p className="text-xs text-muted-foreground">
                {summaryStats.maintenanceTypes[0]?._count?.maintenanceType || 0}{" "}
                records
              </p>
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
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
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
            placeholder="Search maintenance type, details, provider..."
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

      {/* Create Maintenance Modal */}
      <Modal
        isOpen={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        title="Add Maintenance Record"
        isPending={createForm.formState.isSubmitting}
      >
        <Form {...createForm}>
          <form onSubmit={createForm.handleSubmit(handleCreateMaintenance)}>
            <FormFieldset disabled={createForm.formState.isSubmitting}>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={createForm.control}
                  name="maintenanceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Maintenance Type</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., Oil Change, Brake Service"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={createForm.control}
                  name="cost"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cost ($)</FormLabel>
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
                name="odometerReading"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Odometer Reading (km)</FormLabel>
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
                name="details"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Details</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe what was done..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={createForm.control}
                  name="serviceProvider"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Provider (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., AutoCare Center" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={createForm.control}
                  name="nextServiceDue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Next Service Due (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., 5000 km or 3 months"
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

      {/* Update Maintenance Modal */}
      <Modal
        isOpen={updateModalOpen}
        onClose={() => setUpdateModalOpen(false)}
        title="Update Maintenance Record"
        isPending={updateForm.formState.isSubmitting}
      >
        <Form {...updateForm}>
          <form onSubmit={updateForm.handleSubmit(handleUpdateMaintenance)}>
            <FormFieldset disabled={updateForm.formState.isSubmitting}>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={updateForm.control}
                  name="maintenanceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Maintenance Type</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., Oil Change, Brake Service"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={updateForm.control}
                  name="cost"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cost ($)</FormLabel>
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
                name="odometerReading"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Odometer Reading (km)</FormLabel>
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
                name="details"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Details</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe what was done..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={updateForm.control}
                  name="serviceProvider"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Provider (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., AutoCare Center" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={updateForm.control}
                  name="nextServiceDue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Next Service Due (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., 5000 km or 3 months"
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

      {/* Delete Maintenance Modal */}
      <Modal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        title="Delete Maintenance Record"
        isPending={deleteForm.formState.isSubmitting}
      >
        <Form {...deleteForm}>
          <form onSubmit={deleteForm.handleSubmit(handleDeleteMaintenance)}>
            <FormFieldset disabled={deleteForm.formState.isSubmitting}>
              <p className="text-muted-foreground">
                This action cannot be undone. This will permanently delete the
                maintenance record.
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

      {/* View Maintenance Details Modal */}
      <Modal
        isOpen={viewDetailsModalOpen}
        onClose={() => setViewDetailsModalOpen(false)}
        title=""
        isPending={false}
      >
        {selectedMaintenance && (
          <div>
            <div className="flex items-center justify-between pb-2">
              <h1 className="text-2xl font-medium">Maintenance Details</h1>
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
              {/* Basic Information */}
              <div>
                <h3 className="mb-3 text-sm font-semibold">
                  Basic Information
                </h3>
                <div className="space-y-2 rounded-lg border p-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Maintenance Type:
                    </span>
                    <span className="text-sm font-medium">
                      <Badge variant="outline">
                        {selectedMaintenance.maintenanceType}
                      </Badge>
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Cost:</span>
                    <span className="text-lg font-semibold text-green-600">
                      ${formatNumber(selectedMaintenance.cost)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Odometer Reading:
                    </span>
                    <span className="text-sm font-medium">
                      {formatNumber(selectedMaintenance.odometerReading)} km
                    </span>
                  </div>
                </div>
              </div>

              {/* Service Information */}
              <div>
                <h3 className="mb-3 text-sm font-semibold">
                  Service Information
                </h3>
                <div className="space-y-2 rounded-lg border p-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Service Provider:
                    </span>
                    <span className="text-sm font-medium">
                      {selectedMaintenance.serviceProvider || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Next Service Due:
                    </span>
                    <span className="text-sm font-medium">
                      {selectedMaintenance.nextServiceDue || "N/A"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div>
                <h3 className="mb-3 text-sm font-semibold">Details</h3>
                <div className="rounded-lg border p-4">
                  <p className="text-sm">{selectedMaintenance.details}</p>
                </div>
              </div>

              {/* Notes */}
              {selectedMaintenance.notes && (
                <div>
                  <h3 className="mb-3 text-sm font-semibold">Notes</h3>
                  <div className="rounded-lg border p-4">
                    <p className="text-sm">{selectedMaintenance.notes}</p>
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
                      {formatDate(selectedMaintenance.createdAt)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Updated At:
                    </span>
                    <span className="text-sm font-medium">
                      {formatDate(selectedMaintenance.updatedAt)}
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
