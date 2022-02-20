import useSWR from "swr";
import { Product } from "../../types/product";

function useSearchProductList(page: number = 0) {
  const { data, error } = useSWR<Product[]>(`/products?page=${page}`);

  return {
    products: data,
    error,
    loading: !data && !error,
  };
}

export default useSearchProductList;
