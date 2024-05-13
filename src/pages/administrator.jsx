import React from "react";
import SEO from "../common/seo";
import Administrator from "../components/administrator";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ໂຄງ​ຮ່າງ​ສະ​ພາ​ບໍ​ລິ​ຫານ"} />
      <Administrator />
    </Wrapper>
  );
};

export default index;