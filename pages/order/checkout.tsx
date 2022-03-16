import React, { ReactElement, useState } from "react";
import Layout from "../../components/common/Layout";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import AddressModal from "../../components/address/AddressModal";
import usePayment from "../../hooks/service/usePayment";
import useFetchCheckout from "../../hooks/fetch/useFetchCheckout";
import useIamportEffect from "../../hooks/effect/useIamportEffect";
import AddressForm from "../../components/address/AddressForm";
import useAddressForm from "../../hooks/service/useAddressForm";
import ArrowBackHeader from "../../components/common/ArrowBackHeader";
import cs from "../../styles/common.module.scss";
import sn from "classnames";
import classNames from "classnames";

function CheckoutPage() {
  const { checkout } = useFetchCheckout();

  useIamportEffect();
  const { payment } = usePayment();

  const { form, onChangeForm, onToggleIsDefaultAddress, onCompletePostCode } =
    useAddressForm();

  // 모달 로직
  const [shippingAddressModalVisible, setShippingAddressModalVislble] =
    useState(false);

  const onOpenShippingAddressModal = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setShippingAddressModalVislble(true);
  };

  const onCloseShippingAddressModal = () => {
    setShippingAddressModalVislble(false);
  };

  if (!checkout) {
    return null;
  }

  const { address, deliveryFee, paymentPrice, products, productsPrice } =
    checkout;
  return (
    <main className="bg-white pb-36">
      {/* 배송 정보 */}
      <div className="pb-10">
        {address ? (
          <div className="h-16 flex items-center justify-between px-5 text-lg font-bold border-b">
            <div>배송지 정보</div>
            <button
              className="text-primary font-bold text-sm"
              onClick={onOpenShippingAddressModal}
            >
              변경 하기
            </button>
          </div>
        ) : (
          <AddressForm
            form={form}
            onChangeForm={onChangeForm}
            onToggleIsDefaultAddress={onToggleIsDefaultAddress}
            onComplete={onCompletePostCode}
          />
        )}

        {/* 현재 배송 정보 */}
        {address && (
          <div className="p-5 pb-0">
            <div className="flex items-center mb-2">
              <span className="font-bold text-base mr-2">
                {address?.receiver}
              </span>
              {address?.isDefaultAddress && (
                <div className="text-xs text-primary">기본배송지</div>
              )}
            </div>
            <div className="leading-6">
              {address?.address + " " + address.extraAddress} (
              {address?.zipCode})
            </div>
            <div className="leading-6">{`${address?.mainPhone1}-${address?.mainPhone2}-${address?.mainPhone3}`}</div>
          </div>
        )}
      </div>
      <div className="bg-gray-100 h-3"></div>
      <div className="pb-6">
        <div className="h-16 flex items-center px-5 text-lg font-bold border-b">
          주문상품 총 {products?.length}개
        </div>
        {products?.map((p) => {
          return (
            <div className="px-5" key={p.productId}>
              <div className="py-5 border-b">
                <div className="text-sm font-bold mb-2">{p.brandName}</div>
                <div className="flex justify-between mb-2">
                  <div className="text-gray-400 mr-2">{p.productName}</div>
                  <div style={{ width: 80, height: 80, minWidth: 80 }}>
                    <img
                      src="https://img.29cm.co.kr/next-product/2021/03/21/230ed7ca6c164fb4a32bd8100722d872_20210321234715.jpg?width=150"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="font-bold">
                    {Number(p.purchasePrice).toLocaleString()} 원
                  </span>
                  <span className="mx-2 border-r h-5"></span>
                  <span className="font-ligh">{p.count}개</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gray-100 h-3"></div>

      <div>
        <div className="h-16 flex justify-between items-center px-5 text-lg font-bold border-b">
          <div>총 결제금액</div>
          <div className="text-red-500 mr-3">
            {Number(checkout.paymentPrice).toLocaleString()}
            <span className="text-xs font-normal"> 원</span>
          </div>
        </div>
        <div className={classNames(cs.bill, "px-5", "py-3", "border-b")}>
          <dl>
            <dt>총 상품 금액</dt>
            <dd className="mr-3">{productsPrice.toLocaleString()} 원</dd>
          </dl>
          <dl>
            <dt>배송비</dt>
            <dd className="mr-3">{deliveryFee.toLocaleString()} 원</dd>
          </dl>
          <dl>
            <dt>총 결제금액</dt>
            <dd className="mr-3">{paymentPrice.toLocaleString()} 원</dd>
          </dl>
        </div>
      </div>

      <div>
        <div className="h-16 flex justify-between items-center px-5 text-lg font-bold border-b">
          <div>결제 방법</div>
        </div>
        <div className="flex p-5 border-b">
          <Button variant="outlined-primary" block={false} size="sm">
            신용/체크카드
          </Button>
        </div>
      </div>

      <Container className="fixed bg-white bottom-0 p-5">
        <Button
          onClick={() => {
            payment(address || form, products);
          }}
        >
          결제하기
        </Button>
      </Container>
      {shippingAddressModalVisible && (
        <AddressModal onClose={onCloseShippingAddressModal} />
      )}
    </main>
  );
}

CheckoutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <ArrowBackHeader>결제하기</ArrowBackHeader>
      {page}
    </Layout>
  );
};

export default CheckoutPage;
