import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import useMultipleAnime from "@/src/hooks/useMultipleAnime";

import thumb_img_1 from "@/public/images/magazine/image001.png";
import thumb_img_2 from "@/public/images/magazine/image110.png";
import thumb_img_3 from "@/public/images/magazine/image111.png";
import thumb_img_4 from "@/public/images/magazine/image112.png";
import thumb_img_5 from "@/public/images/magazine/image114.png";
import thumb_img_6 from "@/public/images/magazine/image115.png";
import thumb_img_7 from "@/public/images/magazine/image116.png";
import thumb_img_8 from "@/public/images/magazine/image117.png";

import avata_img_1 from "@/public/assets/img/avata/avata-1.png";
import avata_img_2 from "@/public/assets/img/avata/avata-2.png";
import avata_img_3 from "@/public/assets/img/avata/avata-3.png";
import avata_img_4 from "@/public/assets/img/avata/avata-4.png";
import avata_img_5 from "@/public/assets/img/avata/avata-5.png";
import avata_img_6 from "@/public/assets/img/avata/avata-6.png";
import avata_img_7 from "@/public/assets/img/avata/avata-1.png";
import avata_img_8 from "@/public/assets/img/avata/avata-2.png";

const portfolio_blog = [
  {
    id: 1,
    thumb_img: thumb_img_1,
    avata_img: avata_img_1,
    name: "Hilary Ouse",
    job_title: "Founder & CEO Dulalix",
    title: (
      <>
        2023 Professional Year In <br /> Review
      </>
    ),
    cls: "",
    date: "April 12, 2023",
    col: "",
    delay: ".5s",
    category: "Business",
    filter_id: [
      "all",
      "business",
      "marketing",
      "designing",
      "development",
      "resources",
    ],
  },
  {
    id: 2,
    thumb_img: thumb_img_2,
    avata_img: avata_img_2,
    name: "Rudra Ghosh",
    job_title: "Founder & CEO Dulalix",
    title: (
      <>
        Leveraging Feedback on <br /> Insights best.
      </>
    ),
    cls: "",
    date: "April 12, 2023",
    col: "",
    delay: ".5s",
    category: "Business",
    filter_id: [
      "all",
      "business",
      "marketing",
      "designing",
      "development",
      "resources",
    ],
  },
  {
    id: 3,
    thumb_img: thumb_img_3,
    avata_img: avata_img_3,
    name: "Geraldine",
    job_title: "Founder & CEO Dulalix",
    title: (
      <>
        Typing Tutorials For Kids <br /> And Beginners
      </>
    ),
    cls: "",
    date: "April 12, 2023",
    col: "",
    delay: ".5s",
    category: "Marketing",
    filter_id: [
      "all",
      "business",
      "marketing",
      "designing",
      "development",
      "resources",
    ],
  },
  {
    id: 4,
    thumb_img: thumb_img_4,
    avata_img: avata_img_4,
    name: "Helen M.",
    job_title: "Founder & CEO Dulalix",
    title: (
      <>
        Project Management at <br /> Your fingertips.
      </>
    ),
    cls: "",
    date: "April 24, 2023",
    col: "",
    delay: ".5s",
    category: "Designing",
    filter_id: [
      "all",
      "business",
      "marketing",
      "designing",
      "development",
      "resources",
    ],
  },
  {
    id: 5,
    thumb_img: thumb_img_5,
    avata_img: avata_img_5,
    name: "R. Jones",
    job_title: "Founder & CEO Dulalix",
    title: (
      <>
        2023 Professional Year In <br /> Review
      </>
    ),
    cls: "",
    date: "April 12, 2023",
    col: "",
    delay: ".5s",
    category: "Development",
    filter_id: [
      "all",
      "business",
      "marketing",
      "designing",
      "development",
      "resources",
    ],
  },
  {
    id: 6,
    thumb_img: thumb_img_6,
    avata_img: avata_img_6,
    name: "Frank P. Miller",
    job_title: "Founder & CEO Dulalix",
    title: (
      <>
        How Chatbots Can Help You <br /> Drive More Sales
      </>
    ),
    cls: "",
    date: "April 12, 2023",
    col: "",
    delay: ".5s",
    category: "Resources",
    filter_id: [
      "all",
      "business",
      "marketing",
      "designing",
      "development",
      "resources",
    ],
  },

  // extra
  {
    id: 7,
    thumb_img: thumb_img_7,
    avata_img: avata_img_7,
    name: "Hilary Ouse",
    job_title: "Founder & CEO Dulalix",
    title: (
      <>
        2023 Professional Year In <br /> Review
      </>
    ),
    cls: "",
    date: "April 12, 2023",
    col: "",
    delay: ".5s",
    category: "Business",
    filter_id: [
      "all",
      "business",
      "marketing",
      "designing",
      "development",
      "resources",
    ],
  },
  {
    id: 8,
    thumb_img: thumb_img_8,
    avata_img: avata_img_8,
    name: "Rudra Ghosh",
    job_title: "Founder & CEO Dulalix",
    title: (
      <>
        Leveraging Feedback on <br /> Insights best.
      </>
    ),
    cls: "",
    date: "April 12, 2023",
    col: "",
    delay: ".5s",
    category: "Business",
    filter_id: [
      "all",
      "business",
      "marketing",
      "designing",
      "development",
      "resources",
    ],
  },
];

// data


const Portfolio = () => {

  return (
    <>
      <div className="portfolio blog-grid-inner mb-30">
        <div className="container">
          
          <div className="row grid blog-grid-inner pt-50" >
            {portfolio_blog.map((item, i) => (
              <div
                key={i}
                data-index={i}
                className="col-xl-3 col-lg-3 col-md-3 col-12 mb-30 grid-item cat1 cat4 cat3 cat5"
              >
                <div className="tp-blog-item wow tpfadeUp">
                  <div className="tp-blog-thumb fix rounded-4">
                    <Link href="/magazine_detail">
                      <Image src={item.thumb_img} alt="theme-pure" style={{height: '430px'}} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="basic-pagination text-center mt-5">
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
    </>
  );
};

export default Portfolio;
