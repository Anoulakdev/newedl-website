import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";

import FooterFour from "@/src/layout/footers/footer-4";
import React from "react";
import Legislation from "@/src/components/legislation/legislation";

import Government from "@/src/components/government/index2";
import HeaderFour from "@/src/layout/headers/header-4";
import imgbread from "@/public/images/navbar/Form.png";


const LegisLation = () => {
  return (
    <>
      {/* <HeaderTen /> */}
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={"ນິ​ຕິ​ກຳ"} imgbread={imgbread} />
            <Legislation />
            {/* <Government /> */}
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default LegisLation;