"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import img84 from "@/public/images/branch/image84.png";
import img85 from "@/public/images/branch/image85.png";
import img86 from "@/public/images/branch/image86.png";
import img87 from "@/public/images/branch/image87.png";
import img88 from "@/public/images/branch/image88.png";
import img89 from "@/public/images/branch/image89.png";
import img90 from "@/public/images/branch/image90.png";
import img91 from "@/public/images/branch/image91.png";
import img92 from "@/public/images/branch/image92.png";
import img93 from "@/public/images/branch/image93.png";
import img94 from "@/public/images/branch/image94.png";
import img95 from "@/public/images/branch/image95.png";
import img96 from "@/public/images/branch/image96.png";
import img97 from "@/public/images/branch/image97.png";
import img98 from "@/public/images/branch/image98.png";
import img99 from "@/public/images/branch/image99.png";
import img100 from "@/public/images/branch/image100.png";
import img101 from "@/public/images/branch/image101.png";
import img102 from "@/public/images/branch/image102.png";

const AllBranch = () => {
  const cardData = [
    {
      id: 1,
      imageSrc: img84,
      heading: "ສາຂາແຂວງອັດຕະປື",
      description: "ຕັ້ງຢູ່ບ້ານໄຊສະອາດ,ເມືອງສາມັກຄີໄຊ ແຂວງອັດຕະປື",
      phone: "031 2115156-0",
      email: "Edl.attapue@hotmail.com ",
      link: "https://edl.com.la/Attapeu.php",
    },
    {
      id: 2,
      imageSrc: img88,
      heading: "ສາຂາແຂວງຫົວພັນ",
      description: "ຕັ້ງຢູ່ບ້ານນາທົ່ງ, ເມືອງຊໍາເໜືອ ແຂວງ ຫົວພັນ",
      phone: "064 31 2945",
      email: "Khampheuy_edl@yahoo.com ",
      link: "https://edl.com.la/HuaPhan.php",
    },
    {
      id: 3,
      imageSrc: img92,
      heading: "ສາຂາແຂວງອຸດົມໄຊ",
      description: "ຕັ້ງຢູ່ບ້ານນາສ້າວ, ເມືອງໄຊ ແຂວງ ອຸດົມໄຊ. .",
      phone: "081 212 957",
      email: "Edl.oudomxay@hotmail.com ",
      link: "https://edl.com.la/Oudomxay.php",
    },
    {
      id: 4,
      imageSrc: img96,
      heading: "ສາຂາແຂວງສະຫວັນນະເຂດ",
      description: "ບ້ານ ທ່າແຮ່. ເມືອງ ໄກສອນ ພົມວິຫານ. ",
      phone: "031 2115156-0",
      email: "Edl.attapue@hotmail.com ",
      link: "https://edl.com.la/Savannakhet.php",
    },
    {
      id: 5,
      imageSrc: img100,
      heading: "ສາຂາແຂວງໄຊສົມບູນ",
      description: "ຕັ້ງຢູ່ ຖະໜົນເລທີ 5B, ບ້ານ ພູຫົວຊ້າງ, ເມືອງ ອານຸວົງ",
      phone: "031 2115156-0",
      email: "Edl.attapue@hotmail.com ",
      link: "https://edl.com.la/Xaisomboun.php",
    },
    {
      id: 6,
      imageSrc: img85,
      heading: "ສາຂາແຂວງບໍ່ແກ້ວ",
      description: "ຕັ້ງຢູ່ ບ້ານໃຫຍ່ຫ້ວຍຊາຍໃຕ້ ເມືອງຫ້ວຍຊາຍ",
      phone: "084 212 007",
      email: "EDL_Bokeo@hotmail.com ",
      link: "https://edl.com.la/Bokeo.php",
    },
    {
      id: 7,
      imageSrc: img89,
      heading: "ສາຂາແຂວງຄຳມ່ວນ",
      description: "ຕັ້ງຢູ່ບ້ານໂພນສະໜາມ,ເມືອງທ່າແຂກ ແຂວງ ຄຳມ່ວນ",
      phone: "051 212682",
      email: "EDL_KM@gmail.com ",
      link: "https://edl.com.la/Khammouane.php",
    },
    {
      id: 8,
      imageSrc: img93,
      heading: "ສາຂາແຂວງຜົ້ງສາລີ",
      description: "ຕັ້ງຢູ່ບ້ານ ໂພນແກ້ວ, ເມືອງຜົ້ງສາລີ",
      phone: "088-210215",
      email: "Edl.phongsaly@hotmail.com ",
      link: "https://edl.com.la/Phongsali.php",
    },
    {
      id: 9,
      imageSrc: img97,
      heading: "ສາຂາແຂວງເຊກອງ",
      description: "ຕັ້ງຢູ່ບ້ານໂພນຄຳ, ເທດສະບານ ເມືອງລະມາມ",
      phone: "038 211 354",
      email: "Edl.xekong@hotmail.com ",
      link: "https://edl.com.la/Sekong.php",
    },
    {
      id: 10,
      imageSrc: img86,
      heading: "ສາຂາແຂວງບໍລິຄຳໄຊ",
      description: "ຕັ້ງຢູ່ບ້ານ ຫົງໄຊ ແຂວງບໍລິຄຳໄຊ",
      phone: "054 280307",
      email: "Edl.borlikhamxay@hotmail.com ",
      link: "https://edl.com.la/Bolikhamsai.php",
    },
    {
      id: 11,
      imageSrc: img90,
      heading: "ສາຂາແຂວງຫຼວງນ້ຳທາ",
      description: "ຕັ້ງຢູ່ບ້ານ ວຽງທອງ, ຖະໜົນຫຼວງນໍ້າທາ, ເມືອງ ຫຼວງນໍ້າທາ",
      phone: "086-212093",
      email: "edllnt2006@gmail.com ",
      link: "https://edl.com.la/LuangNamtha.php",
    },
    {
      id: 12,
      imageSrc: img94,
      heading: "ສາຂາແຂວງໄຊຍະບູລີ",
      description: "ຕັ້ງຢູ່ບ້ານ ທ່ານາ ເມືອງໄຊຍະບູລີ ",
      phone: "074 211673",
      email: "edl_sayaboury@hotmail.com",
      link: "https://edl.com.la/Sayabouly.php",
    },
    {
      id: 13,
      imageSrc: img98,
      heading: "ສາຂາແຂວງວຽງຈັນ",
      description: "ຕັ້ງຢູ່ບ້ານ ໂພນໝີ ໃຕ້ , ເມືອງ ວຽງຄໍາ  ",
      phone: "(023) 431015",
      email: "Edl.vientiane@hotmail.com ",
      link: "https://edl.com.la/VientianePro.php",
    },
    {
      id: 14,
      imageSrc: img87,
      heading: "ສາຂາແຂວງຈຳປາສັກ",
      description: "ຕັ້ງຢູ່ບ້ານ ໂນນສະຫວ່າງ ນະຄອນປາກເຊ",
      phone: "(031) 215 037",
      email: "Edl.champasack@hotmail.com ",
      link: "https://edl.com.la/Champasak.php",
    },

    {
      id: 15,
      imageSrc: img91,
      heading: "ສາຂາແຂວງຫຼວງພະບາງ",
      description: "ຕັ້ງຢູ່ບ້ານໂຄມຂວາງ ຖະໜົນ13ເໜືອ",
      phone: "071 212 190",
      email: "edl_Luangprabang@hotmail.com",
      link: "https://edl.com.la/LuangPrabang.php",
    },
    {
      id: 16,
      imageSrc: img95,
      heading: "ສາຂາແຂວງສາລະວັນ",
      description: "ຕັ້ງທີ່ບ້ານ ນາກົກໂພ ເທດສະບານ ",
      phone: "034 211127",
      email: "Edl.salavan@hotmail.com ",
      link: "https://edl.com.la/Salavan.php",
    },
    {
      id: 17,
      imageSrc: img99,
      heading: "ສາຂາແຂວງຊຽງຂວາງ",
      description: "ຕັ້ງຢູ່ ບ້ານໂພນສະອາດໃຕ້ ເມືອງແປກ",
      phone: "061 213545",
      email: "Edl.xiengkhoung@hotmail.com ",
      link: "https://edl.com.la/XiengKhouang.php",
    },
    {
      id: 18,
      imageSrc: img101,
      heading: "ສາຂານະຄອນຫລວງ1",
      description: "ຕັ້ງຢູ່ບ້ານ ໜອງບຶກ ເມືອງສີໂຄດຕະບອງ",
      phone: "021 254121",
      email: "Edl.nakhoneluang1@hotmail.com",
      link: "https://edl.com.la/vientiane1.php",
    },
    {
      id: 19,
      imageSrc: img102,
      heading: "ສາຂານະຄອນຫລວງ2",
      description: "ຕັ້ງຢູ່ບ້ານ ໜອງບຶກ",
      phone: "031 2115156-0",
      email: "Edl.attapue@hotmail.com",
      link: "https://edl.com.la/vientiane2.php",
    },
  ];

  return (
    <>
      <div className="portfolio blog-grid-inner mb-10">
        <div className="container">
          <div className="row grid blog-grid-inner pt-50">
            {cardData.map((item, i) => (
              <div
                key={i}
                data-index={i}
                className="col-xl-4 col-lg-4 col-md-4 col-12 mb-30 grid-item cat1 cat4 cat3 cat5"
              >
                <div className="tp-blog-item">
                  <div className="tp-blog-thumb fix rounded-4">
                    <Link
                      href={{
                        pathname: "/branch_detail",
                        query: { branch_id: item.id },
                      }}
                    >
                      <Image src={item.imageSrc} alt="theme-pure" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBranch;
