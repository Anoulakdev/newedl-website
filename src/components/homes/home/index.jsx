import ScrollToTop from "@/src/hooks/scroll-to-top";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import AboutArea from "../../../common/about-area";
import FeatureArea from "./feature-area";
import HeroSlider from "./hero-slider";
import PriceArea from "./price-area";
import ProjectArea from "./project-area";
import RankArea from "./rank-area";
// import ServicesArea from "./services-area";
import ServicesArea from "./../home-5/service-area";

import TestimonialArea from "./testimonial-area";
import PaymentMethodArea from "../home-2/payment-method-area";
import HeroArea from "../home-2/hero-area";
import HeaderTwo from "@/src/layout/headers/header-2";
import Carousel from "@/src/components/carousel";

const HomeOne = () => {
  return (
    <>
      <HeaderTwo />
      {/* <Header /> */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            {/* <HeroSlider /> */}
            <Carousel />
            <HeroArea />
            <FeatureArea />
            <AboutArea />
            <PaymentMethodArea />
            <ServicesArea />
            <ProjectArea />
            <TestimonialArea />
            <RankArea />
            <PriceArea />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default HomeOne;
