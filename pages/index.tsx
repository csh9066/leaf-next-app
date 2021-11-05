import type { NextPage } from "next";
import { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../components/common/Header";
import Layout from "../components/common/Layout";
import NavBar from "../components/common/NavBar";
import ProductCard from "../components/product/ProductCard";

const IndexPage: NextPage = () => {
  return (
    <main className="pt-12 pb-14 bg-white">
      <div className="pl-5 py-10 border-b-2">
        <div className="font-bold text-black text-xl mb-5">신규 상품</div>
        <Swiper spaceBetween={10} slidesPerView="auto" loop>
          <SwiperSlide style={{ width: "55%" }}>
            <ProductCard
              href="/"
              brand="당신의식탁1"
              price={50000}
              name={"아메리카노 머그 300ml"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="pl-5 py-10">
        <div className="font-bold text-black text-xl mb-5">추천 상품</div>
        <Swiper spaceBetween={10} slidesPerView="auto" loop>
          <SwiperSlide style={{ width: "55%" }}>
            <ProductCard
              href="/"
              brand="당신의식탁1"
              price={50000}
              name={"아메리카노 머그 300ml"}
            />
          </SwiperSlide>
          <SwiperSlide style={{ width: "55%" }}>
            <ProductCard
              href="/"
              brand="당신의식탁2"
              price={50000}
              name={"아메리카노 머그 300ml"}
            />
          </SwiperSlide>
          <SwiperSlide style={{ width: "55%" }}>
            <ProductCard
              href="/"
              brand="당신의식탁3"
              price={50000}
              name={"아메리카노 머그 300ml"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Header type="default" />
      {page}
      <NavBar />
    </Layout>
  );
};

export default IndexPage;
