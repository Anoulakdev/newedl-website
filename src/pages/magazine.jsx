import React from "react";
import SEO from "../common/seo";
import Magazine from "../components/magazine";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ວາ​ລະ​ສານ"} />
      <Magazine />
    </Wrapper>
  );
};

export default index;