import LinearGradientLine from "@/src/svg/linear-gradient-line";
import Link from "next/link";
import Image from "next/image";
import React from "react";

// service img import
import Mantenance from "@/public/images/services/Mantenance-2.png";
import Calculator from "@/public/images/services/calculator.png";
import EV from "@/public/images/services/EV_Charger.png";
import Solar from "@/public/images/services/solar.png";
import Other from "@/public/images/services/otherservicess.png";
import bg_img from "../../../../public/assets/img/service/sv-bg-2-1.jpg";
import Meter from "@/public/images/services/METER_100.png";

const service_data = [
  {
    id: 1,
    img: Meter,
    color: "3",
    title: "Smart Meter",
    link: "https://eportal.edl.com.la:8552",
  },
  {
    id: 2,
    img: EV,
    color: "2",
    title: "EV Charger",
    link: "https://e-service.edl.com.la",
  },
  {
    id: 3,
    img: Calculator,
    color: "1",
    title: "ຄິດ​ໄລ່​ຄ່າ​ໄຟ​ຟ້າ",
    link: "https://e-service.edl.com.la/electric-calculator",
  },
  {
    id: 4,
    img: Other,
    color: "4",
    title: "ບໍລິການອື່ນໆ",
    link: "",
  },
];

const ServiceArea = () => {
  return (
    <>
      <div className="tp-service-2__area pt-20 pb-20">
        <div className="tp-service-2__shape">
          <Image src={bg_img} alt="theme-pure" />
        </div>
        <div className="container z-index-5 wow tpfadeUp">
          <div className="row align-items-end mb-10">
            <div className="col-xl-12 col-lg-12">
              <div className="tp-service-section-four">
                <h3 className="tp-section-title-4 text-black">ບໍ​ລິ​ການ</h3>
              </div>
            </div>
          </div>
          <div className="row gx-60">
            {service_data.map((item, i) => (
              <div
                key={i}
                className="col-xl-3 col-lg-6 col-md-6 mb-30"
                data-wow-duration=".9s"
                data-wow-delay=".8s"
              >
                <div className="tp-service-2__item-wrapper p-relative">
                  <div className="tp-service-2__item d-flex justify-content-between flex-column">
                    <Link
                      href={item.link ? item.link : ""}
                      target={item.link ? "_blank" : undefined}
                      onClick={
                        item.link ? undefined : (e) => e.preventDefault()
                      }
                    >
                      <div className="tp-service-2__icon">
                        <Image
                          src={item.img}
                          alt="theme-pure"
                          style={{ width: "120px" }}
                        />
                      </div>
                      <div className="tp-service-2__text">
                        <h4
                          className="tp-service-2__title-sm fw-bold"
                          style={{ fontFamily: "Noto Sans Lao" }}
                        >
                          {item.title}
                        </h4>
                        {item.link ? "" : <p>ກຳ​ລັງ​ພັດ​ທະ​ນາ</p>}
                      </div>
                    </Link>
                  </div>
                  <div
                    className={`tp-service-2__bg-shape tp-service-2__color-${item.color}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
