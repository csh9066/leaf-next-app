import useSWR from "swr";
import { Brand } from "../../types/brand";

function useFetchBrandList() {
  const { data: brands, error, mutate } = useSWR<Brand[]>("/brands");

  return {
    brands,
    error,
    loading: !brands && !error,
    mutate,
  };
}

export default useFetchBrandList;
