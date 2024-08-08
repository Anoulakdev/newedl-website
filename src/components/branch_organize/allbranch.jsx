"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

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
  const cardData = [
    {
      id: 1,
      imageSrc: img84,
      heading: "ສາຂາແຂວງອັດຕະປື",
      division: "ຝ່າຍ​ຄ​ຸ້ມ​ຄອງ​ລະ​ບົບ​ໄຟ​ຟ້າ​ພາກ​ໃຕ້",
    },
    {
      id: 2,
      imageSrc: img88,
      heading: "ສາຂາແຂວງຫົວພັນ",
      division: "ຝ່າຍ​ຄ​ຸ້ມ​ຄອງ​ລະ​ບົບ​ໄຟ​ຟ້າ​ພາກ​ເໜືອ",
    },
    {
      id: 3,
      imageSrc: img92,
      heading: "ສາຂາແຂວງອຸດົມໄຊ",
      division: "ຝ່າຍ​ຄ​ຸ້ມ​ຄອງ​ລະ​ບົບ​ໄຟ​ຟ້າ​ພາກ​ເໜືອ",
    },
    {
      id: 4,
      imageSrc: img96,
      heading: "ສາຂາແຂວງສະຫວັນນະເຂດ",
      division: "ຝ່າຍ​ຄ​ຸ້ມ​ຄອງ​ລະ​ບົບ​ໄຟ​ຟ້າ​ພາກ​ໃຕ້",
    },
    {
      id: 5,
      imageSrc: img100,
      heading: "ສາຂາແຂວງໄຊສົມບູນ",
      division: "ຝ່າຍ​ຄ​ຸ້ມ​ຄອງ​ລະ​ບົບ​ໄຟ​ຟ້າ​ພາກ​ກາງ",
    },
    {
      id: 6,
      imageSrc: img85,
      heading: "ສາຂາແຂວງບໍ່ແກ້ວ",
      division: "ຝ່າຍ​ຄ​ຸ້ມ​ຄອງ​ລະ​ບົບ​ໄຟ​ຟ້າ​ພາກ​ເໜືອ",
    },
    {
      id: 7,
      imageSrc: img89,
      heading: "ສາຂາແຂວງຄຳມ່ວນ",
      division: "ຝ່າຍ​ຄ​ຸ້ມ​ຄອງ​ລະ​ບົບ​ໄຟ​ຟ້າ​ພາກ​ໃຕ້",
    },
    {
      id: 8,
      imageSrc: img93,
      heading: "ສາຂາແຂວງຜົ້ງສາລີ",
      division: "ຝ່າຍ​ຄ​ຸ້ມ​ຄອງ​ລະ​ບົບ​ໄຟ​ຟ້າ​ພາກ​ເໜືອ",
    },
    {
      id: 9,
      imageSrc: img97,
      heading: "ສາຂາແຂວງເຊກອງ",
      division: "ຝ່າຍ​ຄ​ຸ້ມ​ຄອງ​ລະ​ບົບ​ໄຟ​ຟ້າ​ພາກ​ໃຕ້",
    },
    {
      id: 10,
      imageSrc: img86,
      heading: "ສາຂາແຂວງບໍລິຄຳໄຊ",
      division: "ຝ່າຍ​ຄ​ຸ້ມ​ຄອງ​ລະ​ບົບ​ໄຟ​ຟ້າ​ພາກ​ກາງ",
    },
    {
      id: 11,
      imageSrc: img90,
      heading: "ສາຂາແຂວງຫຼວງນ້ຳທາ",
      division: "ຝ່າຍ​ຄ​ຸ້ມ​ຄອງ​ລະ​ບົບ​ໄຟ​ຟ້າ​ພາກ​ເໜືອ",
    },
    {
      id: 12,
      imageSrc: img94,
      heading: "ສາຂາແຂວງໄຊຍະບູລີ",
      division: "ຝ່າຍ​ຄ​ຸ້ມ​ຄອງ​ລະ​ບົບ​ໄຟ​ຟ້າ​ພາກ​ເໜືອ",
    },
    {
      id: 13,
      imageSrc: img98,
      heading: "ສາຂາແຂວງວຽງຈັນ",
      division: "ຝ່າຍ​ຄ​ຸ້ມ​ຄອງ​ລະ​ບົບ​ໄຟ​ຟ້າ​ພາກ​ກາງ",
    },
    {
      id: 14,
      imageSrc: img87,
      heading: "ສາຂາແຂວງຈຳປາສັກ",
      division: "ຝ່າຍ​ຄ​ຸ້ມ​ຄອງ​ລະ​ບົບ​ໄຟ​ຟ້າ​ພາກ​ໃຕ້",
    },

    {
      id: 15,
      imageSrc: img91,
      heading: "ສາຂາແຂວງຫຼວງພະບາງ",
      division: "ຝ່າຍ​ຄ​ຸ້ມ​ຄອງ​ລະ​ບົບ​ໄຟ​ຟ້າ​ພາກ​ເໜືອ",
    },
    {
      id: 16,
      imageSrc: img95,
      heading: "ສາຂາແຂວງສາລະວັນ",
      division: "ຝ່າຍ​ຄ​ຸ້ມ​ຄອງ​ລະ​ບົບ​ໄຟ​ຟ້າ​ພາກ​ໃຕ້",
    },
    {
      id: 17,
      imageSrc: img99,
      heading: "ສາຂາແຂວງຊຽງຂວາງ",
      division: "ຝ່າຍ​ຄ​ຸ້ມ​ຄອງ​ລະ​ບົບ​ໄຟ​ຟ້າ​ພາກ​ເໜືອ",
    },
    {
      id: 18,
      imageSrc: img101,
      heading: "ສາຂານະຄອນຫລວງ1",
      division: "ຝ່າຍ​ຄ​ຸ້ມ​ຄອງ​ລະ​ບົບ​ໄຟ​ຟ້າ​ພາກ​ກາງ",
    },
    {
      id: 19,
      imageSrc: img102,
      heading: "ສາຂານະຄອນຫລວງ2",
      division: "ຝ່າຍ​ຄ​ຸ້ມ​ຄອງ​ລະ​ບົບ​ໄຟ​ຟ້າ​ພາກ​ກາງ",
    },
  ];

  return (
    <>
      <div className="portfolio blog-grid-inner mb-10">
        <div className="container">
          <div className="row grid blog-grid-inner pt-50">
            {cardData.map((item, i) => (
              <div
                key={i}
                data-index={i}
                className="col-xl-4 col-lg-4 col-md-4 col-12 mb-30 grid-item cat1 cat4 cat3 cat5"
              >
                <div className="tp-blog-item">
                  <div className="tp-blog-thumb fix rounded-4">
                    <Link
                      href={{
                        pathname: "/branch_detail",
                        query: { branch_id: item.id },
                      }}
                    >
                      <Image src={item.imageSrc} alt="theme-pure" />
                    </Link>
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

export default AllBranch;
