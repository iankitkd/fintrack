import { Router } from "express";
import { authenticate } from "../auth/auth.middleware.js";
import { authorize } from "../auth/role.middleware.js";
import { validate } from "../../middleware/validate.js";
import { createRecordSchema } from "./record.validation.js";
import {
  createRecordHandler,
  deleteRecordHandler,
  getRecordsHandler,
  updateRecordHandler,
} from "./record.controller.js";

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
