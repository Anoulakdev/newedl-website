import Image from "next/image";
import Link from "next/link";
import React from "react";

import news1 from "@/public/images/news/1.jpeg";
import news2 from "@/public/images/news/2.jpg";
import news3 from "@/public/images/news/3.jpg";
import news4 from "@/public/images/news/4.jpeg";
import news5 from "@/public/images/news/5.jpg";

const blog_data = [
  // home 03
  {
    id: 1,
    img: news1,
    category: "Crm Software",
    color: "1",
    date: "28 April, 2023",
    title: (
      <>
        ທ່ານ ສອນໄຊ ສີພັນດອນ ນາຍົກລັດຖະມົນຕີ ແຫ່ງ ສປປລາວ ລົງເຮັດວຽກ ແລະ ຊີ້ນໍາ
        ກະຊວງພະລັງງານແລະບໍ່ແຮ່
      </>
    ),

    author_name: "Hilary Ouse",
    job_title: "Founder & CEO Dulalix",
  },
  {
    id: 2,
    img: news2,
    category: "Sales Tools",
    color: "2",
    date: "28 April, 2023",
    title: <>ພິທີມອບ-ຮັບໜ້າທີ່ ຜູ້ອໍານວຍການໃຫຍ່ ລັດວິສາຫະກິດໄຟຟ້າລາວ</>,

    author_name: "Rudra Ghosh",
    job_title: "Founder & CEO Dulalix",
  },
  {
    id: 3,
    img: news3,
    category: "Sales Management",
    color: "3",
    date: "28 April, 2023",
    title: <>ກອງປະຊຸມເສວະນາກ່ຽວກັບການດໍາເນີນທຸລະກິດ</>,

    author_name: "Penny Tool",
    job_title: "Founder & CEO Dulalix",
  },

  // home 04
  {
    id: 4,
    img: news4,
    category: "Blog",
    color: "",
    date: "10 min",
    title: <>ພິທີສະເຫຼີມສະຫຼອງ ວັນສ້າງຕັ້ງ ລັດວິສາຫະກິດໄຟຟ້າລາວ ຄົບຮອບ 62 ປີ</>,
    

    author_name: "Penny Tool",
    job_title: "Founder & CEO Dulalix",
  },
  {
    id: 5,
    img: news5,
    category: "Blog",
    color: "",
    date: "24 min",
    title: (
      <>
        ພິທີປາຖະກະຖາເລົ່າມູນເຊື້ອວັນສ້າງຕັ້ງ ຄຊປປລ ພ້ອມປະດັບຫຼຽນ ຊາວໜຸ່ມຕະລຸມບອນ
        ແລະ ມອບຫຼຽນກາລະນຶກ 65 ປີ
      </>
    ),
    

    author_name: "Penny Tool",
    job_title: "Founder & CEO Dulalix",
  },

  // anything here
];

const blog_content = {
  sub_title: "News Feeds",
  title: "ຂ່າວ​ສານ ແລະ ປະ​ຊ​າ​ສຳ​ພັນ",
};
const { sub_title, title } = blog_content;

const BlogArea = () => {
  return (
    <>
      <div className="tp-blog-area blue-bg pb-50 pt-30">
        <div className="container">
          {/* <div className="row align-items-end tp-blog-four-section-space">
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
          </div> */}
          <div className="row">
            {blog_data.slice(1, 4).map((item, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-4 col-md-4 mb-30 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <div className="tp-blog-four-item p-relative fix">
                  <div className="tp-blog-four-img fix">
                    <Link href="#">
                      <Image src={item.img} alt="theme-pure" />
                    </Link>
                  </div>
                  <div className="tp-blog-four-content-wrapper">
                    <div className="tp-blog-four-meta">
                      <span className="child-2">{item.date}</span>
                    </div>
                    <div className="tp-blog-four-info mb-4">
                      <h5 className="text-white">
                        <Link href="#">{item.title}</Link>
                      </h5>
                    </div>
                    <div className="tp-blog-four-btn">
                      <Link className="tp-btn-service " href="#">
                        ອ່ານ​ຕື່ມ
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
