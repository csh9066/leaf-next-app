import React from "react";
import Link from "next/link";
import useFetchBrandList from "../../hooks/fetch/useFetchBrandList";

function BrandsListView() {
  const { brands } = useFetchBrandList();
  return (
    <main className="pt-12 pb-14 bg-white">
      <div className="grid grid-cols-2 gap-x-2 gap-y-10 px-5 pt-3 pb-10">
        {brands?.map((b) => (
          <Link href={`/brands/${b.id}`} key={b.id}>
            <a className="cursor-pointer">
              <div className="mb-3">
                <img src="https://img.29cm.co.kr/next-product/2022/02/10/f0f21edcc12a48afa916464c5d360628_20220210152852.jpeg?width=900" />
              </div>
              <div className="text-sm font-normal">{b.name}</div>
              <div className="text-sm leading-4 max-h-12  overflow-hidden overflow-ellipsis text-gray-400 ">
                {b.description}
              </div>
            </a>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default BrandsListView;
