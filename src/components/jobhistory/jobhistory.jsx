"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import Image from "next/image";
import Rolling from "@/public/images/gif/Rolling.gif";
import styles from "../service-fee/Tables.module.css";

const Tables = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/jobs/get`,
          // "https://app-api.edl.com.la/api_v1/user-svc/jobs/get",
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
                ລາຍ​ການປະ​ຫວັດ​ສະ​ໝັກ​ວຽກ​
              </h2>
            </div>
            <div className={styles.scrollableTable}>
              <table className="table table-hover">
                <thead>
                  <tr className="text-center fw-bold fs-5">
                    <th className="py-4" style={{ width: "8%" }}>
                      ລ/ດ
                    </th>
                    <th className="py-4">ສະ​ຖາ​ນະ</th>
                    <th className="py-4">​ຫົວ​ຂໍ້ສະ​ໝັກ​ວຽກ</th>
                    <th className="py-4" style={{ width: "13%" }}>
                      ​​ວັນ​ທີເປີ​ດ
                    </th>
                    <th className="py-4" style={{ width: "13%" }}>
                      ​​ວັນ​ທີປິດ
                    </th>
                    <th className="py-4" style={{ width: "10%" }}>
                      ລາຍ​ລະ​ອຽດ
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
                          className={`text-${
                            moment().isBefore(item.start_date)
                              ? "warning"
                              : moment().isAfter(item.end_date)
                              ? "danger"
                              : "success"
                          } py-4 text-center`}
                        >
                          {moment().isBefore(item.start_date)
                            ? "ລໍ​ຖ້າ​ເປີດປະ​ກາ​ດ​ຮັບ​ສະ​ໝັກ"
                            : moment().isAfter(item.end_date)
                            ? "ປິດປະ​ກາ​ດ​ຮັບ​ສະ​ໝັກ"
                            : "ເປີດປະ​ກາ​ດ​ຮັບ​ສະ​ໝັກ"}
                        </td>
                        <td className="py-4">{item.title}</td>
                        <td
                          className="py-4 text-center"
                          style={{ width: "13%" }}
                        >
                          {moment(item.start_date).format("DD-MM-YYYY")}
                        </td>
                        <td
                          className="py-4 text-center"
                          style={{ width: "13%" }}
                        >
                          {moment(item.end_date).format("DD-MM-YYYY")}
                        </td>
                        <td className="text-center py-4">
                          <Link
                            href={{
                              pathname: "/jobdetail",
                              query: { jobs_id: item.id },
                            }}
                            className="btn btn-primary"
                          >
                            ກົ​ດ
                          </Link>
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
