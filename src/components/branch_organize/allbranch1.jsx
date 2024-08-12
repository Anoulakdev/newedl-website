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
          `${process.env.NEXT_PUBLIC_API_URL}/api_v1/user-svc/branches/getDeptGroup`
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
            {data.length
              ? data.map((item, i) => (
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
                            <li key={i} className={`${styles.link} fs-5 py-3`}>
                              {branch.bra_name}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBranch;
