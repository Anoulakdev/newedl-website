"use client"
import StartIcon from '@/src/svg/start-icon';
import React, {useRef} from 'react';
import Image from 'next/image';
import Slider from 'react-slick'; 


// slider img import 
import slider_img_1 from "@/public/images/activity/image42.png";
import slider_img_2 from "@/public/images/activity/image43.png";
import slider_img_3 from "@/public/images/activity/image44.png";
import slider_img_4 from "@/public/images/activity/image45.png";
import slider_img_5 from "@/public/images/activity/image46.png";
import shadow_img from "@/public/assets/img/testimonial/BODY.png";


const slider_data  = [
    {
        id: 1,
        img: slider_img_1,
        name: "Lana Rey",
        job: "Founder & Leader",
        info: <>"Is it possible to Love your credit card processor? with Softec, yes!"</>,

    },
    {
        id: 2,
        img: slider_img_2,
        name: "J. McGhee",
        job: "Founder & Leader",
        info: <>"Is it possible to Love your credit card processor? with Softec, yes!"</>,

    },
    {
        id: 3,
        img: slider_img_3,
        name: "Michael H.",
        job: "Founder & Leader",
        info: <>"Is it possible to Love your credit card processor? with Softec, yes!"</>,

    },
    {
        id: 4,
        img: slider_img_4,
        name: "Lana Rey",
        job: "Founder & Leader",
        info: <>"Is it possible to Love your credit card processor? with Softec, yes!"</>,

    },
    {
        id: 5,
        img: slider_img_5,
        name: "Lana Rey",
        job: "Founder & Leader",
        info: <>"Is it possible to Love your credit card processor? with Softec, yes!"</>,

    },
]

// slider setting 
const setting = {	
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    dots:true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
        
    ]
}


const testimonial_content = {
    bg_img: "/assets/img/testimonial/testi-bg-2-1.png",
    title: <>ກິດ​ຈ​ະ​ກຳ</>
}
const {bg_img, title}  = testimonial_content
const TestimonialArea = () => {
    const sliderRef = useRef()
    return (
        <>
            <div className="tp-testimonial-2-area pt-10 pb-40 blue-bg">
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-xl-8">
                        <div className="tp-testimonial-2-section-box mb-15 text-center">
                           <h3 className="tp-section-title-lg text-white" style={{ fontFamily: 'Noto Sans Lao' }}>{title}</h3>
                        </div>
                     </div>
                  </div>
                  <div className="row">

                     <div className="col-12">
                        <div className="tp-testimonial-2-section">

                           <Slider
                           {...setting} 
                           ref={sliderRef} 
                            className="tp-testimonial-2-slider-active">
                            {slider_data.map((item, i)  => 
                                 <div key={i} className="tp-testimonial-2-item p-relative wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                                    <div className="tp-testimonial-2-border-shape">
                                    <Image src={item.img} alt="theme-pure"/>
                                    </div>
                                   <br />
                                   <br />
                                   <br />
                                   <br />
                                   <br />
                                   <br />
                                   <br />
                                   <br />
                                   <br />
                                   <br />
                                 </div> 
                                )
                            } 
                           </Slider>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default TestimonialArea;