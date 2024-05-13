import React from "react";
import SEO from "../common/seo";
import NewsDetail from "../components/newsdetail";
import Wrapper from "../layout/wrapper";


const index = () => {


  // console.log("newsId===>",newsdetail);
  return (
    <Wrapper>
      <SEO pageTitle={"ລາຍ​ລະ​ອຽດ​ຂ່າວ"} />
      <NewsDetail  />
    </Wrapper>
  );
};

export default index;