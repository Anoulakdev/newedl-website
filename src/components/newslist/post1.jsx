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

const post_data = [
  {
    id: 1,
    textheading: <>ຝ່າຍຄຸ້ມຄອງລະບົບໄຟຟ້າພາກກາງ ມີຜົນສໍາເລັດຫຼາຍດ້ານ</>,
    imgheading: "/images/news/2/8.jpg",
    postdate: "23-05-2024",
  },
  {
    id: 2,
    textheading: (
      <>
        ລັດວິສາຫະກິດໄຟຟ້າລາວ ຮ່ວມກັບ ກະຊວງພະລັງງານ-ບໍ່ແຮ່ ຊີ້ແຈງ
        ກ່ຽວກັບບັນຫາໄຟຕົກ-ໄຟມອດ-ໄຟບໍພໍ, ວິທີແກ້ໄຂ ແລະ ແຜນຮອງຮັບໃນຕໍ່ຫນ້າ
      </>
    ),
    imgheading: "/images/news/1/1.jpg",
    postdate: "17-05-2024",
  },
  {
    id: 3,
    textheading: (
      <>
        ທ່ານ ສອນໄຊ ສີພັນດອນ ນາຍົກລັດຖະມົນຕີ ແຫ່ງ ສປປລາວ ລົງເຮັດວຽກ ແລະ ຊີ້ນໍາ
        ກະຊວງພະລັງງານແລະບໍ່ແຮ່
      </>
    ),
    imgheading: "/images/news/3/7.jpeg",
    postdate: "01-03-2024",
  },
  {
    id: 4,
    textheading: <>ພິທີມອບ-ຮັບໜ້າທີ່ ຜູ້ອໍານວຍການໃຫຍ່ ລັດວິສາຫະກິດໄຟຟ້າລາວ</>,
    imgheading: "/images/news/4/2.jpg",
    postdate: "16-02-2024",
  },
];

const PostboxArea = () => {
  return (
    <>
      <div className="postbox__area pb-40 pt-40">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              
                <div id="blog" className="postbox__wrapper pr-20">
                  {post_data.length
                    ? post_data?.map((item) => (
                        <article
                          style={{
                            boxShadow: "0 5px 12px rgba(0, 0, 0, 0.6)",
                            borderRadius: "20px",
                          }}
                          key={item.id}
                          className={`postbox__item format-image fix mb-50 transition-3`}
                        >
                          <div className="postbox__thumb w-img">
                            <Link
                              href={{
                                pathname: "/newsdetail",
                                query: { news_id: item.id },
                              }}
                            >
                              <img src={item.imgheading} alt="theme-pure" width="100%" />
                              {/* <Image src={`${imageUrlBase}${item.news_image}`} alt="theme-pure" width={200} height={200}/> */}
                            </Link>
                          </div>
                          <div className="postbox__content px-3">
                            <div className="postbox__meta">
                              <span>
                                {item.postdate}
                              </span>
                            </div>
                            <h3 className="postbox__title pb-4">
                              <Link
                                href={{
                                  pathname: "/newsdetail",
                                  query: { news_id: item.id },
                                }}
                              >
                                {item.textheading}
                              </Link>
                            </h3>
                          </div>
                        </article>
                      ))
                    : null}
                </div>
            
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="sidebar__wrapper">
                <Search />
                <RecentPost />
                {/* <Categories /> */}
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
