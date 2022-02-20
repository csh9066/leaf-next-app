import { ReactElement } from "react";
import Layout from "../../../components/common/Layout";
import MyOrderListView from "../../../components/order/MyOrderListView/MyOrderListView";

const MyPageOrders = () => {
  return <MyOrderListView />;
};

MyPageOrders.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default MyPageOrders;
