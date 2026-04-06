import type { Request, Response, NextFunction } from "express";
import { ZodError, type ZodType } from "zod";
import { HTTP_STATUS } from "../constants/httpStatus.js";

export const validate = (schema: ZodType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsed = schema.parse(req.body);
      req.body = parsed;
      next();
    } catch (err: unknown) {
      if (err instanceof ZodError) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({
          message: "Validation failed",
          errors: err.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          })),
        });
      }

      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: "Validation error",
        // errors: err.errors,
      });
    }
  };
};
