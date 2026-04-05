import { registry } from "#/config/openapi.js";
import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Email is required"),
  password: z.string().min(6, "Password must be of atleast 6 characters"),
});

export const LoginRef = registry.register("Login", loginSchema);
