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
                  <ul type="disc" className="ms-4 mt-2">
                    <li>
                      ເປັນພາກສ່ວນຫຼັກໃນການກະຕຸກຊຸກຍູ້ໃຫ້ເກີດວົງຈອນການຜະລິດ,
                      ການສ້າງມູນຄ່າເພີ່ມ ແລະ ການຊົມໃຊ້ພາຍໃນຢ່າງເປັນຮູບປະທຳ.
                    </li>
                    <li>
                      ຫຼຸດຜ່ອນການໄຫຼອອກຂອງເງິນຕາຕ່າງປະເທດໃນການນຳເຂົ້ານ້ຳມັນເຊື້ອໄຟໂດຍການຫັນມານຳໃຊ້ທ່າແຮງທາງດ້ານພະລັງງານໄຟຟ້າທີ່ຜະລິດໄດ້ເອງ
                    </li>
                    <li>
                      ໃຫ້ທົ່ວສັງຄົມໄດ້ເຂົ້າເຖິງໄຟຟ້າທີ່ມີຄຸນນະພາບໃນລາຄາທີ່ສົມເຫດສົມຜົນເພື່ອສາມາດສ້າງຜະລິດຕະພັນທີ່ສາມາດແຂ່ງຂັນໄດ້ໃນຕະຫຼາດ.
                    </li>
                    <li>
                      ກຽມຄວາມພ້ອມໃນການເຊື່ອມໂຍງພະລັງງານໄຟຟ້າກັບປະເທດເພື່ອນບ້ານ
                      ແລະ ພູມມີພາກ
                      ໂດຍການປັບປຸງລະບົບສະໜອງໄຟຟ້າໃຫ້ມີຄວາມສະຖຽນລະພາບແລະລະບົບຕາຂ່າຍໄຟຟ້າໃຫ້ມີຄວາມໝັ້ນຄົງ.
                    </li>
                    <li>
                      ປະຕິຮູບແບບແຜນວິທີດຳເນີນທຸລະກິດເພື່ອດຶງດູດຄວາມເຊື່ອໝັ້ນຂອງລູກຄ້າແລະຜູ້ຊົມໃຊ້ໄຟພາຍໃນ
                      ແລະ ການລົງທຶນຂອງຕ່າງປະເທດກັບຄືນມາ.
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
