"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

import img68 from "@/public/images/about/FF.png";

const CardArea = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/vision/type/1`
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
      <div className="tp-card-area tp-card-space pt-50">
        <div className="container">
          <div className="col-md-10 mx-auto">
            <div className="htmlslogan blue-bg pt-35 pb-20 rounded-4 text-center text-white mb-50">
              <p dangerouslySetInnerHTML={{
                __html: data.slogan,
              }}>
              </p>
              {/* ລັດວິສາຫະກິດໄຟຟ້າລາວ ເດີ່ນໜ້າໄປດ້ວຍບາດກ້າວໃໝ່ທີ່ໝັ້ນຄົງ */}
            </div>
          </div>
          <div className="row">
            <div
              className="col-xl-6 col-lg-6 wow tpfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-card-thumb-wrapper p-relative">
                <div>
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL_IMG}/visions/${data.image}`}
                    alt="theme-pure"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="tp-card-title-box">
                <h3
                  className="tp-section-title-2 pb-20"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default CardArea;
