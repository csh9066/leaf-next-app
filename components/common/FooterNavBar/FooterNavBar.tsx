import React, { ReactElement } from "react";
import Link from "next/link";
import cn from "classnames";
import s from "./FooterNavBar.module.css";
import Home from "../../icon/Home";
import Container from "../../ui/Container";
import Brand from "../../icon/Brand";
import { useRouter } from "next/dist/client/router";
import Store from "../../icon/Store";
import User from "../../icon/User";

interface Props {}

function NavBar({}: Props): ReactElement {
  const router = useRouter();

  return (
    <Container className={s.root} el="nav">
      <Link href="/">
        <a className={cn(s.item, router.pathname === "/" && s.active)}>
          <Home />
          <p>홈</p>
        </a>
      </Link>
      <Link href="/store">
        <a className={cn(s.item, router.pathname === "/store" && s.active)}>
          <Store />
          <p>스토어</p>
        </a>
      </Link>
      <Link href="/brands">
        <a className={cn(s.item, router.pathname === "/brands" && s.active)}>
          <Brand />
          <p>브랜드</p>
        </a>
      </Link>
      <Link href="/my">
        <a className={cn(s.item, router.pathname === "/my" && s.active)}>
          <User />
          <p>마이</p>
        </a>
      </Link>
    </Container>
  );
}

export default NavBar;
