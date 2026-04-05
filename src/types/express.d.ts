import type { Role } from "#/generated/prisma/enums.ts";

declare global {
  namespace Express {
    interface Request {
      user?: { id: string; role: Role };
    }
  }
}

export interface AuthRequest extends Request {
  user: {
    id: string;
    role: Role;
  };
}
