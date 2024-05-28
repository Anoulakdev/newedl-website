import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import know1 from "@/public/images/knowledge/know1.jpg";
import know2 from "@/public/images/knowledge/know2.jpg";
import know3 from "@/public/images/knowledge/know3.jpg";
import know4 from "@/public/images/knowledge/know4.png";
import know5 from "@/public/images/knowledge/know5.jpg";
import know6 from "@/public/images/knowledge/know6.jpg";
import know7 from "@/public/images/knowledge/know7.jpg";
import know8 from "@/public/images/knowledge/know8.jpg";


const know_data = [
  // home 03
  {
    id: 1,
    img: know1,
    category: "Crm Software",
    color: "1",
    date: "28 April, 2023",
    title: <>ວິ​ທີ​ປະ​ຢັດ​ໄຟ​ຟ້າ ໃນ​ຫ້ອງນອນ</>,

    author_name: "Hilary Ouse",
    job_title: "Founder & CEO Dulalix",
  },
  {
    id: 2,
    img: know3,
    category: "Sales Tools",
    color: "2",
    date: "28 April, 2023",
    title: <>ວິ​ທີ​ປະ​ຢັດ​ໄຟ​ຟ້າ ໃນ​ຫ້ອງຄົວ</>,

    author_name: "Rudra Ghosh",
    job_title: "Founder & CEO Dulalix",
  },
  {
    id: 3,
    img: know2,
    category: "Sales Management",
    color: "3",
    date: "28 April, 2023",
    title: <>ໄຟ​ຟ້າ​ລັດ​ວົງ​ຈອນ</>,
    description: (
      <>How friends from college went on to build one powerful platform</>
    ),

    author_name: "Penny Tool",
    job_title: "Founder & CEO Dulalix",
  },
  {
    id: 4,
    img: know4,
    category: "Sales Management",
    color: "3",
    date: "28 April, 2023",
    title: <>Smart Meter ແມ່ນ​ຫ​ຍັງ</>,
    description: (
      <>How friends from college went on to build one powerful platform</>
    ),

    author_name: "Penny Tool",
    job_title: "Founder & CEO Dulalix",
  },
  {
    id: 5,
    img: know5,
    category: "Sales Management",
    color: "3",
    date: "28 April, 2023",
    title: <>ຂໍ້​ປະ​ຕິ​ບັດ ການ​ນຳ​ໃຊ້ EV CHARGER</>,
    description: (
      <>How friends from college went on to build one powerful platform</>
    ),

    author_name: "Penny Tool",
    job_title: "Founder & CEO Dulalix",
  },
  {
    id: 6,
    img: know6,
    category: "Sales Management",
    color: "3",
    date: "28 April, 2023",
    title: <>ວິ​ທີໃຊ້​ເຄື່ອງ​ໄຟ​ຟ້າ​ໃນ​ຍາມ​ ອາ​ກາດ​ຮ້ອນ</>,
    description: (
      <>How friends from college went on to build one powerful platform</>
    ),

    author_name: "Penny Tool",
    job_title: "Founder & CEO Dulalix",
  },
  {
    id: 7,
    img: know7,
    category: "Sales Management",
    color: "3",
    date: "28 April, 2023",
    title: <>ຮັກ​ໂລກ ດ້ວຍ​ລົດ​ໄຟ​ຟ້າ</>,
    description: (
      <>How friends from college went on to build one powerful platform</>
    ),

    author_name: "Penny Tool",
    job_title: "Founder & CEO Dulalix",
  },
  {
    id: 8,
    img: know8,
    category: "Crm Software",
    color: "1",
    date: "28 April, 2023",
    title: <>ຄຸນ​ປະ​ໂຫຍດ​ຂອງ Solar rooftop</>,

    author_name: "Hilary Ouse",
    job_title: "Founder & CEO Dulalix",
  },
];

const Portfolio = () => {
  return (
    <>
      <div className="portfolio blog-grid-inner mb-30">
        <div className="container">
          <div className="row grid blog-grid-inner pt-50">
            {know_data.map((item, i) => (
              <div
                key={i}
                data-index={i}
                className="col-xl-3 col-lg-3 col-md-3 col-6 mb-30 grid-item cat1 cat4 cat3 cat5"
              >
                <div className="tp-blog-item" style={{ height: "450px" }}>
                  <div className="tp-blog-thumb fix">
                    <Link href="/know_detail">
                      <Image src={item.img} alt="theme-pure" style={{ height: "300px" }} />
                    </Link>
                  </div>
                  <div className="tp-blog-content">
                    <div className="tp-blog-meta d-flex align-items-center">
                      <div>
                        <span>{item.date}</span>
                      </div>
                    </div>
                    <div className="tp-blog-title-box">
                      <Link
                        className="tp-blog-title-sm"
                        href="/know_detail"
                        style={{ fontFamily: "Noto Sans Lao" }}
                      >
                        {item.title}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="basic-pagination text-center mt-5">
            <nav>
              <ul>
                <li>
                  <Link href="#">
                    <i className="far fa-angle-left"></i>
                  </Link>
                </li>
                <li>
                  <Link className="current" href="#">
                    1
                  </Link>
                </li>
                <li>
                  <Link href="#">2</Link>
                </li>
                <li>
                  <Link href="#">3</Link>
                </li>
                <li>
                  <Link href="#">4</Link>
                </li>

                <li>
                  <span>...</span>
                </li>
                <li>
                  <Link href="#">7</Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="far fa-angle-right"></i>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
