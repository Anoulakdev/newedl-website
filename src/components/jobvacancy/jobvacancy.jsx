"use client";

import Link from "next/link";
import Categories from "./categories";
import RecentPost from "./recent-post";
import Search from "./search";
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import Image from "next/image";

import imgjob from "@/public/images/jobvacancy/image82job.png";
import edl_logo from "@/public/images/edl_logo.png";
import NiceSelect from "./nice-select";

const PostboxArea = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/jobs/get`
        );
        setData(response.data.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data); // Reset to full data if search term is cleared
    }
  }, [searchTerm, data]);
  return (
    <>
      <div className="postbox__area pb-40 pt-40">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div id="blog" className="postbox__wrapper pr-20">
              {filteredData.length ? (
                  filteredData.map((item, i) => (
                    <div
                      key={i}
                      className="card mb-3 d-flex"
                      style={{
                        boxShadow: "0 5px 12px rgba(0, 0, 0, 0.6)",
                        borderRadius: "20px",
                      }}
                    >
                      <div className="row g-0">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-col-md-4 col-4">
                          <img
                            src={`${process.env.NEXT_PUBLIC_API_URL_IMG}/jobs/${item.image}`}
                            className="rounded-start p-3"
                            alt="theme-pure"
                            style={{ height: "100%" }}
                          />
                        </div>
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-8">
                          <div className="card-body">
                            <h5 style={{ fontFamily: "Noto Sans Lao" }}>
                              {item.title}
                            </h5>
                            <br />
                            <p className="fs-5 text-secondary fw-bold lh-1">
                              {item.sub_title}
                            </p>
                            <br />
                            <p className="text-danger lh-1">
                              ເປີດຮັບວັນທີ{" "}
                              {moment(item.start_date).format("DD/MM/YYYY")} -{" "}
                              {moment(item.end_date).format("DD/MM/YYYY")}
                            </p>
                            <Link
                              href={{
                                pathname: "/jobdetail",
                                query: { jobs_id: item.id },
                              }}
                              className="btn btn-primary"
                            >
                              ລາຍ​ລະ​ອຽດປະ​ກາດ​ຮັບ​ສະ​ໝັກ
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <h3
                    className="text-center"
                    style={{ fontFamily: "Noto Sans Lao" }}
                  >
                    ຍັງ​ບໍ່​ມີ​ຂໍ້​ມູນ
                  </h3>
                )}

                {/* <div className="basic-pagination">
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

            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="sidebar__wrapper">
                <Search onSearch={setSearchTerm} />
                <RecentPost />
                {/* <Categories /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostboxArea;
