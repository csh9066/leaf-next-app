import React, { useState } from "react";
import { Cart } from "../../../types/cart";
import Button from "../../ui/Button";
import CheckBox from "../../ui/CheckBox";
import Container from "../../ui/Container";
import CartItem from "../CartItem";
import s from "./CartView.module.scss";

const init: Cart = {
  itemCount: 2,
  byBrands: [
    {
      brandId: 1,
      brandName: "Terrible Studio",
      products: [
        {
          stock: 1,
          checked: true,
          price: 49000,
          image:
            "https://img.29cm.co.kr/next-product/2021/03/21/230ed7ca6c164fb4a32bd8100722d872_20210321234715.jpg?width=150",
          productId: 1,
        },
        {
          stock: 1,
          checked: true,
          price: 49000,
          image:
            "https://img.29cm.co.kr/next-product/2021/03/21/230ed7ca6c164fb4a32bd8100722d872_20210321234715.jpg?width=150",
          productId: 2,
        },
      ],
    },
    {
      brandId: 2,
      brandName: "Terrible Studio",
      products: [
        {
          stock: 1,
          checked: true,
          price: 49000,
          image:
            "https://img.29cm.co.kr/next-product/2021/03/21/230ed7ca6c164fb4a32bd8100722d872_20210321234715.jpg?width=150",
          productId: 3,
        },
      ],
    },
  ],
};

function CartView() {
  const [cart, setCart] = useState<Cart>(init);
  const [totalPrice, setTotalPrice] = useState(49000);

  return (
    <main className={s.root}>
      <div className={s.orderControll}>
        <CheckBox checked>전체선택(1/{cart.itemCount})</CheckBox>
        <button>선택삭제</button>
      </div>
      {cart.byBrands.map((brand) => (
        <div className={s.brand} key={brand.brandId}>
          <div className={s.name}>{brand.brandName}</div>
          <div className="px-5">
            {brand.products.map((product, i) => {
              if (i === brand.products.length - 1) {
                return (
                  <CartItem item={product} key={product.productId} isLast />
                );
              }
              return <CartItem item={product} key={product.productId} />;
            })}
          </div>
        </div>
      ))}
      <div className={s.bill}>
        <dl>
          <dt>총 상품 금액</dt>
          <dd>{Number(8000).toLocaleString()} 원</dd>
        </dl>
        <dl>
          <dt>배송비</dt>
          <dd>{Number(8000).toLocaleString()} 원</dd>
        </dl>
        <dl>
          <dt>총 결제금액</dt>
          <dd>
            <strong>{Number(8000).toLocaleString()}</strong> 원
          </dd>
        </dl>
      </div>
      <Container className={s.checkout}>
        <div className="h-14 flex justify-center items-center">
          <span className="text-gray-400 mr-1">총 상품금액</span>49,000 +
          <span className="text-gray-400 mx-1">배송비</span>
          2,500 = <span className="font-semibold ml-1">51,500</span>
        </div>
        <Button>구매하기</Button>
      </Container>
    </main>
  );
}

export default CartView;
