import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import Data from "./Data";

export default function Knowdetail() {
  const [data, setData] = useState([]);

  const router = useRouter();
  const know_id = router?.query?.know_id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/confessions/byId?id=${know_id}`
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
      <div className="container pt-120 pb-30 wow tpfadeUp">
        <h1 className="pb-30" style={{ fontFamily: "Noto Sans Lao" }}>
          {data.title}
        </h1>
        <div className="text-center">
          
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL_IMG}/confessions/${data.image}`}
              className="img-fluid"
              alt="theme-pure"
              width="80%"
            />
          
        </div>
        {data.video_url ? (
          <div className="mt-40">
            <iframe
              width="100%"
              height="659"
              src={`https://www.youtube.com/embed/${data.video_url}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        ) : null}
      </div>
    </>
  );
}
