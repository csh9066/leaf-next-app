import React from "react";
import Check from "../../icon/Check";
import Button from "../../ui/Button";
import cs from "../../../styles/common.module.scss";
import cn from "classnames";
import { useRouter } from "next/router";
import useFetchOrderDetail from "../../../hooks/fetch/useFetchOrderDetail";

function OrderSuccessView() {
  const router = useRouter();
  const orderId = router.query.orderId as string;

  const { orderDetail, error } = useFetchOrderDetail(orderId);

  if (!orderDetail || error) {
    return null;
  }

  const { address, payment, orderNo } = orderDetail;

  return (
    <main className="bg-white">
      <div className="flex items-center h-12 px-5">
        <span className="font-semibold text-lg">주문 완료</span>
      </div>
      <section className="flex items-center flex-col h-40">
        <div className="flex justify-center items-center rounded-full w-12 h-12 bg-primary mt-6">
          <Check />
        </div>
        <p className="mt-3 font-bold text-base">주문이 완료 되었습니다</p>
      </section>
      <div className="bg-gray-100 h-3"></div>
      <section>
        <div className="flex items-center border-b h-16 px-5">
          <div className="font-semibold text-lg">주문 번호</div>
        </div>
        <div className="flex items-center justify-between px-5 h-20">
          <span className="text-primary font-bold">{orderNo}</span>
          <Button
            block={false}
            variant="ghost"
            size="sm"
            onClick={() => router.push(`/my/orders/${orderNo}`)}
          >
            주문 상세보기
          </Button>
        </div>
      </section>
      <div className="bg-gray-100 h-3"></div>
      <section>
        <div className="flex items-center border-b h-16 px-5">
          <div className="font-semibold text-lg">결제 정보</div>
        </div>
        <div className={cn(cs.bill, "p-5")}>
          <dl>
            <dt>결제금액</dt>
            <dd>{payment.amount.toLocaleString()} 원</dd>
          </dl>
          <dl>
            <dt>결제수단</dt>
            <dd>카드</dd>
          </dl>
        </div>
      </section>
      <div className="bg-gray-100 h-3"></div>
      <section>
        <div className="flex items-center border-b h-16 px-5">
          <div className="font-semibold text-lg">결제 정보</div>
        </div>
        <div className="p-5 mb-14">
          <div className="font-bold mb-2">{address.receiver}</div>
          <div>
            {`${address.address} ${address.extraAddress} (${address.zipCode})`}
            <br />
            {`${address.phone1}-${address.phone2}-${address.phone3}`}
          </div>
        </div>
      </section>
      <div className="p-5">
        <Button onClick={() => router.push("/store")}>쇼핑 계속하기</Button>
      </div>
    </main>
  );
}

export default OrderSuccessView;
