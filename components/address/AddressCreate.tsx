import React from "react";
import useAddress from "../../hooks/service/useAddres";
import useAddressForm from "../../hooks/service/useAddressForm";
import ArrowLeft from "../icon/ArrowLeft";
import Button from "../ui/Button";
import Container from "../ui/Container";
import AddressForm from "./AddressForm";

type Props = {
  onSetModeList: () => void;
  onClose: () => void;
};

function AddressCreate({ onSetModeList, onClose }: Props) {
  const { form, onChangeForm, onToggleIsDefaultAddress, onCompletePostCode } =
    useAddressForm();
  const { createAddress } = useAddress();

  const onSumbitForm = async () => {
    createAddress(form);
    onClose();
  };

  return (
    <Container className="fixed inset-0 bg-white z-20">
      <div className="h-12 px-5 text-lg font-semibold flex items-center">
        <div className="mr-6" onClick={onSetModeList}>
          <ArrowLeft />
        </div>
        배송지 추가
      </div>
      <AddressForm
        form={form}
        onChangeForm={onChangeForm}
        onToggleIsDefaultAddress={onToggleIsDefaultAddress}
        onComplete={onCompletePostCode}
      />
      <Container className="fixed bg-white bottom-0 p-5">
        <Button onClick={onSumbitForm}>추가하기</Button>
      </Container>
    </Container>
  );
}

export default AddressCreate;
