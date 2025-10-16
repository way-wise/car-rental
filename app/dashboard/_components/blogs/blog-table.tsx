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
import { Blog } from "@/schema/blogSchema";
import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import { Edit, Eye, MoreVertical, Plus, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import useSWR, { mutate } from "swr";

export const BlogTable = () => {
  const router = useRouter();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [blogId, setBlogId] = useState<string | undefined>("");
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10,
  });

  // Search and filter states
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  // Build query parameters
  const queryParams = new URLSearchParams({
    page: pagination.pageIndex.toString(),
    limit: pagination.pageSize.toString(),
    ...(debouncedSearch && { search: debouncedSearch }),
    ...(statusFilter !== "all" && { status: statusFilter }),
  });

  // Fetch blogs data
  const { data: blogsData, isLoading } = useSWR(
    `/api/blogs?${queryParams.toString()}`,
    async (url: string) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }
      return response.json();
    },
  );

  // Handle create blog navigation
  const handleCreateBlog = () => {
    router.push("/dashboard/blogs/create");
  };

  // Handle edit blog navigation
  const handleEditBlog = (blogId: string) => {
    router.push(`/dashboard/blogs/${blogId}/edit`);
  };

  // Handle delete blog
  const handleDeleteBlog = async () => {
    if (!blogId) return;

    try {
      const response = await fetch(`/api/blogs/${blogId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to delete blog");
      }

      toast.success("Blog deleted successfully");
      setDeleteModalOpen(false);
      setSelectedBlog(null);
      mutate(`/api/blogs?${queryParams.toString()}`);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to delete blog";
      toast.error(errorMessage);
    }
  };

  // Handle status update (currently unused)
  // const handleStatusUpdate = async (newStatus: string) => {
  //   if (!blogId) return;

  //   try {
  //     const response = await fetch(`/api/blogs/${blogId}/status`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ status: newStatus }),
  //     });

  //     if (!response.ok) {
  //       const error = await response.json();
  //       throw new Error(error.message || "Failed to update status");
  //     }

  //     toast.success("Status updated successfully");
  //     mutate(`/api/blogs?${queryParams.toString()}`);
  //   } catch (error: unknown) {
  //     const errorMessage = error instanceof Error ? error.message : "Failed to update status";
  //     toast.error(errorMessage);
  //   }
  // };

  // Table columns
  const columns: ColumnDef<Blog>[] = [
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => {
        const title = row.getValue("title") as string;
        return (
          <div className="max-w-[300px] truncate font-medium">{title}</div>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        const statusColors = {
          draft: "bg-gray-100 text-gray-800",
          published: "bg-green-100 text-green-800",
          archived: "bg-red-100 text-red-800",
        };
        return (
          <Badge className={statusColors[status as keyof typeof statusColors]}>
            {status}
          </Badge>
        );
      },
    },
    {
      accessorKey: "author",
      header: "Author",
      cell: ({ row }) => {
        const author = row.original.author;
        return (
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
              {author?.name?.charAt(0) || author?.email?.charAt(0) || "?"}
            </div>
            <span className="text-sm">
              {author?.name || author?.email || "Unknown"}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "tags",
      header: "Tags",
      cell: ({ row }) => {
        const tags = row.getValue("tags") as string[];
        return (
          <div className="flex flex-wrap gap-1">
            {tags?.slice(0, 2).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {tags?.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{tags.length - 2}
              </Badge>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "createdAt",
      header: "Created",
      cell: ({ row }) => {
        const date = row.getValue("createdAt") as string;
        return <span className="text-sm">{formatDate(date)}</span>;
      },
    },
    {
      accessorKey: "publishedAt",
      header: "Published",
      cell: ({ row }) => {
        const date = row.getValue("publishedAt") as string;
        return (
          <span className="text-sm">
            {date ? formatDate(date) : "Not published"}
          </span>
        );
      },
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const blog = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => {
                  setSelectedBlog(blog);
                  setViewModalOpen(true);
                }}
              >
                <Eye className="mr-2 h-4 w-4" />
                View
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => blog.id && handleEditBlog(blog.id)}
              >
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setSelectedBlog(blog);
                  setBlogId(blog.id);
                  setDeleteModalOpen(true);
                }}
                className="text-red-600"
              >
                <Trash className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Blog Management</h2>
          <p className="text-gray-600">Manage your blog posts</p>
        </div>
        <Button onClick={handleCreateBlog}>
          <Plus className="mr-2 h-4 w-4" />
          Create Blog
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <Input
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Data Table */}
      <DataTable
        columns={columns}
        data={
          blogsData || {
            data: [],
            meta: { total: 0, totalPages: 0, page: 1, limit: 10 },
          }
        }
        pagination={pagination}
        onPaginationChange={setPagination}
        isPending={isLoading}
      />

      {/* View Blog Modal */}
      <Modal
        isOpen={viewModalOpen}
        onClose={() => setViewModalOpen(false)}
        title="Blog Details"
        isPending={false}
      >
        {selectedBlog && (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">{selectedBlog.title}</h3>
              <div className="mt-2 flex items-center gap-2">
                <Badge
                  className={
                    selectedBlog.status === "published"
                      ? "bg-green-100 text-green-800"
                      : selectedBlog.status === "draft"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-red-100 text-red-800"
                  }
                >
                  {selectedBlog.status}
                </Badge>
                <span className="text-sm text-gray-600">
                  by {selectedBlog.author?.name || selectedBlog.author?.email}
                </span>
              </div>
            </div>

            {selectedBlog.excerpt && (
              <div>
                <h4 className="font-medium">Excerpt</h4>
                <p className="text-gray-600">{selectedBlog.excerpt}</p>
              </div>
            )}

            <div>
              <h4 className="font-medium">Content</h4>
              <div className="mt-2 max-h-60 overflow-y-auto rounded border p-3">
                <p className="whitespace-pre-wrap">{selectedBlog.content}</p>
              </div>
            </div>

            {selectedBlog.tags && selectedBlog.tags.length > 0 && (
              <div>
                <h4 className="font-medium">Tags</h4>
                <div className="mt-2 flex flex-wrap gap-1">
                  {selectedBlog.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Created:</span>
                <p>{formatDate(selectedBlog.createdAt as Date)}</p>
              </div>
              <div>
                <span className="font-medium">Updated:</span>
                <p>{formatDate(selectedBlog.updatedAt as Date)}</p>
              </div>
              {selectedBlog.publishedAt && (
                <div>
                  <span className="font-medium">Published:</span>
                  <p>{formatDate(selectedBlog.publishedAt as Date)}</p>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setViewModalOpen(false)}>
                Close
              </Button>
              <Button
                onClick={() => {
                  setViewModalOpen(false);
                  selectedBlog.id && handleEditBlog(selectedBlog.id);
                }}
              >
                Edit Blog
              </Button>
            </div>
          </div>
        )}
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        title="Delete Blog"
        isPending={false}
      >
        <div className="space-y-4">
          <p>
            Are you sure you want to delete this blog? This action cannot be
            undone.
          </p>
          {selectedBlog && (
            <div className="rounded bg-gray-50 p-3">
              <h4 className="font-medium">{selectedBlog.title}</h4>
              <p className="text-sm text-gray-600">
                by {selectedBlog.author?.name || selectedBlog.author?.email}
              </p>
            </div>
          )}
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setDeleteModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteBlog}>
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
