import prisma from "@/lib/prisma";

export interface DashboardOverview {
  totalBookings: number;
  activeBookings: number;
  completedBookings: number;
  canceledBookings: number;
  totalRevenue: number;
  pendingRevenue: number;
  totalUsers: number;
  newUsersThisMonth: number;
  totalFuelCost: number;
  totalMaintenanceCost: number;
  averageMileage: number;
  recentBookings: RecentBooking[];
  bookingsByStatus: BookingStatusCount[];
  revenueByMonth: RevenueByMonth[];
}

export interface RecentBooking {
  id: string;
  pickupLocation: string;
  dropLocation: string;
  bookingDate: Date;
  amount: number;
  paymentStatus: string;
  bookingStatus: string;
  user: {
    id: string;
    name: string;
    email: string;
    image: string | null;
  };
}

export interface BookingStatusCount {
  status: string;
  count: number;
}

export interface RevenueByMonth {
  month: string;
  revenue: number;
}

export const dashboardService = {
  getDashboardOverview: async (): Promise<DashboardOverview> => {
    // Get current date and date calculations
    const now = new Date();
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 5, 1);

    // Total bookings
    const totalBookings = await prisma.bookings.count();

    // Active bookings (upcoming + ongoing)
    const activeBookings = await prisma.bookings.count({
      where: {
        bookingStatus: {
          in: ["upcoming", "ongoing"],
        },
      },
    });

    // Completed bookings
    const completedBookings = await prisma.bookings.count({
      where: {
        bookingStatus: "completed",
      },
    });

    // Canceled bookings
    const canceledBookings = await prisma.bookings.count({
      where: {
        bookingStatus: "canceled",
      },
    });

    // Total revenue (from succeeded payments)
    const revenueResult = await prisma.bookings.aggregate({
      where: {
        paymentStatus: "succeeded",
      },
      _sum: {
        amount: true,
      },
    });
    const totalRevenue = revenueResult._sum.amount || 0;

    // Pending revenue
    const pendingRevenueResult = await prisma.bookings.aggregate({
      where: {
        paymentStatus: "pending",
      },
      _sum: {
        amount: true,
      },
    });
    const pendingRevenue = pendingRevenueResult._sum.amount || 0;

    // Total users
    const totalUsers = await prisma.users.count();

    // New users this month
    const newUsersThisMonth = await prisma.users.count({
      where: {
        createdAt: {
          gte: firstDayOfMonth,
        },
      },
    });

    // Total fuel cost
    const fuelCostResult = await prisma.fuelReports.aggregate({
      _sum: {
        fuelCost: true,
      },
    });
    const totalFuelCost = fuelCostResult._sum.fuelCost || 0;

    // Total maintenance cost
    const maintenanceCostResult = await prisma.maintenance.aggregate({
      _sum: {
        cost: true,
      },
    });
    const totalMaintenanceCost = maintenanceCostResult._sum.cost || 0;

    // Average mileage
    const mileageResult = await prisma.fuelReports.aggregate({
      _sum: {
        mileage: true,
      },
    });
    const averageMileage = mileageResult._sum.mileage || 0;

    // Recent bookings (last 10)
    const recentBookings = await prisma.bookings.findMany({
      take: 10,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
      },
    });

    // Bookings by status
    const bookingsByStatusRaw = await prisma.bookings.groupBy({
      by: ["bookingStatus"],
      _count: {
        bookingStatus: true,
      },
    });

    const bookingsByStatus: BookingStatusCount[] = bookingsByStatusRaw.map(
      (item) => ({
        status: item.bookingStatus,
        count: item._count.bookingStatus,
      }),
    );

    // Revenue by month (last 6 months)
    const revenueByMonthRaw = await prisma.bookings.groupBy({
      by: ["bookingDate"],
      where: {
        paymentStatus: "succeeded",
        bookingDate: {
          gte: sixMonthsAgo,
        },
      },
      _sum: {
        amount: true,
      },
      orderBy: {
        bookingDate: "asc",
      },
    });

    // Aggregate revenue by month
    const revenueMap = new Map<string, number>();
    revenueByMonthRaw.forEach((item) => {
      const month = new Date(item.bookingDate).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      });
      const currentAmount = revenueMap.get(month) || 0;
      revenueMap.set(month, currentAmount + (item._sum.amount || 0));
    });

    const revenueByMonth: RevenueByMonth[] = Array.from(
      revenueMap.entries(),
    ).map(([month, revenue]) => ({
      month,
      revenue,
    }));

    return {
      totalBookings,
      activeBookings,
      completedBookings,
      canceledBookings,
      totalRevenue,
      pendingRevenue,
      totalUsers,
      newUsersThisMonth,
      totalFuelCost,
      totalMaintenanceCost,
      averageMileage,
      recentBookings,
      bookingsByStatus,
      revenueByMonth,
    };
  },
};
