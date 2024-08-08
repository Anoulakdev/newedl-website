"use client";
import React, { useState } from "react";
import styles from "../statistic/Tabs.module.css";
import Link from "next/link";

import Image from "next/image";

import price1 from "@/public/images/edlprice/Asset1.png";
import price2 from "@/public/images/edlprice/Asset2.png";
import price3 from "@/public/images/edlprice/Asset3.png";
import price4 from "@/public/images/edlprice/Asset4.png";

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
                0.4 ກວ ປະ​ເພດ​ທີ່​ຢູ່ອ​າ​ໃສ
              </li>
              <li
                className={`${styles.tab} ${
                  activeTab === 1 ? styles.active : ""
                } fs-5 fw-bold`}
                onClick={() => handleClick(1)}
              >
                0.4 ກວ ທີ່ບໍ່​ແມ່​ນປະ​ເພດ​ທີ່​ຢູ່ອ​າ​ໃສ
              </li>
              <li
                className={`${styles.tab} ${
                  activeTab === 2 ? styles.active : ""
                } fs-5 fw-bold`}
                onClick={() => handleClick(2)}
              >
                22 ກວ
              </li>
              <li
                className={`${styles.tab} ${
                  activeTab === 3 ? styles.active : ""
                } fs-5 fw-bold`}
                onClick={() => handleClick(3)}
              >
                115 ກວ
              </li>
            </ul>
          </div>
        </div>

        <div className="row mt-50">
          <div style={{ display: activeTab === 0 ? "block" : "none" }}>
            <Image src={price4} className="img-fluid img-thumbnail" />
          </div>
          <div style={{ display: activeTab === 1 ? "block" : "none" }}>
            <Image src={price2} className="img-fluid img-thumbnail" />
          </div>
          <div style={{ display: activeTab === 2 ? "block" : "none" }}>
            <Image src={price1} className="img-fluid img-thumbnail" />
          </div>
          <div style={{ display: activeTab === 3 ? "block" : "none" }}>
            <Image src={price3} className="img-fluid img-thumbnail" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
