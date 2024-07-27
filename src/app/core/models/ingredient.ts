import { Product } from "./product";

export interface Ingredient extends Product{
  medida: string,
  cantidad: number,
  coste: number
}