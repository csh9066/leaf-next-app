import React, { ReactElement } from "react";
import s from "./NavTabs.module.scss";
import cn from "classnames";

interface Props {}

function NavTabs({}: Props): ReactElement {
  return (
    <div className={s.root}>
      <a href="#detail">
        <div className={s.item}>관련상품</div>
      </a>
      <a href="">
        <div className={s.item}>상품상세</div>
      </a>
      <a href="">
        <div className={s.item}>리뷰</div>
      </a>
    </div>
  );
}

export default NavTabs;
