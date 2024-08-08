import React, {useRef} from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

import brand_img_1 from "../../../../public/assets/img/hero/hero-slider-icon-2.jpg";
import brand_img_2 from "../../../../public/assets/img/hero/hero-slider-icon-3.jpg";
import brand_img_3 from "../../../../public/assets/img/hero/hero-slider-icon-4.jpg";
import brand_img_4 from "../../../../public/assets/img/hero/hero-slider-icon-5.jpg";
import brand_img_5 from "../../../../public/assets/img/hero/hero-slider-icon-3.jpg";
import shape_1 from "../../../../public/assets/img/brand/image_01.png";
import shape_2 from "../../../../public/assets/img/hero/hero-slider-icon-1.jpg";

import edl_logo from "@/public/images/edl_logo.png";


const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false, 
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
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



const brand_data = [
   brand_img_1,
   brand_img_2,
   brand_img_3,
   brand_img_4,
   brand_img_5,
]
const BrandArea = () => {

    const sliderRef = useRef(null)


    return (
        <>
           <div className="tp-barnd-area tp-barnd-plr blue-bg z-index-3 fix mt-30">
               <div className="tp-barnd-main-wrapper p-relative mt-35">
                  <div className="tp-barnd-shape-1">
                     <Image src={shape_1} alt="theme-pure" />
                  </div>
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-2 col-4">
                           <div className="tp-barnd-left-item d-flex align-items-center">  
                           <Image src={edl_logo} width={40} height={40} />
                              <h5 className="tp-barnd-title-sm" style={{ fontFamily: 'Noto Sans Lao' }}>ແຈ້ງມອດ​ໄຟ</h5>
                           </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-8">
                        <p className='text-white pt-2'>2024-01-19 ຫາ 2024-01-20 | 09:00-13:00 | ບ້ານສາລະຄໍາໃຕ້ ເມືອງຫາດຊາຍຟອງ ນະຄອນຫຼວງ3</p>
                        </div>
                        <div className="col-xl-2 col-lg-2 text-end mt-2">
                            <a href="/turnoff" type='button' className='btn btn-light'>ເບິ່ງ​ເພີ່ມ​ເຕີມ</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div> 
        </>
    );
};

export default BrandArea;