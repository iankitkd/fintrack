export interface Summary {
  totalIncome: number;
  totalExpense: number;
  netBalance: number;
}

export interface MonthlyTrend {
  month: string;
  income: number;
  expense: number;
  balance: number;
}
