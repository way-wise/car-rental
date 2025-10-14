import { InferType, mixed, number, object, string } from "yup";

// Maintenance Schema for frontend
export const maintenanceSchema = object({
  id: string(),
  maintenanceType: string().required(),
  cost: number().required(),
  odometerReading: number().required(),
  details: string().required(),
  serviceProvider: string().optional(),
  nextServiceDue: string().optional(),
  notes: string().nullable(),
  createdAt: mixed(),
  updatedAt: mixed(),
});

export type Maintenance = InferType<typeof maintenanceSchema>;

// Create maintenance schema (for maintenance creation)
export const createMaintenanceSchema = object({
  maintenanceType: string()
    .required("Maintenance type is required")
    .min(2, "Maintenance type must be at least 2 characters"),
  cost: number().required("Cost is required").positive("Cost must be positive"),
  odometerReading: number()
    .required("Odometer reading is required")
    .positive("Odometer reading must be positive"),
  details: string()
    .required("Details are required")
    .min(2, "Details must be at least 10 characters"),
  serviceProvider: string().optional(),
  nextServiceDue: string().optional(),
  notes: string().optional(),
});

export type CreateMaintenanceInput = InferType<typeof createMaintenanceSchema>;
