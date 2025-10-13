import { errorHandler } from "@/app/api/lib/errorHandler";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { secureHeaders } from "hono/secure-headers";
import { handle } from "hono/vercel";
import authModule from "../features/auth/authModule";
import signUploadModule from "../features/sign-upload/signUploadModule";
import userModule from "../features/users/userModule";

// Import email listeners to register event handlers
import "../lib/listeners/email-listener";

// Hono init
const app = new Hono().basePath("/api");

// Logger
app.use(logger());

// Secure headers
app.use(secureHeaders());

// Cors config
app.use(cors());

// Routes
app.route("/auth", authModule);
app.route("/users", userModule);

app.route("/sign-upload", signUploadModule);

// Not found
app.notFound((c) => {
  return c.json(
    {
      message: `${c.req.path} Not Found`,
    },
    404,
  );
});

// Error Handler
app.onError(errorHandler);

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
