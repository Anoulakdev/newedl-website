"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import Rolling from "@/public/images/gif/Rolling.gif";
import Data from "./Data";

export default function ContentNews() {
  const [data, setData] = useState([]);

  const router = useRouter();
  const news_id = router?.query?.news_id;

  // console.log("newsdetail===>", news_id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/news/getById?news_id=${news_id}`
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
      <div className="container pt-120 pb-30">
        <h1 className="mb-4" style={{ fontFamily: "Noto Sans Lao" }}>
          {data.news_title_la}
        </h1>
        <div className="mb-4">
          <img
            src={`${process.env.NEXT_PUBLIC_API_URL_IMG}/news/${data.image}`}
            alt="theme-pure"
            width="100%"
          />
        </div>

        <div className="htmlnews">
          <p
            dangerouslySetInnerHTML={{
              __html: data.news_content_la,
            }}
          ></p>
        </div>
        <div className="row">
          {data.news_images && data.news_images.length > 0
            ? data.news_images.map((path, index) => (
                <div key={index} className="p-2 col-lg-6 col-md-6">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL_IMG}/news/${path}`}
                    alt={`Image ${index + 1}`}
                  />
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
}
