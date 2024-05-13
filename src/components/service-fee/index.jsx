import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";

import FooterFour from "@/src/layout/footers/footer-4";
import React from "react";
import Servicefee from "@/src/components/service-fee/servicefee";

import Government from "@/src/components/government/index2";
import HeaderFour from "@/src/layout/headers/header-4";
import Auction from "@/public/images/navbar/Region.png";


const ServiceFee = () => {
  return (
    <>
      {/* <HeaderTen /> */}
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={"ຄ່າ​ບໍ​ລິ​ການ"} imgbread={Auction} />
            <Servicefee />
            <Government />
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default ServiceFee;