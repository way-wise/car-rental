import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ProfileSkleton = () => {
  return (
    <div className="container mx-auto min-h-screen max-w-6xl px-4 py-8">
      {/* Profile Header Skeleton */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
            {/* Avatar Skeleton */}
            <div className="relative">
              <Skeleton className="h-32 w-32 rounded-full" />
            </div>

            {/* Profile Info Skeleton */}
            <div className="flex flex-1 flex-col items-center gap-2 sm:items-start">
              <div className="flex items-center gap-2">
                <Skeleton className="h-8 w-48" />
                <Skeleton className="h-6 w-16 rounded-full" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-48" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>

            {/* Action Buttons Skeleton */}
            <div className="flex flex-col gap-2 sm:flex-row">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-36" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bookings History Table Skeleton */}
      <Card className="mt-6">
        <CardContent className="p-6">
          <div className="mb-4">
            <Skeleton className="h-6 w-32" />
          </div>

          {/* Table Header Skeleton */}
          <div className="mb-4 grid grid-cols-6 gap-4 border-b pb-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
          </div>

          {/* Table Rows Skeleton */}
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="grid grid-cols-6 gap-4 py-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-28" />
                <div className="space-y-1">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-16" />
                </div>
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-4 w-20" />
              </div>
            ))}
          </div>

          {/* Pagination Skeleton */}
          <div className="mt-6 flex items-center justify-between">
            <Skeleton className="h-4 w-32" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-8 w-8" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSkleton;
