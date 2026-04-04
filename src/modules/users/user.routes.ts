import { authenticate } from "#/modules/auth/auth.middleware.js";
import {
  createUserHandler,
  getUsersHandler,
} from "#/modules/users/user.controller.js";
import { Router } from "express";

const router = Router();

router.post("/", authenticate, createUserHandler);
router.get("/", authenticate, getUsersHandler);

export default router;
