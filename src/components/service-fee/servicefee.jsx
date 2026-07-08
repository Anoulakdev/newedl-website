"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import Image from "next/image";
import Rolling from "@/public/images/gif/Rolling.gif";
import styles from "./servicefee.module.css";

const Tables = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/priceServices/get`,
          {
            headers: {
              "Content-Type": "application/json",
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

  // Reset page to 1 when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Filter service fees based on search query
  const filteredData = data.filter((item) => {
    const titleMatch = item.title
      ? item.title.toLowerCase().includes(searchQuery.toLowerCase())
      : false;
    const noMatch = item.no
      ? item.no.toLowerCase().includes(searchQuery.toLowerCase())
      : false;
    return titleMatch || noMatch;
  });

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
      {isLoading ? (
        <div className="text-center pt-50 pb-50">
          <Image src={Rolling} width={80} height={80} alt="Loading..." />
        </div>
      ) : (
        <div className={`container wow tpfadeUp ${styles.serviceFeeSection}`}>
          {/* Header Section with Search */}
          <div className={styles.headerSection}>
            <h2 className={styles.title}>ລາຍ​ການຄ່າ​ບໍ​ລິ​ການ</h2>
            <div className={styles.searchWrapper}>
              <svg
                className={styles.searchIcon}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="ຄົ້ນຫາຄ່າບໍລິການ (ຫົວຂໍ້ ຫຼື ເລກທີ)..."
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Table Container */}
          <div className={styles.tableContainer}>
            <div className={styles.tableResponsive}>
              <table className={styles.modernTable}>
                <thead>
                  <tr className="text-center">
                    <th style={{ width: "8%" }}>ລ/ດ</th>
                    <th style={{ width: "15%" }}>ເລກ​ທີ</th>
                    <th>​ຫົວ​ຂໍ້</th>
                    <th style={{ width: "15%" }}>​​ລົງວັນ​ທີ</th>
                    <th style={{ width: "12%" }}>​ດ​າວ​ໂຫຼດ</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.length ? (
                    currentItems.map((item, i) => {
                      const globalIndex = indexOfFirstItem + i;
                      return (
                        <tr key={item.id || globalIndex}>
                          <td className={styles.colIndex}>
                            {globalIndex + 1}
                          </td>
                          <td className={styles.colNo}>
                            {item.no}
                          </td>
                          <td className={styles.colTitle}>
                            <a
                              href="#"
                              role="button"
                              data-bs-toggle="modal"
                              data-bs-target={`#modal-${globalIndex}`}
                            >
                              <span>{item.title}</span>
                            </a>

                            {/* Bootstrap Modal */}
                            <div
                              className="modal fade"
                              id={`modal-${globalIndex}`}
                              tabIndex="-1"
                              aria-labelledby={`modal-label-${globalIndex}`}
                              aria-hidden="true"
                            >
                              <div className="modal-dialog modal-xl modal-dialog-centered">
                                <div className="modal-content" style={{ borderRadius: "16px", overflow: "hidden" }}>
                                  <div className="modal-body p-0">
                                    <iframe
                                      src={`${process.env.NEXT_PUBLIC_API_URL_IMG}/services/${item.file_url}`}
                                      type="application/pdf"
                                      width="100%"
                                      height="750px"
                                      title="PDF Document"
                                      className={styles.pdfFrame}
                                    ></iframe>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className={styles.colDate}>
                            {moment(item.posting_date).format("DD-MM-YYYY")}
                          </td>
                          <td className={styles.colAction}>
                            <button
                              onClick={() => {
                                const url = `${process.env.NEXT_PUBLIC_API_URL_IMG}/services/${item.file_url}`;
                                const filename = `${item.title}.pdf`;
                                downloadFile(url, filename);
                              }}
                              className={styles.downloadBtn}
                              title="ດາວໂຫຼດເອກະສານ"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="currentColor"
                                className="bi bi-cloud-arrow-down"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708z"
                                />
                                <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="5" className={styles.colIndex}>
                        <div className={styles.emptyState}>
                          <p className={styles.emptyStateTitle}>ຍັງ​ບໍ່​ມີ​ຂໍ້​ມູນຄ່າບໍລິການທີ່ທ່ານຄົ້ນຫາ</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination Section */}
          {totalPages > 1 && (
            <div className={styles.paginationWrapper}>
              <ul className={styles.paginationList}>
                <li className={styles.pageItem}>
                  <Link
                    href="#"
                    onClick={(e) => handlePageChange(currentPage - 1, e)}
                    className={`${styles.pageLink} ${
                      currentPage === 1 ? styles.disabledLink : ""
                    }`}
                  >
                    <i className="far fa-angle-left"></i>
                  </Link>
                </li>
                {getPageNumbers().map((item, index) => (
                  <li key={index} className={styles.pageItem}>
                    {item === "..." ? (
                      <span className={styles.pageLink}>{item}</span>
                    ) : (
                      <Link
                        href="#"
                        className={`${styles.pageLink} ${
                          currentPage === item ? styles.activePage : ""
                        }`}
                        onClick={(e) => handlePageChange(item, e)}
                      >
                        {item}
                      </Link>
                    )}
                  </li>
                ))}
                <li className={styles.pageItem}>
                  <Link
                    href="#"
                    onClick={(e) => handlePageChange(currentPage + 1, e)}
                    className={`${styles.pageLink} ${
                      currentPage === totalPages ? styles.disabledLink : ""
                    }`}
                  >
                    <i className="far fa-angle-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Tables;
