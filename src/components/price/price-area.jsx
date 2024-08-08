"use client";
import React, { useState, useEffect } from "react";
import styles from "../statistic/Tabs.module.css";
import axios from "axios";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api_v1/user-svc/prices/get`);
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
    <div className="container mt-50 mb-50 text-center wow tpfadeUp">
      <div className="row">
        <div className="d-flex justify-content-center">
          <ul className={styles.tabs}>
            {prices.map((price, index) => (
              <li
                key={index}
                className={`${styles.tab} ${activeTab === index ? styles.active : ""} fs-5 fw-bold`}
                onClick={() => handleClick(index)}
              >
                {price.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="row mt-50">
        {prices.map((price, index) => (
          <div key={index} style={{ display: activeTab === index ? "block" : "none" }}>
            <img src={`${process.env.NEXT_PUBLIC_API_URL}/prices/${price.image}`} alt={price.title} className="img-fluid img-thumbnail" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
