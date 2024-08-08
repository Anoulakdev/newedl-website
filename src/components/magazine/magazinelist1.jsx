import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Rolling from "@/public/images/gif/Rolling.gif";

// const magazine_blog = [
//   {
//     id: 1,
//     thumb_img: thumb_img_1,
//     link: "https://designrr.page/?id=362050&token=1034138751&type=FP&h=6264",
//   },
//   {
//     id: 2,
//     thumb_img: thumb_img_2,
//     link: "https://designrr.page/?id=365755&token=3531745849&type=FP&h=4506",
//   },
// ];

// data

const Portfolio = () => {
  const [data, setData] = useState([]);
  const sortedData = data.sort((a, b) => b.id - a.id);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api_v1/user-svc/magazines/get`
        );
        setData(response.data.data);
        setIsLoading(false);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="text-center pt-30">
          <Image src={Rolling} width={100} height={100} />
        </div>
      ) : (
        <div className="portfolio blog-grid-inner mb-30">
          <div className="container">
            <div className="row grid blog-grid-inner pt-50">
              {sortedData.map((item, i) => (
                <div
                  key={i}
                  data-index={i}
                  className="col-xl-3 col-lg-3 col-md-3 col-12 mb-30 grid-item cat1 cat4 cat3 cat5"
                >
                  <div className="tp-blog-item wow tpfadeUp">
                    <div className="tp-blog-thumb fix rounded-4">
                      <Link
                        href={{
                          pathname: "/magazine_detail",
                          query: { magazine_id: item.id },
                        }}
                      >
                        <img
                          src={`${process.env.NEXT_PUBLIC_API_URL}/magazines/${item.image}`}
                          alt="theme-pure"
                          style={{ height: "430px" }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="basic-pagination text-center mt-5">
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
          </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
