import React, { useState } from "react";
import useSWR from "swr";
import { OrderItem } from "../../types/order";
import Button from "../ui/Button";
import WriteReview from "./WriteReview";

function WriteableReviews() {
  const [visibleWriteReivewModal, setVisibleWriteReivewModal] = useState(false);
  const [currentModalIdx, setCurrentModalIdx] = useState(0);
  const { data } = useSWR<OrderItem[]>(`/order?is_write_review=${true}`);

  const onCloseModal = () => {
    setVisibleWriteReivewModal(false);
  };

  const onOpenModal = (idx: number) => {
    setVisibleWriteReivewModal(true);
    setCurrentModalIdx(idx);
  };

  return (
    <>
      <div>
        {data?.map((i) => (
          <div className="px-5 py-7 border-b" key={i.id}>
            <div className="mb-2 font-bold">{i.brandName}</div>
            <div className="flex justify-between mb-5">
              <div className="text-gray-400">{i.productName}</div>
              <div className="w-20 h-20 border"></div>
            </div>
            <Button variant="ghost" onClick={() => onOpenModal(i.id)}>
              리뷰 쓰기
            </Button>
          </div>
        ))}
      </div>
      <WriteReview
        onClose={onCloseModal}
        id={currentModalIdx}
        visible={visibleWriteReivewModal}
      />
    </>
  );
}

export default WriteableReviews;
