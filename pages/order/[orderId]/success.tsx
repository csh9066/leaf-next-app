import React, { ReactElement } from "react";
import Layout from "../../../components/common/Layout";
import OrderSuccessView from "../../../components/order/OrderSuccessView/OrderSuccessView";

function OrderSuccessPage() {
  return <OrderSuccessView />;
}

OrderSuccessPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default OrderSuccessPage;
