import { prisma } from "#/db/prisma.js";
import type { RecordFilter } from "#/modules/records/record.types.js";
import type { CreateRecordInput } from "#/modules/records/record.validation.js";

export const createRecord = (userId: string, data: CreateRecordInput) => {
  return prisma.record.create({
    data: {
      ...data,
      date: new Date(data.date),
      note: data.note ?? null,
      userId,
    },
  });
};

export const getRecords = (userId: string, filters: RecordFilter) => {
  const where: any = {
    userId,
  };

  if (filters.type) where.type = filters.type;
  if (filters.category) where.category = filters.category;

  if (filters.startDate || filters.endDate) {
    where.date = {};
    if (filters.startDate) {
      where.date.gte = new Date(filters.startDate);
    }
    if (filters.endDate) {
      where.date.lte = new Date(filters.endDate);
    }
  }

  return prisma.record.findMany({
    where,
    orderBy: { date: "desc" },
  });
};

export const updateRecord = (id: string, userId: string, data: any) => {
  return prisma.record.updateMany({
    where: { id, userId },
    data,
  });
};

export const deleteRecord = (id: string, userId: string) => {
  return prisma.record.deleteMany({ where: { id, userId } });
};
