import { config } from "#/config/index.js";
import { HTTP_STATUS } from "#/constants/httpStatus.js";
import type { Role } from "#/generated/prisma/enums.js";
import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let token: string | undefined;

  // cookie
  if (req.cookies?.token) {
    token = req.cookies.token;
  }

  // Authorization header
  if (!token && req.headers.authorization) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token)
    return res.status(HTTP_STATUS.UNAUTHORIZED).json({ message: "No token" });

  try {
    const decoded = jwt.verify(token, config.jwtSecret) as {
      id: string;
      role: Role;
    };
    req.user = decoded;
    next();
  } catch {
    return res
      .status(HTTP_STATUS.UNAUTHORIZED)
      .json({ message: "Invalid token" });
  }
};
