import { getSession } from "@/lib/auth";
import { Context, Next } from "hono";

export const requiresAuth = async (c: Context, next: Next) => {
  const session = await getSession();

  if (!session || !session.user) {
    return c.json({ message: "Unauthorized" }, 401);
  }

  // Set userId in context for use in route handlers
  c.set("userId", session.user.id);
  c.set("user", session.user);

  return next();
};
