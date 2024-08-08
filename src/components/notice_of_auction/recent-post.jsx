import Image from "next/image";
import Link from "next/link";
import React from "react";

import img_1 from "@/public/images/notice_of_auction/Smartmeter.jpg";
import img_2 from "@/public/images/notice_of_auction/0074.jpg";
import img_3 from "@/public/images/notice_of_auction/107.jpg";
import img_4 from "@/public/images/notice_of_auction/3286.jpg";
import img_5 from "@/public/images/notice_of_auction/3080.jpg";
import img_6 from "@/public/images/notice_of_auction/3069.jpg";

const recent_post_data = [
  {
    id: 1,
    imagePath: img_1,
    iconPath: "images/vector14.svg",
    title: "ຫນັງສືເຊີນເຂົ້າຮ່ວມປະມູນ",
    description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
    date: "ລົງທະບຽນວັນທີ 23/01/2024 -29/01/2024",
    date1: "29/01/2024",
    isGreen: true,
  },
  {
    id: 2,
    imagePath: img_2,
    iconPath: "images/vector14.svg",
    title: "ຫນັງສືເຊີນເຂົ້າຮ່ວມປະມູນ",
    description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
    date: "ລົງທະບຽນວັນທີ 09/01/2024 - 17/01/2024",
    date1: "17/01/2024",
    isRed: true,
  },
  {
    id: 3,
    imagePath: img_3,
    iconPath: "images/vector14.svg",
    title: "ຫນັງສືເຊີນເຂົ້າຮ່ວມປະມູນ",
    description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
    date: "ລົງທະບຽນວັນທີ 8/01/2024 - 15/02/2024",
    date1: "08/01/2024",
    isYellow: true,
  },
  {
    id: 4,
    imagePath: img_4,
    iconPath: "images/vector14.svg",
    title: "ຫນັງສືເຊີນເຂົ້າຮ່ວມປະມູນ",
    description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
    date: "ລົງທະບຽນວັນທີ 04/01/2024 - 17/01/2024",
    date1: "04/01/2024",
    isGreen: true,
  },
  {
    id: 5,
    imagePath: img_5,
    iconPath: "images/vector14.svg",
    title: "ຫນັງສືເຊີນເຂົ້າຮ່ວມປະມູນ",
    description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
    date: "ລົງທະບຽນວັນທີ 4/01/2024 - 12/01/2024",
    date1: "04/01/2024",
    isGreen: true,
  },
  {
    id: 6,
    imagePath: img_6,
    iconPath: "images/vector14.svg",
    title: "ຫນັງສືເຊີນເຂົ້າຮ່ວມປະມູນ",
    description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
    date: "ລົງທະບຽນວັນທີ 26/12/2023 - 30/01/2024",
    date1: "26/12/2023",

    isGreen: true,
  },

  // Add more card data objects as needed
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
            ແຈ້ງ​ປະ​ມູນລ່າ​ສຸ​ດ
          </h3>
        </div>
        <div className="sidebar__widget-content">
          <div className="sidebar__post rc__post">
            {recent_post_data.slice(0, 4).map((item, i) => (
              <div
                key={i}
                className="rc__post mb-20 d-flex"
                style={{
                  boxShadow: "0 3px 8px rgba(0, 0, 0, 0.6)",
                  borderRadius: "20px",
                }}
              >
                <div className="rc__post-content ps-3 pb-3">
                  <Link href="">
                    <h3 className="rc__post-title pt-10 pb-10 fw-bold" style={{fontFamily: 'Noto Sans Lao', fontSize: '16px'}}>{item.title}</h3>
                    <div className="rc__meta">
                      <span>{item.date}</span>
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

export default RecentPost;
