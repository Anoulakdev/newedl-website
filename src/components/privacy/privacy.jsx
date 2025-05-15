"use client";

import React from "react";
import styles from "../branch_organize/customlink.module.css";

// blog page data
const cardData = [
  {
    id: 1,
    link: "/privacy/edlapp",
    title: "privacy ຂອງລະ​ບົບ EDLAPP",
  },
  {
    id: 2,
    link: "/privacy/ev",
    title: "privacy ຂອງລະ​ບົບ EV",
  },
  // Add more card data objects as needed
];

const Privacy = () => {
  return (
    <>
      <div className="container mt-60 mb-100 wow tpfadeUp">
        <div className="row">
          <h1 style={{ fontFamily: "Noto Sans Lao" }}>ລາຍ​ການ Privacy</h1>
        </div>
        <div className="row mt-30 ps-4">
          <nav>
            <ul>
              {cardData.map((menu_item, i) => (
                <div key={i} className={`${styles.link} fs-5 my-4`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-file-text me-3"
                    viewBox="0 0 16 16"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  >
                    <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" />
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
                  </svg>
                  <a href={menu_item.link} target="_blank" className="fs-4">
                    {menu_item.title}
                  </a>
                </div>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Privacy;
