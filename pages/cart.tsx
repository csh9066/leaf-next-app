import { ReactElement } from "react";
import CartView from "../components/cart/CartView";
import ArrowBackHeader from "../components/common/ArrowBackHeader";
import Layout from "../components/common/Layout";

const CartPage = () => {
  return <CartView />;
};

CartPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <ArrowBackHeader />
      {page}
    </Layout>
  );
};

export default CartPage;
