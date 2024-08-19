"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import moment from "moment";

const PostboxArea = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api_v1/user-svc/pads/get`
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

  const downloadFile = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const filename = url.split("/").pop();
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
                  className="col-xl-4 col-lg-4 col-md-4 col-12 mb-30 grid-item cat1 cat4 cat3 cat5"
                >
                  <div className="tp-blog-item" style={{ height: "520px" }}>
                    <div className="tp-blog-thumb fix">
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_URL}/pads/${item.image}`}
                        alt="theme-pure"
                      />
                    </div>

                    <div className="tp-blog-content">
                      <div className="tp-blog-title-box">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-calendar-event-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
                          </svg>{" "}
                          ເປີດ​ປະ​ມູນ​ວັນ​ທີ{" "}
                          {moment(item.start_date).format("DD/MM/YYYY")} -{" "}
                          {moment(item.end_date).format("DD/MM/YYYY")}
                        </div>
                        <div className="mt-3">
                          <h5 style={{ fontFamily: "Noto Sans Lao" }}>
                            {item.title}
                          </h5>
                          <hr />
                        </div>

                        <div
                          className="text-black"
                          dangerouslySetInnerHTML={{
                            __html: item.description,
                          }}
                        ></div>
                        <div className="d-flex justify-content-between mt-4 mb-4">
                          <p
                            className={`text-${
                              item.status === "A" ? "success" : "danger"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-hammer"
                              viewBox="0 0 16 16"
                            >
                              <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334" />
                            </svg>{" "}
                            {item.status === "A"
                              ? "ເປີດ​ປະ​ມູນແລ້ວ"
                              : "​ປິດ​ປະ​ມູນ​ແລ້ວ"}
                          </p>

                          <button
                            onClick={() => {
                              const url = `${process.env.NEXT_PUBLIC_API_URL}/pads/${item.file_url}`;
                              downloadFile(url);
                            }}
                            className="btn btn-outline-primary btn-sm"
                          >
                            ດາວ​ໂຫລດ​ຟອ​ມ
                          </button>
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
        </div>
      </div>
    </>
  );
};

export default PostboxArea;
