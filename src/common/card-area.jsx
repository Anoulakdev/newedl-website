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
                <p className="text-dark" style={{ fontFamily: 'Noto Sans Lao' }}>
                ເຮັດໃຫ້ລັດວິສາຫະກິດໄຟຟ້າລາວ ກາຍເປັນ ລັດວິສາຫະກິດທີ່ເຂັ້ມແຂງ, ເປັນທີ່ຍອມຮັບ ແລະ ໄດ້ຮັບຄວາມເຊື່ອໝັ້ນຈາກທຸກພາກສ່ວນທີ່ກ່ຽວຂ້ອງ ພ້ອມເຮັດຫຼ້ອນ 02 ໜ້າທີ່ຫຼັກຄື: 

                <ul type="disc" className="ms-4 mt-2">
                    <li>ເອົາໃຈໃສ່ ແລະ ຮັບຜິດຊອບສູງຕໍ່ໜ້າທີ່ການເມືອງ ແລະ ແຜນພັດທະນາເສດຖະກິດ-ສັງຄົມແຫ່ງຊາດ ທີ່ໄດ້ກຳໜົດໄວ້ໃຫ້ເປັນຮູບປະທຳ.</li>
                    <li>ດຳເນີນທຸລະກິດໃຫ້ມີປະສິດທິພາບ ແລະ ປະສິດທິຜົນ ໂດຍແນໃສ່ສ້າງອຸດສາຫະກຳໄຟຟ້າໃຫ້ເປັນຂະແໜງການຫຼັກ ໃນການພັດທະນາເສດຖະກິດ-ສັງຄົມ ແລະ ສ້າງລາຍຮັບໃຫ້ແກ່ປະເທດ, ພ້ອມທັງຊຸກຍູ້ສົ່ງເສີມຂະແໜງການປິ່ນອ້ອມໃຫ້ມີການພັດທະນາໄຟຄຽງຄູ່ກັນ ເພື່ອສ້າງວຽກເຮັດງານທຳໃຫ້ປະຊາຊົນລາວບັນດາເຜົ່າ ໄດ້ຊົມໃຊ້ໄຟຟ້າໃນລາຄາສົມເຫດສົມຜົນ.</li>
                </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-50">
        <div class="border border-5 rounded-4 p-5 fs-3 fw-bold text-dark" style={{ backgroundColor: '#e0e0e0' }}>ຕະຫຼອດໄລຍະເວລາຫຼາຍສິບປີຜ່ານມາ ທີ່ພວກເຮົາບໍ່ມີທຶນຮອນແຕ່ກໍ່ໄດ້ຄົ້ນຄວ້າ ເພື່ອດຶງດູດເອົາທຶນຮອນຂອງຕ່າງປະເທດເພື່ອເຂົ້າມາພັດທະນາລະບົບໄຟຟ້າຂອງລາວ ໃນການຕອບສະໜອງຄວາມຕ້ອງການຊົມໃຊ້ໃຫ້ພຽງພໍ ໃນແຕ່ລະໄລຍະ ຂອງການຂະຫຍາຍຕົວຂອງເສດຖະກິດ ແລະ ຄວາມຕ້ອງການຊົມໃຊ້ໄຟຟ້າຂອງປະຊາຊົນ.</div>
        </div>
      </div>
    </>
  );
};

export default CardArea;
