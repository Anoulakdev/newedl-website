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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api_v1/user-svc/priceServices/get`
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
                    <th className="py-4">ເລກ​ທີ</th>
                    <th className="py-4">​ຫົວ​ຂໍ້</th>
                    <th className="py-4" style={{ width: "15%" }}>
                      ​ລົງ​ວັນ​ທີ
                    </th>
                    <th className="py-4" style={{ width: "10%" }}>
                      ​ດ​າວ​ໂຫລດ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.length
                    ? data?.map((item, i) => (
                        <tr className="fs-5">
                          <td className="text-center py-4" key={i}>
                            {i + 1}
                          </td>
                          <td className="py-4 text-center">{item.no}</td>
                          <td className="py-4">{item.title}</td>
                          <td
                            className="py-4 text-center"
                            style={{ width: "15%" }}
                          >
                            {moment(item.posting_date).format("DD-MM-YYYY")}
                          </td>
                          <td className="text-center py-4">
                            <button
                              onClick={() => {
                                const url = `${process.env.NEXT_PUBLIC_API_URL}/services/${item.file_url}`;
                                downloadFile(url);
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
                    : null}
                </tbody>
              </table>
            </div>
            {/* <div className="basic-pagination mt-2">
            <nav>
              <ul>
                <li>
                  <Link href="#">
                    <i className="far fa-angle-left"></i>
                  </Link>
                </li>
                <li>
                  <Link className="current" href="#">
                    1
                  </Link>
                </li>
                <li>
                  <Link href="#">2</Link>
                </li>
                <li>
                  <Link href="#">3</Link>
                </li>
                <li>
                  <Link href="#">4</Link>
                </li>

                <li>
                  <span>...</span>
                </li>
                <li>
                  <Link href="#">7</Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="far fa-angle-right"></i>
                  </Link>
                </li>
              </ul>
            </nav>
          </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Tables;
