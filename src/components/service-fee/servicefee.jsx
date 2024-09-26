"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import Image from "next/image";
import Rolling from "@/public/images/gif/Rolling.gif";
import styles from "./Tables.module.css";

const Tables = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/priceServices/get`,
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
      {isLoading ? (
        <div className="text-center pt-30">
          <Image src={Rolling} width={100} height={100} />
        </div>
      ) : (
        <div className="container wow tpfadeUp">
          <div className="row mt-60 mb-60">
            <div className="col-lg-4 col-md-4 col-12 mb-20">
              <h2 style={{ fontFamily: "Noto Sans Lao" }}>
                ລາຍ​ການຄ່າ​ບໍ​ລິ​ການ
              </h2>
            </div>
            <div className={styles.scrollableTable}>
              <table className="table table-hover">
                <thead>
                  <tr className="text-center fw-bold fs-5">
                    <th className="py-4" style={{ width: "10%" }}>
                      ລ/ດ
                    </th>
                    <th className="py-4" style={{ width: "10%" }}>
                      ເລກ​ທີ
                    </th>
                    <th className="py-4">​ຫົວ​ຂໍ້</th>
                    <th className="py-4" style={{ width: "15%" }}>
                      ​ລົງ​ວັນ​ທີ
                    </th>
                    <th className="py-4" style={{ width: "10%" }}>
                      ​ດ​າວ​ໂຫຼດ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.length ? (
                    currentItems.map((item, i) => (
                      <tr className="fs-5" key={i}>
                        <td className="text-center py-4">
                          {indexOfFirstItem + i + 1}
                        </td>
                        <td
                          className="py-4 text-center"
                          style={{ width: "10%" }}
                        >
                          {item.no}
                        </td>
                        <td className="py-4">
                          <a
                            href="#"
                            role="button"
                            data-bs-toggle="modal"
                            data-bs-target={`#modal-${i}`}
                          >
                            {item.title}
                          </a>
                          <div
                            className="modal fade"
                            id={`modal-${i}`}
                            tabIndex="-1"
                            aria-labelledby={`modal-label-${i}`}
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-xl">
                              <div className="modal-content">
                                <div className="modal-body">
                                  <iframe
                                    src={`${process.env.NEXT_PUBLIC_API_URL_IMG}/services/${item.file_url}`}
                                    type="application/pdf"
                                    width="100%"
                                    height="700px"
                                    title="PDF Document"
                                  ></iframe>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          className="py-4 text-center"
                          style={{ width: "15%" }}
                        >
                          {moment(item.posting_date).format("DD-MM-YYYY")}
                        </td>
                        <td className="text-center py-4">
                          <button
                            onClick={() => {
                              const url = `${process.env.NEXT_PUBLIC_API_URL_IMG}/services/${item.file_url}`;
                              const filename = `${item.title}.pdf`;
                              downloadFile(url, filename);
                            }}
                            className="btn btn-primary"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              class="bi bi-cloud-arrow-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708z"
                              />
                              <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr style={{ height: "100px" }}>
                      <td
                        colSpan="5"
                        className="text-center fs-4"
                        style={{ textAlign: "center", verticalAlign: "middle" }}
                      >
                        ຍັງ​ບໍ່​ມີ​ຂໍ້​ມູນ
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
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
      )}
    </>
  );
};

export default Tables;
