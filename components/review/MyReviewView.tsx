import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MyReviewList from "./MyReviewList";
import WriteableReviews from "./WriteableReviews";

function MyReviewView() {
  return (
    <main className="bg-white">
      <Tabs selectedTabClassName="bg-white text-black" defaultIndex={1}>
        <TabList className="flex bg-gray-200 text-gray-400 mt-5 mb-5">
          <Tab
            className="font-bold flex items-center justify-center flex-1 cursor-pointer
            h-14
          "
          >
            리뷰작성
          </Tab>
          <Tab className="font-bold flex items-center justify-center flex-1 cursor-pointer h-14 ">
            내 리뷰
          </Tab>
        </TabList>

        <TabPanel>
          <WriteableReviews />
        </TabPanel>
        <TabPanel>
          <MyReviewList />
        </TabPanel>
      </Tabs>
    </main>
  );
}

export default MyReviewView;
