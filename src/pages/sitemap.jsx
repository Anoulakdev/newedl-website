import React from "react";
import SEO from "../common/seo";
import Sitemap from "../components/sitemap";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ຂ່າວ​ສານ"} />
      <Sitemap />
    </Wrapper>
  );
};

export default index;