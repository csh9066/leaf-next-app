import React from "react";
import DaumPostcode, { Address } from "react-daum-postcode";
import Container from "../ui/Container";

type Props = {
  visible: boolean;
  onComplete: (address: Address) => void;
  onClose: () => void;
};

function DaumPostCodeModal({ visible, onComplete, onClose }: Props) {
  if (!visible) {
    return null;
  }

  const onCloseModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    onClose();
  };

  const onCompleteModal = (address: Address) => {
    onComplete(address);
    onClose();
  };

  return (
    <div
      className="bg-black bg-opacity-40  z-20 fixed inset-0 flex justify-center items-center"
      onClick={onCloseModal}
    >
      <Container className="bg-white">
        <DaumPostcode onComplete={onCompleteModal} />
      </Container>
    </div>
  );
}

export default DaumPostCodeModal;
