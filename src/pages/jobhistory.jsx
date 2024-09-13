import React from "react";
import SEO from "../common/seo";
import JobHistory from "../components/jobhistory";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ປະ​ຫວັດ​ສະ​ໝັກ​ວຽກ​ທັງ​ໝົດ"} />
      <JobHistory />
    </Wrapper>
  );
};

export default index;