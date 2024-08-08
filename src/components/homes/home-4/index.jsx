import PriceArea from "@/src/common/price-area";
import FooterFour from "@/src/layout/footers/footer-4";
import Footer from "@/src/layout/footers/footer";
import HeaderFour from "@/src/layout/headers/header-4";
import React from "react";
import AboutArea from "./about-area";
import BlogArea from "./blog-area";
import BrandArea from "./brand-area";
import ContactArea from "./contact-area";
import FunFactArea from "./fun-fact-area";
import HeroArea from "./hero-area";
import PlatformArea from "../../../common/platform-area";
import SecurityArea from "./security-area";
import ServiceArea from "./service-area";
import TeamArea from "./team-area"; 
import Carousel from "../../carousel";
import Government from "@/src/components/government";
import Knowledge from "@/src/components/knowledge";
import Payment from "@/src/components/payment";
import Activity from "@/src/components/activity";
import News from "@/src/components/news";
import News2 from "@/src/components/news/index2";

const HomeFour = () => {
  return (
    <> 
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            {/* <HeroArea /> */}
            <Carousel />
            <BrandArea />
            <ServiceArea />
            {/* <AboutArea /> */}
            {/* <FunFactArea /> */}
            {/* <PlatformArea /> */}
            <PriceArea />
            <Payment />
            {/* <News /> */}
            <News2 />
            {/* <TeamArea /> */}
            <BlogArea />
            <Knowledge />
            <Activity />
            <Government />
            <ContactArea />
            <SecurityArea />
          </main>
          <FooterFour />
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default HomeFour;
