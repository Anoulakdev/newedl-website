import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// author img import here
import author_img_1 from "@/public/assets/img/blog/blog-avata-3.png";
import author_img_2 from "@/public/assets/img/blog/blog-avata-2.png";
import author_img_3 from "@/public/assets/img/blog/blog-avata-1.png";
import author_img_4 from "@/public/assets/img/blog/blog-avata-3.png";
import author_img_5 from "@/public/assets/img/blog/blog-avata-2.png";

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
    nextEl: ".grid-next",
    prevEl: ".grid-prev",
  },
};

const blog_grid_content = {
  grid_slider_data: [
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
  ],
};
const { grid_slider_data } = blog_grid_content;
const BlogGrid = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  return (
    <>
      <div className="blog-grid-area pt-20 grey-bg-3">
        <div className="container">
          <div className="row align-items-end tp-blog-four-section-space">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-service-section-four">
                <h3 className="tp-section-title-4 text-black">ຂ່າວ​ເດັ່ນ</h3>
              </div>
            </div>
            {/* <div
              className="col-xl-6 col-lg-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-blog-four-btn text-start text-lg-end">
                <Link
                  className="tp-btn-yellow-border text-black"
                  href="/newslist"
                >
                  ເບິ່ງ​ເພີ່ມ​ເຕີມ <i className="far fa-angle-right"></i>
                </Link>
              </div>
            </div> */}
          </div>
          <div className="row">
            <div className="col-lg-12 wow tpfadeUp">
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
                  {grid_slider_data.map((item, i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                      <Link
                        href={{
                          pathname: "/newsdetail",
                          query: { news_id: item.id },
                        }}
                      >
                        <div
                          className="blog-grid-slider blog-grid-slider-bg blog-grid-slider-height"
                          style={{
                            backgroundImage: `url(${item.imgheading})`,
                            backgroundPosition: "center",
                          }}
                        >
                          <div className="blog-grid-slider-wrapper">
                            <div className="blog-grid-slider-title-box ">
                              <h4 className="blog-grid-slider-title fixed-bottom p-4" style={{fontFamily: 'Noto Sans Lao'}}>
                                {item.textheading}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogGrid;
