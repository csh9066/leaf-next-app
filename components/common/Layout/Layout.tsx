import React, { ReactElement } from "react";
import s from "./Laoout.module.css";
import Container from "../../ui/Container";

interface Props {
  children: React.ReactElement | any;
}

function Layout({ children }: Props): ReactElement {
  return (
    <div className={s.root}>
      <Container className="bg-white h-screen">{children}</Container>
    </div>
  );
}

export default Layout;
