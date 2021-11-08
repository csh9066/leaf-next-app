import { useContext } from "react";
import { LoginModalContext } from "../lib/context/GlobalContext";

export default function useLoginModal() {
  const { visible, setVisible } = useContext(LoginModalContext);

  const onClose = () => {
    setVisible(false);
  };

  const onOpen = () => {
    setVisible(true);
  };

  return {
    visible,
    onClose,
    onOpen,
  };
}
