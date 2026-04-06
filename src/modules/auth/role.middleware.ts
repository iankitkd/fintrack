import type { Request, Response, NextFunction } from "express";
import { ROLE_PERMISSIONS, type Permission } from "./permission.js";
import { HTTP_STATUS } from "../../constants/httpStatus.js";

export const authorize = (...required: Permission[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user)
      return res
        .status(HTTP_STATUS.UNAUTHORIZED)
        .json({ message: "Unauthorized" });

    const userPerms: Permission[] = ROLE_PERMISSIONS[req.user.role] || [];

    const hasAll = required.every((p) => userPerms.includes(p));
    if (!hasAll)
      return res.status(HTTP_STATUS.FORBIDDEN).json({ message: "Forbidden" });

    next();
  };
};
