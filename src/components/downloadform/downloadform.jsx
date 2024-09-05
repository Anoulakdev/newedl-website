"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "../branch_organize/customlink.module.css";

import Image from "next/image";

// blog page data
const cardData = [
  {
    id: 1,
    pdfPath: "/pdf/downloadform/meter_install.pdf",
    title: "ແບບຟອມ ​ຂໍ​ຕິດ​ຕັ້ງ​ໝໍ້​ນັບ​ໄຟ ເຂົ້າ​ໃໝ່​",
  },

  // Add more card data objects as needed
];

const Tables = () => {
  return (
    <>
      <div className="container mt-60 mb-60 wow tpfadeUp">
        <div className="row">
          <h1 style={{ fontFamily: "Noto Sans Lao" }}>
            ລາຍ​ການ
          </h1>
        </div>
        <div className="row mt-30 ps-4">
          <nav>
            <ul>
              {cardData.map((menu_item, i) => (
                <li
                  key={i}
                  className={`${styles.link} fs-5 my-3`}
                >
                  <Link
                    className="fs-4"
                    href={menu_item.pdfPath}
                    target="_blank"
                  >
                    {menu_item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Tables;
