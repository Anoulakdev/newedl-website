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
  const [itemsPerPage] = useState(6);

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
                    className="tp-blog-item bg-white overflow-hidden h-100 d-flex flex-column"
                    style={{
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                      borderRadius: "24px",
                      border: "1px solid rgba(0,0,0,0.05)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={e => e.currentTarget.style.transform = 'translateY(-8px)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div
                      className="tp-blog-thumb fix position-relative w-100"
                      style={{ height: "280px", overflow: "hidden" }}
                    >
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_URL_IMG}/pads/${item.image}`}
                        alt={item.title || "Auction"}
                        className="w-100 h-100"
                        style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                      />
                      <div className="position-absolute top-0 end-0 m-3">
                        <span className={`badge rounded-pill px-3 py-2 shadow-sm ${
                          moment().isBefore(item.start_date)
                            ? "bg-warning text-dark"
                            : moment().isAfter(item.end_date)
                            ? "bg-danger"
                            : "bg-success"
                        }`} style={{ fontSize: "0.85rem", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.2)" }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="currentColor"
                            className="bi bi-hammer me-1 mb-1"
                            viewBox="0 0 16 16"
                          >
                            <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334" />
                          </svg>{" "}
                          {moment().isBefore(item.start_date)
                            ? "ລໍ​ຖ້າ​ເປີດຂາຍ​ຊອງ​ປະ​ມູນ"
                            : moment().isAfter(item.end_date)
                            ? "ປິດ​ຂາຍ​ຊອງ​ປະ​ມູນ"
                            : "ເປີດ​ຂາຍ​ຊອງ​ປະ​ມູນ"}
                        </span>
                      </div>
                    </div>

                    <div className="tp-blog-content p-4 d-flex flex-column flex-grow-1">
                      <div className="text-secondary mb-3 d-flex align-items-center fw-medium" style={{ fontSize: "0.95rem" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-calendar-event-fill me-2 text-primary"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
                        </svg>{" "}
                        {moment(item.start_date).format("DD/MM/YYYY")} -{" "}
                        {moment(item.end_date).format("DD/MM/YYYY")}
                      </div>

                      <h5
                        className="fw-bold text-dark mb-3"
                        style={{
                          fontFamily: "Noto Sans Lao",
                          lineHeight: "1.5",
                          display: "-webkit-box",
                          WebkitLineClamp: "2",
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden"
                        }}
                      >
                        {item.title}
                      </h5>
                      
                      <hr className="mt-0 mb-3 opacity-25" />

                      <div
                        className="text-muted flex-grow-1"
                        style={{ 
                          lineHeight: "1.6",
                          display: "-webkit-box",
                          WebkitLineClamp: "3",
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          marginBottom: "20px"
                        }}
                        dangerouslySetInnerHTML={{
                          __html: item.description,
                        }}
                      ></div>

                      <div className="d-flex justify-content-end mt-auto pt-2 border-top">
                        {moment().isBetween(
                          item.start_date,
                          item.end_date
                        ) ? (
                          <button
                            onClick={() => {
                              const url = `${process.env.NEXT_PUBLIC_API_URL_IMG}/pads/${item.file_url}`;
                              const filename = `${item.title}.pdf`;
                              downloadFile(url, filename);
                            }}
                            className="btn btn-primary rounded-pill px-4 shadow-sm w-100"
                            style={{ 
                              transition: "all 0.3s ease",
                              background: "linear-gradient(135deg, #0052D4 0%, #4364F7 100%)",
                              border: "none",
                              padding: "10px 0"
                            }}
                            onMouseOver={e => e.currentTarget.style.boxShadow = "0 5px 15px rgba(67, 100, 247, 0.4)"}
                            onMouseOut={e => e.currentTarget.style.boxShadow = "none"}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-arrow-down-fill me-2 mb-1" viewBox="0 0 16 16">
                              <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
                            </svg>
                            ດາວ​ໂຫຼດແຈ້ງ​ການ
                          </button>
                        ) : (
                          <div className="w-100 text-center text-muted py-2 bg-light rounded-pill" style={{ fontSize: "0.95rem" }}>
                            {moment().isBefore(item.start_date) ? "ຍັງບໍ່ຮອດກຳນົດເປີດຂາຍ" : "ໝົດກຳນົດຂາຍແລ້ວ"}
                          </div>
                        )}
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
