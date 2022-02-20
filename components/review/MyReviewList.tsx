import React from "react";
import useFetchMyReviews from "../../hooks/fetch/useFetchMyReviews";
import useMyReveiws from "../../hooks/service/useMyReviews";
import api from "../../lib/api/api";
import Button from "../ui/Button";

function MyReviewList() {
  const { reviews } = useFetchMyReviews();
  const { deleteReveiws } = useMyReveiws();

  return (
    <div>
      {reviews?.map((r) => (
        <div className="px-5 py-7 border-b" key={r.id}>
          <div className="mb-2 font-bold">{r.brandName}</div>
          <div className="flex justify-between mb-5">
            <div className="text-gray-400 mr-10">{r.productName}</div>
            <div className="w-20 h-20 border"></div>
          </div>
          <div className="mb-5 text-sm">{r.content}</div>
          <div className="flex">
            <Button size="sm" variant="ghost" block={false}>
              수정
            </Button>
            <Button
              size="sm"
              variant="ghost"
              block={false}
              onClick={() => deleteReveiws(r.id)}
            >
              삭제
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyReviewList;
