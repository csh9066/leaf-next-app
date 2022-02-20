import React, { ReactElement, useMemo, useState } from "react";
import Link from "next/link";
import { SwiperSlide, Swiper } from "swiper/react";
import s from "./ProductView.module.scss";
import Container from "../../ui/Container";
import Button from "../../ui/Button";
import Heart from "../../icon/Heart";
import PurchaseModal from "../PurchaseModal";
import useFetchProduct from "../../../hooks/fetch/useFetchProduct";
import { useRouter } from "next/router";
import useFetchProductReivews from "../../../hooks/fetch/useFetchProductReviews";
import ProductViewNav from "./ProductViewNav";
import moment from "moment";
import RightOutlined from "../../icon/RightOutlined";

function ProductView() {
  const router = useRouter();
  const productId = useMemo(() => Number(router.query.id), [router.query.id]);
  const { data: product } = useFetchProduct(productId);
  const { reviews, error, loading } = useFetchProductReivews(productId);

  const [purchaseModalVisible, setPurchaseModalVisible] = useState(false);

  const onClosePurchaseModal = () => {
    setPurchaseModalVisible(false);
  };

  const onOpenPruchaseModal = () => {
    setPurchaseModalVisible(true);
  };

  return (
    <main className={s.root}>
      <Swiper loop spaceBetween={10}>
        <SwiperSlide>
          <img
            src="https://morestore.co.kr/web/product/medium/202012/d9c2ae46f25dcea96ee61a0a2746f57c.jpg"
            alt=""
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
      <div className="p-5">
        <p className="text-base text-gray-400">{product?.name}</p>
        <p className="text-2xl font-bold mt-2">
          {product?.price?.toLocaleString()}
        </p>
      </div>
      <Link href={`/brand/${product?.brand.id}`}>
        <a className={s.brand}>
          <div>{product?.brand.name}</div>
          <div className="flex items-center">
            <RightOutlined />
          </div>
        </a>
      </Link>
      <div id="detail"></div>
      <ProductViewNav />
      <section className="p-5 mt-10">
        <div className="text-xl font-semibold mb-5">상품 상세</div>
        <div>
          <img
            src="https://img.29cm.co.kr/next-product/2021/09/13/d9dbb57e7f9f42e8b60b6e2ff1a1112a_20210913163037.jpg?width=1000"
            alt=""
          />
        </div>
      </section>
      <div id="reviews"></div>
      <section className="mt-10">
        <div className="px-5 text-xl font-semibold mb-5">
          리뷰 ({reviews?.length})
        </div>
        {reviews?.map((r) => (
          <div className="border-b p-5" key={r.id}>
            <div className="flex justify-between mb-2">
              <div className="font-medium text-sm">{r.author}</div>
              <div className="font-medium text-sm text-gray-400">
                {moment(r.updatedAt).format("yyyy.MM.DD")}
              </div>
            </div>
            <p className="font-normal text-sm">{r.content}</p>
          </div>
        ))}
      </section>
      <Container className={s.bottomButtons}>
        <div className={s.like}>
          <Heart />
        </div>
        <Button onClick={() => onOpenPruchaseModal()}>구매하기</Button>
      </Container>
      <PurchaseModal
        visible={purchaseModalVisible}
        onClose={onClosePurchaseModal}
        productId={productId}
      />
    </main>
  );
}

export default ProductView;
