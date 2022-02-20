import { AddressForm } from "../../types/address";
import { useState } from "react";
import { Address } from "react-daum-postcode";

const initialState: AddressForm = {
  receiver: "",
  address: "",
  extraAddress: "",
  zipCode: "",
  mainPhone1: "",
  mainPhone2: "",
  mainPhone3: "",
  subPhone1: "",
  subPhone2: "",
  subPhone3: "",
  isDefaultAddress: false,
};

function useAddressForm() {
  const [form, setForm] = useState<AddressForm>(initialState);

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onCompletePostCode = (address: Address) => {
    setForm({
      ...form,
      zipCode: address.zonecode,
      address: address.address,
    });
  };

  const onToggleIsDefaultAddress = () => {
    setForm({
      ...form,
      isDefaultAddress: !form.isDefaultAddress,
    });
  };

  return {
    form,
    onChangeForm,
    onToggleIsDefaultAddress,
    onCompletePostCode,
  };
}

export default useAddressForm;
