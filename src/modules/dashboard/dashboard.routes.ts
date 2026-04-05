import { authenticate } from "#/modules/auth/auth.middleware.js";
import { authorize } from "#/modules/auth/role.middleware.js";
import {
  categoryHandler,
  recentHandler,
  summaryHandler,
  trendsHandler,
} from "#/modules/dashboard/dashboard.controller.js";
import { Router } from "express";

const router = Router();

router.use(authenticate);

router.get("/summary", authorize("dashboard:read"), summaryHandler);
router.get("/categories", authorize("dashboard:read"), categoryHandler);
router.get("/recent", authorize("dashboard:read"), recentHandler);
router.get("/trends", authorize("dashboard:read"), trendsHandler);

export default router;
