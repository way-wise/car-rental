import { getSession } from "@/lib/auth";
import { Context, Next } from "hono";

export const requiresAuth = async (c: Context, next: Next) => {
  const session = await getSession();

  if (!session) {
    return c.json({ message: "Unauthorized" }, 401);
  }

  return next();
};
