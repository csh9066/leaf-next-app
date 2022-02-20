import { ReactElement } from "react";
import CartView from "../components/cart/CartView";
import Header from "../components/common/Header";
import Layout from "../components/common/Layout";

const CartPage = () => {
  return <CartView />;
};

CartPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Header type="navigator" />
      {page}
    </Layout>
  );
};

export default CartPage;
