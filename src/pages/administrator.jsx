import React from "react";
import SEO from "../common/seo";
import Administrator from "../components/administrator";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ໂຄງ​ຮ່າງ​ການ​ຈັດ​ຕັ້ງ ລັດ​ວິ​ສາ​ຫະ​ກິດ​ໄຟ​ຟ້າ​ລາວ"} />
      <Administrator />
    </Wrapper>
  );
};

export default index;