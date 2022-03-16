import React, { useEffect } from "react";
import cs from "../../styles/common.module.scss";

function BrandDetailView() {
  useEffect(() => {
    alert("아직 개발중인 페이지 입니다.");
  }, []);
  return (
    <main className="pt-12 bg-white">
      <img src="https://via.placeholder.com/720x800" alt="" />
      <ul className={cs.nav}>
        <li>
          <a>브랜드 소개</a>
        </li>
        <li>
          <a>브랜드 상품</a>
        </li>
      </ul>
      <section className="px-5 pt-7 pb-10">
        <img src="https://via.placeholder.com/720x800" alt="" />
      </section>
    </main>
  );
}

export default BrandDetailView;
