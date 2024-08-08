import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";

import FooterFour from "@/src/layout/footers/footer-4";
import React from "react";
import MagazineList from "@/src/components/magazine/magazinelist1";

import Government from "@/src/components/government/index2";
import HeaderFour from "@/src/layout/headers/header-4";
import imgbread from "@/public/images/navbar/Magazine.png";

const Magazine = () => {
  return (
    <>
      {/* <HeaderTen /> */}
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={"ວາ​ລະ​ສານ"} imgbread={imgbread} />
            <MagazineList />
            {/* <Government /> */}
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default Magazine;