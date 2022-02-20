import React from "react";
import useFetchAddressList from "../../hooks/fetch/useFetchAddressList";
import ArrowBackHeader from "../common/ArrowBackHeader";
import Container from "../ui/Container";
import AddressCard from "./AddressCard";

type Props = {
  onClose: () => void;
  onSetModeCreate: () => void;
};

function AddressList({ onClose, onSetModeCreate }: Props) {
  const { addresses } = useFetchAddressList();

  if (!addresses) return null;

  return (
    <Container className="fixed inset-0 bg-white z-20 overflow-y-scroll">
      <ArrowBackHeader onClose={onClose}>배송지 변경</ArrowBackHeader>
      <div className="h-16 px-5  flex items-center justify-between border-b">
        <span className="text-lg font-semibold">배송지 정보</span>
        <button
          className="text-primary font-bold text-sm"
          onClick={onSetModeCreate}
        >
          배송지 추가
        </button>
      </div>
      <div className="p-5">
        {addresses.map((address) => (
          <AddressCard
            key={address.id}
            addressId={address.id}
            onClose={onClose}
          />
        ))}
      </div>
    </Container>
  );
}

export default AddressList;
