import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";

import FooterFour from "@/src/layout/footers/footer-4";
import React from "react";

import HeaderFour from "@/src/layout/headers/header-4";
import SiteMap from "@/src/components/sitemap/sitemap";
import imgbread from "@/public/images/navbar/Cutoff.png";

const Sitemap = () => {
  return (
    <>
      {/* <HeaderTen /> */}
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* <BreadcrumbTwo title={"ແຈ້ງມອດ​ໄຟ​"} imgbread={imgbread} /> */}
            <SiteMap />
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default Sitemap;