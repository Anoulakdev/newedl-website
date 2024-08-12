"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import Data from "./Data";

export default function Branch() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const branch_id = router?.query?.branch_id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api_v1/user-svc/branches/getbyId?bra_id=${branch_id}`
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
      <div className="container-fluid px-0 mb-40">
        <div className="row">
          <img
            src={`${process.env.NEXT_PUBLIC_API_URL}/branches/${data.co_image}`}
            alt="theme-pure"
            style={{ paddingTop: "82px" }}
          />
        </div>
      </div>
      <div
        className="container pb-40 mb-40"
        style={{
          boxShadow: "0 5px 12px rgba(0, 0, 0, 0.6)",
          borderRadius: "20px",
        }}
      >
        <h1
          className="text-center pt-50 pb-25"
          style={{ fontFamily: "Noto Sans Lao" }}
        >
          ໂຄງ​ຮ່າງ​ການ​ຈັດ​ຕັ້ງ {data.bra_name}
        </h1>
        <hr />

        <div className="pt-10 text-center">
          <img
            src={`${process.env.NEXT_PUBLIC_API_URL}/branches/${data.str_image}`}
            alt="theme-pure"
          />
        </div>
      </div>
    </>
  );
}
