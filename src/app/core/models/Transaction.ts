export interface Transaction {
  id?: number;
  type: string;
  amount: number;
  date: Date;
  origin?: string;
  description?: string
}

/*
export enum tipo{
  income,
  spend
}
  */