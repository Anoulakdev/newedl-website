"use client";
import VideoPopup from "@/src/modals/video-popup";
import SearchIcon from "@/src/svg/search-icon";
import Link from "next/link";
import React, { useState } from "react";
import Categories from "./categories";
import RecentPost from "./recent-post";
import Search from "./search";
import Tags from "./tags";

import img_1 from "@/public/images/notice_of_auction/Smartmeter.jpg";
import img_2 from "@/public/images/notice_of_auction/0074.jpg";
import img_3 from "@/public/images/notice_of_auction/107.jpg";
import img_4 from "@/public/images/notice_of_auction/3286.jpg";
import img_5 from "@/public/images/notice_of_auction/3080.jpg";
import img_6 from "@/public/images/notice_of_auction/3069.jpg";
import Image from "next/image";

// blog page data
const cardData = [
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

const PostboxArea = () => {
  return (
    <>
      <div className="postbox__area pb-40 pt-40">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div id="blog" className="postbox__wrapper pr-20">
                {cardData.map((item, i) => (
                  <div
                    key={i}
                    data-index={i}
                    style={{
                      boxShadow: "0 5px 12px rgba(0, 0, 0, 0.6)",
                      borderRadius: "20px",
                    }}
                  >
                    <div className="tp-blog-item">
                      <div className="tp-blog-thumb fix">
                        {/* <Link href="#">
                          <Image src={item.imagePath} alt="theme-pure"/>
                        </Link> */}
                        <Link href="#">
                        <div className="tp-blog-thumb fix px-3 py-3">
                        <h3 className="rc__post-title pt-10 pb-10 fs-2 fw-bold mb-3" style={{fontFamily: 'Noto Sans Lao'}}>{item.title}</h3>
                        <p className="text-dark fs-5 fw-bold">{item.description}</p>
                        <p className="mb-3">{item.date}</p>
                        </div>
                      </Link>
                      </div>
                      
                    </div>
                  </div>
                ))}

                <div className="basic-pagination">
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

            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="sidebar__wrapper">
                <Search />
                <RecentPost />
                {/* <Categories /> */}
                {/* <Tags />  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostboxArea;
