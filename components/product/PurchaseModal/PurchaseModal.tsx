import { useRouter } from "next/router";
import React, { useState } from "react";
import useFetchProduct from "../../../hooks/fetch/useFetchProduct";
import useIsLoggedIn from "../../../hooks/useIsLoggedIn";
import useLoginModal from "../../../hooks/useLoginModal";
import { addCartProduct } from "../../../lib/api/cart";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import InputQuantity from "../../ui/InputQuantity/InputQuantity";
import Modal from "../../ui/Modal";
import s from "./PurchaseModal.module.scss";

type PurchaseModalProps = {
  onClose: () => void;
  visible: boolean;
  productId: number;
};

function PurchaseModal({ visible, onClose, productId }: PurchaseModalProps) {
  const router = useRouter();
  const { data: product } = useFetchProduct(productId);
  const [totalQuantity, setTotalQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product?.price);

  const isLoggedIn = useIsLoggedIn();
  const { onOpen: openLoginModal } = useLoginModal();

  const onIncrase = () => {
    setTotalQuantity(totalQuantity + 1);
    setTotalPrice(totalPrice + product?.price);
  };

  const onDecrase = () => {
    setTotalQuantity(totalQuantity - 1);
    setTotalPrice(totalPrice - product?.price);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTotalQuantity(Number(value));
    setTotalPrice(product.price * Number(value));
  };

  const onAddCart = async () => {
    if (!isLoggedIn) {
      openLoginModal();
      return;
    }
    try {
      await addCartProduct(productId, totalQuantity);

      if (
        confirm("장바구니에 상품이 담겼습니다. 장바구니로 이동 하시겠습니까?")
      ) {
        router.push("/cart");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Modal visible={visible} onClose={onClose}>
      <Container className={s.root}>
        <div className={s.optionContainer}>
          <div className={s.item}>
            <InputQuantity
              value={totalQuantity}
              onIncrase={onIncrase}
              onDecrase={onDecrase}
              onChange={onChange}
            />
          </div>
        </div>
        <Container className={s.footer}>
          <div className={s.totalPrice}>
            <p>{totalQuantity}개 선택</p>
            <p>
              <span className="text-sm mr-1">총</span>
              <span className="font-bold">{totalPrice?.toLocaleString()}</span>
              <span className="text-sm">원</span>
            </p>
          </div>
          <div className={s.btnWrapper}>
            <Button variant="outlined-primary" onClick={() => onAddCart()}>
              장바구니
            </Button>
            <Button>구매하기</Button>
          </div>
        </Container>
      </Container>
    </Modal>
  );
}

export default React.memo(PurchaseModal);
