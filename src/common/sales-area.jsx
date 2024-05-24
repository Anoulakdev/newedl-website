import React from "react";
import Image from "next/image";

import sales_img_1 from "../../public/assets/img/card/sale-1.png";
import sales_img_2 from "../../public/assets/img/card/sale-2.png";
import sales_img_3 from "../../public/assets/img/card/sale-3.png";

import img69 from "@/public/images/about/image69.png";


const SalesArea = ({ style_service }) => {
  return (
    <>
      <div className="tp-sales-area tp-sales-space">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-6 col-lg-6 order-1 order-md-1 wow tpfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-sales-section-box pb-20">
                <h3
                  className="tp-section-title-3 pb-15 "
                  style={{ fontFamily: "Noto Sans Lao", fontSize: "40px" }}
                >
                  ພາລະກິດ ໄຟຟ້າລາວ
                </h3>
                <p
                  className="text-dark"
                  style={{ fontFamily: "Noto Sans Lao" }}
                >
                  <ul type="disc" className="ms-4 mt-2 fs-4">
                    <li>
                      ສ້າງ ແລະ ພັດ​ທະ​ນາ ຟ​ຟ​ລ ໃຫ້​ເອົາ​ໃຈ​ໃສ່ ແລະ ຮັບ​ຜິ​ດ​ຊອບ​ສູງ ​ຕໍ່​ໜ້າ​ທີ່​ການ​ເມືອງ ເພື່ອ​ຈັດ​ຕັ້ງ​ປະ​ຕິ​ບັດ ແຜນ​ພັດ​ທະ​ນາເສ​ດ​ຖະ​ກິດ-ສັງ​ຄົມ​ແຫ່ງ​ຊາດ ທີ່​ໄດ້​ກຳ​ນົດ​ໄວ້​ໃຫ້​ເປັນ​ຮູບ​ປະ​ທຳ.
                    </li>
                    <li>
                      ຟ​ຟ​ລ ຈະ​ພັດ​ທະ​ນາ​ຕົນ​ເອງ ເພື່ອ​ຮັບ​ປະ​ກັນ​ຄວາມ​ໝັ້ນ​ຄົງ​ທາງ​ດ້ານ​ພະ​ລັງ​ງານ​ໃນ 4 ດ້ານ ຄື: ຄວາມ​ພ້ອມ​ໃຊ້​ພະ​ລັງ​ງານ, ການ​ເຂົ້າ​ເຖິງ​ພະ​ລັງ​ງານ, ຄຸນ​ນະ​ພາບ​ຂອງ​ພະ​ລັງ​ງານ ແລະ ຄວາມ​ສະ​ຖຽນ​ລະ​ພາບ​ທາງ​ດ້ານ​ພະ​ລັງ​ງານ.
                    </li>
                    
                  </ul>
                </p>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 order-0 order-md-2 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="tp-sales-img-wrapper p-relative text-end">
                <div>
                  <Image src={img69} alt="theme-pure" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesArea;
