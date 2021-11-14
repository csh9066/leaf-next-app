import { Brand } from "./brand";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  detail: string;
  stock: number;
  brand: Brand;
}
