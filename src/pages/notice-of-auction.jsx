import React from "react";
import SEO from "../common/seo";
import NoticeOfAuction from "../components/notice_of_auction";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ແຈ້ງການ​ປະ​ມູນ"} />
      <NoticeOfAuction />
    </Wrapper>
  );
};

export default index;