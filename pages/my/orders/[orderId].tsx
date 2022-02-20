import React, { ReactElement } from "react";
import ArrowBackHeader from "../../../components/common/ArrowBackHeader";
import Layout from "../../../components/common/Layout";
import cs from "../../../styles//common.module.scss";
import cn from "classnames";
import Button from "../../../components/ui/Button";
import { useRouter } from "next/router";
import useFetchOrderDetail from "../../../hooks/fetch/useFetchOrderDetail";
import moment from "moment";

const OrderDetailPage = () => {
  const router = useRouter();
  const orderId = router.query.orderId as string;

  const { orderDetail } = useFetchOrderDetail(orderId);

  if (!orderDetail) return null;

  const { address, items, orderDate, orderNo, payment } = orderDetail;

  return (
    <main className="bg-white">
      <ArrowBackHeader>주문상세</ArrowBackHeader>

      <div>
        <div className="p-5 border-b font-semibold text-lg">주문 정보</div>
        <div className={cn(cs.bill, "px-5 pb-5")}>
          <dl>
            <dt>주문번호</dt>
            <dd>{orderNo}</dd>
          </dl>
          <dl>
            <dt>주문자</dt>
            <dd>{address.receiver}</dd>
          </dl>
          <dl>
            <dt>주문일자</dt>
            <dd>{moment(orderDate).format("yyyy.MM.DD")}</dd>
          </dl>
        </div>
      </div>

      <div className="border-4"></div>

      <div>
        <div className="p-5 border-b font-semibold text-lg">주문 상품</div>
        <div className="p-5 border-b">
          <div className="text-sm font-bold mb-2">Terrible Studio</div>
          <div className="flex justify-between mb-2">
            <div className="text-gray-400 mr-2">
              seoul finest hustler 오가닉 코튼 타이다이 티셔츠
            </div>
            <div style={{ width: 80, height: 80, minWidth: 80 }}>
              <img
                src="https://img.29cm.co.kr/next-product/2021/03/21/230ed7ca6c164fb4a32bd8100722d872_20210321234715.jpg?width=150"
                alt=""
              />
            </div>
          </div>
          <div className="font-bold mb-4">
            {Number(80000).toLocaleString()} 원
          </div>
          <div>
            <Button block={false} size="sm" variant="ghost">
              주문취소
            </Button>
          </div>
        </div>
      </div>

      <div className="border-4"></div>

      <div>
        <div className="p-5 border-b font-semibold text-lg">결제 정보</div>
        <div className={cn(cs.bill, "px-5 pb-5")}>
          <dl>
            <dt>상품금액</dt>
            <dd>{payment.amount} 원</dd>
          </dl>
          <dl>
            <dt>배송비</dt>
            <dd>{0} 원</dd>
          </dl>
          <dl>
            <dt>
              <span className="text-black font-bold">총 결제금액</span>
            </dt>
            <dd>
              <span className="text-red-500 font-bold">
                {payment.amount} 원
              </span>
            </dd>
          </dl>
          <dl>
            <dt>결제수단</dt>
            <dd>신용/체크카드</dd>
          </dl>
        </div>
      </div>

      <div className="border-4"></div>

      <div>
        <div className="p-5 border-b font-semibold text-lg">배송지 정보</div>
        <div className={cn(cs.bill, "px-5 pb-5")}>
          <dl>
            <dt>수령인</dt>
            <dd>{address.receiver}</dd>
          </dl>
          <dl>
            <dt>전화번호</dt>
            <dd>{`${address.phone1}-${address.phone2}-${address.phone3}`}</dd>
          </dl>
          <dl>
            <dt>주소</dt>
            <dd>{address.address}</dd>
          </dl>
        </div>
      </div>
    </main>
  );
};

OrderDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default OrderDetailPage;
