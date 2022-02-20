import useSWR from "swr";
import { OrderDetail } from "../../types/order";

export default function useFetchOrderDetail(orderNo: string) {
  const { data, error, mutate } = useSWR<OrderDetail>(`/order/${orderNo}`);
  return {
    orderDetail: data,
    mutate,
    error,
    loading: !data && !error,
  };
}
