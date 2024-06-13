"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Categories from "./categories";
import RecentPost from "./recent-post";
import Search from "./search";
import Tags from "./tags";
import axios from "axios";
import moment from "moment";
import Image from "next/image";
import Rolling from "@/public/images/gif/Rolling.gif";

import news1 from "@/public/images/news/1.jpeg";
// import news2 from "@/public/images/news/2.jpg";
// import news3 from "@/public/images/news/3.jpg";
// import news4 from "@/public/images/news/4.jpeg";
// import news5 from "@/public/images/news/5.jpg";



const PostboxArea = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const imageUrlBase =
    "https://uat-api.edl.com.la/api_v1/customer-svc/news/newsImage/";
    

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
           `${process.env.NEXT_PUBLIC_API_URL}/customer-svc/news/get?fillter=DESC`
        );
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="postbox__area pb-40 pt-40">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              {isLoading ? (
                <div className="text-center pt-30">
                  <Image src={Rolling} width={100} height={100} />
                </div>
              ) : (
                <div id="blog" className="postbox__wrapper pr-20">
                  {data.length
                    ? data?.map((item) => (
                        <article
                          style={{
                            boxShadow: "0 5px 12px rgba(0, 0, 0, 0.6)",
                            borderRadius: "20px",
                          }}
                          key={item.news_id}
                          className={`postbox__item format-image fix mb-50 transition-3`}
                        >
                          <div className="postbox__thumb w-img">
                            <Link
                              href={{
                                pathname: "/newsdetail",
                                query: { news_id: item.news_id },
                              }}
                            >
                              <Image src={news1} alt="theme-pure" />
                              {/* <Image src={`${imageUrlBase}${item.news_image}`} alt="theme-pure" width={200} height={200}/> */}
                            </Link>
                          </div>
                          <div className="postbox__content px-3">
                            <div className="postbox__meta">
                              <span>
                                {moment(item.posting_date).format("DD-MM-YYYY")}
                              </span>
                            </div>
                            <h3 className="postbox__title pb-4">
                              <Link
                                href={{
                                  pathname: "/newsdetail",
                                  query: { news_id: item.news_id },
                                }}
                              >
                                {item.news_title_la}
                              </Link>
                            </h3>
                          </div>
                        </article>
                      ))
                    : null}

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
              )}
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="sidebar__wrapper">
                <Search />
                <RecentPost />
                <Categories />
                {/* <Tags />  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostboxArea;
