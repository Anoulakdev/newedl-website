"use client";

import Link from "next/link";
import Categories from "./categories";
import RecentPost from "./recent-post";
import Search from "./search";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Image from "next/image";

import imgjob from "@/public/images/jobvacancy/image82job.png";
import edl_logo from "@/public/images/edl_logo.png";
import NiceSelect from "./nice-select";

const PostboxArea = () => {
  return (
    <>
      <div className="postbox__area pb-40 pt-40">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div id="blog" className="postbox__wrapper pr-20">
                <div
                  className="card mb-3 d-flex"
                  style={{
                    boxShadow: "0 5px 12px rgba(0, 0, 0, 0.6)",
                    borderRadius: "20px",
                  }}
                >
                  <div className="row g-0">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-col-md-4 col-4">
                      <Image
                        src={imgjob}
                        className="rounded-start p-3"
                        alt="theme-pure"
                        width={300}
                      />
                    </div>
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-8">
                      <div className="card-body">
                        <h5 style={{ fontFamily: "Noto Sans Lao" }}>
                          ພະນັກງານພັດທະນາໂປຣແກຣມ
                        </h5>
                        <p className="text-dark fw-bold">
                          ສຳນັກງານໃຫຍ່ໄຟຟ້າລາວ-ນະຄອນຫຼວງວຽງຈັນ
                        </p>
                        <p className="card-text">
                          ຝ່າຍເຕັກໂນໂລຊີການສື່ສານ ແລະ ຂໍ້ມູນຂ່າວສານ
                        </p>
                        <p className="card-text">ພະແນກ Application</p>
                        <p className="text-danger">
                          ເປີດຮັບວັນທີ 02/11/2023 - 04/11/2023
                        </p>
                        <Link href="/jobdetail" className="btn btn-primary">
                          ​ສົ່ງ​ຟອມ​ສະ​ໝັກ
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="card mb-3 d-flex"
                  style={{
                    boxShadow: "0 5px 12px rgba(0, 0, 0, 0.6)",
                    borderRadius: "20px",
                  }}
                >
                  <div className="row g-0">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-col-md-4 col-4">
                      <Image
                        src={imgjob}
                        className="rounded-start p-3"
                        alt="theme-pure"
                        width={300}
                      />
                    </div>
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-8">
                      <div className="card-body">
                        <h5 style={{ fontFamily: "Noto Sans Lao" }}>
                          ພະນັກງານພັດທະນາໂປຣແກຣມ
                        </h5>
                        <p className="text-dark fw-bold">
                          ສຳນັກງານໃຫຍ່ໄຟຟ້າລາວ-ນະຄອນຫຼວງວຽງຈັນ
                        </p>
                        <p className="card-text">
                          ຝ່າຍເຕັກໂນໂລຊີການສື່ສານ ແລະ ຂໍ້ມູນຂ່າວສານ
                        </p>
                        <p className="card-text">ພະແນກ Application</p>
                        <p className="text-danger">
                          ເປີດຮັບວັນທີ 02/11/2023 - 04/11/2023
                        </p>
                        <Link href="/jobdetail" className="btn btn-primary">
                          ​ສົ່ງ​ຟອມ​ສະ​ໝັກ
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="card mb-3 d-flex"
                  style={{
                    boxShadow: "0 5px 12px rgba(0, 0, 0, 0.6)",
                    borderRadius: "20px",
                  }}
                >
                  <div className="row g-0">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-col-md-4 col-4">
                      <Image
                        src={imgjob}
                        className="rounded-start p-3"
                        alt="theme-pure"
                        width={300}
                      />
                    </div>
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-8">
                      <div className="card-body">
                        <h5 style={{ fontFamily: "Noto Sans Lao" }}>
                          ພະນັກງານພັດທະນາໂປຣແກຣມ
                        </h5>
                        <p className="text-dark fw-bold">
                          ສຳນັກງານໃຫຍ່ໄຟຟ້າລາວ-ນະຄອນຫຼວງວຽງຈັນ
                        </p>
                        <p className="card-text">
                          ຝ່າຍເຕັກໂນໂລຊີການສື່ສານ ແລະ ຂໍ້ມູນຂ່າວສານ
                        </p>
                        <p className="card-text">ພະແນກ Application</p>
                        <p className="text-danger">
                          ເປີດຮັບວັນທີ 02/11/2023 - 04/11/2023
                        </p>
                        <Link href="/jobdetail" className="btn btn-primary">
                          ​ສົ່ງ​ຟອມ​ສະ​ໝັກ
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="basic-pagination">
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
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="sidebar__wrapper">
                <Search />
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
