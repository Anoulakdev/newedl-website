"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Categories from "./categories";
import RecentPost from "./recent-post";
import Search from "./search"; // Importing Search component
import axios from "axios";
import moment from "moment";
import Image from "next/image";
import Rolling from "@/public/images/gif/Rolling.gif";

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
          `${process.env.NEXT_PUBLIC_API_URL}/news/get`,
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

  const filteredData = data.filter((item) =>
    item.news_title_la.toLowerCase().includes(searchTerm.toLowerCase())
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
                <div id="blog" className="postbox__wrapper pr-20 wow tpfadeUp">
                  {currentItems.length ? (
                    currentItems.map((item, i) => (
                      <article
                        style={{
                          boxShadow: "0 5px 12px rgba(0, 0, 0, 0.6)",
                          borderRadius: "20px",
                        }}
                        key={i}
                        className={`postbox__item format-image fix mb-50 transition-3`}
                      >
                        <div className="postbox__thumb w-img">
                          <Link
                            href={{
                              pathname: "/newsdetail",
                              query: { news_id: item.news_id },
                            }}
                          >
                            <img
                              src={`${process.env.NEXT_PUBLIC_API_URL_IMG}/news/${item.image}`}
                              alt="theme-pure"
                              width="100%"
                            />
                          </Link>
                        </div>
                        <div className="postbox__content px-3">
                          <h3 className="postbox__title pb-4">
                            <Link
                              href={{
                                pathname: "/newsdetail",
                                query: { news_id: item.news_id },
                              }}
                            >
                              {item.news_title_la}
                            </Link>
                          </h3>
                        </div>
                      </article>
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

            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="sidebar__wrapper">
                {/* Pass handleSearch as a prop to the Search component */}
                <Search onSearch={handleSearch} />
                <RecentPost />
                {/* <Categories /> */}
                {/* <Tags />  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostboxArea;
