import React from "react";
import CheckBox from "../../ui/CheckBox";
import InputQuantity from "../../ui/InputQuantity/InputQuantity";
import s from "./CartItem.module.scss";
import cn from "classnames";
import { CartProduct } from "../../../types/cart";

interface Props {
  item: CartProduct;
  isLast?: boolean;
}

function CartItem({ item, isLast = false }: Props) {
  const rootCn = cn(s.root, {
    [s.isLast]: isLast,
  });

  const { checked, image, price } = item;

  return (
    <div className={rootCn}>
      <CheckBox className={s.cb} checked={checked} />
      <div className="flex justify-between mb-3">
        <div className="mr-3">
          <p className={s.name}>
            seoul finest hustler 오가닉 코튼 타이다이 티셔츠
          </p>
          {/* <div className="text-sm font-normal">옵션:</div> */}
        </div>
        <div className={s.imgWrapper}>
          <img src={image} alt="" />
        </div>
      </div>
      <div className="flex justify-between">
        <InputQuantity value={1} />
        <div className="font-bold flex items-center">
          {price.toLocaleString()} 원
        </div>
      </div>
    </div>
  );
}

export default CartItem;
