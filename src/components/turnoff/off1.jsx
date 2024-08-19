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
  const [itemsPerPage] = useState(5); // Set items per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL_UAT}/user-svc/notiDistrict/get`
        );
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Calculate paginated data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate page numbers
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="postbox__area pb-40 pt-40">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              {isLoading ? (
                <div className="text-center pt-30">
                  <Image src={Rolling} width={100} height={100} />
                </div>
              ) : (
                <div id="blog" className="postbox__wrapper pr-20">
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
                                ມອດໄຟເວລາ: {item.noti.start_time} ຂອງ{" "}
                                {item.noti.end_time} ຂອງ
                              </p>
                              <p className="text-danger">
                                ວັນທີມອດໄຟ{" "}
                                {moment(item.noti.start_date).format(
                                  "DD-MM-YYYY"
                                )}{" "}
                                ຂອງ{" "}
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
                    <p>No data available</p>
                  )}

                  <div className="basic-pagination">
                    <nav>
                      <ul>
                        <li>
                          <Link
                            href="#"
                            onClick={() => handlePageChange(currentPage - 1)}
                            aria-disabled={currentPage === 1}
                          >
                            <i className="far fa-angle-left"></i>
                          </Link>
                        </li>
                        {pageNumbers.map((number) => (
                          <li key={number}>
                            <Link
                              href="#"
                              className={
                                currentPage === number ? "current" : ""
                              }
                              onClick={() => handlePageChange(number)}
                            >
                              {number}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            href="#"
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
                <Categories />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostboxArea;
