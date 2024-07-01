import React from "react";
import SEO from "../common/seo";
import Knowledge from "../components/knowledge";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ຄວາມ​ຮູ້​ກ່ຽວ​ກັບ​ໄຟ​ຟ້າ"} />
      <Knowledge />
    </Wrapper>
  );
};

export default index;