export interface Finance{
  id:number,
  tipo:tipo,
  monto:number,
  fecha:string,
}

export enum tipo{
  ingreso,
  gasto
}