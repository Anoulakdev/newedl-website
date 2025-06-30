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

import gover1 from "../../../../public/images/government/image58_1.png";
import gover2 from "../../../../public/images/government/image59_1.png";
import gover3 from "../../../../public/images/government/image57_1.png";
import gover4 from "../../../../public/images/government/d70.png";

const setting = {
  speed: 12000,
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
    color: "4",
    img: gover4,
    title: <>ກະຊວງ​ອຸດ​ສາ​ຫະ​ກຳ ແລະ ການ​ຄ້າ</>,
    link: "http://www.ned.moic.gov.la",
  },
  {
    id: 2,
    color: "1",
    img: gover1,
    title: <>ກະ​ຊວງ​ການ​ເງິນ</>,
    link: "https://www.mof.gov.la",
  },
  {
    id: 3,
    color: "2",
    img: gover2,
    title: <>ກະ​ຊວງ​ແຜນ​ການ ແລະ ການ​ລົງ​ທຶນ</>,
    link: "http://www.investlaos.gov.la/la",
  },
  {
    id: 4,
    color: "3",
    img: gover3,
    title: <>ບໍ​ລິ​ສັດ​ຜະ​ລິດ​ໄຟ​ຟ້າ​ລາວ​ມະ​ຫາ​ຊົນ</>,
    link: "https://edlgen.com.la/",
  },
];

const SecurityArea = () => {
  return (
    <>
      <div className="tp-security-area fix z-index pt-30">
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
                    <Link href={item.link} target="_blank">
                      <div className="tp-security-wrapper d-flex align-items-center justify-content-between bg-light shadow bg-body-tertiary mb-25">
                        <div className="tp-security-item d-flex align-items-center">
                          <Image
                            src={item.img}
                            alt="theme-pure"
                            className="me-3"
                          />
                          <span className="fs-5 fw-bold text-black">{item.title}</span>
                        </div>
                      </div>
                    </Link>
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
