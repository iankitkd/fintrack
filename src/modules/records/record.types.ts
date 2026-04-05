export type RecordFilter = {
  type?: "INCOME" | "EXPENSE";
  category?: string;
  startDate?: string;
  endDate?: string;
};

export type RecordType = {
  id: string;
  amount: Number;
  type: "INCOME" | "EXPENSE";
  category: string;
  date: string;
  note?: string;
};
