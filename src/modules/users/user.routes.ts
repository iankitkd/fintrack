import { validate } from "#/middleware/validate.js";
import { authenticate } from "#/modules/auth/auth.middleware.js";
import { authorize } from "#/modules/auth/role.middleware.js";
import {
  createUserHandler,
  getUsersHandler,
} from "#/modules/users/user.controller.js";
import { createUserSchema } from "#/modules/users/user.validation.js";
import { Router } from "express";

const router = Router();

router.use(authenticate);

router.post(
  "/",
  authorize("users:manage"),
  validate(createUserSchema),
  createUserHandler,
);

router.get("/", authorize("users:manage"), getUsersHandler);

export default router;
