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
    textheading: <>ຝ່າຍຄຸ້ມຄອງລະບົບໄຟຟ້າພາກກາງ ມີຜົນສໍາເລັດຫຼາຍດ້ານ</>,
    imgheading: "/images/news/2/1.jpg",
    postdate: "23-05-2024",
  },
  {
    id: 2,
    textheading: (
      <>
        ລັດວິສາຫະກິດໄຟຟ້າລາວ ຮ່ວມກັບ ກະຊວງພະລັງງານ-ບໍ່ແຮ່ ຊີ້ແຈງ
        ກ່ຽວກັບບັນຫາໄຟຕົກ-ໄຟມອດ-ໄຟບໍພໍ, ວິທີແກ້ໄຂ ແລະ ແຜນຮອງຮັບໃນຕໍ່ຫນ້າ
      </>
    ),
    imgheading: "/images/news/1/1.jpg",
    postdate: "17-05-2024",
  },
  {
    id: 3,
    textheading: (
      <>
        ທ່ານ ສອນໄຊ ສີພັນດອນ ນາຍົກລັດຖະມົນຕີ ແຫ່ງ ສປປລາວ ລົງເຮັດວຽກ ແລະ ຊີ້ນໍາ
        ກະຊວງພະລັງງານແລະບໍ່ແຮ່
      </>
    ),
    imgheading: "/images/news/3/7.jpeg",
    postdate: "01-03-2024",
  },
  {
    id: 4,
    textheading: <>ພິທີມອບ-ຮັບໜ້າທີ່ ຜູ້ອໍານວຍການໃຫຍ່ ລັດວິສາຫະກິດໄຟຟ້າລາວ</>,
    imgheading: "/images/news/4/2.jpg",
    postdate: "16-02-2024",
  },
];
const RecentPost = () => {
  return (
    <>
      <div className="sidebar__widget mb-40">
        <div className="sidebar__widge-title-box">
          <h3
            className="sidebar__widget-title"
            style={{ fontFamily: "Noto Sans Lao", fontSize: "25px" }}
          >
            ຂ່າວ​ສານ​ລ່າ​ສຸ​ດ
          </h3>
        </div>
        <div className="sidebar__widget-content">
          <div className="sidebar__post rc__post">
            {recent_post_data.map((item, i) => (
              <div key={i} className="rc__post mb-20 d-flex">
                <div className="rc__post-thumb mr-20">
                  <Link
                    href={{
                      pathname: "/newsdetail",
                      query: { news_id: item.id },
                    }}
                  >
                    <Image
                      src={item.imgheading}
                      alt="theme-pure"
                      width={200}
                      height={100}
                    />
                  </Link>
                </div>
                <div className="rc__post-content">
                  <h3 className="rc__post-title">
                    <Link
                      href={{
                        pathname: "/newsdetail",
                        query: { news_id: item.id },
                      }}
                    >
                      {item.textheading}
                    </Link>
                  </h3>
                  <div className="rc__meta">
                    <span>{item.postdate}</span>
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
