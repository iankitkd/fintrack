import { HTTP_STATUS } from "#/constants/httpStatus.js";
import type { Role } from "#/generated/prisma/enums.js";
import type { Request, Response, NextFunction } from "express";

export const authorize = (...allowed: Role[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user)
      return res
        .status(HTTP_STATUS.UNAUTHORIZED)
        .json({ message: "Unauthorized" });

    if (!allowed.includes(req.user.role)) {
      return res.status(HTTP_STATUS.FORBIDDEN).json({ message: "Forbidden" });
    }

    next();
  };
};
