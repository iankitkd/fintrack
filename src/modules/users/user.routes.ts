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
router.use(authorize("users:manage"));

router.post("/", validate(createUserSchema), createUserHandler);
router.get("/", getUsersHandler);

export default router;
