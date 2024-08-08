"use client";
import Link from "next/link";
import React, { useState } from "react";
import Categories from "./categories";
import RecentPost from "./recent-post";
import Search from "./search";
import moment from "moment";

import Image from "next/image";
import imgnotice from "@/public/images/notice_of_auction/1.jpeg";

// blog page data
const cardData = [
  {
    id: 1,
    imagePath: "/images/notice_of_auction/3069.jpg",
    title: "ຫນັງສືເຊີນເຂົ້າຮ່ວມປະມູນ",
    description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
    date_start: "23/01/2024",
    date_end: "29/01/2024",
  },
  {
    id: 2,
    imagePath: "/images/notice_of_auction/0074.jpg",
    title: "ຫນັງສືເຊີນເຂົ້າຮ່ວມປະມູນ",
    description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
    date_start: "09/01/2024",
    date_end: "17/01/2024",
  },
  {
    id: 3,
    imagePath: "/images/notice_of_auction/107.jpg",
    title: "ຫນັງສືເຊີນເຂົ້າຮ່ວມປະມູນ",
    description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
    date_start: "8/01/2024",
    date_end: "15/02/2024",
  },
  {
    id: 4,
    imagePath: "/images/notice_of_auction/3286.jpg",
    title: "ຫນັງສືເຊີນເຂົ້າຮ່ວມປະມູນ",
    description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
    date_start: "04/01/2024",
    date_end: "17/01/2024",
  },
  {
    id: 5,
    imagePath: "/images/notice_of_auction/3080.jpg",
    title: "ຫນັງສືເຊີນເຂົ້າຮ່ວມປະມູນ",
    description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
    date_start: "4/01/2024",
    date_end: "12/01/2024",
  },
  {
    id: 6,
    imagePath: "/images/notice_of_auction/3069.jpg",
    title: "ຫນັງສືເຊີນເຂົ້າຮ່ວມປະມູນ",
    description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
    date_start: "26/12/2023",
    date_end: "30/01/2024",
  },
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
                    className="card mb-3 d-flex"
                    style={{
                      boxShadow: "0 5px 12px rgba(0, 0, 0, 0.6)",
                      borderRadius: "20px",
                    }}
                  >
                    <div className="row g-0">
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-col-md-4 col-4">
                        <Image
                          src={imgnotice}
                          className="rounded-start p-3"
                          alt="theme-pure"
                        />
                      </div>
                      <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-8">
                        <div className="card-body">
                          <p>ເປີດ​ປະ​ມູນ​ວັນ​ທີ {item.date_start} - {item.date_end}</p>
                          <h5 style={{ fontFamily: "Noto Sans Lao" }}>
                            {item.title}
                          </h5>
                          <p className="text-dark fw-bold">
                            {item.description}
                          </p>
                          <p className="card-text">
                            ມອດໄຟເວລາ: {item.date_start} ໂມງ ຫາ {item.date_end}{" "}
                            ໂມງ
                          </p>
                        </div>
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
                <Categories />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostboxArea;
