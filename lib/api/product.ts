import { Product } from "../../types/product";
import api from "./api";

export async function getProductById(productId: number | string) {
  const res = await api.get<Product>(`/products/${productId}`);
  return res;
}
