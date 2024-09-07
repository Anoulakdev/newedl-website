"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

import imglocation from "@/public/images/map.png";

const truncateText = (text, maxLength) => {
  if (text == null) return ""; // Return an empty string or some default value

  if (typeof text !== "string") return "";

  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

const AllBranch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/branches/get`
        );
        setData(response.data.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="portfolio blog-grid-inner mb-10">
        <div className="container">
          <div className="row grid blog-grid-inner pt-50">
            {data.length
              ? data.map((item, i) => (
                  <div
                    key={i}
                    data-index={i}
                    className="col-xl-4 col-lg-4 col-md-4 mb-30 grid-item cat1 cat4 cat3 cat5"
                  >
                    <div
                      className="tp-blog-item wow tpfadeUp"
                      style={{
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
                        borderRadius: "20px",
                      }}
                    >
                      <div className="tp-blog-thumb fix">
                        <img
                          src={`${process.env.NEXT_PUBLIC_API_URL_IMG}/branches/${item.bra_image}`}
                          alt="theme-pure"
                          style={{ height: "220px" }}
                        />
                      </div>

                      <div className="tp-blog-content">
                        <div>
                          <h5 style={{ fontFamily: "Noto Sans Lao" }}>
                            {item.bra_name}
                          </h5>
                          <p>{truncateText(item.address, 85)}</p>

                          <div class="d-flex justify-content-between align-items-center">
                            <p>
                              <svg
                                width={17}
                                height={17}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" />
                              </svg>{" "}
                              {item.phone_number}
                            </p>
                            <Link href={item.location} target="_blank">
                              <Image src={imglocation} alt="theme-pure" />
                            </Link>
                          </div>

                          <p>
                            <i className="fas fa-envelope"></i> {item.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBranch;
