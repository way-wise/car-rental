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
                  notes: {
                    contains: query.search,
                    mode: "insensitive",
                  },
                },
                {
                  currentOdometer: {
                    equals: parseFloat(query.search) || undefined,
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
                  notes: {
                    contains: query.search,
                    mode: "insensitive",
                  },
                },
                {
                  currentOdometer: {
                    equals: parseFloat(query.search) || undefined,
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
    currentOdometer: number;
    previousOdometer: number;
    fuelVolume: number;
    fuelUnitPrice: number;
    notes?: string;
  }) => {
    const {
      currentOdometer,
      previousOdometer,
      fuelVolume,
      fuelUnitPrice,
      notes,
    } = data;

    // Validate that current odometer is greater than previous odometer
    if (currentOdometer <= previousOdometer) {
      throw new HTTPException(400, {
        message: "Current odometer must be greater than previous odometer",
      });
    }

    // Calculate fuel cost and mileage
    const fuelCost = fuelVolume * fuelUnitPrice;
    const mileage = currentOdometer - previousOdometer;

    const record = await prisma.maintenance.create({
      data: {
        id: ulid(),
        currentOdometer,
        previousOdometer,
        fuelVolume,
        fuelUnitPrice,
        fuelCost,
        mileage,
        notes: notes || null,
      },
    });

    return record;
  },

  // Update a maintenance record
  updateMaintenance: async (
    id: string,
    data: {
      currentOdometer?: number;
      previousOdometer?: number;
      fuelVolume?: number;
      fuelUnitPrice?: number;
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

    // Get updated values or keep existing ones
    const currentOdometer =
      data.currentOdometer ?? existingRecord.currentOdometer;
    const previousOdometer =
      data.previousOdometer ?? existingRecord.previousOdometer;
    const fuelVolume = data.fuelVolume ?? existingRecord.fuelVolume;
    const fuelUnitPrice = data.fuelUnitPrice ?? existingRecord.fuelUnitPrice;

    // Validate that current odometer is greater than previous odometer
    if (currentOdometer <= previousOdometer) {
      throw new HTTPException(400, {
        message: "Current odometer must be greater than previous odometer",
      });
    }

    // Recalculate fuel cost and mileage
    const fuelCost = fuelVolume * fuelUnitPrice;
    const mileage = currentOdometer - previousOdometer;

    const record = await prisma.maintenance.update({
      where: { id },
      data: {
        currentOdometer,
        previousOdometer,
        fuelVolume,
        fuelUnitPrice,
        fuelCost,
        mileage,
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
      totalFuelCostResult,
      totalMileageResult,
      avgFuelPriceResult,
    ] = await prisma.$transaction([
      // Total maintenance records count
      prisma.maintenance.count(),

      // Total fuel cost
      prisma.maintenance.aggregate({
        _sum: {
          fuelCost: true,
        },
      }),

      // Total mileage
      prisma.maintenance.aggregate({
        _sum: {
          mileage: true,
        },
      }),

      // Average fuel price
      prisma.maintenance.aggregate({
        _avg: {
          fuelUnitPrice: true,
        },
      }),
    ]);

    return {
      totalRecords,
      totalFuelCost: totalFuelCostResult._sum.fuelCost || 0,
      totalMileage: totalMileageResult._sum.mileage || 0,
      avgFuelPrice: avgFuelPriceResult._avg.fuelUnitPrice || 0,
    };
  },
};
