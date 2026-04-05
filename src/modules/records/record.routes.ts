import { validate } from "#/middleware/validate.js";
import { authenticate } from "#/modules/auth/auth.middleware.js";
import { authorize } from "#/modules/auth/role.middleware.js";
import {
  createRecordHandler,
  deleteRecordHandler,
  getRecordsHandler,
  updateRecordHandler,
} from "#/modules/records/record.controller.js";
import { createRecordSchema } from "#/modules/records/record.validation.js";
import { Router } from "express";

const router = Router();

router.use(authenticate);

router.post(
  "/",
  authorize("records:create"),
  validate(createRecordSchema),
  createRecordHandler,
);
router.get("/", authorize("records:read"), getRecordsHandler);
router.patch("/:id", authorize("records:update"), updateRecordHandler);
router.delete("/:id", authorize("records:delete"), deleteRecordHandler);

export default router;
