import { createMaintenanceSchema } from "@/schema/maintenanceSchema";
import { paginationQuerySchema } from "@/schema/paginationSchema";
import { validateInput } from "@api/lib/validateInput";
import { Hono } from "hono";
import { number, object, string } from "yup";
import { maintenanceService } from "./maintenanceService";

const app = new Hono();

/*
  @route    POST: /maintenance
  @access   private
  @desc     Create a new maintenance record
*/
app.post("/", async (c) => {
  const body = await c.req.json();

  const validatedData = await validateInput({
    type: "form",
    schema: createMaintenanceSchema,
    data: body,
  });

  const result = await maintenanceService.createMaintenance(validatedData);

  return c.json({ success: true, data: result }, 201);
});

/*
  @route    GET: /maintenance/stats
  @access   private
  @desc     Get maintenance statistics
*/
app.get("/stats", async (c) => {
  const result = await maintenanceService.getMaintenanceStats();
  return c.json(result);
});

/*
  @route    GET: /maintenance
  @access   private
  @desc     Get all maintenance records with pagination and search
*/
app.get("/", async (c) => {
  const validatedQuery = await validateInput({
    type: "query",
    schema:
      paginationQuerySchema &&
      object({
        search: string().optional(),
      }),
    data: c.req.query(),
  });

  const result = await maintenanceService.getMaintenanceRecords(validatedQuery);

  return c.json(result);
});

/*
  @route    GET: /maintenance/:id
  @access   private
  @desc     Get a single maintenance record by ID
*/
app.get("/:id", async (c) => {
  const validatedParam = await validateInput({
    type: "param",
    schema: object({
      id: string().required(),
    }),
    data: c.req.param(),
  });

  const result = await maintenanceService.getMaintenanceById(validatedParam.id);
  return c.json(result);
});

/*
  @route    PUT: /maintenance/:id
  @access   private
  @desc     Update a maintenance record
*/
app.put("/:id", async (c) => {
  const validatedParam = await validateInput({
    type: "param",
    schema: object({
      id: string().required(),
    }),
    data: c.req.param(),
  });

  const body = await c.req.json();
  const validatedData = await validateInput({
    type: "form",
    schema: object({
      maintenanceType: string().optional(),
      cost: number().positive().optional(),
      odometerReading: number().positive().optional(),
      details: string().optional(),
      serviceProvider: string().optional(),
      nextServiceDue: string().optional(),
      notes: string().optional(),
    }),
    data: body,
  });

  const result = await maintenanceService.updateMaintenance(
    validatedParam.id,
    validatedData,
  );

  return c.json({ success: true, data: result });
});

/*
  @route    DELETE: /maintenance/:id
  @access   private
  @desc     Delete a maintenance record
*/
app.delete("/:id", async (c) => {
  const validatedParam = await validateInput({
    type: "param",
    schema: object({
      id: string().required(),
    }),
    data: c.req.param(),
  });

  await maintenanceService.deleteMaintenance(validatedParam.id);
  return c.json({
    success: true,
    message: "Maintenance record deleted successfully",
  });
});

export default app;
