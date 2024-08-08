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
import img10 from "@/public/images/statistic/10.png";
import img11 from "@/public/images/statistic/11.png";
import img12 from "@/public/images/statistic/12.png";
import img13 from "@/public/images/statistic/13.png";
import img14 from "@/public/images/statistic/14.png";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="container mt-35 mb-50 text-center wow tpfadeUp">
        <div className="row">
          <div className="d-flex justify-content-center">
            <ul className={styles.tabs}>
              <li
                className={`${styles.tab} ${
                  activeTab === 0 ? styles.active : ""
                } fs-5 text-black`}
                onClick={() => handleClick(0)}
              >
                ຈໍານວນຜູ້ຊົມໃຊ້
              </li>
              <li
                className={`${styles.tab} ${
                  activeTab === 1 ? styles.active : ""
                } fs-5 text-black`}
                onClick={() => handleClick(1)}
              >
                ອັດຕາການເຂົ້າເຖິງໄຟ
              </li>
              <li
                className={`${styles.tab} ${
                  activeTab === 2 ? styles.active : ""
                } fs-5 text-black`}
                onClick={() => handleClick(2)}
              >
                ຂາຍໄຟພາຍໃນແຍກປະເພດ
              </li>
              <li
                className={`${styles.tab} ${
                  activeTab === 3 ? styles.active : ""
                } fs-5 text-black`}
                onClick={() => handleClick(3)}
              >
                Peak Load
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-center">
            <ul className={styles.tabs}>
              <li
                className={`${styles.tab} ${
                  activeTab === 4 ? styles.active : ""
                } fs-5 text-black`}
                onClick={() => handleClick(4)}
              >
                ການ​ຜະ​ລິດ ແລະ ຊື້​ໄຟ​ຟ້າ​ພາຍ​ໃນ​ປະ​ເທດ
              </li>
              <li
                className={`${styles.tab} ${
                  activeTab === 5 ? styles.active : ""
                } fs-5 text-black`}
                onClick={() => handleClick(5)}
              >
                ການນຳ​ເຂົ້າ​-ສົ່ງ​ອອກ​ໄຟ​ຟ້າ​ຈາກ​ຕ່າງ​​ປະ​ເທດ
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
          </div>

          <div style={{ display: activeTab === 1 ? "block" : "none" }}>
            <div className="text-center fs-3 text-black fw-bold mb-20">
              ການ​ເຂົ້າ​ເຖິງ​ໄຟ​ຟ້າ​ຂອງ​ຄົວ​ເຮືອນ (HouseHold)
            </div>
            <div>
              <Image src={img3} class="img-fluid" alt={img3} />
            </div>
            <div className="fs-3 text-black fw-bold text-start mt-40 mb-10">
              ສະ​ຖິ​ຕິ ການ​ເຂົ້າ​ເຖິງ​ໄຟ​ຟ້າ​ຂອງ​ຄົວ​ເຮືອນ (HouseHold)
            </div>
            <div className="shadow-lg bg-body-tertiary rounded">
              <Image src={img4} class="img-fluid" alt={img4} />
            </div>
          </div>

          <div style={{ display: activeTab === 2 ? "block" : "none" }}>
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
          </div>
          <div style={{ display: activeTab === 3 ? "block" : "none" }}>
            <div className="text-center fs-3 text-black fw-bold mb-30">
              ສະ​ຖິ​ຕິ ຄວາມ​ຕ້ອງ​ການ​ຊົມ​ໃຊ້​ໄຟ​ຟ້າ Peak Load (MW)
            </div>
            <div>
              <Image src={img7} class="img-fluid" alt={img7} />
            </div>
            <div className="fs-3 text-black fw-bold text-start mt-40 mb-10">
              ສະ​ຖິ​ຕິ ຄວາມ​ຕ້ອງ​ການ​ຊົມ​ໃຊ້​ໄຟ​ຟ້າ Peak Load (MW)
            </div>
            <div className="shadow-lg bg-body-tertiary rounded">
              <Image src={img8} class="img-fluid" alt={img8} />
            </div>
          </div>
          <div style={{ display: activeTab === 4 ? "block" : "none" }}>
            <div className="text-center fs-3 text-black fw-bold mb-20">
              ການ​ຜະ​ລິດ ແລະ ຊື້​ໄຟ​ຟ້າ​ພາຍ​ໃນ​ປະ​ເທດ (GWh)
            </div>
            <div>
              <Image src={img10} class="img-fluid" alt={img10} />
            </div>
            <div className="text-center fs-3 text-black fw-bold mt-20 mb-20">
              ການ​ຜະ​ລິດ ແລະ ຊື້​ໄຟ​ຟ້າ​ພາຍ​ໃນ​ປະ​ເທດ ແຍກ​ປະ​ເພດ
            </div>
            <div>
              <Image src={img11} class="img-fluid" alt={img11} />
            </div>
          </div>
          <div style={{ display: activeTab === 5 ? "block" : "none" }}>
            <div className="text-center fs-3 text-black fw-bold mb-20">
              ການນຳ​ເຂົ້າ-ສົ່ງ​ອອກ​ໄຟ​ຟ້າ​ຈາກ​ຕ່າງ​ປະ​ເທດ (GWh)
            </div>
            <div>
              <Image src={img12} class="img-fluid" alt={img12} />
            </div>
            <div className="text-center fs-3 text-black fw-bold mt-20 mb-10">
              ການ​ນຳ​ເຂົ້າ​ໄຟ​ຟ້າ​ຈາກ​ຕ່າງ​ປະ​ເທດ (GWh)
            </div>
            <div>
              <Image src={img13} class="img-fluid" alt={img13} />
            </div>
            <div className="text-center fs-3 text-black fw-bold mt-20 mb-20">
              ການສົ່ງ​ໄຟ​ຟ້າ​ໄປ​ຕ່າງ​ປະ​ເທດ (GWh)
            </div>
            <div>
              <Image src={img14} class="img-fluid" alt={img14} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
