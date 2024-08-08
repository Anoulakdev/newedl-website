import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";
import HeroBanner from "@/src/common/hero-banner";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderTen from "@/src/layout/headers/header-10";
import FooterFour from "@/src/layout/footers/footer-4";
import React from "react"; 
import CardArea from "../../common/card-area";
import SalesArea from "../../common/sales-area";
import TestimonialArea from "../../common/testimonial-area";
import CtaArea from "../contact/cta-area";
import FaqArea from "../homes/home-2/faq-area";
import ServiceArea from "./service-area";

import FooterTen from "@/src/layout/footers/footer-10";
import Government from "@/src/components/government/index2";
import HeaderFour from "@/src/layout/headers/header-4";
import imgbread from "@/public/images/navbar/About_EDL3.png"

const Service = () => {
  return (
    <>
      {/* <HeaderTen /> */}
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={"ວິ​ໄສ​ທັດ ແລະ ພາ​ລະ​ກິ​ດ"} imgbread={imgbread} />
            {/* <HeroBanner title="Our Top" subtitle="Service" bg_img="/assets/img/breadcrumb/breadcrumb-2.jpg" /> */}
            {/* <ServiceArea />  */}
            <CardArea style_service={true} />
            <SalesArea style_service={true} />
            {/* <TestimonialArea /> */}
            {/* <FaqArea style_service={true} /> */}
            {/* <CtaArea /> */}
            {/* <Government /> */}
          </main>
          <FooterFour />
          {/* <FooterTen /> */}
          {/* <FooterFive style_contact={true} style_team={true} /> */}
        </div>
      </div>
    </>
  );
};

export default Service;
