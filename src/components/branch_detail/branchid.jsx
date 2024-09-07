"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import Data from "./Data";
import imgleft from "@/public/images/lailaoleft.png";
import imgright from "@/public/images/lailaoright.png";

export default function Branch() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const branch_id = router?.query?.branch_id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/branches/getbyId?bra_id=${branch_id}`
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
      <div className="container-fluid px-0 mb-60">
        <div className="row">
          <img
            src={`${process.env.NEXT_PUBLIC_API_URL_IMG}/branches/${data.co_image}`}
            alt="theme-pure"
            style={{ paddingTop: "82px" }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center mb-50">
        <Image
          className="me-2 img-responsive-left"
          src={imgleft}
          alt="left"
          width={200}
        />
        <h1 style={{ fontFamily: "Noto Sans Lao" }}>{data.bra_name}</h1>
        <Image
          className="ms-2 img-responsive-right"
          src={imgright}
          alt="right"
          width={200}
        />
      </div>
      <div
        className="container pb-40 mb-40"
        style={{
          boxShadow: "0 5px 12px rgba(0, 0, 0, 0.6)",
          borderRadius: "20px",
        }}
      >
        <h1
          className="text-center pt-25 pb-10"
          style={{ fontFamily: "Noto Sans Lao" }}
        >
          ໂຄງ​ຮ່າງ​ການ​ຈັດ​ຕັ້ງ
        </h1>
        <hr />

        <div className="pt-10 text-center">
          <img
            src={`${process.env.NEXT_PUBLIC_API_URL_IMG}/branches/${data.str_image}`}
            alt="theme-pure"
          />
        </div>
      </div>
      <div className="container mb-50">
        <h2
          className="text-center mb-10"
          style={{ fontFamily: "Noto Sans Lao" }}
        >
          ພາ​ລະ​ບົດ​ບາ​ດ
        </h2>
        <div className="htmlbranch">
          <p
            dangerouslySetInnerHTML={{
              __html: data.mission,
            }}
          ></p>
        </div>
        <h2
          className="text-center mb-10 mt-30"
          style={{ fontFamily: "Noto Sans Lao" }}
        >
          ສະ​ຖານ​ທີ່
        </h2>
        <p className="fs-5 text-black">{data.address}</p>

        <div class="d-flex justify-content-start">
          <p className="fs-5 text-black me-3">
            <svg
              width={17}
              height={17}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" />
            </svg>{" "}
            {data.phone_number}{","}
          </p>

          <p className="fs-5 text-black">
            <i className="fas fa-envelope"></i> {data.email}
          </p>
        </div>
      </div>
    </>
  );
}
