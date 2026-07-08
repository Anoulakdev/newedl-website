"use client";

import React, { useState } from "react";
import styles from "./downloadform.module.css";

// Form page data with detailed metadata
const cardData = [
  {
    id: 1,
    pdfPath: "/pdf/downloadform/meter_install.pdf",
    title: "ແບບຟອມ ຂໍຕິດຕັ້ງໝໍ້ນັບໄຟ ເຂົ້າໃໝ່",
    coverPath: "/images/downloadform/meter_cover.png",
    category: "meter",
    categoryLao: "ຂໍໝໍ້ນັບໄຟໃໝ່",
  },
  {
    id: 2,
    pdfPath: "/pdf/downloadform/Solar_Rooftop.pdf",
    title: "ແບບຟອມ ຄຳຮ້ອງຂໍຂາຍໄຟຟ້າຈາກ Solar Rooftop",
    coverPath: "/images/downloadform/solar_cover.png",
    category: "solar",
    categoryLao: "Solar Rooftop",
  },
];

const Tables = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

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

  // Filter forms based on search query and category selection
  const filteredCards = cardData.filter((item) => {
    const titleMatch = item.title
      ? item.title.toLowerCase().includes(searchQuery.toLowerCase())
      : false;
    const descMatch = item.description
      ? item.description.toLowerCase().includes(searchQuery.toLowerCase())
      : false;
    const matchesSearch = titleMatch || descMatch;

    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.downloadContainer}>
      <div className="container">
        {/* Search & Filter Controls */}
        <div className={styles.searchFilterSection}>
          <div className={styles.searchWrapper}>
            <svg
              className={styles.searchIcon}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="ຄົ້ນຫາແບບຟອມ..."
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div className={styles.cardGrid}>
          {filteredCards.length > 0 ? (
            filteredCards.map((item) => (
              <div key={item.id} className={styles.downloadCard}>
                {item.coverPath && (
                  <div className={styles.cardCover}>
                    <img
                      src={item.coverPath}
                      alt={item.title}
                      className={styles.cardCoverImg}
                    />
                  </div>
                )}
                <div className={styles.cardContentWrapper}>
                  <div>
                    <div className={styles.cardHeader}>
                      <div className={styles.iconContainer}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                          <path d="M4.603 12.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a2.68 2.68 0 0 1-.248-1.004c0-.37.08-.709.246-.972.236-.375.568-.547.947-.547.177 0 .337.04.474.119.172.099.29.255.348.453.03.1.043.244.043.377 0 .302-.029.753-.153 1.213l-.01.036c.283.473.696.937 1.137 1.258.335-.145.698-.23 1.053-.23.513 0 .902.236 1.042.61.082.221.082.44 0 .662-.128.344-.45.547-.942.547-.359 0-.768-.142-1.127-.377a8.69 8.69 0 0 1-2.029-.28 5.36 5.36 0 0 1-1.378.754 2.122 2.122 0 0 1-.951.216zm2.254-4.814a.276.276 0 0 0-.1.014c-.111.04-.202.176-.202.408 0 .224.04.492.12.784a1.611 1.611 0 0 0 .254-.78.701 7.01 0 0 0-.067-.345.185.185 0 0 0-.205-.08zM5.13 11.233c.09.2.244.3.4.3.174 0 .367-.139.576-.412a4.345 4.345 0 0 0-.785-.407c-.122.072-.191.139-.243.208-.04.053-.05.1-.048.141zm2.902-.831c.29.17.602.296.883.296.204 0 .324-.072.378-.216a.22.22 0 0 0-.022-.216c-.053-.081-.191-.183-.55-.183-.244 0-.48.064-.689.142zm-.779-.577c-.36-.452-.663-.96-.867-1.488a6.485 6.485 0 0 0-.377 1.401c.42.158.832.195 1.244.087z" />
                        </svg>
                      </div>
                      <span
                        className={`${styles.categoryTag} ${
                          item.category === "solar"
                            ? styles.categoryTagSolar
                            : item.category === "meter"
                              ? styles.categoryTag
                              : styles.categoryTagOther
                        }`}
                      >
                        {item.categoryLao}
                      </span>
                    </div>

                    <div className={styles.cardBody}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      {item.description && (
                        <p className={styles.cardDescription}>
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className={styles.cardFooter}>
                    <div className={styles.metaInfo}>
                      <span className={styles.badgePdf}>PDF</span>
                      {item.fileSize && (
                        <div className={styles.metaItem}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                          </svg>
                          <span>{item.fileSize}</span>
                        </div>
                      )}
                    </div>
                    <button
                      className={styles.downloadButton}
                      onClick={(e) => {
                        e.preventDefault();
                        const url = `${item.pdfPath}`;
                        const filename = `${item.title}.pdf`;
                        downloadFile(url, filename);
                      }}
                    >
                      <span>ດາວໂຫຼດ</span>
                      <svg
                        className={styles.downloadBtnIcon}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.emptyState}>
              <svg
                className={styles.emptyStateIcon}
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
              <h4 className={styles.emptyStateTitle}>
                ບໍ່ພົບເອກະສານທີ່ທ່ານຄົ້ນຫາ
              </h4>
              <p className={styles.emptyStateText}>
                ກະລຸນາລອງຄົ້ນຫາຄຳສັບອື່ນ ຫຼື ກວດສອບຄວາມຖືກຕ້ອງຄືນໃໝ່.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tables;
