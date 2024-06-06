import Image from "next/image";
import Link from "next/link";
import React from "react";

const cardData = [
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

  // Add more card data objects as needed
];

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
                        ແຈ້ງ​ປະ​ມູນ
                      </h3>
                      {cardData.map((item, i) => (
                        <div key={i}>
                          <Link href={item.imagePath} target="_blank">
                            <p className="text-black lh-1 fw-bold">
                              {item.title}
                            </p>
                            <p className="text-black lh-1 fw-bold">
                              {item.date_start}
                            </p>
                          </Link>
                          <p className="text-black text-center lh-1 fw-bold">
                            --------------------------------------------
                          </p>
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
                        ແຈ້ງ​ການ
                      </h3>
                      {cardData.map((item, i) => (
                        <div>
                          <p className="text-black lh-1 fw-bold">
                            {item.title}
                          </p>
                          <p className="text-black lh-1 fw-bold">
                            {item.date_start}
                          </p>
                          <p className="text-black text-center lh-1 fw-bold">
                            --------------------------------------------
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <Link
                        href=""
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
