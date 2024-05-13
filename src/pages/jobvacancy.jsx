import React from "react";
import SEO from "../common/seo";
import JobVacancy from "../components/jobvacancy";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ປະ​ກາດ​ຮັບ​ສະ​ໝັກ"} />
      <JobVacancy />
    </Wrapper>
  );
};

export default index;