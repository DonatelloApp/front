export interface Transaction {
  id?: number;
  type: tipo;
  amount: number;
  date: Date;
}


export enum tipo{
  ingreso,
  gasto
}