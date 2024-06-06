import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";

import FooterFour from "@/src/layout/footers/footer-4";
import React from "react";
import Notice from "@/src/components/notice_of_auction/index3";

import Government from "@/src/components/government/index2";
import HeaderFour from "@/src/layout/headers/header-4";
import Auction from "@/public/images/navbar/Auction.png";


const NoticeOfAuction = () => {
  return (
    <>
      {/* <HeaderTen /> */}
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={"ແຈ້ງການ​ປະ​ມູນ"} imgbread={Auction} />
            <Notice />
            {/* <Government /> */}
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default NoticeOfAuction;