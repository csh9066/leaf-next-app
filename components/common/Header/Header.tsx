import React, { ReactElement } from "react";
import Logo from "../../icon/Logo";
import Link from "next/link";
import ShoppingBag from "../../icon/ShoppingBag";
import Container from "../../ui/Container";
import { useRouter } from "next/dist/client/router";
import ArrowLeft from "../../icon/ArrowLeft";
import useIsLoggedIn from "../../../hooks/useIsLoggedIn";
import useLoginModal from "../../../hooks/useLoginModal";

interface Props {
  type: "default" | "navigator";
}

function Default() {
  const isLoggedIn = useIsLoggedIn();
  const { onOpen } = useLoginModal();
  return (
    <>
      <Link href="/">
        <a className="flex justify-center items-center">
          <Logo />
        </a>
      </Link>
      {isLoggedIn ? (
        <Link href="/cart">
          <a className="flex justify-center items-center">
            <ShoppingBag />
            <div className="flex justify-center items-center rounded-xl w-5 h-5 bg-primary text-white absolute top-1 right-3">
              3
            </div>
          </a>
        </Link>
      ) : (
        <a className="flex justify-center items-center" onClick={onOpen}>
          <ShoppingBag />
        </a>
      )}
    </>
  );
}

function Navigator() {
  const rotuer = useRouter();
  return (
    <>
      <>
        <a
          className="flex justify-center items-center cursor-pointer"
          onClick={rotuer.back}
        >
          <ArrowLeft />
        </a>
        <Link href="/cart">
          <a className="flex justify-center items-center">
            <ShoppingBag />
          </a>
        </Link>
      </>
    </>
  );
}

function Header({ type }: Props): ReactElement {
  return (
    <Container
      className="flex justify-between h-12 px-5 fixed bg-white z-10"
      el="header"
    >
      {type === "default" && <Default />}
      {type === "navigator" && <Navigator />}
    </Container>
  );
}

export default Header;
