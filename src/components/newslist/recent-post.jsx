import Image from "next/image";
import Link from "next/link";
import React from "react";


import avata_1 from "../../../public/assets/img/blog/blog-list-avata-1.jpg";
import avata_2 from "../../../public/assets/img/blog/blog-list-avata-2.jpg";
import avata_3 from "../../../public/assets/img/blog/blog-list-avata-3.jpg";

import news1 from "@/public/images/news/1.jpeg";
import news2 from "@/public/images/news/2.jpg";
import news3 from "@/public/images/news/3.jpg";
import news4 from "@/public/images/news/4.jpeg";
import news5 from "@/public/images/news/5.jpg";

const recent_post_data = [
  {
    id: 1,
    img: news1,
    title: <>ທ່ານ ສອນໄຊ ສີພັນດອນ ນາຍົກລັດຖະມົນຕີ ແຫ່ງ ສປປລາວ ລົງເຮັດວຽກ ແລະ ຊີ້ນໍາກະຊວງພະລັງງານແລະບໍ່ແຮ່</>,
    date: "4 March. 2022",
    
  },
  {
    id: 2,
    img: news2,
    title: <>ພິທີມອບ-ຮັບໜ້າທີ່ ຜູ້ອໍານວຍການໃຫຍ່ ລັດວິສາຫະກິດໄຟຟ້າລາວ</>,
    date: "4 March. 2022",
    
  },
  {
    id: 3,
    img: news3,
    title: <>ກອງປະຊຸມເສວະນາກ່ຽວກັບການດໍາເນີນທຸລະກິດ</>,
    date: "4 March. 2022",
    
  },
  {
    id: 4,
    img: news4,
    title: <>ພິທີສະເຫຼີມສະຫຼອງ ວັນສ້າງຕັ້ງ ລັດວິສາຫະກິດໄຟຟ້າລາວ ຄົບຮອບ 62 ປີ</>,
    date: "4 March. 2022",
    
  },
  {
    id: 5,
    img: news5,
    title: <>ພິທີປາຖະກະຖາເລົ່າມູນເຊື້ອວັນສ້າງຕັ້ງ ຄຊປປລ ພ້ອມປະດັບຫຼຽນ ຊາວໜຸ່ມຕະລຸມບອນ ແລະ ມອບຫຼຽນກາລະນຶກ 65 ປີ</>,
    date: "4 March. 2022",
    
  },
];
const RecentPost = () => {
  return (
    <>
      <div className="sidebar__widget mb-40">
        <div className="sidebar__widge-title-box">
          <h3 className="sidebar__widget-title" style={{ fontFamily: 'Noto Sans Lao', fontSize: '25px' }}>ຂ່າວ​ສານ​ລ່າ​ສຸ​ດ</h3>
        </div>
        <div className="sidebar__widget-content">
          <div className="sidebar__post rc__post">
            {recent_post_data.map((item, i) => (
              <div key={i} className="rc__post mb-20 d-flex">
                <div className="rc__post-thumb mr-20">
                  <Link href="">
                    <Image src={item.img} alt="theme-pure" />
                  </Link>
                </div>
                <div className="rc__post-content">
                  <h3 className="rc__post-title">
                    <Link href="">{item.title}</Link>
                  </h3>
                  <div className="rc__meta">
                    <span>{item.date}</span>
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

export default RecentPost;
