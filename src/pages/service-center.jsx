import React from "react";
import SEO from "../common/seo";
import ServiceCenter from "../components/service-center";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ສູນ​ບໍ​ລິ​ການ"} />
      <ServiceCenter />
    </Wrapper>
  );
};

export default index;