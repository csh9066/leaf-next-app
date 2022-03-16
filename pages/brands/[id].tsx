import { ReactElement } from "react";
import BrandDetailView from "../../components/brands/BrandDetailView";
import Header from "../../components/common/Header";
import Layout from "../../components/common/Layout";

const BrandDetailPage = () => {
  return <BrandDetailView />;
};

BrandDetailPage.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      <Header type="navigator" />
      {page}
    </Layout>
  );
};

export default BrandDetailPage;
