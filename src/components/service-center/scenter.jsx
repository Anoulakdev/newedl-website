"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Rolling from "@/public/images/gif/Rolling.gif";

const Portfolio = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/center/get`
        );
        setData(response.data.data);
        setIsLoading(false);
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

  const delta = 2; // Number of pages to show around the current page
  const startPage = Math.max(1, currentPage - delta);
  const endPage = Math.min(totalPages, currentPage + delta);

  let visiblePages = [];
  if (totalPages <= 2 * delta + 1) {
    visiblePages = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    if (startPage > 1) {
      visiblePages.push(1);
      if (startPage > 2) visiblePages.push("...");
    }
    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) visiblePages.push("...");
      visiblePages.push(totalPages);
    }
  }

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <div className="portfolio blog-grid-inner mb-30">
        <div className="container">
          {/* {isLoading ? (
            <div className="text-center pt-50">
              <Image src={Rolling} width={100} height={100} />
            </div>
          ) : (
            <div className="row grid blog-grid-inner pt-50">
              {currentItems.length ? (
                currentItems.map((item, i) => (
                  <div
                    key={item.center_id}
                    data-index={item.center_id}
                    className="col-xl-3 col-lg-3 col-md-3 col-12 mb-30 grid-item cat1 cat4 cat3 cat5"
                  >
                    <div className="tp-blog-item" style={{ height: "420px" }}>
                      <div className="tp-blog-thumb fix">
                        <Link
                          href={`https://maps.google.com/maps?q=${item.latitude}, ${item.longtitude}`}
                          target="_blank"
                        >
                          <Image
                            src={`${process.env.NEXT_PUBLIC_API_URL_IMG}/centers/${item.center_image}`}
                            width={300}
                            height={168}
                            alt="theme-pure"
                            style={{ height: "220px" }}
                          />
                        </Link>
                      </div>

                      <div className="tp-blog-content">
                        <div className="tp-blog-title-box">
                          <h5
                            className="mb-3"
                            style={{ fontFamily: "Noto Sans Lao" }}
                          >
                            {item.center_name}
                          </h5>
                          <p>
                            <svg
                              className="me-2"
                              width={17}
                              height={17}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" />
                            </svg>{" "}
                            {item.center_tel} <br />
                            ແຂວງ {item.province.province_name} <br />
                            ເມືອງ {item.district.district_name} <br />
                            ບ້ານ {item.village.village_name}{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h3
                  className="text-center my-5"
                  style={{ fontFamily: "Noto Sans Lao" }}
                >
                  ຍັງ​ບໍ່​ມີ​ຂໍ້​ມູນ
                </h3>
              )}
              <div className="basic-pagination text-center mt-5">
                <nav>
                  <ul>
                    <li>
                      <Link
                        href=""
                        onClick={() => handlePageChange(currentPage - 1)}
                        aria-disabled={currentPage === 1}
                      >
                        <i className="far fa-angle-left"></i>
                      </Link>
                    </li>
                    {visiblePages.map((item, index) =>
                      item === "..." ? (
                        <li key={index}>
                          <span>...</span>
                        </li>
                      ) : (
                        <li key={item}>
                          <Link
                            href=""
                            className={currentPage === item ? "current" : ""}
                            onClick={() => handlePageChange(item)}
                          >
                            {item}
                          </Link>
                        </li>
                      )
                    )}
                    <li>
                      <Link
                        href=""
                        onClick={() => handlePageChange(currentPage + 1)}
                        aria-disabled={currentPage === totalPages}
                      >
                        <i className="far fa-angle-right"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )} */}

          <h1 className="text-center mt-90 mb-90" style={{fontFamily: 'Noto Sans Lao'}}>ກຳ​ລັງ​ພັດ​ທະ​ນາ</h1>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
