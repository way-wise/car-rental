"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useDashboard } from "@/hooks/useDashboard";
import { type auth } from "@/lib/auth";
import { formatCurrency } from "@/lib/date-format";
import {
  CalendarCheck,
  CalendarClock,
  CalendarDays,
  CalendarX,
  CircleDollarSign,
  Clock,
  Droplet,
  Gauge,
  Users,
  Wrench,
} from "lucide-react";
import Image from "next/image";

type Session = typeof auth.$Infer.Session;

interface DashboardOverviewProps {
  session: Session;
}

const DashboardOverview = ({ session }: DashboardOverviewProps) => {
  const { data, isLoading, error } = useDashboard();

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>
          <p className="text-muted-foreground">
            Welcome back, {session?.user?.name}
          </p>
        </div>

        {/* Stats Cards Loading */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <Skeleton className="mb-2 h-4 w-24" />
                <Skeleton className="h-8 w-20" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Bookings Loading */}
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-40" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-16 w-full" />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>
          <p className="text-muted-foreground">
            Welcome back, {session?.user?.name}
          </p>
        </div>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-red-500">Error loading dashboard data</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Welcome back, {session?.user?.name}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Total Bookings */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Bookings
                </p>
                <p className="text-2xl font-bold">{data?.totalBookings || 0}</p>
              </div>
              <CalendarDays className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        {/* Active Bookings */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Active Bookings
                </p>
                <p className="text-2xl font-bold">
                  {data?.activeBookings || 0}
                </p>
              </div>
              <CalendarClock className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        {/* Completed Bookings */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Completed
                </p>
                <p className="text-2xl font-bold">
                  {data?.completedBookings || 0}
                </p>
              </div>
              <CalendarCheck className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        {/* Canceled Bookings */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Canceled
                </p>
                <p className="text-2xl font-bold">
                  {data?.canceledBookings || 0}
                </p>
              </div>
              <CalendarX className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        {/* Total Revenue */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Revenue
                </p>
                <p className="text-2xl font-bold">
                  {formatCurrency(data?.totalRevenue || 0)}
                </p>
              </div>
              <CircleDollarSign className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        {/* Pending Revenue */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Pending Revenue
                </p>
                <p className="text-2xl font-bold">
                  {formatCurrency(data?.pendingRevenue || 0)}
                </p>
              </div>
              <Clock className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        {/* Total Users */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Users
                </p>
                <p className="text-2xl font-bold">{data?.totalUsers || 0}</p>
                <p className="text-xs text-muted-foreground">
                  +{data?.newUsersThisMonth || 0} this month
                </p>
              </div>
              <Users className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        {/* Average Mileage */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Mileage
                </p>
                <p className="text-2xl font-bold">
                  {data?.averageMileage?.toFixed(2) || 0}
                </p>
                <p className="text-xs text-muted-foreground">km</p>
              </div>
              <Gauge className="h-8 w-8 text-indigo-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Secondary Stats */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Fuel Reports */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Fuel Cost
                </p>
                <p className="text-2xl font-bold">
                  ${data?.totalFuelCost || 0}
                </p>
              </div>
              <Droplet className="h-8 w-8 text-cyan-500" />
            </div>
          </CardContent>
        </Card>

        {/* Maintenance Cost */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Maintenance Cost
                </p>
                <p className="text-2xl font-bold">
                  ${data?.totalMaintenanceCost || 0}
                </p>
              </div>
              <Wrench className="h-8 w-8 text-amber-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Bookings */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Bookings</CardTitle>
          <CardDescription>Latest booking activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data?.recentBookings?.length === 0 ? (
              <p className="text-center text-muted-foreground">
                No bookings yet
              </p>
            ) : (
              data?.recentBookings?.map((booking) => (
                <div
                  key={booking.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="flex items-center gap-4">
                    {booking.user.image ? (
                      <Image
                        src={booking.user.image}
                        alt={booking.user.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <span className="text-sm font-semibold">
                          {booking.user.name[0]}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="font-medium">{booking.user.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {booking.pickupLocation} → {booking.dropLocation}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(booking.bookingDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-semibold">
                        {formatCurrency(booking.amount)}
                      </p>
                      <div className="flex gap-2">
                        <Badge
                          variant={
                            booking.paymentStatus === "succeeded"
                              ? "default"
                              : booking.paymentStatus === "pending"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {booking.paymentStatus}
                        </Badge>
                        <Badge
                          variant={
                            booking.bookingStatus === "completed"
                              ? "default"
                              : booking.bookingStatus === "ongoing"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {booking.bookingStatus}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* Bookings by Status */}
      {data?.bookingsByStatus && data.bookingsByStatus.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Bookings by Status</CardTitle>
            <CardDescription>Distribution of booking statuses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              {data.bookingsByStatus.map((item) => (
                <div
                  key={item.status}
                  className="rounded-lg border p-4 text-center"
                >
                  <p className="text-sm font-medium text-muted-foreground capitalize">
                    {item.status}
                  </p>
                  <p className="text-2xl font-bold">{item.count}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DashboardOverview;
