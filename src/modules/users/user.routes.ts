import { authenticate } from "#/modules/auth/auth.middleware.js";
import { authorize } from "#/modules/auth/role.middleware.js";
import {
  createUserHandler,
  getUsersHandler,
} from "#/modules/users/user.controller.js";
import { Router } from "express";

const router = Router();

router.post("/", authenticate, authorize("ADMIN"), createUserHandler);
router.get("/", authenticate, authorize("ADMIN"), getUsersHandler);

export default router;
