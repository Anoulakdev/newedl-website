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
import facebook_logo from "@/public/images/facebook-icon.png";

const PostboxArea = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/notiDistrict/get`,
          // "https://app-api.edl.com.la/api_v1/user-svc/notiDistrict/get",
          {
            headers: {
              "Content-Type": "application/json", // Set Content-Type header
            },
          }
        );
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    item.noti.title_head.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

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

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const downloadFile = (url, filename) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", filename);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <>
      <div className="postbox__area pb-40 pt-40">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12">
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
                          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
                            <Image
                              src={imgoff}
                              className="rounded-start p-3"
                              alt="theme-pure"
                            />
                          </div>
                          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
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
                              <div class="d-flex justify-content-between">
                                <div
                                  className={`text-${
                                    moment().isBefore(item.noti.start_date)
                                      ? "warning"
                                      : moment().isAfter(item.noti.end_date)
                                      ? "success"
                                      : "primary"
                                  } d-flex align-items-center text-end`}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-gear me-2"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                                  </svg>
                                  {moment().isBefore(item.noti.start_date)
                                    ? "ລໍ​ຖ້າ​ປະ​ຕິ​ບັດ​ວຽກ"
                                    : moment().isAfter(item.noti.end_date)
                                    ? "​ປະ​ຕິ​ບັດ​ວຽ​ກ​ສຳ​ເລັດ"
                                    : "​ກຳ​ລັງ​ປະ​ຕິ​ບັດ​ວຽກ"}
                                </div>
                                <div>
                                  <Link
                                    className="me-2"
                                    href={item.noti.facebook_url}
                                    target="_blank"
                                  >
                                    <Image
                                      src={facebook_logo}
                                      alt=""
                                      width={35}
                                      height={35}
                                    />
                                  </Link>
                                  <button
                                    onClick={() => {
                                      const url = `${process.env.NEXT_PUBLIC_API_URL_IMG}/notifications/${item.noti.file_url}`;
                                      const filename = `${item.noti.title_head}.pdf`;
                                      downloadFile(url, filename);
                                    }}
                                    className="btn btn-primary btn-sm"
                                  >
                                    ດາວ​ໂຫຼດ​ເອ​ກະ​ສານ
                                  </button>
                                </div>
                              </div>
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
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handlePageChange(currentPage - 1);
                            }}
                            aria-disabled={currentPage === 1}
                            className={currentPage === 1 ? "disabled" : ""}
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
                                className={
                                  currentPage === item ? "current" : ""
                                }
                                onClick={(e) => {
                                  e.preventDefault();
                                  handlePageChange(item);
                                }}
                              >
                                {item}
                              </Link>
                            )}
                          </li>
                        ))}
                        <li>
                          <Link
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handlePageChange(currentPage + 1);
                            }}
                            aria-disabled={currentPage === totalPages}
                            className={
                              currentPage === totalPages ? "disabled" : ""
                            }
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

            <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12">
              <div className="sidebar__wrapper">
                <Search onSearch={handleSearch} />
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
