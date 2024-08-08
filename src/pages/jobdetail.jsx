import React from "react";
import SEO from "../common/seo";
import JobDetail from "../components/jobdetail";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ລາຍ​ລະ​ອຽດປະ​ກາດ​ຮັບ​ສະ​ໝັກ"} />
      <JobDetail />
    </Wrapper>
  );
};

export default index;