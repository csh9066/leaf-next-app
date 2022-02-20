import React, { ReactElement } from "react";
import s from "./NavTabs.module.scss";
import Link from "next/link";

interface Props {
  // tabs: string[];
}

function NavTabs({}: Props): ReactElement {
  return (
    <div className={s.root}>
      <Link href="#detail" replace={true}>
        <a className={s.item}>관련상품</a>
      </Link>
      <Link href="#reviews" replace={true}>
        <a className={s.item}>관련상품</a>
      </Link>
    </div>
  );
}

export default NavTabs;
