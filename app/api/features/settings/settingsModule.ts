import { validateInput } from "@/app/api/lib/validateInput";
import { updateSettingsSchema } from "@/schema/settingsSchema";
import { Hono } from "hono";
import { settingsService } from "./settingsService";

const app = new Hono();

/*
  @route    GET: /settings
  @access   public
  @desc     Get current pricing settings
*/
app.get("/", async (c) => {
  const settings = await settingsService.getSettings();
  return c.json({
    success: true,
    settings,
  });
});

/*
  @route    PUT: /settings
  @access   admin
  @desc     Update pricing settings
*/
app.put("/", async (c) => {
  const body = await c.req.json();

  const validatedData = await validateInput({
    type: "form",
    schema: updateSettingsSchema,
    data: body,
  });

  const settings = await settingsService.updateSettings(validatedData);

  return c.json({
    success: true,
    settings,
  });
});

/*
  @route    POST: /settings/calculate-price
  @access   public
  @desc     Calculate price based on distance/duration
*/
app.post("/calculate-price", async (c) => {
  const body = await c.req.json();
  const { distanceKm, durationHours } = body;

  if (typeof distanceKm !== "number" || typeof durationHours !== "number") {
    return c.json({ error: "Distance and duration must be numbers" }, 400);
  }

  const priceCalculation = await settingsService.calculatePrice(
    distanceKm,
    durationHours,
  );

  return c.json({
    success: true,
    ...priceCalculation,
  });
});

export default app;
