import FooterFour from "@/src/layout/footers/footer-4";
import HeaderFour from "@/src/layout/headers/header-4";
import React from "react";
import BrandArea from "./brand-area";
import ContactArea from "./contact-area";
import SecurityArea from "./security-area";
import ServiceArea from "./service-area1";
import Carousel from "../../carousel";
import News from "./news";
import Announcement from "./announcement";
import LayoutAll from "./layoutall";

const HomeFour = () => {
  return (
    <>
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            <Carousel />
            <BrandArea />
            <LayoutAll />
            {/* <News />
            <Announcement />
            <ServiceArea /> */}
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
