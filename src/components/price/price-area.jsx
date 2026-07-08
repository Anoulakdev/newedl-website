"use client";
import React, { useState, useEffect } from "react";
import styles from "./price.module.css";
import axios from "axios";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/prices/get`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setPrices(response.data.data);
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    };

    fetchPrices();
  }, []);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={`container text-center wow tpfadeUp ${styles.priceArea}`}>
      {/* Tabs Navigation */}
      <div className="row">
        <div className="d-flex justify-content-center">
          <ul className={styles.tabsContainer}>
            {prices.map((price, index) => (
              <li
                key={index}
                className={`${styles.tabItem} ${
                  activeTab === index ? styles.tabItemActive : ""
                }`}
                onClick={() => handleClick(index)}
              >
                {price.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tab Panels */}
      <div className="row mt-10">
        <div className="col-12">
          {prices.map((price, index) => {
            const imageUrl = `${process.env.NEXT_PUBLIC_API_URL_IMG}/prices/${price.image}`;
            return (
              <div
                key={index}
                className={styles.activePane}
                style={{ display: activeTab === index ? "block" : "none" }}
              >
                <div className={styles.priceContent}>
                  <div className={styles.imageWrapper}>
                    {/* Floating Action Buttons */}
                    <div className={styles.actionsOverlay}>
                      {/* Zoom / View in New Tab Button */}
                      <a
                        href={imageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.overlayBtn}
                        title="ເບິ່ງຮູບຂະໜາດໃຫຍ່"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M15 3h6v6"></path>
                          <path d="M9 21H3v-6"></path>
                          <path d="M21 3l-7 7"></path>
                          <path d="M3 21l7-7"></path>
                        </svg>
                      </a>
                    </div>

                    <img
                      src={imageUrl}
                      alt={price.title}
                      className={`img-fluid ${styles.priceImage}`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
