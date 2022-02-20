import React from "react";
import ArrowBackHeader from "../../common/ArrowBackHeader";
import useSWR from "swr";
import { OrderItem } from "../../../types/order";
import OrderItemCard from "../OrderItemCard";

function MyOrderListView() {
  const { data } = useSWR<OrderItem[]>("/order");

  return (
    <main className="bg-white">
      <ArrowBackHeader>주문배송조회</ArrowBackHeader>
      {data?.map((oi) => (
        <OrderItemCard key={oi.id} orderItem={oi} />
      ))}
    </main>
  );
}

export default MyOrderListView;
