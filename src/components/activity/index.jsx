"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

import slider_img_1 from "@/public/images/activity/image42.png";
import slider_img_2 from "@/public/images/activity/image43.png";
import slider_img_3 from "@/public/images/activity/image44.png";
import slider_img_4 from "@/public/images/activity/image45.png";
import slider_img_5 from "@/public/images/activity/image46.png";

const activity_data = [
  {
    id: 1,
    img: slider_img_1,
  },
  {
    id: 2,
    img: slider_img_2,
  },
  {
    id: 3,
    img: slider_img_3,
  },
  {
    id: 4,
    img: slider_img_4,
  },
  {
    id: 5,
    img: slider_img_5,
  },
  {
    id: 6,
    img: slider_img_2,
  },
];

const blog_content = {
  sub_title: "News Feeds",
  title: "ກິດ​ຈະ​ກຳ",
};
const { sub_title, title } = blog_content;

const Activity = () => {
  return (
    <>
      <div className="tp-blog-area blue-bg pb-20">
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
          <div className="row">
            {activity_data.map((item, i) => (
              <div
                key={i}
                className="col-xl-2 col-lg-2 col-md-2 mb-20 col-6 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <div className="tp-blog-four-item p-relative fix">
                  <div className="tp-blog-four-img fix">
                    <Link href="#">
                      <Image src={item.img} alt="theme-pure" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
