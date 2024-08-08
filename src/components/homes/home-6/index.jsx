import PriceArea from "./price-area";
import FooterFour from "@/src/layout/footers/footer-4";
import HeaderFour from "@/src/layout/headers/header-4";
import React from "react";
import BlogArea from "./blog-area";
import BrandArea from "./brand-area";
import ContactArea from "./contact-area";
import SecurityArea from "./security-area";
import ServiceArea from "./service-area1";
import Carousel from "../../carousel";
import Government from "./government";
import Payment from "./payment";
import Activity from "./activity";
import News from "./news";
import Announcement from "./announcement";

const HomeFour = () => {
  return (
    <> 
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            
            <Carousel />
            <BrandArea />
            <Announcement />
            <News />
            {/* <BlogArea /> */}
            {/* <PriceArea /> */}
            {/* <Payment /> */}
            <ServiceArea />
            {/* <Activity /> */}
            {/* <Government /> */}
            <SecurityArea />
            <ContactArea />
          </main>
          <FooterFour />
          
        </div>
      </div>
    </>
  );
};

export default HomeFour;
