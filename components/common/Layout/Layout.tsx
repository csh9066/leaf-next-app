import React, { ReactElement } from "react";
import s from "./Laoout.module.css";
import Container from "../../ui/Container";

interface Props {
  Header: React.ReactElement;
  children: React.ReactElement | any;
  NavBar?: React.ReactElement;
}

function Layout({ Header, children, NavBar }: Props): ReactElement {
  return (
    <div className={s.root}>
      <Container>
        {Header}
        <main className={s.main}>{children}</main>
        {NavBar}
      </Container>
    </div>
  );
}

export default Layout;
