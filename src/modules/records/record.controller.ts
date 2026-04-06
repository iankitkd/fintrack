import type { Request, Response } from "express";
import {
  createRecord,
  deleteRecord,
  getRecords,
  updateRecord,
} from "./record.service.js";
import { HTTP_STATUS } from "../../constants/httpStatus.js";

export const createRecordHandler = async (req: Request, res: Response) => {
  const record = await createRecord(req.user!.id, req.body);
  res.status(HTTP_STATUS.CREATED).json(record);
};

export const getRecordsHandler = async (req: Request, res: Response) => {
  const records = await getRecords(req.user!.id, req.query);
  res.json(records);
};

export const updateRecordHandler = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  await updateRecord(req.params.id, req.user!.id, req.body);
  res.json({ message: "Updated" });
};

export const deleteRecordHandler = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  await deleteRecord(req.params.id, req.user!.id);
  res.status(HTTP_STATUS.NO_CONTENT).json({ message: "Deleted" });
};
