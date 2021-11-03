import type { NextPage } from "next";
import BaseHeader from "../components/common/BaseHeader";
import Layout from "../components/common/Layout";
import NavBar from "../components/common/NavBar";

const IndexPage: NextPage = () => {
  return (
    <Layout Header={<BaseHeader />} NavBar={<NavBar />}>
      <div className="px-5">index</div>
    </Layout>
  );
};
export default IndexPage;
