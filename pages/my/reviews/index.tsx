import React, { ReactElement } from "react";
import ArrowBackHeader from "../../../components/common/ArrowBackHeader";
import Layout from "../../../components/common/Layout";
import MyReviewView from "../../../components/review/MyReviewView";

type Props = {};

export default function MyReviewPage({}: Props) {
  return <MyReviewView />;
}

MyReviewPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <ArrowBackHeader>작성한 리뷰</ArrowBackHeader>
      {page}
    </Layout>
  );
};
