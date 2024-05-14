import Image from "next/image";
import Link from "next/link";
import React from "react";

import know1 from "@/public/images/knowledge/know1.jpg";
import know2 from "@/public/images/knowledge/know2.jpg";
import know3 from "@/public/images/knowledge/know3.jpg";

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
    img: know1,
    category: "Sales Tools",
    color: "2",
    date: "28 April, 2023",
    title: <>ວິ​ທີ​ປະ​ຢັດ​ໄຟ​ຟ້າ ໃນ​ຫ້ອງນອນ</>,

    author_name: "Rudra Ghosh",
    job_title: "Founder & CEO Dulalix",
  },
  {
    id: 3,
    img: know3,
    category: "Sales Management",
    color: "3",
    date: "28 April, 2023",
    title: <>ວິ​ທີ​ປະ​ຢັດ​ໄຟ​ຟ້າ ໃນ​ຫ້ອງຄົວ</>,
    description: (
      <>How friends from college went on to build one powerful platform</>
    ),

    author_name: "Penny Tool",
    job_title: "Founder & CEO Dulalix",
  },
];

const blog_content = {
  sub_title: "News Feeds",
  title: "ສາລະໜ້າຮູ້",
};
const { sub_title, title } = blog_content;

const BlogArea = () => {
  return (
    <>
      <div className="tp-blog-area pb-20 grey-bg-3">
        <div className="container">
          <div className="row align-items-end tp-blog-four-section-space">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-blog-four-section-box">
                <h3 className="tp-section-title-4 text-black">{title}</h3>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-blog-four-btn text-start text-lg-end">
                <Link className="tp-btn-yellow-border text-black" href="/confession">
                  ເບິ່ງ​ເພີ່ມ​ເຕີມ <i className="far fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {know_data.map((item, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-4 col-md-4 mb-40 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <div className="tp-blog-four-item p-relative fix" style={{ boxShadow: '0 2px 6px rgba(0, 0, 0, 0.6)', borderRadius: '30px' }}>
                  <div className="tp-blog-four-img fix">
                    
                      <Image src={item.img} alt="theme-pure" />
                    
                  </div>
                  <div className="tp-blog-four-content-wrapper">
                    <div className="tp-blog-four-meta">
                      <span className="child-2 text-black">{item.date}</span>
                    </div>
                    <div className="tp-blog-four-info mb-4">
                      <h4 className="fs-4 text-black" style={{fontFamily: 'Noto Sans Lao'}}>
                        {item.title}
                      </h4>
                    </div>
                    <div className="btn btn-primary">
                      <Link className="text-white" href="#">
                        ອ່ານ​ເພີ່ມ
                      </Link>
                    </div>
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

export default BlogArea;
