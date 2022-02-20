import React, { useCallback, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import s from "../../../../styles/common.module.scss";
import cn from "classnames";
import useFetchProductReivews from "../../../../hooks/fetch/useFetchProductReviews";

type Props = {};

function ProductViewNav({}: Props) {
  const router = useRouter();
  const productId = useMemo(() => Number(router.query.id), [router.query.id]);

  const getHashId = () => {
    const hashIndex = router.asPath.indexOf("#");
    return router.asPath.substring(hashIndex + 1);
  };

  const { reviews } = useFetchProductReivews(productId);

  return (
    <ul className={cn(s.nav, "top-11 bg-white sticky")}>
      <li>
        <Link href="#detail" replace={true}>
          <a className={getHashId() === "detail" ? "active" : ""}>상품상세</a>
        </Link>
      </li>
      <li>
        <Link href="#reviews" replace={true}>
          <a className={getHashId() === "reviews" ? "active" : ""}>
            리뷰 ({reviews?.length})
          </a>
        </Link>
      </li>
    </ul>
  );
}

export default ProductViewNav;
