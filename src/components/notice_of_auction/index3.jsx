"use client";
import Link from "next/link";
import React, { useState } from "react";
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
    status: "ເປິດ​ປະ​ມູນແລ້ວ",
    statuscolor: "success",
  },
  {
    id: 2,
    imagePath: "/images/notice_of_auction/0074.jpg",
    title: "ຫນັງສືເຊີນເຂົ້າຮ່ວມປະມູນ",
    description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
    date_start: "09/01/2024",
    date_end: "17/01/2024",
    status: "ເປິດ​ປະ​ມູນແລ້ວ",
    statuscolor: "success",
  },
  {
    id: 3,
    imagePath: "/images/notice_of_auction/107.jpg",
    title: "ຫນັງສືເຊີນເຂົ້າຮ່ວມປະມູນ",
    description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
    date_start: "8/01/2024",
    date_end: "15/02/2024",
    status: "ປິດ​ປະ​ມູນແລ້ວ",
    statuscolor: "danger",
  },
  {
    id: 4,
    imagePath: "/images/notice_of_auction/3286.jpg",
    title: "ຫນັງສືເຊີນເຂົ້າຮ່ວມປະມູນ",
    description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
    date_start: "04/01/2024",
    date_end: "17/01/2024",
    status: "ເປິດ​ປະ​ມູນແລ້ວ",
    statuscolor: "success",
  },
  {
    id: 5,
    imagePath: "/images/notice_of_auction/3080.jpg",
    title: "ຫນັງສືເຊີນເຂົ້າຮ່ວມປະມູນ",
    description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
    date_start: "4/01/2024",
    date_end: "12/01/2024",
    status: "ປິດ​ປະ​ມູນແລ້ວ",
    statuscolor: "danger",
  },
  {
    id: 6,
    imagePath: "/images/notice_of_auction/3069.jpg",
    title: "ຫນັງສືເຊີນເຂົ້າຮ່ວມປະມູນ",
    description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
    date_start: "26/12/2023",
    date_end: "30/01/2024",
    status: "ປິດ​ປະ​ມູນແລ້ວ",
    statuscolor: "danger",
  },
];

const PostboxArea = () => {
  return (
    <>
      <div className="portfolio blog-grid-inner mb-30">
        <div className="container">
          <div className="row grid blog-grid-inner pt-50">
            {cardData.map((item, i) => (
              <div
                key={i}
                data-index={i}
                className="col-xl-4 col-lg-4 col-md-4 col-12 mb-30 grid-item cat1 cat4 cat3 cat5"
              >
                <div className="tp-blog-item" style={{ height: "510px" }}>
                  <div className="tp-blog-thumb fix">
                    <Image src={imgnotice} alt="theme-pure" />
                  </div>

                  <div className="tp-blog-content">
                    <div className="tp-blog-title-box">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-calendar-event-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
                        </svg>{" "}
                        ເປີດ​ປະ​ມູນ​ວັນ​ທີ {item.date_start} - {item.date_end}
                      </div>
                      <div className="mt-3">
                        <h5 style={{ fontFamily: "Noto Sans Lao" }}>
                          {item.title}
                        </h5>
                        <hr />
                      </div>
                      <div className="text-black">
                        ເວ​ລາ: 09:00 ໂມງ ຫາ 16:30 ໂມງ
                      </div>
                      <div className="text-black">
                        ສ​ະ​ຖານ​ທີ່: ຫ້ອງ​ການ​ໄຟ​ຟ້າ​ລາວ, ຫ້ອງ​ປະ​ຊຸມ​ໃຫ່​ຍ​ຊັ້ນ
                        8 ຫ້ອງ 801
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <p className={`text-${item.statuscolor}`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-hammer"
                            viewBox="0 0 16 16"
                          >
                            <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334" />
                          </svg>{" "}
                          {item.status}
                        </p>
                        <Link href={item.imagePath} target="_blank">
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-sm"
                        >
                          ດາວ​ໂຫລດ​ຟອ​ມ
                        </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
      </div>
    </>
  );
};

export default PostboxArea;
