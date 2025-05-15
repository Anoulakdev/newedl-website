import React from "react";
import SEO from "../common/seo";
import Privacy from "../components/privacy";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Privacy"} />
      <Privacy />
    </Wrapper>
  );
};

export default index;
