import React from "react";
import SEO from "../common/seo";
import Iso from "../components/iso";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ມາດ​ຕະ​ຖານ ISO"} />
      <Iso />
    </Wrapper>
  );
};

export default index;
