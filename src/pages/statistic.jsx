import React from "react";
import SEO from "../common/seo";
import Statistic from "../components/statistic";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ສະ​ຖ​ິ​ຕິ"} />
      <Statistic />
    </Wrapper>
  );
};

export default index;