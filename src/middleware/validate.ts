import { HTTP_STATUS } from "#/constants/httpStatus.js";
import type { Request, Response, NextFunction } from "express";
import { ZodError, type ZodType } from "zod";

export const validate = (schema: ZodType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
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
