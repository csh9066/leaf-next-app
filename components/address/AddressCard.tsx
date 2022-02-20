import React from "react";
import useFetchAddressList from "../../hooks/fetch/useFetchAddressList";
import useAddress from "../../hooks/service/useAddres";
import Button from "../ui/Button";

type Props = {
  addressId: number;
  onClose: () => void;
};

function AddressCard({ addressId, onClose }: Props) {
  const { addresses } = useFetchAddressList();
  const { deleteAddress, selectAddress } = useAddress();

  const currentAddress = addresses?.find((address) => address.id === addressId);

  if (!currentAddress) return null;

  const {
    receiver,
    isDefaultAddress,
    address,
    extraAddress,
    zipCode,
    id,
    mainPhone1,
    mainPhone2,
    mainPhone3,
  } = currentAddress;

  return (
    <div
      className={`p-4 border-2 rounded-lg mb-5 ${
        isDefaultAddress && "border-primary"
      }`}
    >
      <div className="flex items-center mb-2">
        <span className="font-bold text-base mr-2">{receiver}</span>
        {isDefaultAddress && (
          <div className="text-xs text-primary">기본배송지</div>
        )}
      </div>

      <div className="leading-6">
        {`${address} ${extraAddress} (${zipCode})`}
      </div>
      <div className="leading-6 mb-5">{`${mainPhone1}-${mainPhone2}-${mainPhone3}`}</div>
      <div className="flex justify-between">
        <div className="flex">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              deleteAddress(id);
            }}
          >
            삭제
          </Button>
          <Button size="sm" variant="ghost">
            수정
          </Button>
        </div>
        <Button
          size="sm"
          block={false}
          onClick={() => {
            selectAddress(id);
            onClose();
          }}
        >
          선택
        </Button>
      </div>
    </div>
  );
}

export default AddressCard;
