import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.scss";
import cn from "classnames";
import Container from "../Container";

interface Props {
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
  mode?: "white" | "default";
}

function Modal({ children, visible, onClose, mode = "default" }: Props) {
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

  const rootStyle = cn(s.root, {
    [s.default]: mode === "default",
    [s.white]: mode === "white",
  });

  if (ref.current && mounted && visible) {
    return createPortal(
      <>
        <div className={rootStyle} onClick={onClickOverLay}>
          <Container>{children}</Container>
        </div>
      </>,
      ref?.current
    );
  }
  return null;
}

export default Modal;
