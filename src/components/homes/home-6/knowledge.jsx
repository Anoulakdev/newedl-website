"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import moment from "moment";
import Rolling from "@/public/images/gif/Rolling.gif";

const truncateText = (text, maxLength) => {
  if (text == null) return ""; // Return an empty string or some default value

  if (typeof text !== "string") return "";

  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

const Portfolio = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/confessions/get`,
          {
            headers: {
              "Content-Type": "application/json", // Set Content-Type header
            },
          }
        );
        setData(response.data.data);
        setIsLoading(false);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="portfolio blog-grid-inner mb-30">
        <div className="container">
          <div className="row align-items-end mt-40 mb-10">
            <div className="col-xl-12 col-lg-12">
              <div className="tp-service-section-four">
                <h3 className="tp-section-title-4 text-black">
                  ຄວາມ​ຮູ້​ກ່ຽວ​ກັບ​ໄຟ​ຟ້າ
                </h3>
              </div>
            </div>
          </div>
          <div className="row grid blog-grid-inner">
            {data.length
              ? data.slice(0, 3).map((item, i) => (
                  <div
                    key={i}
                    data-index={i}
                    className="col-xl-4 col-lg-4 col-md-4 col-12 grid-item cat1 cat4 cat3 cat5 wow tpfadeUp"
                  >
                    <div>
                      <Link
                        href={{
                          pathname: "/know_detail",
                          query: { know_id: item.id },
                        }}
                      >
                        <img
                          src={`${process.env.NEXT_PUBLIC_API_URL_IMG}/confessions/${item.image}`}
                          alt="theme-pure"
                          width="100%"
                          style={{
                            height:
                              window.innerWidth <= 767 ? "430px" : "320px",
                            borderRadius: "20px",
                            marginBottom: "20px",
                          }}
                        />
                      </Link>
                    </div>
                  </div>
                ))
              : null}
          </div>
          <div className="text-center">
            <Link href="/knowledge" className="btn btn-outline-primary">
              ອ່ານ​ເພີ່ມ​ເຕີມ
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
