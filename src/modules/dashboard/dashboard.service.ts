import { prisma } from "#/db/prisma.js";
import type { Summary } from "#/modules/dashboard/dashboard.types.js";

export const getSummary = async (userId: string): Promise<Summary> => {
  const income = await prisma.record.aggregate({
    _sum: { amount: true },
    where: { userId, type: "INCOME" },
  });

  const expense = await prisma.record.aggregate({
    _sum: { amount: true },
    where: { userId, type: "EXPENSE" },
  });

  const totalIncome = income._sum.amount || 0;
  const totalExpense = expense._sum.amount || 0;
  const netBalance = totalIncome - totalExpense;

  return {
    totalIncome,
    totalExpense,
    netBalance,
  };
};

export const getCategoryBreakdown = async (userId: string) => {
  const result = await prisma.record.groupBy({
    by: ["category"],
    where: { userId },
    _sum: { amount: true },
  });

  return result.map((item) => ({
    category: item.category,
    totalAmount: item._sum.amount,
  }));
};

export const getRecentTransactions = async (userId: string, take = 5) => {
  return prisma.record.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take,
  });
};

export const getMonthlyTrends = async (userId: string) => {
  const records = await prisma.record.findMany({
    where: { userId },
    select: { amount: true, type: true, date: true },
  });

  const result: any = {};

  records.forEach((r) => {
    const month = new Date(r.date).toISOString().slice(0, 7);

    if (!result[month]) {
      result[month] = { income: 0, expense: 0, balance: 0 };
    }

    if (r.type === "INCOME") {
      result[month].income += r.amount;
      result[month].balance += r.amount;
    } else {
      result[month].expense += r.amount;
      result[month].balance += r.amount;
    }
  });

  return result;
};
