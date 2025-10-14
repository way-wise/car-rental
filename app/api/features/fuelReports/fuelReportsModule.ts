import { createFuelReportsSchema } from "@/schema/fuelReportsSchema";
import { paginationQuerySchema } from "@/schema/paginationSchema";
import { validateInput } from "@api/lib/validateInput";
import { Hono } from "hono";
import { number, object, string } from "yup";
import { fuelReportsService } from "./fuelReportsService";

const app = new Hono();

/*
  @route    POST: /fuel-reports
  @access   private
  @desc     Create a new fuel reports record
*/
app.post("/", async (c) => {
  const body = await c.req.json();

  const validatedData = await validateInput({
    type: "form",
    schema: createFuelReportsSchema,
    data: body,
  });

  const result = await fuelReportsService.createFuelReports(validatedData);

  return c.json({ success: true, data: result }, 201);
});

/*
      @route    GET: /fuel-reports/stats
  @access   private
  @desc     Get fuel reports statistics
*/
app.get("/stats", async (c) => {
  const result = await fuelReportsService.getFuelReportsStats();
  return c.json(result);
});

/*
  @route    GET: /fuel-reports
  @access   private
  @desc     Get all fuel reports records with pagination and search
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

  const result = await fuelReportsService.getFuelReportsRecords(validatedQuery);

  return c.json(result);
});

/*
  @route    GET: /fuel-reports/:id
  @access   private
  @desc     Get a single fuel reports record by ID
*/
app.get("/:id", async (c) => {
  const validatedParam = await validateInput({
    type: "param",
    schema: object({
      id: string().required(),
    }),
    data: c.req.param(),
  });

  const result = await fuelReportsService.getFuelReportsById(validatedParam.id);
  return c.json(result);
});

/*
  @route    PUT: /fuel-reports/:id
  @access   private
  @desc     Update a fuel reports record
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
      currentOdometer: number().positive().optional(),
      previousOdometer: number().positive().optional(),
      fuelVolume: number().positive().optional(),
      fuelUnitPrice: number().positive().optional(),
      notes: string().optional(),
    }),
    data: body,
  });

  const result = await fuelReportsService.updateFuelReports(
    validatedParam.id,
    validatedData,
  );

  return c.json({ success: true, data: result });
});

/*
  @route    DELETE: /fuel-reports/:id
  @access   private
  @desc     Delete a fuel reports record
*/
app.delete("/:id", async (c) => {
  const validatedParam = await validateInput({
    type: "param",
    schema: object({
      id: string().required(),
    }),
    data: c.req.param(),
  });

  await fuelReportsService.deleteFuelReports(validatedParam.id);
  return c.json({
    success: true,
    message: "Fuel reports record deleted successfully",
  });
});

export default app;
