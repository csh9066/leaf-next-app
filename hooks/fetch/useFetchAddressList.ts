import useSWR from "swr";
import { Address } from "../../types/address";

function useFetchAddressList() {
  const { data, error, mutate } = useSWR<Address[]>("/addresses");

  return {
    loading: !data && !error,
    addresses: data,
    mutate,
    error,
  };
}

export default useFetchAddressList;
