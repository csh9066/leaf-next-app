import useSWR from "swr";
import { Product } from "../../types/product";

function useFetchProduct(productId: number) {
  const { data, error } = useSWR<Product>(`/products/${productId}`);

  return {
    data,
    error,
    loading: !data && !error,
  };
}

export default useFetchProduct;
