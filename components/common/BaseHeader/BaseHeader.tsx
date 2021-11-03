import React, { ReactElement } from "react";
import Logo from "../../icon/Logo";
import Link from "next/link";
import ShoppingBag from "../../icon/ShoppingBag";
import Container from "../../ui/Container";

interface Props {}

function BaseHeader({}: Props): ReactElement {
  return (
    <Container
      className="flex justify-between h-12 px-5 fixed border-b border-solid bg-white"
      el="header"
    >
      <Link href="/">
        <a className="flex justify-center items-center">
          <Logo />
        </a>
      </Link>
      <Link href="/cart">
        <a className="flex justify-center items-center">
          <ShoppingBag />
        </a>
      </Link>
    </Container>
  );
}

export default BaseHeader;
