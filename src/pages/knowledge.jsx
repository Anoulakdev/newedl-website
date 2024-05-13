import React from "react";
import SEO from "../common/seo";
import Knowledge from "../components/knowledge";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"​ສາ​ລະ​ໜ້າ​ຮູ້"} />
      <Knowledge />
    </Wrapper>
  );
};

export default index;