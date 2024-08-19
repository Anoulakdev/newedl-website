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
          `${process.env.NEXT_PUBLIC_API_URL}/api_v1/user-svc/confessions/get`
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
                    className="col-xl-3 col-lg-3 col-md-3 col-12 mb-30 grid-item cat1 cat4 cat3 cat5"
                  >
                    <div
                      className="tp-blog-item wow tpfadeUp"
                      style={{ height: "490px" }}
                    >
                      <div className="tp-blog-thumb fix">
                        <Link
                          href={{
                            pathname: "/know_detail",
                            query: { know_id: item.id },
                          }}
                        >
                          <img
                            src={`${process.env.NEXT_PUBLIC_API_URL}/confessions/${item.image}`}
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
        )}
      </div>
    </>
  );
};

export default Portfolio;
