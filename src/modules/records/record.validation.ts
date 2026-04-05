import { registry } from "#/config/openapi.js";
import { RecordType } from "#/generated/prisma/enums.js";
import { z } from "zod";

export const createRecordSchema = z.object({
  amount: z.coerce.number().positive(),
  type: z.enum(RecordType, "Invalid record type"),
  category: z.string(),
  date: z.coerce.date(),
  note: z.string().optional(),
});

export type CreateRecordInput = z.infer<typeof createRecordSchema>;

export const CreateRecordRef = registry.register(
  "CreateRecord",
  createRecordSchema,
);
