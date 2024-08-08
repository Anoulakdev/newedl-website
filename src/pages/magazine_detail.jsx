import React from "react";
import SEO from "../common/seo";
import Magazinedetail from "../components/magazine_detail";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ລາຍ​ລະ​ອຽດ​ວາ​ລະ​ສານ"} />
      <Magazinedetail />
    </Wrapper>
  );
};

export default index;