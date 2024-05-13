import RightArrowTwo from "@/src/svg/right-arrow-2";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

import security_img_1 from "../../../../public/assets/img/security/security-1.png";
import security_img_2 from "../../../../public/assets/img/security/security-2.png";
import security_img_3 from "../../../../public/assets/img/security/security-3.png";
import security_img_4 from "../../../../public/assets/img/security/security-4.png";
// import security_img_5 from "../../../../public/assets/img/security/security-5.png";
import security_img_6 from "../../../../public/assets/img/security/security-3.png";

import gover1 from "../../../../public/images/government/image58.png";
import gover2 from "../../../../public/images/government/image59.png";
import gover3 from "../../../../public/images/government/image57.png";
import gover4 from "../../../../public/images/government/image60.png";

const setting = {
  speed: 7000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  focusOnSelect: true,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {},
    },
    {
      breakpoint: 992,
      settings: {},
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
// security data
const security_data = [
  {
    id: 1,
    img: gover1,
    title: (
      <>
        Business <br /> Security
      </>
    ),
  },
  {
    id: 2,
    img: gover2,
    title: (
      <>
        Logistics <br /> Security
      </>
    ),
  },
  {
    id: 3,
    img: gover3,
    title: (
      <>
        Education <br /> Security
      </>
    ),
  },
  {
    id: 4,
    img: gover4,
    title: (
      <>
        Food <br /> & Beverage
      </>
    ),
  },
  
  
];

const SecurityArea = () => {
  return (
    <>
      <div className="tp-security-area blue-bg  fix z-index">
        <div className="container-fluid g-0">
          
          <div
            className="wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div className="tp-security-slider-active">
              <Slider {...setting}>
                {security_data.map((item, i) => (
                  <div key={i} className="tp-security-main">
                    <div className="tp-security-wrapper d-flex align-items-center justify-content-between bg-light">
                      <div className="tp-security-item d-flex align-items-center">
                        <div>
                          <Image src={item.img} alt="theme-pure" width={200}/>
                        </div>
                        
                      </div>
                      
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecurityArea;
