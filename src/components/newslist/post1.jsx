"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Categories from "./categories";
import RecentPost from "./recent-post";
import Search from "./search";
import Tags from "./tags";
import axios from "axios";
import moment from "moment";
import Image from "next/image";
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
          `${process.env.NEXT_PUBLIC_API_URL}/api_v1/user-svc/news/get`
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
                              src={`${process.env.NEXT_PUBLIC_API_URL}/news/${item.image}`}
                              alt="theme-pure"
                              width="100%"
                            />
                            {/* <Image src={`${imageUrlBase}${item.news_image}`} alt="theme-pure" width={200} height={200}/> */}
                          </Link>
                        </div>
                        <div className="postbox__content px-3">
                          <div className="postbox__meta">
                            <span>
                              {moment(item.posting_date).format("DD-MM-YYYY")}
                            </span>
                          </div>
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
