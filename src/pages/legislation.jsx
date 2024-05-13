import React from "react";
import SEO from "../common/seo";
import Legislation from "../components/legislation";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"​ນິ​ຕິ​ກຳ"} />
      <Legislation />
    </Wrapper>
  );
};

export default index;