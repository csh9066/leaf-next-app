import React from "react";
import useCart from "../../../hooks/service/useCart";
import Button from "../../ui/Button";
import CheckBox from "../../ui/CheckBox";
import Container from "../../ui/Container";
import CartItem from "../CartItem";
import s from "./CartView.module.scss";
import cs from "../../../styles//common.module.scss";
import cn from "classnames";
import useFetchCart from "../../../hooks/fetch/useFetchCart";
import { useRouter } from "next/router";

function CartView() {
  const router = useRouter();
  const { byBrands, selectedItemCount, totAmount, totItemCount } =
    useFetchCart();
  const { checkAllItem, onDeleteItems, checkout } = useCart();

  const onClickAllCheck = () => {
    checkAllItem(selectedItemCount === 0);
  };

  if (!byBrands) return null;

  return (
    <main className={s.root}>
      {byBrands.length ? (
        <>
          <div className={s.orderControll}>
            <CheckBox
              checked={selectedItemCount !== 0}
              onChange={onClickAllCheck}
            >
              {`전체선택(${selectedItemCount}/${totItemCount})`}
            </CheckBox>
            <button onClick={onDeleteItems}>선택삭제</button>
          </div>
          {byBrands.map((brand) => (
            <div className={s.brand} key={brand.brandId}>
              <div className={s.name}>{brand.brandName}</div>
              <div className="px-5">
                {brand.items.map((product, i) => {
                  if (i === brand.items.length - 1) {
                    return (
                      <CartItem
                        item={product}
                        key={product.productId}
                        isLast
                        brandId={brand.brandId}
                      />
                    );
                  }
                  return (
                    <CartItem
                      item={product}
                      key={product.productId}
                      brandId={brand.brandId}
                    />
                  );
                })}
              </div>
            </div>
          ))}
          <div className={cn(cs.bill, "p-5", "pb-60")}>
            <dl>
              <dt>총 상품 금액</dt>
              <dd>{totAmount.toLocaleString()} 원</dd>
            </dl>
            <dl>
              <dt>배송비</dt>
              <dd>{0} 원</dd>
            </dl>
            <dl>
              <dt>총 결제금액</dt>
              <dd>
                <strong>{totAmount.toLocaleString()}</strong> 원
              </dd>
            </dl>
          </div>
          <Container className={s.checkout}>
            <div className="h-14 flex justify-center items-center">
              <span className="text-gray-400 mr-1">총 상품금액</span>
              {totAmount.toLocaleString()} +
              <span className="text-gray-400 mx-1">배송비</span>
              {0} ={" "}
              <span className="font-semibold ml-1">
                {totAmount.toLocaleString()}
              </span>
            </div>
            <Button onClick={checkout}>구매하기</Button>
          </Container>
        </>
      ) : (
        <div className="pt-40 flex justify-center">
          <div>
            <div className="mb-4">장바구니에 담은 상품이 없습니다.</div>
            <Button
              variant="outlined-primary"
              size="sm"
              onClick={() => router.push("/store")}
            >
              스토어 바로가기
            </Button>
          </div>
        </div>
      )}
    </main>
  );
}

export default CartView;
