"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import moment from "moment";

const truncateText = (text, maxLength) => {
  if (text == null) return ""; // Return an empty string or some default value

  if (typeof text !== "string") return "";

  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

const PostboxArea = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/pads/get`,
          {
            headers: {
              "Content-Type": "application/json", // Set Content-Type header
            },
          }
        );
        setData(response.data.data);
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

  const downloadFile = (url, filename) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        // const filename = url.split("/").pop();
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
      <div className="portfolio blog-grid-inner mb-30">
        <div className="container">
          <div className="row grid blog-grid-inner pt-50">
            {currentItems.length ? (
              currentItems.map((item, i) => (
                <div
                  key={i}
                  data-index={i}
                  className="col-xl-4 col-lg-6 col-md-6 col-12 mb-30 grid-item cat1 cat4 cat3 cat5"
                >
                  <div
                    className="tp-blog-item"
                    style={{
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
                      borderRadius: "20px",
                    }}
                  >
                    <div
                      className="tp-blog-thumb fix"
                      style={{ height: "515px" }}
                    >
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_URL_IMG}/pads/${item.image}`}
                        alt="theme-pure"
                      />
                    </div>

                    <div className="tp-blog-content">
                      <div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-calendar-event-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
                          </svg>{" "}
                          ເປີດ​ປະ​ມູນ​ວັນ​ທີ{" "}
                          {moment(item.start_date).format("DD/MM/YYYY")} -{" "}
                          {moment(item.end_date).format("DD/MM/YYYY")}
                        </div>
                        <div className="mt-3">
                          <h5
                            style={{
                              fontFamily: "Noto Sans Lao",
                              height: "35px",
                            }}
                          >
                            {truncateText(item.title, 39)}
                          </h5>
                          <hr />
                        </div>

                        <div
                          className="text-black"
                          style={{ height: "50px" }}
                          dangerouslySetInnerHTML={{
                            __html: item.description,
                          }}
                        ></div>
                        <div className="d-flex justify-content-between align-items-center">
                          <p
                            className={`text-${
                              moment().isBefore(item.start_date)
                                ? "warning"
                                : moment().isAfter(item.end_date)
                                ? "danger"
                                : "success"
                            } d-flex align-items-center`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-hammer me-2"
                              viewBox="0 0 16 16"
                            >
                              <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334" />
                            </svg>{" "}
                            {moment().isBefore(item.start_date)
                              ? "ລໍ​ຖ້າ​ເປີດຂາຍ​ຊອງ​ປະ​ມູນ"
                              : moment().isAfter(item.end_date)
                              ? "ປິດ​ຂາຍ​ຊອງ​ປະ​ມູນ"
                              : "ເປີດ​ຂາຍ​ຊອງ​ປະ​ມູນ"}
                          </p>

                          {moment().isBetween(
                            item.start_date,
                            item.end_date
                          ) && (
                            <button
                              onClick={() => {
                                const url = `${process.env.NEXT_PUBLIC_API_URL_IMG}/pads/${item.file_url}`;
                                const filename = `${item.title}.pdf`;
                                downloadFile(url, filename);
                              }}
                              className="btn btn-outline-primary btn-sm"
                            >
                              ດາວ​ໂຫຼດແຈ້ງ​ການ
                            </button>
                          )}
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
        </div>
      </div>
    </>
  );
};

export default PostboxArea;
