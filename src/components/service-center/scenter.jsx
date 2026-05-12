"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Rolling from "@/public/images/gif/Rolling.gif";
import imglocation from "@/public/images/map.png";

const Portfolio = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL_PROVINCE}/province/provinces`,
          {
            headers: {
              "Content-Type": "application/json", // Set Content-Type header
            },
          }
        );
        setProvinces(response.data.data);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    fetchProvinces();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedProvince) return;

      setIsLoading(true); // Start loading
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/center/getByProvince?province_id=${selectedProvince}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Ensure loading state is turned off after fetching completes
      }
    };

    fetchData();
  }, [selectedProvince]);

  const handleProvinceChange = (event) => {
    setSelectedProvince(event.target.value);
  };

  return (
    <>
      <div className="portfolio blog-grid-inner mb-30">
        <div className="container">
          <div className="col-lg-8 col-md-10 col-12 mx-auto mt-70 mb-60 text-center">
            <h2 className="mb-4 fw-bold text-dark" style={{ fontFamily: "Noto Sans Lao" }}>
              ຄົ້ນຫາສູນບໍລິການລູກຄ້າ
            </h2>
            <div 
              className="position-relative shadow-sm bg-white px-4 py-2 border" 
              style={{ maxWidth: "500px", margin: "0 auto", borderRadius: "30px" }}
            >
              <select
                id="province-select"
                className="form-select border-0 shadow-none bg-transparent"
                style={{ fontSize: "1.1rem", fontFamily: "Noto Sans Lao", cursor: "pointer", outline: "none" }}
                value={selectedProvince}
                onChange={handleProvinceChange}
              >
                <option value="" disabled>-- ເລືອກແຂວງທີ່ທ່ານຕ້ອງການຄົ້ນຫາ --</option>
                {provinces.map((province) => (
                  <option key={province.province_id} value={province.province_id} className="text-dark">
                    {province.province_name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {!selectedProvince ? null : isLoading ? ( // This part was empty, use 'null' to avoid returning undefined.
            <div className="text-center">
              <Image src={Rolling} width={100} height={100} alt="Loading" />
            </div>
          ) : data && data.length ? (
            <div className="row grid blog-grid-inner">
              {data.map((item) => (
                <div
                  key={item.center_id}
                  data-index={item.center_id}
                  className="col-xl-3 col-lg-4 col-md-6 col-12 mb-40 grid-item"
                >
                  <div 
                    className="tp-blog-item bg-white overflow-hidden h-100 d-flex flex-column" 
                    style={{ 
                      borderRadius: "24px",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                      border: "1px solid rgba(0,0,0,0.05)",
                      transition: "all 0.3s ease" 
                    }}
                    onMouseOver={e => e.currentTarget.style.transform = 'translateY(-8px)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div className="tp-blog-thumb fix position-relative w-100" style={{ height: "220px", overflow: "hidden" }}>
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_URL_IMG}/centers/${item.center_image}`}
                        alt={item.center_name}
                        className="w-100 h-100"
                        style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                      />
                    </div>
                    <div className="tp-blog-content p-4 d-flex flex-column flex-grow-1">
                      <h5
                        className="mb-3 fw-bold text-dark"
                        style={{
                          fontFamily: "Noto Sans Lao",
                          lineHeight: "1.4",
                          display: "-webkit-box",
                          WebkitLineClamp: "2",
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden"
                        }}
                      >
                        {item.center_name}
                      </h5>
                      <div className="mb-3 d-flex align-items-center text-primary fw-medium" style={{ fontSize: "1.05rem" }}>
                        <svg
                          className="me-2"
                          width={18}
                          height={18}
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" />
                        </svg>
                        {item.center_tel}
                      </div>
                      
                      <hr className="mt-auto mb-3 opacity-25" />

                      <div className="d-flex justify-content-between align-items-center">
                        <div className="text-muted" style={{ fontSize: "0.9rem", fontFamily: "Noto Sans Lao", lineHeight: "1.5" }}>
                          <div><strong className="text-dark fw-medium">ບ້ານ:</strong> {item.village?.village_name || "-"}</div>
                          <div><strong className="text-dark fw-medium">ເມືອງ:</strong> {item.district?.district_name || "-"}</div>
                          <div><strong className="text-dark fw-medium">ແຂວງ:</strong> {item.province?.province_name || "-"}</div>
                        </div>
                        <Link
                          href={`https://maps.google.com/maps?q=${item.latitude},${item.longtitude}`}
                          target="_blank"
                          className="bg-light rounded-circle shadow-sm d-flex justify-content-center align-items-center"
                          style={{ width: "48px", height: "48px", transition: "all 0.2s ease" }}
                          onMouseOver={e => { e.currentTarget.style.backgroundColor = "#0052D4"; e.currentTarget.style.transform = "scale(1.1)"; }}
                          onMouseOut={e => { e.currentTarget.style.backgroundColor = "#f8f9fa"; e.currentTarget.style.transform = "scale(1)"; }}
                          title="ເບິ່ງແຜນທີ່"
                        >
                          <Image src={imglocation} alt="Location" width={22} height={22} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h3
              className="text-center mt-40 mb-60"
              style={{ fontFamily: "Noto Sans Lao" }}
            >
              ຍັງ​ບໍ່​ມີ​ຂໍ້​ມູນ
            </h3>
          )}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
