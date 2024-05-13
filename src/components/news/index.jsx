import Image from "next/image";
import Link from "next/link";
import React from "react";

import news1 from "@/public/images/news/1.jpeg";
import news2 from "@/public/images/news/2.jpg";
import news3 from "@/public/images/news/3.jpg";
import news4 from "@/public/images/news/4.jpeg";
import news5 from "@/public/images/news/5.jpg";

const service_data = [
  {
    id: 1,

    img: news2,
    title: (
      <>
        Live Inventory <br /> Management
      </>
    ),
    sub_title: "Cloud Backup",
    cls: "4",
    description: <>Track materials and stock for outsourced purchase orders</>,
    delay: ".9s",
  },
  {
    id: 2,

    img: news3,
    title: (
      <>
        Real-time Master <br /> Planning
      </>
    ),
    sub_title: "Cloud Backup",
    cls: "4",
    description: <>Track materials and stock for outsourced purchase orders</>,
    delay: ".9s",
  },
  {
    id: 3,

    img: news4,
    title: (
      <>
        Easy Contract <br /> Manufacturing
      </>
    ),
    sub_title: "Cloud Backup",
    cls: "4",
    description: <>Track materials and stock for outsourced purchase orders</>,
    delay: ".9s",
  },
  {
    id: 4,

    img: news5,
    title: (
      <>
        Omnichannel <br /> Order Management
      </>
    ),
    sub_title: "Cloud Backup",
    cls: "4",
    description: <>Track materials and stock for outsourced purchase orders</>,
    delay: ".9s",
  },
];


const blog_content = {
  title: "ຂ່າວ​ສານ ແລະ ປະ​ຊ​າ​ສຳ​ພັນ",
};
const { title } = blog_content;

const ServiceArea = () => {
  return (
    <>
      <div className="tp-services-five-item-bg-color p-relative fix blue-bg">
        <div className="container">
          <div className="row align-items-end tp-blog-four-section-space">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-blog-four-section-box">
                <h3 className="tp-section-title-4">{title}</h3>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-blog-four-btn text-start text-lg-end">
                <Link className="tp-btn-yellow-border" href="#">
                  ເບິ່ງ​ເພີ່ມ​ເຕີມ <i className="far fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
              <div className="img-fluid">
              <Image className="rounded-5" src={news1} alt="theme-pure" />

          <div class="carousel-caption d-md-block">
        <p className="text-white fs-4 mt-2 fw-bold">ທ່ານ ສອນໄຊ ສີພັນດອນ ນາຍຍົກລັດຖະມົນຕີ ແຫ່ງ ສປປລາວ ລົງເຮັດວຽກ ແລະ ຊີ້ນໍາ
          ກະຊວງພະລັງງານແລະບໍ່ແຮ່</p>
      </div>
              </div>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
