"use client";
import React, { useState } from "react";
import styles from "./Tabs.module.css";
import Link from "next/link";

import Image from "next/image";

import img1 from "@/public/images/statistic/1.png";
import img2 from "@/public/images/statistic/2.png";
import img3 from "@/public/images/statistic/3.png";
import img4 from "@/public/images/statistic/4.png";
import img5 from "@/public/images/statistic/5.png";
import img6 from "@/public/images/statistic/6.png";
import img7 from "@/public/images/statistic/7.png";
import img8 from "@/public/images/statistic/8.png";
import img9 from "@/public/images/statistic/9.png";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="container mt-50 mb-50 text-center wow tpfadeUp">
        <div className="row">
          <div className="d-flex justify-content-center">
            <ul className={styles.tabs}>
              <li
                className={`${styles.tab} ${
                  activeTab === 0 ? styles.active : ""
                } fs-5 fw-bold`}
                onClick={() => handleClick(0)}
              >
                ຈຳ​ນວນ​ລູກ​ຄ້າ
              </li>
              <li
                className={`${styles.tab} ${
                  activeTab === 1 ? styles.active : ""
                } fs-5 fw-bold`}
                onClick={() => handleClick(1)}
              >
                ​ການ​ຈຳ​ໜ່າຍ​ໄຟ​ຟ້າ​ພາຍ​ໃນ
              </li>
            </ul>
          </div>
        </div>

        <div className="row mt-50">
          <div style={{ display: activeTab === 0 ? "block" : "none" }}>
            <div className="text-center fs-3 text-black fw-bold mb-20">
              ຈຳ​ນວນ​ລູກ​ຄ້າ ແຍກ​ເປັນ​ແຕ່​ລະ​ປະ​ເພດ
            </div>
            <div>
              <Image src={img1} class="img-fluid" alt={img1} />
            </div>
            <div className="fs-3 text-black fw-bold text-start mt-30 mb-10">
              ສະ​ຖິ​ຕິ ຈຳ​ນວນ​ຜູ້​ຊົມ​ໃຊ້​ໄຟ​ຟ້າ ແຍກ​ປະ​ເພດ (ໜ່ວຍ)
            </div>
            <div className="shadow-lg bg-body-tertiary rounded">
              <Image src={img2} class="img-fluid" alt={img2} />
            </div>
            <div className="fs-3 text-black fw-bold text-start mt-40 mb-10">
              ການ​ເຂົ້າ​ເຖິງ​ໄຟ​ຟ້າ​ຂອງ​ຄົວ​ເຮືອນ (HouseHold)
            </div>
            <div className="shadow-lg bg-body-tertiary rounded">
              <Image src={img3} class="img-fluid" alt={img3} />
            </div>
            <div className="fs-3 text-black fw-bold text-start mt-40 mb-10">
              ສະ​ຖິ​ຕິ ການ​ເຂົ້າ​ເຖິງ​ໄຟ​ຟ້າ​ຂອງ​ຄົວ​ເຮືອນ (HouseHold)
            </div>
            <div className="shadow-lg bg-body-tertiary rounded">
              <Image src={img4} class="img-fluid" alt={img4} />
            </div>
          </div>

          <div style={{ display: activeTab === 1 ? "block" : "none" }}>
            <div className="text-center fs-3 text-black fw-bold mb-20">
              ການ​ຈຳ​ໜ່າຍ​ໄຟ​ຟ້າ​ພາຍ​ໃນ ສູງ​ສຸດ 4 ອັນ​ດັບ​ທຳ​ອິດ
            </div>
            <div>
              <Image src={img5} class="img-fluid" alt={img5} />
            </div>
            <div className="fs-3 text-black fw-bold text-start mt-30 mb-10">
              ສະ​ຖິ​ຕິ ຈຳ​ນວນ​ຈຳ​ໜ່າຍ​ໄຟ​ຟ້າ​ພາຍ​ໃນ ແຍກ​ປະ​ເພດ (Gwh)
            </div>
            <div className="shadow-lg bg-body-tertiary rounded">
              <Image src={img6} class="img-fluid" alt={img6} />
            </div>
            <div className="fs-3 text-black fw-bold text-start mt-40 mb-10">
              ສະ​ຖິ​ຕິ ຄວາມ​ຕ້ອງ​ການ​ຊົມ​ໃຊ້​ໄຟ​ຟ້າ Peak Load (MW)
            </div>
            <div className="shadow-lg bg-body-tertiary rounded">
              <Image src={img7} class="img-fluid" alt={img7} />
            </div>
            <div className="fs-3 text-black fw-bold text-start mt-40 mb-10">
              ສະ​ຖິ​ຕິ ຄວາມ​ຕ້ອງ​ການ​ຊົມ​ໃຊ້​ໄຟ​ຟ້າ Peak Load (MW)
            </div>
            <div className="shadow-lg bg-body-tertiary rounded">
              <Image src={img8} class="img-fluid" alt={img8} />
            </div>
            <div className="fs-3 text-black fw-bold text-start mt-40 mb-10">
              ສະ​ເລ່ຍ​ລາ​ຄາ​ຈຳ​ໜ່າຍ​ໄຟ​ຟ້າ​ພາຍ​ໃນ​ປະ​ເທດ kip/kWh
            </div>
            <div className="shadow-lg bg-body-tertiary rounded">
              <Image src={img9} class="img-fluid" alt={img9} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
