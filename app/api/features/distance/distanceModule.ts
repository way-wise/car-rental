import { validateInput } from "@/app/api/lib/validateInput";
import { Hono } from "hono";
import { object, string } from "yup";
import { distanceService } from "./distanceService";

const app = new Hono();

// Schema for distance calculation validation
const calculateDistanceSchema = object({
  pickupLocation: string().required("Pickup location is required"),
  dropLocation: string().required("Drop location is required"),
});

/*
  @route    POST: /distance/calculate
  @access   public
  @desc     Calculate distance and duration between two locations
*/
app.post("/calculate", async (c) => {
  const body = await c.req.json();

  const validatedData = await validateInput({
    type: "form",
    schema: calculateDistanceSchema,
    data: body,
  });

  const result = await distanceService.calculateDistance(validatedData);

  return c.json({
    success: true,
    ...result,
  });
});

/*
  @route    POST: /distance/calculate-with-pricing
  @access   public
  @desc     Calculate distance, duration, and pricing between two locations
*/
app.post("/calculate-with-pricing", async (c) => {
  const body = await c.req.json();

  const validatedData = await validateInput({
    type: "form",
    schema: calculateDistanceSchema,
    data: body,
  });

  const result =
    await distanceService.calculateDistanceWithPricing(validatedData);

  return c.json({
    success: true,
    ...result,
  });
});

export default app;
