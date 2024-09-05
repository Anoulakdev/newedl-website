"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Categories from "./categories";
import RecentPost from "./recent-post";
import Search from "./search";
import axios from "axios";
import moment from "moment";
import Image from "next/image";
import imgoff from "@/public/images/turnoff/image15.png";
import Rolling from "@/public/images/gif/Rolling.gif";

const PostboxArea = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/notiDistrict/get`
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
      <div className="postbox__area pb-40 pt-40">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              {isLoading ? (
                <div className="text-center pt-30">
                  <Image src={Rolling} width={100} height={100} alt="Loading" />
                </div>
              ) : (
                <div id="blog" className="postbox__wrapper pr-20 wow tpfadeUp">
                  {currentItems.length ? (
                    currentItems.map((item, i) => (
                      <div
                        key={i}
                        className="card mb-3 d-flex"
                        style={{
                          boxShadow: "0 5px 12px rgba(0, 0, 0, 0.6)",
                          borderRadius: "20px",
                        }}
                      >
                        <div className="row g-0">
                          <div className="col-xxl-4 col-xl-4 col-lg-4 col-col-md-4 col-4">
                            <Image
                              src={imgoff}
                              className="rounded-start p-3"
                              alt="theme-pure"
                            />
                          </div>
                          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-8">
                            <div className="card-body">
                              <h5 style={{ fontFamily: "Noto Sans Lao" }}>
                                {item.noti.title_head}
                              </h5>
                              <p className="text-dark fw-bold">
                                {item.noti.sub_title}
                              </p>
                              <p className="card-text">
                                ມອດໄຟເວລາ: {item.noti.start_time} ຫາ{" "}
                                {item.noti.end_time}
                              </p>
                              <p className="text-danger">
                                ວັນທີມອດໄຟ{" "}
                                {moment(item.noti.start_date).format(
                                  "DD-MM-YYYY"
                                )}{" "}
                                ຫາ{" "}
                                {moment(item.noti.end_date).format(
                                  "DD-MM-YYYY"
                                )}
                              </p>
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

                  <div className="basic-pagination">
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
                                className={
                                  currentPage === item ? "current" : ""
                                }
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

            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="sidebar__wrapper">
                <Search />
                <RecentPost />
                {/* <Categories /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostboxArea;
