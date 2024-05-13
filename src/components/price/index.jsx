import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";

import FooterFour from "@/src/layout/footers/footer-4";
import React from "react";
import PriceArea from "@/src/components/price/price-area";
import Government from "@/src/components/government/index2";
import HeaderFour from "@/src/layout/headers/header-4";
import imgbread from "@/public/images/navbar/Region.png"

const Price = () => {
  return (
    <>
      {/* <HeaderTen /> */}
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={"​ອັດ​ຕາ​ລາ​ຄາ​ໄຟ"} imgbread={imgbread} />
            <PriceArea />
            <Government />
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default Price;
