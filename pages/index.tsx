import { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FooterNavBar from "../components/common/FooterNavBar";
import Header from "../components/common/Header";
import Layout from "../components/common/Layout";
import ProductCard from "../components/product/ProductCard";
import useSearchProductList from "../hooks/fetch/useSearchProductList";

const IndexPage = () => {
  const { products } = useSearchProductList();

  return (
    <main className="pt-12 pb-14 bg-white">
      <div className="pl-5 py-10 border-b-2">
        <div className="font-bold text-black text-xl mb-5">신규 상품</div>
        <Swiper spaceBetween={10} slidesPerView="auto">
          {products?.map((p) => (
            <SwiperSlide style={{ width: "55%" }} key={p.id}>
              <ProductCard product={p} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="pl-5 py-10">
        <div className="font-bold text-black text-xl mb-5">추천 상품</div>
      </div>
    </main>
  );
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Header type="default" />
      {page}
      <FooterNavBar />
    </Layout>
  );
};

export default IndexPage;
