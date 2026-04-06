import { Router } from "express";
import { validate } from "../../middleware/validate.js";
import { authenticate } from "./auth.middleware.js";
import { loginSchema } from "./auth.validation.js";
import {
  getMeHandler,
  loginHandler,
  logoutHandler,
} from "./auth.controller.js";

const router = Router();

router.post("/login", validate(loginSchema), loginHandler);
router.get("/me", authenticate, getMeHandler);
router.post("/logout", authenticate, logoutHandler);

export default router;
