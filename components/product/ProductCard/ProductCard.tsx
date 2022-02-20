import React, { ReactElement } from "react";
import Link from "next/link";
import { Product } from "../../../types/product";

interface Props {
  product: Product;
}

function ProductCard({ product }: Props): ReactElement {
  return (
    <Link href={`/products/${product.id}`}>
      <a>
        <img
          src="https://img.29cm.co.kr/next-product/2021/03/21/230ed7ca6c164fb4a32bd8100722d872_20210321234715.jpg?width=500"
          alt=""
        />
        <p className="mt-3 text-sm text-black">{product.brand.name}</p>
        <p className="mt-1 text-sm text-gray-400">{product.name}</p>
        <p className="mt-1 text-lg font-bold">
          {product.price.toLocaleString()} 원
        </p>
      </a>
    </Link>
  );
}

export default ProductCard;
