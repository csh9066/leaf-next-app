import React, { ReactElement } from "react";
import Link from "next/link";

interface Props {
  href: string;
  brand: string;
  price: number;
  name: string;
}

function ProductCard({ href, name, price, brand }: Props): ReactElement {
  return (
    <Link href={href}>
      <a>
        <img
          src="https://morestore.co.kr/web/product/medium/202012/d9c2ae46f25dcea96ee61a0a2746f57c.jpg"
          alt=""
        />
        <p className="mt-3 text-sm text-black">{brand}</p>
        <p className="mt-1 text-sm text-gray-500">{name}</p>
        <p className="mt-6 text-lg font-bold">{price.toLocaleString()}</p>
      </a>
    </Link>
  );
}

export default ProductCard;
