import React from "react";
import SEO from "../common/seo";
import DownloadForm from "../components/downloadform";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ດາວ​ໂຫລດ​ແບບ​ຟອມ"} />
      <DownloadForm />
    </Wrapper>
  );
};

export default index;