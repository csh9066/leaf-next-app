import React, { ChangeEvent } from "react";
import CheckBox from "../../ui/CheckBox";
import InputQuantity from "../../ui/InputQuantity/InputQuantity";
import s from "./CartItem.module.scss";
import cn from "classnames";
import { CartItem } from "../../../types/cart";
import useCart from "../../../hooks/service/useCart";

interface Props {
  item: CartItem;
  brandId: number;
  isLast?: boolean;
}

function CartItem({ item, isLast = false, brandId }: Props) {
  const { checkItem, changeItemCount } = useCart();

  const rootCn = cn(s.root, {
    [s.isLast]: isLast,
  });

  const { checked, price, count } = item;

  const onCheckItem = () => {
    checkItem(brandId, item.cartItemId, !checked);
  };

  const onIncraseCount = () => {
    changeItemCount(brandId, item.cartItemId, count + 1);
  };

  const onDecraseCount = () => {
    changeItemCount(brandId, item.cartItemId, count - 1);
  };

  const onChangeCount = (e: ChangeEvent<HTMLInputElement>) => {
    changeItemCount(brandId, item.cartItemId, Number(e.target.value));
  };

  return (
    <div className={rootCn}>
      <CheckBox className={s.cb} checked={checked} onChange={onCheckItem} />
      <div className="flex justify-between mb-3">
        <div className="mr-3">
          <p className={s.name}>{item.productName}</p>
          {/* <div className="text-sm font-normal">옵션:</div> */}
        </div>
        <div className={s.imgWrapper}>
          <img src="" alt="" />
        </div>
      </div>
      <div className="flex justify-between">
        <InputQuantity
          value={count}
          onIncrase={onIncraseCount}
          onDecrase={onDecraseCount}
          onChange={onChangeCount}
        />
        <div className="font-bold flex items-center">
          {price.toLocaleString()} 원
        </div>
      </div>
    </div>
  );
}

export default CartItem;
