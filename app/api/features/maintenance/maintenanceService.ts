import { getPaginationQuery } from "@/app/api/lib/pagination";
import prisma from "@/lib/prisma";
import type { PaginationQuery } from "@/schema/paginationSchema";
import { HTTPException } from "hono/http-exception";
import { ulid } from "ulid";

export const maintenanceService = {
  // Get all maintenance records with pagination and search
  getMaintenanceRecords: async (query: PaginationQuery) => {
    const { skip, take, page, limit } = getPaginationQuery(query);

    const [records, total] = await prisma.$transaction([
      prisma.maintenance.findMany({
        where: query.search
          ? {
              OR: [
                {
                  maintenanceType: {
                    contains: query.search,
                    mode: "insensitive",
                  },
                },
                {
                  details: {
                    contains: query.search,
                    mode: "insensitive",
                  },
                },
                {
                  serviceProvider: {
                    contains: query.search,
                    mode: "insensitive",
                  },
                },
                {
                  notes: {
                    contains: query.search,
                    mode: "insensitive",
                  },
                },
              ],
            }
          : {},
        skip,
        take,
        orderBy: {
          createdAt: "desc",
        },
      }),
      prisma.maintenance.count({
        where: query.search
          ? {
              OR: [
                {
                  maintenanceType: {
                    contains: query.search,
                    mode: "insensitive",
                  },
                },
                {
                  details: {
                    contains: query.search,
                    mode: "insensitive",
                  },
                },
                {
                  serviceProvider: {
                    contains: query.search,
                    mode: "insensitive",
                  },
                },
                {
                  notes: {
                    contains: query.search,
                    mode: "insensitive",
                  },
                },
              ],
            }
          : {},
      }),
    ]);

    return {
      data: records,
      meta: {
        page,
        limit,
        total,
      },
    };
  },

  // Get a single maintenance record by ID
  getMaintenanceById: async (id: string) => {
    const record = await prisma.maintenance.findUnique({
      where: { id },
    });

    if (!record) {
      throw new HTTPException(404, {
        message: "Maintenance record not found",
      });
    }

    return record;
  },

  // Create a new maintenance record
  createMaintenance: async (data: {
    maintenanceType: string;
    cost: number;
    odometerReading: number;
    details: string;
    serviceProvider?: string;
    nextServiceDue?: string;
    notes?: string;
  }) => {
    const {
      maintenanceType,
      cost,
      odometerReading,
      details,
      serviceProvider,
      nextServiceDue,
      notes,
    } = data;

    const record = await prisma.maintenance.create({
      data: {
        id: ulid(),
        maintenanceType,
        cost,
        odometerReading,
        details,
        serviceProvider: serviceProvider || null,
        nextServiceDue: nextServiceDue || null,
        notes: notes || null,
      },
    });

    return record;
  },

  // Update a maintenance record
  updateMaintenance: async (
    id: string,
    data: {
      maintenanceType?: string;
      cost?: number;
      odometerReading?: number;
      details?: string;
      serviceProvider?: string;
      nextServiceDue?: string;
      notes?: string;
    },
  ) => {
    const existingRecord = await prisma.maintenance.findUnique({
      where: { id },
    });

    if (!existingRecord) {
      throw new HTTPException(404, {
        message: "Maintenance record not found",
      });
    }

    const record = await prisma.maintenance.update({
      where: { id },
      data: {
        maintenanceType: data.maintenanceType ?? existingRecord.maintenanceType,
        cost: data.cost ?? existingRecord.cost,
        odometerReading: data.odometerReading ?? existingRecord.odometerReading,
        details: data.details ?? existingRecord.details,
        serviceProvider:
          data.serviceProvider !== undefined
            ? data.serviceProvider
            : existingRecord.serviceProvider,
        nextServiceDue:
          data.nextServiceDue !== undefined
            ? data.nextServiceDue
            : existingRecord.nextServiceDue,
        notes: data.notes !== undefined ? data.notes : existingRecord.notes,
      },
    });

    return record;
  },

  // Delete a maintenance record
  deleteMaintenance: async (id: string) => {
    const record = await prisma.maintenance.delete({
      where: { id },
    });

    return record;
  },

  // Get maintenance statistics
  getMaintenanceStats: async () => {
    const [
      totalRecords,
      totalCostResult,
      avgCostResult,
      maintenanceTypesResult,
    ] = await prisma.$transaction([
      // Total maintenance records count
      prisma.maintenance.count(),

      // Total maintenance cost
      prisma.maintenance.aggregate({
        _sum: {
          cost: true,
        },
      }),

      // Average maintenance cost
      prisma.maintenance.aggregate({
        _avg: {
          cost: true,
        },
      }),

      // Count by maintenance type
      prisma.maintenance.groupBy({
        by: ["maintenanceType"],
        _count: {
          maintenanceType: true,
        },
        orderBy: {
          _count: {
            maintenanceType: "desc",
          },
        },
        take: 5,
      }),
    ]);

    return {
      totalRecords,
      totalCost: totalCostResult._sum.cost || 0,
      avgCost: avgCostResult._avg.cost || 0,
      maintenanceTypes: maintenanceTypesResult,
    };
  },
};
