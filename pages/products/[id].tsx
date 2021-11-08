import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import React, { ReactElement } from "react";
import useSWR, { useSWRConfig } from "swr";
import Header from "../../components/common/Header";
import Layout from "../../components/common/Layout";
import ProductView from "../../components/product/ProductView";
import { getProductById } from "../../lib/api/product";

interface Props {}

const ProductsPage: NextPage = (props: Props) => {
  return <ProductView />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const productRes = await getProductById(params.id);
    return {
      props: {
        fallback: {
          [productRes.config.url as string]: productRes.data,
        },
      },
    };
  } catch (e) {
    if (e.response.status) {
      return {
        notFound: true,
      };
    }
  }
};

ProductsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Header type="navigator" />
      {page}
    </Layout>
  );
};

export default ProductsPage;
