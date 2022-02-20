import React, { useState } from "react";
import AddressCreate from "./AddressCreate";
import AddressList from "./AddressList";

interface Props {
  onClose: () => void;
}

type Mode = "create" | "modify" | "list";

function AddressModal({ onClose }: Props) {
  const [mode, setMode] = useState<Mode>("list");

  const onSetModeCreate = () => {
    setMode("create");
  };

  const onSetModeList = () => {
    setMode("list");
  };

  if (mode === "list")
    return <AddressList onClose={onClose} onSetModeCreate={onSetModeCreate} />;
  return <AddressCreate onSetModeList={onSetModeList} onClose={onClose} />;
}

export default AddressModal;
