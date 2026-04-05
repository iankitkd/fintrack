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
router.use(authorize("dashboard:read"));

router.get("/summary", summaryHandler);
router.get("/categories", categoryHandler);
router.get("/recent", recentHandler);
router.get("/trends", trendsHandler);

export default router;
