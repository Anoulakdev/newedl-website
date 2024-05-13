import React from "react";
import SEO from "../common/seo";
import ServiceFee from "../components/service-fee";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ຄ່າ​ບໍ​ລິ​ການ"} />
      <ServiceFee />
    </Wrapper>
  );
};

export default index;