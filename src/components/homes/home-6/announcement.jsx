import Image from "next/image";
import Link from "next/link";
import React from "react";

const cardData1 = [
  {
    id: 1,
    imagePath: "/images/notice_of_auction/3069.jpg",
    iconPath: "images/vector14.svg",
    title: "ຫນັງສືເຊີນເຂົ້າຮ່ວມປະມູນ",
    description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
    date_start: "23/01/2024",
    date_end: "29/01/2024",
  },
  {
    id: 2,
    imagePath: "/images/notice_of_auction/0074.jpg",
    iconPath: "images/vector14.svg",
    title: "ຫນັງສືເຊີນເຂົ້າຮ່ວມປະມູນ",
    description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
    date_start: "09/01/2024",
    date_end: "17/01/2024",
  },
  {
    id: 3,
    imagePath: "/images/notice_of_auction/107.jpg",
    iconPath: "images/vector14.svg",
    title: "ຫນັງສືເຊີນເຂົ້າຮ່ວມປະມູນ",
    description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
    date_start: "8/01/2024",
    date_end: "15/02/2024",
  },
];

const cardData2 = [
  {
    id: 1,
    pdfPath: "/pdf/service-fee/01.pdf",
    title: "ຂໍ້​ຕົກ​ລົງ ການ​ຮັບ​ຊື້​ໄຟ ຈາດ​ພະ​ລັງ​ງານ​ແສງ​ຕາ​ເວັນ​ຢູ່​ເທິງ​ຫຼັງ​ຄາ​ທີ່​ຢູ່​ອາ​ໄສ (Solar Rooftop) ສຳ​ລັບ​ພາກ​ທີ່​ຢູ່​ອາ​ໄສ (ສະ​ບັບ ປີ 2024)",
    date: "23/01/2024",
  },
  {
    id: 2,
    pdfPath: "/pdf/service-fee/02.pdf",
    title: "ແຈ້ງ​ການ ການ​ຄິດ​ໄລ່ ລາ​ຄາ​ໝໍ້​ນັບ​ໄຟ ແລະ ອຸ​ປະ​ກອນ​ຕິດ​ຕັ້ງ​ຮ່ວມ​ທີ່​ບໍ​ລິ​ການ​ໃຫ້​ລູກ​ຄ້າ​ລາຍ​ໃຫ່​ຍ, ສະ​ຖາ​ນີ​ໄຟ​ຟ້າ, ແຫຼ່ງ​ຜະ​ລິດ ແລະ ພາກ​ເຂື່ອນ​ໄຟ​ຟ້າ​ໃນ​ຂອບ​ເຂດ​ທົ່ວ​ປະ​ເທດ (ສະ​ບັບ ປີ 2022)",
    date: "12/04/2022",
  },
  {
    id: 3,
    pdfPath: "/pdf/service-fee/03.pdf",
    title: "ແຈ້ງ​ການ ການ​ເກັບ​ຄ່າ​ບໍ​ລິ​ການ​ເກາະ​ຫ້ອຍ​ບັນ​ດາ​ສາຍ​ສື່​ສານ ແລະ ອຸ​ປະ​ກອນ​ຕ່າງ​ໆ ປະ​ຈຳ​ປີ 2023 ແລະ ປິ 2024 (ສະ​ບັບ​ຊົ່ວ​ຄາວ ປີ 2024)",
    date: "12/02/2024",
  },
];

function truncateText(text, wordLimit) {
  const words = text.split(' ');
  if (words.length <= wordLimit) {
    return text;
  }
  return words.slice(0, wordLimit).join(' ') + '...';
}

const Announcement = () => {
  return (
    <>
      <div
        id="payment-method"
        className="tp-payment__area pt-30 pb-30 grey-bg-3"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="row g-4">
                <div className="col-md-6">
                  <div
                    className={`px-5 py-3 tp-payment__bg-color-3 tpfadeLeft p-relative z-index wow `}
                    data-wow-duration=".9s"
                    data-wow-delay=".5s"
                  >
                    <div>
                      <h3
                        className="tp-payment__title fw-bold"
                        style={{ fontFamily: "Noto Sans Lao" }}
                      >
                        ແຈ້ງການ​ປະ​ມູນ
                      </h3>
                      {cardData1.map((item, i) => (
                        <div key={i}>
                          <Link href={item.imagePath} target="_blank">
                            <p className="text-black lh-1 fw-bold">
                            {truncateText(item.title, 4)}
                            </p>
                            <p className="text-black lh-1 fw-bold">
                              {item.date_start}
                            </p>
                          </Link>
                          <br />
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <Link
                        href="/notice-of-auction"
                        type="button"
                        className="btn btn-primary mt-2"
                      >
                        More
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div
                    className={`px-5 py-3 tp-payment__bg-color-3 tpfadeRight p-relative z-index wow `}
                    data-wow-duration=".9s"
                    data-wow-delay=".5s"
                  >
                    <div>
                      <h3
                        className="tp-payment__title fw-bold"
                        style={{ fontFamily: "Noto Sans Lao" }}
                      >
                        ແຈ້ງ​ການຕ່າງ​ໆ
                      </h3>
                      {cardData2.map((item, i) => (
                        <div key={i}>
                          <Link href={item.pdfPath} target="_blank">
                          <p className="text-black lh-1 fw-bold">
                            {truncateText(item.title, 4)}
                          </p>
                          <p className="text-black lh-1 fw-bold">
                            {item.date}
                          </p>
                          </Link>
                          <br />
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <Link
                        href="/service-fee"
                        type="button"
                        className="btn btn-primary mt-2"
                      >
                        More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Announcement;
