import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";

import FooterFour from "@/src/layout/footers/footer-4";
import React from "react";
import DownLoadForm from "@/src/components/downloadform/downloadform";

import Government from "@/src/components/government/index2";
import HeaderFour from "@/src/layout/headers/header-4";
import imgbread from "@/public/images/navbar/Form.png";


const DownloadForm = () => {
  return (
    <>
      {/* <HeaderTen /> */}
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={"ດາວ​ໂຫລດ​ແບບ​ຟອມ"} imgbread={imgbread} />
            <DownLoadForm />
            {/* <Government /> */}
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default DownloadForm;