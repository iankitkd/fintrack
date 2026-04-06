import { Router } from "express";
import { authenticate } from "../auth/auth.middleware.js";
import { authorize } from "../auth/role.middleware.js";
import { validate } from "../../middleware/validate.js";
import { createUserSchema } from "./user.validation.js";
import { createUserHandler, getUsersHandler } from "./user.controller.js";

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
