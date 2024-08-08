"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

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
import imglocation from "@/public/images/map.png";


const AllBranch = () => {
  // const cardData = [
  //   {
  //     id: 1,
  //     imageSrc: img84,
  //     heading: "ສາຂາແຂວງອັດຕະປື",
  //     description: "ຕັ້ງຢູ່ບ້ານໄຊສະອາດ,ເມືອງສາມັກຄີໄຊ ແຂວງອັດຕະປື",
  //     phone: "031 2115156-0",
  //     email: "Edl.attapue@hotmail.com ",
  //     lat: "14.820155",
  //     lng: "106.823246",
  //   },
  //   {
  //     id: 2,
  //     imageSrc: img88,
  //     heading: "ສາຂາແຂວງຫົວພັນ",
  //     description: "ຕັ້ງຢູ່ບ້ານນາທົ່ງ, ເມືອງຊໍາເໜືອ ແຂວງ ຫົວພັນ",
  //     phone: "064 31 2945",
  //     email: "Khampheuy_edl@yahoo.com ",
  //     lat: "20.413599",
  //     lng: "104.054559",
  //   },
  //   {
  //     id: 3,
  //     imageSrc: img92,
  //     heading: "ສາຂາແຂວງອຸດົມໄຊ",
  //     description: "ຕັ້ງຢູ່ບ້ານນາສ້າວ, ເມືອງໄຊ ແຂວງ ອຸດົມໄຊ. .",
  //     phone: "081 212 957",
  //     email: "Edl.oudomxay@hotmail.com ",
  //     lat: "20.66587",
  //     lng: "101.969305",
  //   },
  //   {
  //     id: 4,
  //     imageSrc: img96,
  //     heading: "ສາຂາແຂວງສະຫວັນນະເຂດ",
  //     description: "ບ້ານ ທ່າແຮ່. ເມືອງ ໄກສອນ ພົມວິຫານ. ",
  //     phone: "031 2115156-0",
  //     email: "Edl.attapue@hotmail.com ",
  //     lat: "16.54496",
  //     lng: "104.747316",
  //   },
  //   {
  //     id: 5,
  //     imageSrc: img100,
  //     heading: "ສາຂາແຂວງໄຊສົມບູນ",
  //     description: "ຕັ້ງຢູ່ ຖະໜົນເລທີ 5B, ບ້ານ ພູຫົວຊ້າງ, ເມືອງ ອານຸວົງ",
  //     phone: "031 2115156-0",
  //     email: "Edl.attapue@hotmail.com ",
  //     lat: "18.898105",
  //     lng: "103.09507",
  //   },
  //   {
  //     id: 6,
  //     imageSrc: img85,
  //     heading: "ສາຂາແຂວງບໍ່ແກ້ວ",
  //     description: "ຕັ້ງຢູ່ ບ້ານໃຫຍ່ຫ້ວຍຊາຍໃຕ້ ເມືອງຫ້ວຍຊາຍ",
  //     phone: "084 212 007",
  //     email: "EDL_Bokeo@hotmail.com ",
  //     lat: "20.26938",
  //     lng: "100.420068",
  //   },
  //   {
  //     id: 7,
  //     imageSrc: img89,
  //     heading: "ສາຂາແຂວງຄຳມ່ວນ",
  //     description: "ຕັ້ງຢູ່ບ້ານໂພນສະໜາມ,ເມືອງທ່າແຂກ ແຂວງ ຄຳມ່ວນ",
  //     phone: "051 212682",
  //     email: "EDL_KM@gmail.com ",
  //     lat: "17.394081",
  //     lng: "104.807302",
  //   },
  //   {
  //     id: 8,
  //     imageSrc: img93,
  //     heading: "ສາຂາແຂວງຜົ້ງສາລີ",
  //     description: "ຕັ້ງຢູ່ບ້ານ ໂພນແກ້ວ, ເມືອງຜົ້ງສາລີ",
  //     phone: "088-210215",
  //     email: "Edl.phongsaly@hotmail.com ",
  //     lat: "21.620748",
  //     lng: "101.896938",
  //   },
  //   {
  //     id: 9,
  //     imageSrc: img97,
  //     heading: "ສາຂາແຂວງເຊກອງ",
  //     description: "ຕັ້ງຢູ່ບ້ານໂພນຄຳ, ເທດສະບານ ເມືອງລະມາມ",
  //     phone: "038 211 354",
  //     email: "Edl.xekong@hotmail.com ",
  //     lat: "15.37301",
  //     lng: "106.722158",
  //   },
  //   {
  //     id: 10,
  //     imageSrc: img86,
  //     heading: "ສາຂາແຂວງບໍລິຄຳໄຊ",
  //     description: "ຕັ້ງຢູ່ບ້ານ ຫົງໄຊ ແຂວງບໍລິຄຳໄຊ",
  //     phone: "054 280307",
  //     email: "Edl.borlikhamxay@hotmail.com ",
  //     lat: "18.404408",
  //     lng: "103.644939",
  //   },
  //   {
  //     id: 11,
  //     imageSrc: img90,
  //     heading: "ສາຂາແຂວງຫຼວງນ້ຳທາ",
  //     description: "ຕັ້ງຢູ່ບ້ານ ວຽງທອງ, ຖະໜົນຫຼວງນໍ້າທາ, ເມືອງ ຫຼວງນໍ້າທາ",
  //     phone: "086-212093",
  //     email: "edllnt2006@gmail.com ",
  //     lat: "21.011298",
  //     lng: "101.408682",
  //   },
  //   {
  //     id: 12,
  //     imageSrc: img94,
  //     heading: "ສາຂາແຂວງໄຊຍະບູລີ",
  //     description: "ຕັ້ງຢູ່ບ້ານ ທ່ານາ ເມືອງໄຊຍະບູລີ ",
  //     phone: "074 211673",
  //     email: "edl_sayaboury@hotmail.com",
  //     lat: "19.28147",
  //     lng: "101.708695",
  //   },
  //   {
  //     id: 13,
  //     imageSrc: img98,
  //     heading: "ສາຂາແຂວງວຽງຈັນ",
  //     description: "ຕັ້ງຢູ່ບ້ານ ໂພນໝີ ໃຕ້ , ເມືອງ ວຽງຄໍາ  ",
  //     phone: "(023) 431015",
  //     email: "Edl.vientiane@hotmail.com ",
  //     lat: "18.47257",
  //     lng: "102.485549",
  //   },
  //   {
  //     id: 14,
  //     imageSrc: img87,
  //     heading: "ສາຂາແຂວງຈຳປາສັກ",
  //     description: "ຕັ້ງຢູ່ບ້ານ ໂນນສະຫວ່າງ ນະຄອນປາກເຊ",
  //     phone: "(031) 215 037",
  //     email: "Edl.champasack@hotmail.com ",
  //     lat: "15.101234",
  //     lng: "105.832275",
  //   },

  //   {
  //     id: 15,
  //     imageSrc: img91,
  //     heading: "ສາຂາແຂວງຫຼວງພະບາງ",
  //     description: "ຕັ້ງຢູ່ບ້ານໂຄມຂວາງ ຖະໜົນ13ເໜືອ",
  //     phone: "071 212 190",
  //     email: "edl_Luangprabang@hotmail.com",
  //     lat: "19.903356",
  //     lng: "102.159877",
  //   },
  //   {
  //     id: 16,
  //     imageSrc: img95,
  //     heading: "ສາຂາແຂວງສາລະວັນ",
  //     description: "ຕັ້ງທີ່ບ້ານ ນາກົກໂພ ເທດສະບານ ",
  //     phone: "034 211127",
  //     email: "Edl.salavan@hotmail.com ",
  //     lat: "15.716485",
  //     lng: "106.417808",
  //   },
  //   {
  //     id: 17,
  //     imageSrc: img99,
  //     heading: "ສາຂາແຂວງຊຽງຂວາງ",
  //     description: "ຕັ້ງຢູ່ ບ້ານໂພນສະອາດໃຕ້ ເມືອງແປກ",
  //     phone: "061 213545",
  //     email: "Edl.xiengkhoung@hotmail.com ",
  //     lat: "19.449765",
  //     lng: "103.192303",
  //   },
  //   {
  //     id: 18,
  //     imageSrc: img101,
  //     heading: "ສາຂານະຄອນຫລວງ1",
  //     description: "ຕັ້ງຢູ່ບ້ານ ໜອງບຶກ ເມືອງສີໂຄດຕະບອງ",
  //     phone: "021 254121",
  //     email: "Edl.nakhoneluang1@hotmail.com",
  //     lat: "18.008125",
  //     lng: "102.579739",
  //   },
  //   {
  //     id: 19,
  //     imageSrc: img102,
  //     heading: "ສາຂານະຄອນຫລວງ2",
  //     description: "ຕັ້ງຢູ່ບ້ານ ໜອງບຶກ",
  //     phone: "031 2115156-0",
  //     email: "Edl.attapue@hotmail.com",
  //     lat: "18.058959",
  //     lng: "102.66581",
  //   },
  // ];

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api_v1/user-svc/branches/get`
        );
        setData(response.data.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="portfolio blog-grid-inner mb-10">
        <div className="container">
          <div className="row grid blog-grid-inner pt-50">
            {data.map((item, i) => (
              <div
                key={i}
                data-index={i}
                className="col-xl-4 col-lg-4 col-md-4 mb-30 grid-item cat1 cat4 cat3 cat5"
              >
                <div className="tp-blog-item wow tpfadeUp" style={{ height: "440px" }}>
                  <div className="tp-blog-thumb fix">
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_URL}/branches/${item.bra_image}`}
                      alt="theme-pure"
                      style={{ height: "230px" }}
                    />
                  </div>

                  <div className="tp-blog-content">
                    <div className="tp-blog-title-box">
                      <h5 style={{ fontFamily: "Noto Sans Lao" }}>
                        {item.bra_name}
                      </h5>
                      <p>{item.address}</p>

                      <div class="d-flex justify-content-between align-items-center">
                        <p>
                          <svg
                            width={17}
                            height={17}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" />
                          </svg>{" "}
                          {item.phone_number}
                        </p>
                        <Link
                          href={item.location}
                          target="_blank"
                        >
                          <Image src={imglocation} alt="theme-pure" />
                        </Link>
                      </div>

                      <p>
                        <i className="fas fa-envelope"></i> {item.email}
                      </p>
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

export default AllBranch;
