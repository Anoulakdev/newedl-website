import React from "react";
import SEO from "../common/seo";
import BranchOrganize from "../components/branch_organize";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ໂຄງ​ຮ່າງສາ​ຂາແຂວງ"} />
      <BranchOrganize />
    </Wrapper>
  );
};

export default index;