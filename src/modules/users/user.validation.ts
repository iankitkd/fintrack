import { Role } from "#/generated/prisma/enums.js";
import { z } from "zod";

export const userSchema = z.object({
  email: z.email("Email is required"),
  password: z.string().min(6, "Password must be of atleast 6 characters"),
  role: z.enum(Role, "Invalid role"),
});
