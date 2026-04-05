import { validate } from "#/middleware/validate.js";
import { authenticate } from "#/modules/auth/auth.middleware.js";
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

router.post("/", validate(createRecordSchema), createRecordHandler);
router.get("/", getRecordsHandler);
router.patch("/:id", updateRecordHandler);
router.delete("/:id", deleteRecordHandler);

export default router;
