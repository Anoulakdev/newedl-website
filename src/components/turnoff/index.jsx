import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";

import FooterFour from "@/src/layout/footers/footer-4";
import React from "react";

import Government from "@/src/components/government/index2";
import HeaderFour from "@/src/layout/headers/header-4";
import Off from "@/src/components/turnoff/off";
import imgbread from "@/public/images/navbar/Cutoff.png";

const TurnOff = () => {
  return (
    <>
      {/* <HeaderTen /> */}
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={"ແຈ້ງມອດ​ໄຟ​"} imgbread={imgbread} />
            <Off />
            {/* <Government /> */}
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default TurnOff;