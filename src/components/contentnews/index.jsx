"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import Rolling from "@/public/images/gif/Rolling.gif";
import Data from "./Data";

const getItemById = (id) => {
  return Data.find((item) => item.id.toString() === id);
};

export default function ContentNews() {
  // const [postData, setPostData] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const news_id = router?.query?.news_id;

  const item = getItemById(news_id); // Get item with ID 1
  console.log(item);

  // console.log("newsdetail===>", news_id);

  // const imageUrlBase =
  //   "https://uat-api.edl.com.la/api_v1/customer-svc/news/newsImage/";

  // //   console.log({ newsId });

  // useEffect(() => {
  //   const fetchDataById = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${process.env.NEXT_PUBLIC_API_URL}/customer-svc/news/getById?news_id=${news_id}`
  //       );
  //       setPostData(response.data.data);
  //       setIsLoading(false);
  //       // console.log(response);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchDataById();
  // }, []);

  // if (!postData) {
  //   return <p>Error loading post data.</p>; // Handle error loading data
  // }

  return (
    <>
      {/* {isLoading ? (
        <div className="text-center pt-30">
          <Image src={Rolling} width={100} height={100} />
        </div>
      ) : (
        <div className="container pt-120 pb-30">
          <h1 style={{ fontFamily: "Noto Sans Lao" }}>
            {postData.news_title_la}
          </h1>
          <div
            dangerouslySetInnerHTML={{
              __html: postData.news_content_eng,
            }}
          ></div>

          <div
            dangerouslySetInnerHTML={{ __html: postData.news_content_la }}
          ></div>
        </div>
      )} */}

      <div className="container pt-120 pb-30">
        <h1 className="mb-4" style={{ fontFamily: "Noto Sans Lao" }}>
          {item.textheading}
        </h1>
        <div className="mb-4">
          <img
            src={item.imgheading}
            alt="theme-pure"
            width="100%"
          />
        </div>

        <p className="fs-5 text-black">{item.text}</p>
        <div className="row">
          {item.imgpath.map((path, index) => (
            <div class="p-2 col-lg-6 col-md-6">
              <img key={index} src={path} alt={`Image ${index + 1}`}/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
