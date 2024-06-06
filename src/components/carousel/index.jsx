"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
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
      imageUrl: "/images/carousel/1.jpg",
    },
    {
      imageUrl: "/images/carousel/2.png",
    },
    {
      imageUrl: "/images/carousel/3.jpg",
    },

    {
      imageUrl: "/images/carousel/4.jpg",
    },

    // {
    //   imageUrl: "/images/carousel/5.jpg",
    // },
    // ,
    // {
    //   imageUrl: "/images/carousel/6.jpg",
    // },
    {
      imageUrl: "/images/carousel/7.jpg",
    },
    {
      imageUrl: "/images/carousel/8.jpg",
    },
    {
      imageUrl: "/images/carousel/9.jpg",
    },
    {
      imageUrl: "/images/carousel/10.jpg",
    },

    // Add more slides as needed
  ];

  return (
    <>
      <div className="mt-80">
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
