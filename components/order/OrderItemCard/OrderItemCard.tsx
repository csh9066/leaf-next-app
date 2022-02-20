import React from "react";
import Link from "next/link";
import { OrderItem, OrderStatus } from "../../../types/order";
import RightOutlined from "../../icon/RightOutlined";
import Button from "../../ui/Button";

type Props = {
  orderItem: OrderItem;
};

type OrderStatusMap = {
  [key in OrderStatus]: string;
};

const orderStatusMap: OrderStatusMap = {
  PAY_COMPLETE: "결제 완료",
  ORDER_CANCEL: "결제 취소",
  PAY_PENDING: "결제 대기",
};

function OrderItemLabel({ orderStatus }: { orderStatus: OrderStatus }) {
  return (
    <div className="mr-2 rounded-xl px-2 py-1 text-xs bg-primary text-white">
      {orderStatusMap[orderStatus]}
    </div>
  );
}

function OrderItem({ orderItem }: Props) {
  const { amount, brandName, orderNo, productName, orderStatus } = orderItem;

  return (
    <div>
      <div className="px-5">
        <Link href={`/my/orders/${orderNo}`}>
          <a className=" flex justify-between border-b py-5">
            <div className="flex">
              <OrderItemLabel orderStatus={orderStatus} />
              <div className="font-bold">{orderNo}</div>
            </div>
            <div className="flex items-center">
              <RightOutlined />
            </div>
          </a>
        </Link>
      </div>
      {/* items */}
      <div className="p-5 border-b">
        <div className="text-sm font-bold mb-2">{brandName}</div>
        <div className="flex justify-between mb-2">
          <div className="text-gray-400 mr-2">{productName}</div>
          <div style={{ width: 80, height: 80, minWidth: 80 }}>
            <img
              src="https://img.29cm.co.kr/next-product/2021/03/21/230ed7ca6c164fb4a32bd8100722d872_20210321234715.jpg?width=150"
              alt=""
            />
          </div>
        </div>
        <div className="font-bold mb-4">{amount.toLocaleString()} 원</div>
        <div>
          <Button block={false} size="sm" variant="ghost">
            주문취소
          </Button>
        </div>
      </div>
      {/* end */}
    </div>
  );
}

export default OrderItem;
