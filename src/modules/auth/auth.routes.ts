import {
  getMeHandler,
  loginHandler,
  logoutHandler,
} from "#/modules/auth/auth.controller.js";
import { authenticate } from "#/modules/auth/auth.middleware.js";
import { Router } from "express";

const router = Router();

router.post("/login", loginHandler);
router.get("/me", authenticate, getMeHandler);
router.post("/logout", authenticate, logoutHandler);

export default router;
