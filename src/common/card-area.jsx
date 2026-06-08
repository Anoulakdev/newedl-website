"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

const CardArea = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/vision/type/1`,
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

  function splitSentences(text) {
    if (!text) return { firstSentence: "", secondSentence: "" };

    const marker = "02 หนາທີ່ຫຼັກຄື:</p>"; // Unicode/Lao character variants might exist, let's look for both
    let markerEnd = text.indexOf("02 ໜ້າທີ່ຫຼັກຄື:</p>");
    let markerLen = "02 ໜ້າທີ່ຫຼັກຄື:</p>".length;

    if (markerEnd === -1) {
      markerEnd = text.indexOf("02 ໜ້າທີ່ຫລັກຄື:</p>");
      markerLen = "02 ໜ້າທີ່ຫລັກຄື:</p>".length;
    }
    if (markerEnd === -1) {
      markerEnd = text.indexOf("02 ໜ້າທີ່ຫຼັກຄື:");
      markerLen = "02 ໜ້າທີ່ຫຼັກຄື:".length;
    }

    if (markerEnd === -1) {
      // Return everything as first part if split marker is not found
      return {
        firstSentence: text,
        secondSentence: "",
      };
    }

    const splitPoint = markerEnd + markerLen;
    const firstSentence = text.substring(0, splitPoint).trim();
    const secondSentence = text.substring(splitPoint).trim();

    return {
      firstSentence,
      secondSentence,
    };
  }

  const result = data
    ? splitSentences(data.description)
    : { firstSentence: "", secondSentence: "" };

  if (loading) {
    return (
      <div className="tp-card-area tp-card-space pt-50 animate-pulse">
        <div className="container">
          <div className="col-md-10 mx-auto">
            {/* Slogan Skeleton */}
            <div
              className="bg-secondary opacity-20 rounded-4 mb-60"
              style={{ height: "180px", borderRadius: "24px" }}
            />
          </div>
          <div className="row">
            {/* Left Column (Image Skeleton) */}
            <div className="col-xl-6 col-lg-6">
              <div
                className="bg-secondary opacity-10 rounded-4"
                style={{ height: "400px", borderRadius: "24px" }}
              />
            </div>
            {/* Right Column (Text Skeleton) */}
            <div className="col-xl-6 col-lg-6 ps-lg-4 pt-4 pt-lg-0">
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
          </div>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <>
      <div className="tp-card-area tp-card-space pt-50">
        <div className="container">
          {/* Slogan Box */}
          {/* <div className="col-md-10 mx-auto">
            <div 
              className="pt-40 pb-40 px-4 rounded-4 text-center text-white mb-60 position-relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #000229 0%, #1921af 50%, #6865FF 100%)",
                boxShadow: "0 15px 35px rgba(0, 2, 41, 0.15)",
                borderRadius: "24px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                transition: "all 0.3s ease"
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div 
                className="position-absolute rounded-circle opacity-10"
                style={{
                  width: "250px",
                  height: "250px",
                  background: "#ffffff",
                  top: "-125px",
                  right: "-125px",
                  pointerEvents: "none"
                }}
              />
              <div className="position-relative z-1">
                <i className="fas fa-quote-left fs-3 mb-3 text-warning opacity-75"></i>
                <div className="htmlslogan px-md-5">
                  <p
                    className="mb-0 text-white"
                    dangerouslySetInnerHTML={{
                      __html: data.slogan,
                    }}
                    style={{
                      fontFamily: "Noto Sans Lao",
                      lineHeight: "1.6"
                    }}
                  ></p>
                </div>
                <i className="fas fa-quote-right fs-3 mt-3 text-warning opacity-75 d-inline-block"></i>
              </div>
            </div>
          </div> */}

          {/* Grid Layout: Image and Text */}
          <div className="row g-4 align-items-start">
            {/* Left Image Column */}
            <div className="col-xl-6 col-lg-6">
              <div className="tp-card-thumb-wrapper p-relative text-center">
                <div
                  className="overflow-hidden rounded-4 position-relative"
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
                    alt="Vision Illustration"
                    className="w-100 h-auto rounded-3 img-fluid"
                    style={{
                      objectFit: "cover",
                      maxHeight: "420px",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="col-xl-6 col-lg-6 ps-lg-5">
              <div className="tp-card-title-box">
                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      height: "4px",
                      width: "40px",
                      background: "linear-gradient(90deg, #6865FF, #FF75F9)",
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

                {/* Highlight First Part */}
                {result?.firstSentence && (
                  <div
                    className="firstSentence mb-4 p-4 rounded-4"
                    style={{
                      background: "rgba(104, 101, 255, 0.05)",
                      borderLeft: "4px solid #6865FF",
                      borderRadius: "0 16px 16px 0",
                    }}
                  >
                    <p
                      className="mb-0 text-dark fw-medium"
                      dangerouslySetInnerHTML={{
                        __html: result.firstSentence,
                      }}
                      style={{
                        fontSize: "1.05rem",
                        lineHeight: "1.8",
                        fontFamily: "Noto Sans Lao",
                      }}
                    ></p>
                  </div>
                )}

                {/* Regular Second Part */}
                {result?.secondSentence && (
                  <div className="htmlvision ps-2">
                    <p
                      className="text-secondary"
                      dangerouslySetInnerHTML={{
                        __html: result.secondSentence,
                      }}
                      style={{
                        fontSize: "1.05rem",
                        lineHeight: "1.8",
                        fontFamily: "Noto Sans Lao",
                        textAlign: "justify",
                      }}
                    ></p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardArea;
