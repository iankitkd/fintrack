import type { Role } from "#/generated/prisma/enums.js";

export type Permission =
  | "records:read"
  | "records:create"
  | "records:update"
  | "records:delete"
  | "dashboard:read"
  | "users:manage";

export const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
  // Viewer: dashboard only
  VIEWER: ["dashboard:read"],

  // Analyst: read + create records + dashboard
  ANALYST: ["records:read", "records:create", "dashboard:read"],

  // Admin: full access
  ADMIN: [
    "records:read",
    "records:create",
    "records:update",
    "records:delete",
    "dashboard:read",
    "users:manage",
  ],
};
