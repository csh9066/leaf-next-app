import React, { useState } from "react";
import useSWR from "swr";
import api from "../../lib/api/api";
import { OrderItem } from "../../types/order";
import ArrowBackHeader from "../common/ArrowBackHeader";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Modal from "../ui/Modal";

interface Props {
  onClose: () => void;
  id: number;
  visible: boolean;
}

function WriteReview({ onClose, id, visible }: Props) {
  const { data, mutate } = useSWR<OrderItem[]>(
    `/order?is_write_review=${true}`
  );
  const item = data?.find((i) => i.id == id);
  const [content, setContent] = useState("");
  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onSubmit = async () => {
    try {
      await api.post("/products/reviews", {
        content,
        orderItemId: item?.id,
      });
      mutate();
      onClose();
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Modal onClose={onClose} visible={visible} mode="white">
      <div className="bg-white h-full">
        <ArrowBackHeader onClose={onClose}>안녕</ArrowBackHeader>
        <div className="px-5 pt-10 pb-5 border-b-2">
          <div className="mb-2 font-bold">Terrible Studio</div>
          <div className="flex justify-between mb-5">
            <div className="text-gray-400">
              seoul finest hustler 오가닉 코튼 타이다이 티셔츠
            </div>
            <div className="w-20 h-20 border"></div>
          </div>
        </div>

        <div className="p-5 border-b-2">
          <div className="font-bold mb-5">리뷰쓰기</div>
          <textarea
            className="border h-40 w-full p-4"
            value={content}
            onChange={onChangeContent}
          ></textarea>
        </div>

        <div className="p-5 pb-32">
          <div className="font-bold mb-5">사진첨부</div>
          <div className="w-24 h-24 bg-gray-400"></div>
        </div>

        <div className="p-5">
          <Button onClick={onSubmit}>등록</Button>
        </div>
      </div>
    </Modal>
  );
}

export default WriteReview;
