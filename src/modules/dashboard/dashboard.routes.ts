import { Router } from "express";
import { authenticate } from "../auth/auth.middleware.js";
import { authorize } from "../auth/role.middleware.js";
import {
  categoryHandler,
  recentHandler,
  summaryHandler,
  trendsHandler,
} from "./dashboard.controller.js";

const router = Router();

router.use(authenticate);

router.get("/summary", authorize("dashboard:read"), summaryHandler);
router.get("/categories", authorize("dashboard:read"), categoryHandler);
router.get("/recent", authorize("dashboard:read"), recentHandler);
router.get("/trends", authorize("dashboard:read"), trendsHandler);

export default router;
