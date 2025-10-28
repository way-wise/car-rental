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
          pricingType: "mile",
          pricePerMile: 2.5, // $2.50 per mile
          pricePerHour: 25.0, // $25.00 per hour
          basePrice: 5.0, // $5.00 base price
          minimumPrice: 10.0, // $10.00 minimum price
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
          pricingType: data.pricingType || "mile",
          pricePerMile: data.pricePerMile || 2.5,
          pricePerHour: data.pricePerHour || 25.0,
          basePrice: data.basePrice || 5.0,
          minimumPrice: data.minimumPrice || 10.0,
        },
      });
    } else {
      // Update existing settings
      settings = await prisma.settings.update({
        where: { id: settings.id },
        data: {
          ...(data.pricingType && { pricingType: data.pricingType }),
          ...(data.pricePerMile !== undefined && {
            pricePerMile: data.pricePerMile,
          }),
          ...(data.pricePerHour !== undefined && {
            pricePerHour: data.pricePerHour,
          }),
          ...(data.basePrice !== undefined && { basePrice: data.basePrice }),
          ...(data.minimumPrice !== undefined && {
            minimumPrice: data.minimumPrice,
          }),
        },
      });
    }

    return settings;
  },

  // Calculate price based on distance/duration and current settings
  calculatePrice: async (distanceMiles: number, durationHours: number) => {
    const settings = await settingsService.getSettings();

    let calculatedPrice = settings.basePrice;

    if (settings.pricingType === "mile") {
      if (settings.pricePerMile) {
        calculatedPrice += distanceMiles * settings.pricePerMile;
      }
    } else if (settings.pricingType === "hour") {
      if (settings.pricePerHour) {
        calculatedPrice += durationHours * settings.pricePerHour;
      }
    }

    // Apply minimum price
    const finalPrice = Math.max(calculatedPrice, settings.minimumPrice);

    return {
      calculatedPrice: Math.round(finalPrice * 100), // Convert to cents
      pricingType: settings.pricingType,
      basePrice: settings.basePrice,
      minimumPrice: settings.minimumPrice,
      pricePerMile: settings.pricePerMile,
      pricePerHour: settings.pricePerHour,
    };
  },
};
