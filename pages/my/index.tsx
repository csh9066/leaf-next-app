import { ReactElement } from "react";
import Link from "next/link";
import FooterNavBar from "../../components/common/FooterNavBar";
import Header from "../../components/common/Header";
import Layout from "../../components/common/Layout";
import Settings from "../../components/icon/Settings";
import ShoppingBag from "../../components/icon/ShoppingBag";
import useUserInfo from "../../hooks/useUserInfo";

const MyPage = () => {
  const { userInfo } = useUserInfo();

  return (
    <main className="pt-12 pb-14 bg-white">
      <div className="px-5 pb-10 pt-9 border-b">
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-semibold">
            {userInfo ? `${userInfo.nickName}님` : "로그인하세요"}
          </div>
          <div className="flex justify-center items-center w-12 h-9 border rounded-2xl">
            <Settings />
          </div>
        </div>
        {userInfo ? (
          <p className="text-gray-400">
            {userInfo.nickName} 님 안녕하세요
            <br />
            Welcome :)
          </p>
        ) : (
          <p className="text-gray-400">
            환영합니다.<br></br>
            로그인 후 다양한 혜택을 받으세요.
          </p>
        )}
      </div>
      <div className="px-5 pt-12">
        <div className="flex items-center mb-7">
          <ShoppingBag />
          <div className="text-lg font-bold ml-2">나의 쇼핑활동 </div>
        </div>
        <div className="h-11 flex items-center border-b font-normal">
          찜한 상품
        </div>
        <Link href="/my/orders">
          <a className="h-11 flex items-center border-b font-normal">
            주문/배송 확인
          </a>
        </Link>
        <Link href="/my/reviews">
          <a className="h-11 flex items-center border-b font-normal">
            작성한 리뷰
          </a>
        </Link>
        <div className="h-11 flex items-center border-b font-normal">
          문의내용 확인(Q&A)
        </div>
      </div>
    </main>
  );
};

MyPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Header type="navigator" />
      {page}
      <FooterNavBar />
    </Layout>
  );
};

export default MyPage;
