"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const [marginTop, setMarginTop] = useState();
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          right: "5px",
          zIndex: 10,
          fontSize: "50px",
          backgroundColor: "darkgrey",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
          borderRadius: "25%",
          cursor: "pointer",
        }}
      ></div>
    );
  };

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          left: "5px",
          zIndex: 10,
          backgroundColor: "darkgrey",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
          borderRadius: "25%",
          cursor: "pointer",
        }}
      ></div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const sliderContent = [
    {
      imageUrl: "/images/carousel/rip.jpg",
    },
    // {
    //   imageUrl: "/images/carousel/Cover-celebrate.jpg",
    // },
    // {
    //   imageUrl: "/images/carousel/8.jpg",
    // },
    // {
    //   imageUrl: "/images/carousel/2.png",
    // },
    // {
    //   imageUrl: "/images/carousel/3.jpg",
    // },

    // {
    //   imageUrl: "/images/carousel/4.jpg",
    // },

    // {
    //   imageUrl: "/images/carousel/5.jpg",
    // },
    // ,
    // {
    //   imageUrl: "/images/carousel/6.jpg",
    // },
    // {
    //   imageUrl: "/images/carousel/7.jpg",
    // },
    // {
    //   imageUrl: "/images/carousel/9.jpg",
    // },
    // {
    //   imageUrl: "/images/carousel/10.jpg",
    // },

    // Add more slides as needed
  ];

  useEffect(() => {
    const updateMargin = () => {
      if (window.innerWidth < 576) {
        setMarginTop(76); // col-sm
      } else if (window.innerWidth >= 576 && window.innerWidth < 768) {
        setMarginTop(117); // col-md
      } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
        setMarginTop(91); // col-md
      } else if (window.innerWidth >= 992) {
        setMarginTop(81); // col-md
      }
    };

    updateMargin(); // Set margin on first load
    window.addEventListener("resize", updateMargin); // Update on resize

    return () => window.removeEventListener("resize", updateMargin);
  }, []);

  return (
    <>
      <div style={{ marginTop: `${marginTop}px` }}>
        <Slider {...settings}>
          {sliderContent.map((slide, index) => (
            <div key={index}>
              <img
                className="d-block w-100"
                src={slide.imageUrl}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
