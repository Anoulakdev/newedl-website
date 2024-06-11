"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

import card_img_1 from "../../public/assets/img/card/card-bg.png";
import card_img_2 from "../../public/assets/img/card/card-shape-1.png";
import card_img_3 from "../../public/assets/img/card/card-img-1.png";
import card_img_4 from "../../public/assets/img/card/card-img-2.png";
import card_img_5 from "../../public/assets/img/card/card-img-3.png";
import card_img_6 from "../../public/assets/img/card/card-img-4.png";

import img68 from "@/public/images/about/FF.png";



const CardArea = ({ style_service }) => {
  return (
    <>
      <div className="tp-card-area tp-card-space pt-70">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-6 col-lg-6 wow tpfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-card-thumb-wrapper p-relative">
                <div>
                  <Image src={img68} alt="theme-pure" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="tp-card-title-box">
                <h3 className="tp-section-title-2 pb-20" style={{ fontFamily: 'Noto Sans Lao', fontSize: '40px' }}>ວິໄສທັດ ໄຟຟ້າລາວ</h3>
                <p className="text-dark fs-4" style={{ fontFamily: 'Noto Sans Lao' }}>
                ໄຟ​ຟ້າ​ລາວ​ຈະ​ເປັນ​ລັດ​ວິ​ສາ​ຫະ​ກິດ​ທີ່​ຮັບ​ປະ​ກັນ​ທາງ​ດ້ານ​ຄວາມໝັ້ນ​ຄົງ​ດ້ານພະ​ລັງ​ງານ​ໃຫ້​ແກ່ ສ​ປ​ປ ລາວ ແລະ ປະ​ເທດ​ເພື່ອນບ້ານ.
                </p>
                <br />
                <p className="text-danger fs-4" style={{ fontFamily: 'Noto Sans Lao' }}>(ຟ​ຟ​ລ ຈະ​ສ້າງ​ຄວາມ​ໝັ້ນ​ຄົງ​ດ້ານ​ພະ​ລັງ​ງານ​ເພື່ອ​ທຸກ​ໆ​ຄົນ)</p>

              </div>
            </div>
          </div>
        </div>

        <div className="container mt-50">
        <div class="border border-primary bg-primary border-5 rounded-4 p-5 fs-2 fw-bold text-white text-center" >ລັດ​ວິ​ສາ​ຫະ​ກິດ​ໄຟ​ຟ້າ​ລາວ​ເດີນ​ໜ້າ​ໄປ​ດ້ວຍ​ບາດ​ກ້າວ​ໃໝ່​ທີ່​ໝັ້ນ​ຄົງ <br /> (EDL, moving forward with Sustainable steps)</div>
        </div>
      </div>
    </>
  );
};

export default CardArea;
