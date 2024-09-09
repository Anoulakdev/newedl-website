"use client";

import React from "react";
import styles from "../branch_organize/customlink.module.css";

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
  const downloadFile = (url, filename) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", filename);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
      });
  };

  return (
    <>
      <div className="container mt-60 mb-60 wow tpfadeUp">
        <div className="row">
          <h1 style={{ fontFamily: "Noto Sans Lao" }}>ລາຍ​ການ</h1>
        </div>
        <div className="row mt-30 ps-4">
          <nav>
            <ul>
              {cardData.map((menu_item, i) => (
                <div key={i} className={`${styles.link} fs-5 my-3`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-file-text me-2"
                    viewBox="0 0 16 16"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  >
                    <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" />
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
                  </svg>
                  <a
                    href="#"
                    className="fs-4"
                    onClick={(e) => {
                      e.preventDefault(); // Prevents page reload
                      const url = `${menu_item.pdfPath}`;
                      const filename = `${menu_item.title}.pdf`; // Sanitizing the filename
                      downloadFile(url, filename);
                    }}
                  >
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

export default Tables;
