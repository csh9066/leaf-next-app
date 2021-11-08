import React, { ReactElement } from "react";
import useLoginModal from "../../../hooks/useLoginModal";
import LoginModal from "../../auth/LoginModal/LoginModal";
import Container from "../../ui/Container";

interface Props {
  children: React.ReactElement | any;
}

function Layout({ children }: Props): ReactElement {
  const { visible, onClose } = useLoginModal();
  return (
    <>
      <Container className="bg-white h-screen">{children}</Container>
      <LoginModal visible={visible} onClose={onClose} />
    </>
  );
}

export default Layout;
