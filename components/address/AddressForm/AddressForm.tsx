import React, { useState } from "react";
import { Address } from "react-daum-postcode";
import { AddressForm } from "../../../types/address";
import CheckBox from "../../ui/CheckBox";
import Input from "../../ui/Input";
import DaumPostCodeModal from "../DaumPostCodeModal";
import s from "./AddressForm.module.scss";

interface Props {
  form: AddressForm;
  onChangeForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleIsDefaultAddress: () => void;
  onComplete: (address: Address) => void;
}

function AddressForm({
  form,
  onChangeForm,
  onToggleIsDefaultAddress,
  onComplete,
}: Props) {
  const {
    address,
    extraAddress,
    isDefaultAddress,
    mainPhone1,
    mainPhone2,
    mainPhone3,
    receiver,
    zipCode,
    subPhone1,
    subPhone2,
    subPhone3,
  } = form;

  const [visiblePostCodeModal, setVisiblePostCodeModal] = useState(false);

  const onOpenModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setVisiblePostCodeModal(!visiblePostCodeModal);
  };

  const onCloseModal = () => {
    setVisiblePostCodeModal(false);
  };

  return (
    <>
      <DaumPostCodeModal
        onComplete={onComplete}
        visible={visiblePostCodeModal}
        onClose={onCloseModal}
      />
      <form className="px-5 pt-7">
        <div className="flex mb-2 h-11">
          <label className={s.label}>수령인</label>
          <Input
            type="text"
            onChange={onChangeForm}
            value={receiver}
            name="receiver"
          />
        </div>

        <div className="flex mb-2">
          <label className={s.label}>배송지</label>
          <Input
            type="text"
            className="block border h-11 flex-1 mr-2"
            onChange={onChangeForm}
            value={zipCode}
            name="zipCode"
            readOnly
          />
          <button className={s.postCodeBtn} onClick={onOpenModal}>
            우편번호
          </button>
        </div>
        {/* <DaumPostcode className="border m-2 p-3" autoClose /> */}

        <div className="flex mb-2">
          <div className={s.label}></div>
          <Input
            type="text"
            className="block border h-11 flex-1"
            onChange={onChangeForm}
            value={address}
            name="address"
            readOnly
          />
        </div>

        <div className="flex mb-2">
          <div className={s.label}></div>
          <Input
            type="text"
            className="block border h-11 flex-1"
            onChange={onChangeForm}
            value={extraAddress}
            name="extraAddress"
            placeholder="상세주소 입력"
          />
        </div>

        <div className="flex mb-2 items-center">
          <div className={s.label}>연락처1</div>
          <Input
            type="text"
            className="w-16"
            onChange={onChangeForm}
            value={mainPhone1}
            name="mainPhone1"
            block={false}
          />
          <span className="w-6 text-center">-</span>
          <Input
            className="w-16"
            block={false}
            type="text"
            onChange={onChangeForm}
            value={mainPhone2}
            name="mainPhone2"
          />
          <span className="w-6 text-center">-</span>
          <div className="w-16">
            <Input
              className="w-16"
              block={false}
              type="text"
              onChange={onChangeForm}
              value={mainPhone3}
              name="mainPhone3"
            />
          </div>
        </div>

        <div className="flex mb-5 items-center">
          <div className={s.label}>연락처2</div>
          <Input
            block={false}
            type="text"
            className="w-16"
            onChange={onChangeForm}
            value={subPhone1}
            name="subPhone1"
          />
          <span className="w-6 text-center">-</span>
          <Input
            type="text"
            block={false}
            className="border h-11 w-16"
            onChange={onChangeForm}
            value={subPhone2}
            name="subPhone2"
          />
          <span className="w-6 text-center">-</span>
          <Input
            type="text"
            block={false}
            className="w-16"
            onChange={onChangeForm}
            value={subPhone3}
            name="subPhone3"
          />
        </div>

        <div className="flex">
          <div className={s.label}></div>
          <CheckBox
            checked={isDefaultAddress}
            onChange={onToggleIsDefaultAddress}
          >
            기본 배송지로 등록
          </CheckBox>
        </div>
      </form>
    </>
  );
}

export default AddressForm;
