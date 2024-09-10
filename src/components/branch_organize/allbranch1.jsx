"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import styles from "./customlink.module.css";

const AllBranch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/branches/getDeptGroup`,
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

  return (
    <>
      <div className="portfolio blog-grid-inner mb-10">
        <div className="container">
          <div className="row grid blog-grid-inner pt-50">
            {data.length ? (
              data.map((item, i) => (
                <div key={i} className="row pb-45">
                  <div class="col-lg-9 col-md-9 col-12 mx-auto">
                    <h3 style={{ fontFamily: "Noto Sans Lao" }}>
                      <svg
                        style={{ marginRight: 8 }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-asterisk"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1" />
                      </svg>
                      {item.dept_name}
                    </h3>
                    <ul className="ps-5 link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                      {item.branches.map((branch, i) => (
                        <Link
                          href={{
                            pathname: "/branch_detail",
                            query: { branch_id: branch.bra_id },
                          }}
                        >
                          <div
                            className={`${styles.link} fs-5 py-3 flex items-center`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-house me-2"
                              viewBox="0 0 16 16"
                              stroke="currentColor"
                              strokeWidth="0.5"
                            >
                              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                            </svg>
                            {branch.bra_name}
                          </div>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              ))
            ) : (
              <h3
                className="text-center my-5"
                style={{ fontFamily: "Noto Sans Lao" }}
              >
                ຍັງ​ບໍ່​ມີ​ຂໍ້​ມູນ
              </h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBranch;
