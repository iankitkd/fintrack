import type { Request, Response } from "express";
import {
  getCategoryBreakdown,
  getMonthlyTrends,
  getRecentTransactions,
  getSummary,
} from "./dashboard.service.js";

export const summaryHandler = async (req: Request, res: Response) => {
  const data = await getSummary(req.user!.id);
  res.json(data);
};

export const categoryHandler = async (req: Request, res: Response) => {
  const data = await getCategoryBreakdown(req.user!.id);
  res.json(data);
};

export const recentHandler = async (req: Request, res: Response) => {
  const data = await getRecentTransactions(req.user!.id);
  res.json(data);
};

export const trendsHandler = async (req: Request, res: Response) => {
  const data = await getMonthlyTrends(req.user!.id);
  res.json(data);
};
