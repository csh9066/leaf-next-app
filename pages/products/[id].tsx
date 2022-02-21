import { GetServerSidePropsContext } from "next";
import React, { ReactElement } from "react";
import Header from "../../components/common/Header";
import Layout from "../../components/common/Layout";
import ProductView from "../../components/product/ProductView";
import { getProductById } from "../../lib/api/product";

interface Props {}

const ProductsPage = (props: Props) => {
  return <ProductView />;
};

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  if (!params || !params.id) {
    return;
  }

  try {
    const productRes = await getProductById(params.id as string);
    return {
      props: {
        fallback: {
          [productRes.config.url as string]: productRes.data,
        },
      },
    };
  } catch (error) {
    // const e = error
    // if (e.response.status) {
    //   return {
    //     notFound: true,
    //   };
    // }
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
