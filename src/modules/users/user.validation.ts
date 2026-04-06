import { z } from "zod";
import { Role } from "../../generated/prisma/enums.js";
import { registry } from "../../config/openapi.js";

export const createUserSchema = z.object({
  email: z.email("Email is required"),
  password: z.string().min(6, "Password must be of atleast 6 characters"),
  role: z.enum(Role, "Invalid role"),
});

export const CreateUserRef = registry.register("CreateUser", createUserSchema);
