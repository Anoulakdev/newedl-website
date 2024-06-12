"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Data from "./Data";

const getItemById = (id) => {
  return Data.find((item) => item.id.toString() === id);
};

export default function Branch() {
  const router = useRouter();
  const { branch_id } = router?.query;

  // console.log("branch_id=>>",branch_id);

  const item = getItemById(branch_id); // Get item with ID 1
  console.log(item);

  return (
    <>
      <div className="container-fluid px-0 mb-40">
        <div className="row">
          <Image
            src={item.cover}
            alt="theme-pure"
            width={2000}
            height={500}
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
          ໂຄງ​ຮ່າງ​ການ​ຈັດ​ຕັ້ງ {item.heading}
        </h1>
        <hr />

        <div className="pt-10">
          <Image
            src={item.organize}
            alt="theme-pure"
            width={2000}
            height={500}
          />
        </div>
      </div>
    </>
  );
}
