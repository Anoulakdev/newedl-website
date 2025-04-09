import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const setting = {
  slidesPerView: 1,
  effect: "fade",
  speed: 500,

  breakpoints: {
    1200: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".grid-prev",
    prevEl: ".grid-next",
  },
};

const BlogTitle = ({ title }) => {
  const [fontSize, setFontSize] = useState("22px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setFontSize("18px"); // ขนาดสำหรับหน้าจอเล็ก
      } else {
        setFontSize("22px"); // ขนาดสำหรับหน้าจอใหญ่
      }
    };

    // เรียกฟังก์ชันเมื่อโหลดหน้าและเมื่อปรับขนาดหน้าจอ
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup event listener เมื่อ component ถูกลบ
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <p
      className="blog-grid-slider-title fixed-bottom lh-sm px-3"
      style={{ fontFamily: "Noto Sans Lao", fontSize }}
    >
      {title}
    </p>
  );
};

const BlogGrid = () => {
  const [data, setData] = useState([]);
  const [isLoop, setIsLoop] = useState(false);

  useEffect(() => {
    setIsLoop(true);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/news/get`,
          {
            headers: {
              "Content-Type": "application/json", // Set Content-Type header
            },
          }
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
      <div className="blog-grid-area pt-30">
        <div className="container wow tpfadeUp">
          <div className="row align-items-end">
            <div className="col-xl-12 col-lg-12">
              <div className="tp-service-section-four">
                <h3 className="tp-section-title-4 text-black">ຂ່າວ​ເດັ່ນ</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div
                className="blog-grid-arrow p-relative"
                style={{
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.6)",
                  borderRadius: "30px",
                }}
              >
                <div className="grid-next d-none d-sm-block ms-1">
                  <button>
                    <i className="far fa-angle-left"></i>
                    <svg
                      width="36"
                      height="100"
                      viewBox="0 0 36 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99999 14C0 7.5 0.5 3.5 0 0L-0.000484467 99.5C-0.000415802 96.7234 1.00003 88 23 71.5C44.9999 55 32.5 37.1667 24 30.5C19.8333 27.1667 9.48375 19.8289 4.99999 14Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
                <div className="grid-prev d-none d-sm-block">
                  <button>
                    <i className="far fa-angle-right"></i>
                    <svg
                      width="36"
                      height="100"
                      viewBox="0 0 36 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.3164 14C35.3164 7.5 34.8164 3.5 35.3164 0L35.3169 99.5C35.3168 96.7234 34.3164 88 12.3164 71.5C-9.68354 55 2.81642 37.1667 11.3164 30.5C15.4831 27.1667 25.8327 19.8289 30.3164 14Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
                <Swiper
                  {...setting}
                  loop={isLoop}
                  modules={[Navigation, EffectFade]}
                  className="swiper-container blog-grid-slider-active"
                >
                  {data.length
                    ? data.slice(0, 5)?.map((item, i) => (
                        <SwiperSlide key={i} className="swiper-slide">
                          <Link
                            href={{
                              pathname: "/newsdetail",
                              query: { news_id: item.news_id },
                            }}
                          >
                            <div
                              className="blog-grid-slider blog-grid-slider-bg blog-grid-slider-height"
                              style={{
                                backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL_IMG}/news/${item.image}')`,
                                backgroundPosition: "center",
                              }}
                            >
                              <div className="blog-grid-slider-wrapper">
                                <div className="blog-grid-slider-title-box">
                                  {item.news_title_la.length > 120 ? (
                                    <BlogTitle title={item.news_title_la} />
                                  ) : (
                                    <h5
                                      className="blog-grid-slider-title fixed-bottom p-3"
                                      style={{ fontFamily: "Noto Sans Lao" }}
                                    >
                                      {item.news_title_la}
                                    </h5>
                                  )}
                                </div>
                              </div>
                            </div>
                          </Link>
                        </SwiperSlide>
                      ))
                    : null}
                </Swiper>
              </div>
              <div className="text-center mt-4">
                <Link href="/newslist" className="btn btn-outline-primary">
                  ອ່ານ​ເພີ່ມ​ເຕີມ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogGrid;
