import React from "react";
import SEO from "../common/seo";
import Comment from "../components/comment";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ສະ​ແດງ​ຄຳ​ຄິດ​ເຫັນຕໍ່​ ຟ​ຟ​ລ"} />
      <Comment />
    </Wrapper>
  );
};

export default index;