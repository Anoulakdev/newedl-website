import React from "react";
import SEO from "../common/seo";
import KnowDetail from "../components/know_detail";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ລາຍ​ລະ​ອຽດ​ຄວາມ​ຮູ້​ກ່ຽວ​ກັບ​ໄຟ​ຟ້າ"} />
      <KnowDetail />
    </Wrapper>
  );
};

export default index;