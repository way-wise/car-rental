import { InferType, boolean, mixed, number, object, string } from "yup";

export const settingsSchema = object({
  baseRate: number()
    .min(0, "Base rate must be positive")
    .required("Base rate is required"),
  distanceChargePerMile: number()
    .min(0, "Distance charge per mile must be positive")
    .required("Distance charge per mile is required"),
  timeChargePerMinute: number()
    .min(0, "Time charge per minute must be positive")
    .required("Time charge per minute is required"),
  peakTimeMultiplier: number()
    .min(1, "Peak time multiplier must be at least 1")
    .required("Peak time multiplier is required"),
  holidayFeeEnabled: boolean().optional(),
  holidayFeeType: string()
    .oneOf(["flat", "percentage"])
    .required("Holiday fee type is required"),
  holidayFeeFlat: number()
    .min(0, "Holiday fee flat must be positive")
    .required("Holiday fee flat is required"),
  holidayFeePercentage: number()
    .min(0, "Holiday fee percentage must be positive")
    .max(100, "Holiday fee percentage must be between 0 and 100")
    .required("Holiday fee percentage is required"),
  minimumPrice: number()
    .min(0, "Minimum price must be positive")
    .required("Minimum price is required"),
});

export type Settings = InferType<typeof settingsSchema>;

export const updateSettingsSchema = object({
  baseRate: number().min(0, "Base rate must be positive").optional(),
  distanceChargePerMile: number()
    .min(0, "Distance charge per mile must be positive")
    .optional(),
  timeChargePerMinute: number()
    .min(0, "Time charge per minute must be positive")
    .optional(),
  peakTimeMultiplier: number()
    .min(1, "Peak time multiplier must be at least 1")
    .optional(),
  peakRanges: mixed().optional(),
  holidayFeeEnabled: boolean().optional(),
  holidayFeeType: string().oneOf(["flat", "percentage"]).optional(),
  holidayFeeFlat: number()
    .min(0, "Holiday fee flat must be positive")
    .optional(),
  holidayFeePercentage: number()
    .min(0, "Holiday fee percentage must be positive")
    .max(100, "Holiday fee percentage must be between 0 and 100")
    .optional(),
  holidayList: mixed().optional(),
  minimumPrice: number().min(0, "Minimum price must be positive").optional(),
});

export type UpdateSettings = InferType<typeof updateSettingsSchema>;
