"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import feature_data from '@/src/data/feature-data';

import gover1 from "@/public/images/government/image58_1.png";
import gover2 from "@/public/images/government/image59_1.png";
import gover3 from "@/public/images/government/image57_1.png";
import gover4 from "@/public/images/government/image60_1.png";
import gover5 from "@/public/images/government/WB.png";
import gover6 from "@/public/images/government/LogoHapua.png";

const feature_data = [
  {
    id: 1,
    color: "1",
    img: gover1,
    title: <>ກະ​ຊວງ​ການ​ເງິນ</>,
    link: "https://www.mof.gov.la",
  },
  {
    id: 2,
    color: "2",
    img: gover2,
    title: <>ກະ​ຊວງ​ແຜນ​ການ ແລະ ການ​ລົງ​ທຶນ</>,
    link: "http://www.investlaos.gov.la/la",
  },
  {
    id: 3,
    color: "3",
    img: gover3,
    title: <>ບໍ​ລິ​ສັດ​ຜະ​ລິດ​ໄຟ​ຟ້າ​ລາວ​ມະ​ຫາ​ຊົນ</>,
    link: "https://edlgen.com.la/",
  },
  {
    id: 4,
    color: "4",
    img: gover4,
    title: <>ກະ​ຊວງພະ​ລັງ​ງານ ແລະ ບໍ່​ແຮ່</>,
    link: "https://www.mem.gov.la/",
  },
  // {
  //   id: 5,
  //   color: "3",
  //   img: gover5,
  //   title: <>ທະ​ນາ​ຄານ​ໂລກ</>,
  //   link: "https://www.worldbank.org/en/country/lao",
  // },

  // {
  //   id: 6,
  //   color: "1",
  //   img: gover6,
  //   title: <>Hapua</>,
  //   link: "https://hapua.org/main/",
  // },
];

const FeatureArea = ({ style_integraton }) => {
  return (
    <>
      <div
        className={`tp-feature-area ${
          style_integraton ? "pt-30" : "grey-bg-3 pt-0"
        }`}
      >
        <div className="container">
          <div className="row align-items-end mb-10">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-service-section-four">
                <h3 className="tp-section-title-4 text-black">
                  ເວັບ​ໄຊ​ຕ່າງ​ໆ
                </h3>
              </div>
            </div>
          </div>
          <div className="row gx-0 tp-feature-five-wrapper-main">
            {feature_data.map((item, i) => (
              <div key={i} className="col-xl-3 col-lg-6 col-md-6 col-12">
                <div className="tp-feature-five-wrapper wow tpfadeUp">
                  <Link href={item.link} target="_blank">
                    <div
                      className={`tp-feature-five-item tp-feature-five-item-${item.color} text-center rounded-4 m-2 shadow bg-body-tertiary`}
                      style={{ height: "300px" }}
                    >
                      <div className="tp-feature-five-icon p-relative">
                        <Image src={item.img} alt="theme-pure" />
                        <div
                          className={`tp-feature-five-shape-color tp-feature-five-shape-color-${item.color}`}
                        ></div>
                      </div>
                      <div className="tp-feature-five-content mb-3">
                        <h4
                          className="tp-feature-five-title-sm"
                          style={{
                            fontFamily: "Noto Sans Lao",
                            fontSize: "22px",
                          }}
                        >
                          {item.title}
                        </h4>
                        {/* <p>{item.description}</p> */}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureArea;
