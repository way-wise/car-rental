import { HTTPException } from "hono/http-exception";
import { settingsService } from "../settings/settingsService";

export interface DistanceInfo {
  distance: {
    text: string;
    value: number; // in meters
  };
  duration: {
    text: string;
    value: number; // in seconds
  };
}

export interface DistanceWithPricing extends DistanceInfo {
  pricing: {
    calculatedPrice: number; // in cents
    pricingType: string;
    basePrice: number;
    minimumPrice: number;
    pricePerKilometer?: number;
    pricePerHour?: number;
  };
}

export const distanceService = {
  // Calculate distance between two locations using Google Distance Matrix API
  calculateDistance: async (data: {
    pickupLocation: string;
    dropLocation: string;
  }): Promise<DistanceInfo> => {
    const { pickupLocation, dropLocation } = data;

    if (!pickupLocation || !dropLocation) {
      throw new HTTPException(400, {
        message: "Both pickup and drop locations are required",
      });
    }

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
      throw new HTTPException(500, {
        message: "Google Maps API key not configured",
      });
    }

    try {
      // Google Distance Matrix API
      const origins = encodeURIComponent(pickupLocation);
      const destinations = encodeURIComponent(dropLocation);
      const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origins}&destinations=${destinations}&units=imperial&key=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.status !== "OK") {
        console.error("Google Distance Matrix API error:", data);
        throw new HTTPException(500, {
          message: "Distance calculation failed",
        });
      }

      if (data.rows.length === 0 || data.rows[0].elements.length === 0) {
        throw new HTTPException(404, {
          message: "No route found between the locations",
        });
      }

      const element = data.rows[0].elements[0];

      if (element.status !== "OK") {
        throw new HTTPException(400, {
          message: "Unable to calculate distance between locations",
        });
      }

      const distance = element.distance;
      const duration = element.duration;

      return {
        distance: {
          text: distance.text,
          value: distance.value, // in meters
        },
        duration: {
          text: duration.text,
          value: duration.value, // in seconds
        },
      };
    } catch (error) {
      if (error instanceof HTTPException) {
        throw error;
      }

      console.error("Error in distance calculation:", error);
      throw new HTTPException(500, {
        message: "Internal server error",
      });
    }
  },

  // Calculate distance with pricing
  calculateDistanceWithPricing: async (data: {
    pickupLocation: string;
    dropLocation: string;
  }): Promise<DistanceWithPricing> => {
    const distanceInfo = await distanceService.calculateDistance(data);

    // Convert feet to miles and seconds to hours
    const distanceMiles = distanceInfo.distance.value / 5280; // Convert feet to miles
    const durationHours = distanceInfo.duration.value / 3600;

    // Calculate pricing
    const pricing = await settingsService.calculatePrice(
      distanceMiles,
      durationHours,
    );

    return {
      ...distanceInfo,
      pricing: {
        ...pricing,
        pricePerKilometer: pricing.pricePerKilometer ?? undefined,
        pricePerHour: pricing.pricePerHour ?? undefined,
      },
    };
  },
};
