import React from "react";
import SEO from "../common/seo";
import NewsList from "../components/newslist";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ຂ່າວ​ສານ"} />
      <NewsList />
    </Wrapper>
  );
};

export default index;
