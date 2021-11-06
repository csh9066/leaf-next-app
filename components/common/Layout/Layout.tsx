import React, { ReactElement } from "react";
import Container from "../../ui/Container";

interface Props {
  children: React.ReactElement | any;
}

function Layout({ children }: Props): ReactElement {
  return <Container className="bg-white h-screen">{children}</Container>;
}

export default Layout;
