import { getSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import type { UpdateSettings } from "@/schema/settingsSchema";
import { HTTPException } from "hono/http-exception";
import { ulid } from "ulid";

export const settingsService = {
  // Get current settings
  getSettings: async () => {
    let settings = await prisma.settings.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    });

    // If no settings exist, create default settings
    if (!settings) {
      settings = await prisma.settings.create({
        data: {
          id: ulid(),
          baseRate: 2.0,
          distanceChargePerMile: 1.2,
          timeChargePerMinute: 0.25,
          peakTimeMultiplier: 1.3,
          peakRanges: [
            { startHour: 5, endHour: 10 },
            { startHour: 22, endHour: 23 },
          ],
          holidayFeeEnabled: false,
          holidayFeeType: "flat",
          holidayFeeFlat: 3.0,
          holidayFeePercentage: 15.0,
          minimumPrice: 10.0,
        },
      });
    }

    return settings;
  },

  // Update settings (admin only)
  updateSettings: async (data: UpdateSettings) => {
    const session = await getSession();

    if (!session?.user?.id) {
      throw new HTTPException(401, {
        message: "Unauthorized",
      });
    }

    // Check if user is admin
    const user = await prisma.users.findUnique({
      where: { id: session.user.id },
      select: { role: true },
    });

    if (user?.role !== "admin") {
      throw new HTTPException(403, {
        message: "Admin access required",
      });
    }

    // Get current settings
    let settings = await prisma.settings.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!settings) {
      // Create new settings if none exist
      settings = await prisma.settings.create({
        data: {
          id: ulid(),
          baseRate: data.baseRate || 2.0,
          distanceChargePerMile: data.distanceChargePerMile || 1.2,
          timeChargePerMinute: data.timeChargePerMinute || 0.25,
          peakTimeMultiplier: data.peakTimeMultiplier || 1.3,
          peakRanges: data.peakRanges || [
            { startHour: 5, endHour: 10 },
            { startHour: 22, endHour: 23 },
          ],
          holidayFeeEnabled: data.holidayFeeEnabled || false,
          holidayFeeType:
            (data.holidayFeeType as "flat" | "percentage") || "flat",
          holidayFeeFlat: data.holidayFeeFlat || 3.0,
          holidayFeePercentage: data.holidayFeePercentage || 15.0,
          holidayList: data.holidayList || [],
          minimumPrice: data.minimumPrice || 10.0,
        },
      });
    } else {
      // Update existing settings
      const updateData: Partial<UpdateSettings> = {};

      if (data.baseRate !== undefined) updateData.baseRate = data.baseRate;
      if (data.distanceChargePerMile !== undefined)
        updateData.distanceChargePerMile = data.distanceChargePerMile;
      if (data.timeChargePerMinute !== undefined)
        updateData.timeChargePerMinute = data.timeChargePerMinute;
      if (data.peakTimeMultiplier !== undefined)
        updateData.peakTimeMultiplier = data.peakTimeMultiplier;
      if (data.peakRanges !== undefined)
        updateData.peakRanges = data.peakRanges;
      if (data.holidayFeeEnabled !== undefined)
        updateData.holidayFeeEnabled = data.holidayFeeEnabled;
      if (data.holidayFeeType !== undefined)
        updateData.holidayFeeType = data.holidayFeeType;
      if (data.holidayFeeFlat !== undefined)
        updateData.holidayFeeFlat = data.holidayFeeFlat;
      if (data.holidayFeePercentage !== undefined)
        updateData.holidayFeePercentage = data.holidayFeePercentage;
      if (data.holidayList !== undefined)
        updateData.holidayList = data.holidayList;
      if (data.minimumPrice !== undefined)
        updateData.minimumPrice = data.minimumPrice;

      settings = await prisma.settings.update({
        where: { id: settings.id },
        data: updateData,
      });
    }

    return settings;
  },

  // Calculate price based on distance/duration and current settings
  calculatePrice: async (data: {
    distanceMiles: number;
    durationMinutes: number;
    bookingDate: Date;
    bookingTime: string;
  }) => {
    const settings = await settingsService.getSettings();
    const { distanceMiles, durationMinutes, bookingDate, bookingTime } = data;

    // Step 1: Calculate base price
    let calculatedPrice = settings.baseRate;
    calculatedPrice += distanceMiles * settings.distanceChargePerMile;
    calculatedPrice += durationMinutes * settings.timeChargePerMinute;

    // Step 2: Check if booking is during peak hours
    const timeHour = parseInt(bookingTime.split(":")[0]);
    let isPeakTime = false;

    if (settings.peakRanges) {
      const peakRanges = settings.peakRanges as {
        startHour: number;
        endHour: number;
      }[];
      isPeakTime = peakRanges.some((range) => {
        const { startHour, endHour } = range;
        // Handle overnight ranges (e.g., 22:00 - 2:00)
        if (startHour > endHour) {
          return timeHour >= startHour || timeHour < endHour;
        }
        return timeHour >= startHour && timeHour < endHour;
      });
    }

    if (isPeakTime) {
      calculatedPrice *= settings.peakTimeMultiplier;
    }

    // Step 4: Check if booking is on a holiday
    let isHoliday = false;
    if (settings.holidayFeeEnabled && settings.holidayList) {
      const holidayList = settings.holidayList as string[];
      const bookingDateStr = bookingDate.toISOString().split("T")[0];

      isHoliday = holidayList.includes(bookingDateStr);

      if (isHoliday) {
        if (settings.holidayFeeType === "flat") {
          calculatedPrice += settings.holidayFeeFlat;
        } else {
          calculatedPrice +=
            calculatedPrice * (settings.holidayFeePercentage / 100);
        }
      }
    }

    // Step 5: Apply minimum price
    const finalPrice = Math.max(calculatedPrice, settings.minimumPrice);

    return {
      calculatedPrice: Math.round(finalPrice * 100), // Convert to cents
      baseRate: settings.baseRate,
      distanceCharge: settings.distanceChargePerMile,
      timeCharge: settings.timeChargePerMinute,
      peakMultiplier: isPeakTime ? settings.peakTimeMultiplier : 1,
      isHoliday,
      minimumPrice: settings.minimumPrice,
    };
  },
};
