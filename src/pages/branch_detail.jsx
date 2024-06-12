import React from "react";
import SEO from "../common/seo";
import BranchDetail from "../components/branch_detail";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ໂຄງ​ຮ່າງສາ​ຂາແຂວງ"} />
      <BranchDetail />
    </Wrapper>
  );
};

export default index;