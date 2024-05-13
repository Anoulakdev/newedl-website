import React from "react";
import SEO from "../common/seo";
import DownloadForm from "../components/downloadform";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"​ນິ​ຕິ​ກຳ"} />
      <DownloadForm />
    </Wrapper>
  );
};

export default index;