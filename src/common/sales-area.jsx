"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";


const SalesArea = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/vision/type/2`,
          {
            headers: {
              "Content-Type": "application/json", // Set Content-Type header
            },
          }
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
      <div className="tp-sales-area tp-sales-space">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-6 col-lg-6 order-1 order-md-1 wow tpfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-sales-section-box">
                <h3
                  className="tp-section-title-3 pb-15 "
                  style={{ fontFamily: "Noto Sans Lao", fontSize: "40px" }}
                >
                  {data.title}
                </h3>
                <div className="htmlvision">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: data.description,
                    }}
                  ></p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 order-0 order-md-2 wow tpfadeRight mt-15"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="tp-sales-img-wrapper p-relative text-end">
                <div>
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL_IMG}/visions/${data.image}`}
                    alt="theme-pure"
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
