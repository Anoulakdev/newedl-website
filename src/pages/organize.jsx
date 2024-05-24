import React from "react";
import SEO from "../common/seo";
import Organize from "../components/organize";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ໂຄງ​ຮ່າງການ​ຈັດ​ຕັ້ງ"} />
      <Organize />
    </Wrapper>
  );
};

export default index;