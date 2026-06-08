"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

const SalesArea = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/vision/type/2`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="tp-sales-area tp-sales-space pt-50 pb-50 animate-pulse">
        <div className="container">
          <div className="row g-4 align-items-center">
            {/* Left Column (Text Skeleton) */}
            <div className="col-xl-6 col-lg-6">
              <div
                className="bg-secondary opacity-25 mb-4"
                style={{ height: "35px", width: "40%", borderRadius: "8px" }}
              />
              <div
                className="bg-secondary opacity-15 mb-3"
                style={{ height: "120px", borderRadius: "16px" }}
              />
              <div
                className="bg-secondary opacity-10 mb-2"
                style={{ height: "20px", width: "100%" }}
              />
              <div
                className="bg-secondary opacity-10 mb-2"
                style={{ height: "20px", width: "95%" }}
              />
              <div
                className="bg-secondary opacity-10 mb-2"
                style={{ height: "20px", width: "90%" }}
              />
              <div
                className="bg-secondary opacity-10"
                style={{ height: "20px", width: "70%" }}
              />
            </div>
            {/* Right Column (Image Skeleton) */}
            <div className="col-xl-6 col-lg-6">
              <div
                className="bg-secondary opacity-10 rounded-4"
                style={{ height: "400px", borderRadius: "24px" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <>
      <div className="tp-sales-area tp-sales-space pt-50 pb-50">
        <div className="container">
          <div className="row g-4 align-items-start">
            {/* Left Text Column */}
            <div className="col-xl-6 col-lg-6 order-1 order-lg-1">
              <div className="tp-sales-section-box pe-lg-4">
                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      height: "4px",
                      width: "40px",
                      background: "linear-gradient(90deg, #FF7A41, #FFAB0A)",
                      marginRight: "12px",
                      borderRadius: "2px",
                    }}
                  />
                  <h3
                    className="mb-0 text-dark fw-bold"
                    style={{
                      fontFamily: "Noto Sans Lao",
                      fontSize: "2.25rem",
                      color: "#000229",
                    }}
                  >
                    {data.title}
                  </h3>
                </div>

                {/* Description Card */}
                <div
                  className="htmlvision p-4 rounded-4"
                  style={{
                    background: "rgba(255, 122, 65, 0.05)",
                    borderLeft: "4px solid #FF7A41",
                    borderRadius: "0 16px 16px 0",
                  }}
                >
                  <p
                    className="mb-0 text-secondary"
                    dangerouslySetInnerHTML={{
                      __html: data.description,
                    }}
                    style={{
                      fontSize: "1.05rem",
                      lineHeight: "1.8",
                      fontFamily: "Noto Sans Lao",
                      textAlign: "justify",
                    }}
                  ></p>
                </div>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="col-xl-6 col-lg-6 order-0 order-lg-2">
              <div className="tp-sales-img-wrapper p-relative text-center text-lg-end">
                <div
                  className="overflow-hidden rounded-4 d-inline-block position-relative w-100"
                  style={{
                    borderRadius: "24px",
                    boxShadow: "0 20px 40px rgba(0,2,41,0.06)",
                    border: "1px solid rgba(0,0,0,0.04)",
                    background: "#ffffff",
                    padding: "10px",
                    transition: "all 0.4s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow =
                      "0 25px 50px rgba(0,2,41,0.12)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px rgba(0,2,41,0.06)";
                  }}
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL_IMG}/visions/${data.image}`}
                    alt="Mission Illustration"
                    className="w-100 h-auto rounded-3 img-fluid"
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesArea;
