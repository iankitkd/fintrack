import { Role } from "@prisma/client";

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
