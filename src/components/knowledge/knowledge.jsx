import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const know_data = [
  {
    id: 1,
    title: "2 ຂໍ້​ຫ້າມ 3 ຄວນ​ຮູ້ ເມື່ອ​ເກີດພາ​ຍຸ​ຟ້າ​ຜ່າ​ລົມ​ແຮງ",
    img: "/images/knowledge/1.jpeg",
    video: "",
    Date: "28/4/2024",
  },
  {
    id: 2,
    title: "ຂໍ້​ປະ​ຕິ​ບັດ ການ​ນຳ​ໃຊ້ EV CHARGER",
    img: "/images/knowledge/2.jpeg",
    video: "",
    Date: "28/4/2024",
  },
  {
    id: 3,
    title: "6 ວິ​ທີ​ງ່າຍໆ ຢູ່​ບ້ານ​ແບບ​ໃດ​ໃຫ້​ປະ​ຢັດ​ໄຟ​ຟ້າ",
    img: "/images/knowledge/3.jpeg",
    video: "",
    Date: "28/4/2024",
  },
  {
    id: 4,
    title: "2 ຂໍ້​ຄວນ​ລະ​ວັງ ເວ​ລາ​ຝົນ​ຕົກ​ນ້ຳ​ຖ້ວມ",
    img: "/images/knowledge/4.jpeg",
    video: "",
    Date: "28/4/2024",
  },
  {
    id: 5,
    title: "Solar Rooftop On-Grid",
    img: "/images/knowledge/5.jpeg",
    video: "",
    Date: "28/4/2024",
  },
  {
    id: 6,
    title: "6 ວິ​ທີ​ປ້ອງ​ກັນ​ ເຄື່ອງ​ໃຊ້​ໄຟ​ຟ້າ​ດູດ​ໃນ​ລະ​ດູ​ຝົນ",
    img: "/images/knowledge/6.jpeg",
    video: "",
    Date: "28/4/2024",
  },
  {
    id: 7,
    title: "ກວດ​ກາ​ລະ​ບົບ​ໄຟ​ຟ້າ​ໃນ​ເຮືອນ ເພື່ອ​ຄວາມ​ປອດ​ໄພ​ໃນ​ລະ​ດູ​ຝົນ",
    img: "/images/knowledge/7.jpeg",
    video: "",
    Date: "28/4/2024",
  },
  {
    id: 8,
    title:
      "ຂອບ​ເຂດ​ແລວ​ສະ​ຫງວນ​ຂອງ​ສາຍ​ສົ່ງ​ໄຟ​ຟ້າ​ແຮງ​ສູງ 115kV, 230kV, 500kV",
    img: "/images/knowledge/8.jpeg",
    video: "",
    Date: "28/4/2024",
  },
  {
    id: 9,
    title:
      "5 ສາ​ເຫດ ເຮັດ​ໃຫ້​ສາຍ​ໄຟເຊື່ອມ​ຄຸນ​ນະ​ພາບ ແລະ ອາ​ຍຸ​ການ​ໃຊ້​ງານ​ສັ້ນ​ລົງ",
    img: "/images/knowledge/9.jpeg",
    video: "",
    Date: "28/4/2024",
  },
  {
    id: 10,
    title: "ວິ​ທີ​ປະ​ຢັດ​ໄຟ​ຟ້າ ໃນ​ຫ້ອງ​ຄົວ",
    img: "/images/knowledge/10.jpg",
    video: "",
    Date: "28/4/2024",
  },
];

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;

  const truncated = text.slice(0, maxLength);

  const lastSpaceIndex = truncated.lastIndexOf(" ");

  if (lastSpaceIndex === -1) return truncated + "...";

  return truncated.slice(0, lastSpaceIndex) + "...";
};

const Portfolio = () => {
  return (
    <>
      <div className="portfolio blog-grid-inner mb-30">
        <div className="container">
          <div className="row grid blog-grid-inner pt-50">
            {know_data.map((item, i) => (
              <div
                key={i}
                data-index={i}
                className="col-xl-3 col-lg-3 col-md-3 col-12 mb-30 grid-item cat1 cat4 cat3 cat5"
              >
                <div className="tp-blog-item" style={{ height: "490px" }}>
                  <div className="tp-blog-thumb fix">
                    <Link href={{
                                pathname: "/know_detail",
                                query: { know_id: item.id },
                              }}>
                      <img
                        src={item.img}
                        alt="theme-pure"
                        width="100%"
                        style={{ height: "330px" }}
                      />
                    </Link>
                  </div>
                  <div className="tp-blog-content">
                    <div className="tp-blog-meta d-flex align-items-center">
                      <div>
                        <span>{item.Date}</span>
                      </div>
                    </div>
                    <div className="tp-blog-title-box">
                      <Link
                        className="tp-blog-title-sm"
                        href={{
                          pathname: "/know_detail",
                          query: { know_id: item.id },
                        }}
                        style={{ fontFamily: "Noto Sans Lao" }}
                      >
                        {truncateText(item.title, 44)}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="basic-pagination text-center mt-5">
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
