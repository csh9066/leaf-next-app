import { ReactElement } from "react";
import Header from "../components/common/Header";
import Layout from "../components/common/Layout";
import FooterNavBar from "../components/common/FooterNavBar";
import ProductCard from "../components/product/ProductCard";
import useSearchProductList from "../hooks/fetch/useSearchProductList";

const StorePage = () => {
  const { products } = useSearchProductList();

  return (
    <main className="bg-white pt-12 pb-14">
      <div>
        <div className="flex border-b text-gray-400">
          <div className="mx-5 h-11 flex items-center border-b-2 border-black text-black">
            전체
          </div>
        </div>
      </div>
      <div className="p-5 flex flex-wrap">
        {products?.map((p) => (
          <div key={p.id} className="w-1/2 px-1 pb-5">
            <ProductCard product={p} />
          </div>
        ))}
        {products?.map((p) => (
          <div key={p.id} className="w-1/2 px-1">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </main>
  );
};

StorePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Header type="default" />
      <FooterNavBar />
      {page}
    </Layout>
  );
};

export default StorePage;
