import useSWR from "swr";
import { OrderCheckout } from "../../types/order";

function useFetchCheckout() {
  const {
    data: checkout,
    mutate,
    error,
  } = useSWR<OrderCheckout>("/order/checkout");

  return {
    checkout,
    mutate,
    loading: !checkout && !error,
    error,
  };
}

export default useFetchCheckout;
