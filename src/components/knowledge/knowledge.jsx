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
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      }
    }

    let l;
    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  const handlePageChange = (pageNumber, e) => {
    e.preventDefault();
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <div className="portfolio blog-grid-inner mb-30">
        {isLoading ? (
          <div className="text-center pt-30">
            <Image src={Rolling} width={100} height={100} />
          </div>
        ) : (
          <div className="container">
            <div className="row grid blog-grid-inner pt-50">
              {currentItems.length ? (
                currentItems.map((item, i) => (
                  <div
                    key={i}
                    data-index={i}
                    className="col-xl-3 col-lg-4 col-md-6 col-12 mb-30 grid-item cat1 cat4 cat3 cat5"
                  >
                    <div
                      className="tp-blog-item wow tpfadeUp"
                      style={{
                        height: "500px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
                        borderRadius: "20px",
                      }}
                    >
                      <div className="tp-blog-thumb fix">
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
                            style={{ height: "330px" }}
                          />
                        </Link>
                      </div>
                      <div className="tp-blog-content">
                        <div className="tp-blog-meta d-flex align-items-center">
                          <div>
                            <span>
                              {moment(item.created_at).format("DD-MM-YYYY")}
                            </span>
                          </div>
                        </div>
                        <div className="tp-blog-title-box">
                          <Link
                            className="tp-blog-title-sm"
                            href={{
                              pathname: "/know_detail",
                              query: { know_id: item.id },
                            }}
                            style={{ fontFamily: "Noto Sans Lao" }}
                          >
                            {truncateText(item.title, 44)}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h2
                  className="text-center mt-4"
                  style={{ fontFamily: "Noto Sans Lao" }}
                >
                  ຍັງ​ບໍ່​ມີ​ຂໍ້​ມູນ
                </h2>
              )}
            </div>
            <div className="basic-pagination text-center mt-5">
              <nav>
                <ul>
                  <li>
                    <Link
                      href="#"
                      onClick={(e) => handlePageChange(currentPage - 1, e)}
                      aria-disabled={currentPage === 1}
                    >
                      <i className="far fa-angle-left"></i>
                    </Link>
                  </li>
                  {getPageNumbers().map((item, index) => (
                    <li key={index}>
                      {item === "..." ? (
                        <span>{item}</span>
                      ) : (
                        <Link
                          href="#"
                          className={currentPage === item ? "current" : ""}
                          onClick={(e) => handlePageChange(item, e)}
                        >
                          {item}
                        </Link>
                      )}
                    </li>
                  ))}
                  <li>
                    <Link
                      href="#"
                      onClick={(e) => handlePageChange(currentPage + 1, e)}
                      aria-disabled={currentPage === totalPages}
                    >
                      <i className="far fa-angle-right"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Portfolio;
