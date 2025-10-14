import { InferType, number, object, string } from "yup";

export const settingsSchema = object({
  pricingType: string()
    .oneOf(["kilometer", "hour"])
    .required("Pricing type is required"),
  pricePerKilometer: number()
    .min(0, "Price per kilometer must be positive")
    .optional(),
  pricePerHour: number().min(0, "Price per hour must be positive").optional(),
  basePrice: number()
    .min(0, "Base price must be positive")
    .required("Base price is required"),
  minimumPrice: number()
    .min(0, "Minimum price must be positive")
    .required("Minimum price is required"),
});

export type Settings = InferType<typeof settingsSchema>;

export const updateSettingsSchema = object({
  pricingType: string().oneOf(["kilometer", "hour"]).optional(),
  pricePerKilometer: number()
    .min(0, "Price per kilometer must be positive")
    .optional(),
  pricePerHour: number().min(0, "Price per hour must be positive").optional(),
  basePrice: number().min(0, "Base price must be positive").optional(),
  minimumPrice: number().min(0, "Minimum price must be positive").optional(),
});

export type UpdateSettings = InferType<typeof updateSettingsSchema>;
