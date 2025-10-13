import { InferType, mixed, number, object, string } from "yup";

// Maintenance Schema for frontend
export const maintenanceSchema = object({
  id: string(),
  currentOdometer: number().required(),
  previousOdometer: number().required(),
  fuelVolume: number().required(),
  fuelUnitPrice: number().required(),
  fuelCost: number().required(),
  mileage: number().required(),
  notes: string().nullable(),
  createdAt: mixed(),
  updatedAt: mixed(),
});

export type Maintenance = InferType<typeof maintenanceSchema>;

// Create maintenance schema (for maintenance creation)
export const createMaintenanceSchema = object({
  currentOdometer: number()
    .required("Current odometer is required")
    .positive("Current odometer must be positive"),
  previousOdometer: number()
    .required("Previous odometer is required")
    .positive("Previous odometer must be positive"),
  fuelVolume: number()
    .required("Fuel volume is required")
    .positive("Fuel volume must be positive"),
  fuelUnitPrice: number()
    .required("Fuel unit price is required")
    .positive("Fuel unit price must be positive"),
  notes: string().optional(),
});

export type CreateMaintenanceInput = InferType<typeof createMaintenanceSchema>;
