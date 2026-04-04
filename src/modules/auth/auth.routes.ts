import { validate } from "#/middleware/validate.js";
import {
  getMeHandler,
  loginHandler,
  logoutHandler,
} from "#/modules/auth/auth.controller.js";
import { authenticate } from "#/modules/auth/auth.middleware.js";
import { loginSchema } from "#/modules/auth/auth.validation.js";
import { Router } from "express";

const router = Router();

router.post("/login", validate(loginSchema), loginHandler);
router.get("/me", authenticate, getMeHandler);
router.post("/logout", authenticate, logoutHandler);

export default router;
