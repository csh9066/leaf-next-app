import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.scss";
import Container from "../Container";

interface Props {
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
}

function Modal({ children, visible, onClose }: Props) {
  const ref = useRef<Element | null>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (document) {
      const dom = document.querySelector("#root-modal");
      ref.current = dom;
    }
  }, []);

  const onClickOverLay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    onClose();
  };

  if (ref.current && mounted && visible) {
    return createPortal(
      <>
        <div className={s.root} onClick={onClickOverLay}>
          <Container className={s.content}>{children}</Container>
        </div>
      </>,
      ref?.current
    );
  }
  return null;
}

export default Modal;
