"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

// import news1 from "@/public/images/news/1.jpeg";
import news2 from "@/public/images/news/2.jpg";
// import news3 from "@/public/images/news/3.jpg";
// import news4 from "@/public/images/news/4.jpeg";
// import news5 from "@/public/images/news/5.jpg";

// const blog_data = [
//   // home 03
//   {
//     id: 1,
//     img: news1,
//     category: "Crm Software",
//     color: "1",
//     date: "28 April, 2023",
//     title: (
//       <>
//         ທ່ານ ສອນໄຊ ສີພັນດອນ ນາຍົກລັດຖະມົນຕີ ແຫ່ງ ສປປລາວ ລົງເຮັດວຽກ ແລະ ຊີ້ນໍາ
//         ກະຊວງພະລັງງານແລະບໍ່ແຮ່
//       </>
//     ),

//     author_name: "Hilary Ouse",
//     job_title: "Founder & CEO Dulalix",
//   },
//   {
//     id: 2,
//     img: news2,
//     category: "Sales Tools",
//     color: "2",
//     date: "28 April, 2023",
//     title: <>ພິທີມອບ-ຮັບໜ້າທີ່ ຜູ້ອໍານວຍການໃຫຍ່ ລັດວິສາຫະກິດໄຟຟ້າລາວ</>,

//     author_name: "Rudra Ghosh",
//     job_title: "Founder & CEO Dulalix",
//   },
//   {
//     id: 3,
//     img: news3,
//     category: "Sales Management",
//     color: "3",
//     date: "28 April, 2023",
//     title: <>ກອງປະຊຸມເສວະນາກ່ຽວກັບການດໍາເນີນທຸລະກິດ</>,

//     author_name: "Penny Tool",
//     job_title: "Founder & CEO Dulalix",
//   },

//   // home 04
//   {
//     id: 4,
//     img: news4,
//     category: "Blog",
//     color: "",
//     date: "10 min",
//     title: <>ພິທີສະເຫຼີມສະຫຼອງ ວັນສ້າງຕັ້ງ ລັດວິສາຫະກິດໄຟຟ້າລາວ ຄົບຮອບ 62 ປີ</>,
    

//     author_name: "Penny Tool",
//     job_title: "Founder & CEO Dulalix",
//   },
//   {
//     id: 5,
//     img: news5,
//     category: "Blog",
//     color: "",
//     date: "24 min",
//     title: (
//       <>
//         ພິທີປາຖະກະຖາເລົ່າມູນເຊື້ອວັນສ້າງຕັ້ງ ຄຊປປລ ພ້ອມປະດັບຫຼຽນ ຊາວໜຸ່ມຕະລຸມບອນ
//         ແລະ ມອບຫຼຽນກາລະນຶກ 65 ປີ
//       </>
//     ),
    

//     author_name: "Penny Tool",
//     job_title: "Founder & CEO Dulalix",
//   },

//   // anything here
// ];


const BlogArea = () => {

  const [data, setData] = useState([]);

  const imageUrlBase =
    "https://uat-api.edl.com.la/api_v1/customer-svc/news/newsImage/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://uat-api.edl.com.la/api_v1/customer-svc/news/newsType?news_type_id=0&fillter=DESC"
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <>
      <div className="tp-blog-area pb-30 pt-30 grey-bg-3">
        <div className="container">
          
          <div className="row">
            {data.slice(3, 6).map((item) => (
              <div
                key={item.news_id}
                className="col-xl-4 col-lg-4 col-md-4 mb-30"
                style={{ animationName: 'tpfadeUp', animationDuration: '.9s', animationTimingFunction: 'ease-in-out', animationFillMode: 'both', animationDelay: '.7s'}}
              >
                <div className="tp-blog-four-item p-relative fix" style={{ boxShadow: '0 2px 6px rgba(0, 0, 0, 0.6)', borderRadius: '30px', height: '500px' }}>
                  <div className="tp-blog-four-img fix">
                    
                      <Image src={news2} alt="theme-pure" />
                    
                  </div>
                  <div className="tp-blog-four-content-wrapper">
                    <div className="tp-blog-four-meta">
                      <span className="child-2 text-black">{moment(item.posting_date).format("DD-MM-YYYY")}</span>
                    </div>
                    <div className="tp-blog-four-info mb-4">
                      <h5 className="text-black">
                        <Link href="#">{item.news_title_la}</Link>
                      </h5>
                    </div>
                    <div className="btn btn-primary">
                      <Link className="text-white" href={{
                                pathname: "/newsdetail",
                                query: { news_id: item.news_id },
                              }}>
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
