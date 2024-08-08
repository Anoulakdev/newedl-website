"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./customlink.module.css";

import img84 from "@/public/images/branch/image84.png";
import img85 from "@/public/images/branch/image85.png";
import img86 from "@/public/images/branch/image86.png";
import img87 from "@/public/images/branch/image87.png";
import img88 from "@/public/images/branch/image88.png";
import img89 from "@/public/images/branch/image89.png";
import img90 from "@/public/images/branch/image90.png";
import img91 from "@/public/images/branch/image91.png";
import img92 from "@/public/images/branch/image92.png";
import img93 from "@/public/images/branch/image93.png";
import img94 from "@/public/images/branch/image94.png";
import img95 from "@/public/images/branch/image95.png";
import img96 from "@/public/images/branch/image96.png";
import img97 from "@/public/images/branch/image97.png";
import img98 from "@/public/images/branch/image98.png";
import img99 from "@/public/images/branch/image99.png";
import img100 from "@/public/images/branch/image100.png";
import img101 from "@/public/images/branch/image101.png";
import img102 from "@/public/images/branch/image102.png";

const AllBranch = () => {
  const cardData1 = [
    {
      id: 1,
      division: "ຝ່າຍ​ຄ​ຸ້ມ​ຄອງ​ລະ​ບົບ​ໄຟ​ຟ້າ​ພາກ​ເໜືອ",
      branch: [
        {
          id: 2,
          imageSrc: img88,
          heading: "ສາຂາແຂວງຫົວພັນ",
        },
        {
          id: 3,
          imageSrc: img92,
          heading: "ສາຂາແຂວງອຸດົມໄຊ",
        },
        {
          id: 6,
          imageSrc: img85,
          heading: "ສາຂາແຂວງບໍ່ແກ້ວ",
        },
        {
          id: 8,
          imageSrc: img93,
          heading: "ສາຂາແຂວງຜົ້ງສາລີ",
        },
        {
          id: 11,
          imageSrc: img90,
          heading: "ສາຂາແຂວງຫຼວງນ້ຳທາ",
        },
        {
          id: 12,
          imageSrc: img94,
          heading: "ສາຂາແຂວງໄຊຍະບູລີ",
        },
        {
          id: 15,
          imageSrc: img91,
          heading: "ສາຂາແຂວງຫຼວງພະບາງ",
        },
        {
          id: 17,
          imageSrc: img99,
          heading: "ສາຂາແຂວງຊຽງຂວາງ",
        },
      ],
    },
    {
      id: 2,
      division: "ຝ່າຍ​ຄ​ຸ້ມ​ຄອງ​ລະ​ບົບ​ໄຟ​ຟ້າ​ພາກ​ກາງ",
      branch: [
        {
          id: 5,
          imageSrc: img100,
          heading: "ສາຂາແຂວງໄຊສົມບູນ",
        },
        {
          id: 10,
          imageSrc: img86,
          heading: "ສາຂາແຂວງບໍລິຄຳໄຊ",
        },
        {
          id: 13,
          imageSrc: img98,
          heading: "ສາຂາແຂວງວຽງຈັນ",
        },
        {
          id: 18,
          imageSrc: img101,
          heading: "ສາຂານະຄອນຫລວງ1",
        },
        {
          id: 19,
          imageSrc: img102,
          heading: "ສາຂານະຄອນຫລວງ2",
        },
      ],
    },
    {
      id: 3,
      division: "ຝ່າຍ​ຄ​ຸ້ມ​ຄອງ​ລະ​ບົບ​ໄຟ​ຟ້າ​ພາກ​ໃຕ້",
      branch: [
        {
          id: 1,
          imageSrc: img84,
          heading: "ສາຂາແຂວງອັດຕະປື",
        },
        {
          id: 4,
          imageSrc: img96,
          heading: "ສາຂາແຂວງສະຫວັນນະເຂດ",
        },
        {
          id: 7,
          imageSrc: img89,
          heading: "ສາຂາແຂວງຄຳມ່ວນ",
        },
        {
          id: 9,
          imageSrc: img97,
          heading: "ສາຂາແຂວງເຊກອງ",
        },
        {
          id: 14,
          imageSrc: img87,
          heading: "ສາຂາແຂວງຈຳປາສັກ",
        },
        {
          id: 16,
          imageSrc: img95,
          heading: "ສາຂາແຂວງສາລະວັນ",
        },
      ],
    },
  ];

  return (
    <>
      <div className="portfolio blog-grid-inner mb-10">
        <div className="container">
          <div className="row grid blog-grid-inner pt-50">
            {cardData1.map((item, i) => (
              <div key={i} className="row pb-45">
                <div class="col-lg-9 col-md-9 col-12 mx-auto">
                  <h3 style={{ fontFamily: "Noto Sans Lao" }}>
                    <svg
                      style={{ marginRight: 8 }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-asterisk"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1" />
                    </svg>
                    {item.division}
                  </h3>
                  <ul className="ps-5 link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                    {item.branch.map((branch, i) => (
                      <Link
                        href={{
                          pathname: "/branch_detail",
                          query: { branch_id: branch.id },
                        }}
                      >
                        <li
                          key={i}
                          className={`${styles.link} fs-5 py-3`}
                        >
                          {branch.heading}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBranch;
