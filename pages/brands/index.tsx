import { ReactElement } from "react";
import BrandsListView from "../../components/brands/BrandsListView";
import FooterNavBar from "../../components/common/FooterNavBar";
import Header from "../../components/common/Header";
import Layout from "../../components/common/Layout";

const BrnadsPage = () => {
  return <BrandsListView />;
};

BrnadsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Header type="default" />
      {page}
      <FooterNavBar />
    </Layout>
  );
};

export default BrnadsPage;
