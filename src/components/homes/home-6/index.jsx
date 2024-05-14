import PriceArea from "./price-area";
import FooterFour from "@/src/layout/footers/footer-4";
import HeaderFour from "@/src/layout/headers/header-4";
import React from "react";
import BlogArea from "./blog-area";
import BrandArea from "./brand-area";
import ContactArea from "./contact-area";
import ServiceArea from "./service-area";
import Carousel from "../../carousel";
import Government from "./government";
import Knowledge from "./knowledge";
import Payment from "./payment";
import Activity from "./activity";
import News2 from "./news";

const HomeFour = () => {
  return (
    <> 
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            
            <Carousel />
            <BrandArea />
            <News2 />
            <BlogArea />
            {/* <PriceArea /> */}
            <Knowledge />
            <Payment />
            <ServiceArea />
            {/* <Activity /> */}
            <Government />
            <ContactArea />
            
          </main>
          <FooterFour />
          
        </div>
      </div>
    </>
  );
};

export default HomeFour;
