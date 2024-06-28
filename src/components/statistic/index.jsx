import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";

import FooterFour from "@/src/layout/footers/footer-4";
import React from "react";
import Statistic from "@/src/components/statistic/statistic";

import Government from "@/src/components/government/index2";
import HeaderFour from "@/src/layout/headers/header-4";

const StaTistic = () => {
  return (
    <>
      {/* <HeaderTen /> */}
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={"ສະ​ຖ​ິ​ຕິ"} />
            <Statistic />
            {/* <Government /> */}
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default StaTistic;
