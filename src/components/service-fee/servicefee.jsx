"use client";

import Link from "next/link";
import React, { useState } from "react";

import Image from "next/image";

// blog page data
const cardData = [
  {
    id: 1,
    pdfPath: "/pdf/service-fee/01.pdf",
    title: "ຂໍ້​ຕົກ​ລົງ ການ​ຮັບ​ຊື້​ໄຟ ຈາດ​ພະ​ລັງ​ງານ​ແສງ​ຕາ​ເວັນ​ຢູ່​ເທິງ​ຫຼັງ​ຄາ​ທີ່​ຢູ່​ອາ​ໄສ (Solar Rooftop) ສຳ​ລັບ​ພາກ​ທີ່​ຢູ່​ອາ​ໄສ (ສະ​ບັບ ປີ 2024)​",
  },
  {
    id: 2,
    pdfPath: "/pdf/service-fee/02.pdf",
    title: "ແຈ້ງ​ການ ການ​ຄິດ​ໄລ່ ລາ​ຄາ​ໝໍ້​ນັບ​ໄຟ ແລະ ອຸ​ປະ​ກອນ​ຕິດ​ຕັ້ງ​ຮ່ວມ​ທີ່​ບໍ​ລິ​ການ​ໃຫ້​ລູກ​ຄ້າ​ລາຍ​ໃຫ່​ຍ, ສະ​ຖາ​ນີ​ໄຟ​ຟ້າ, ແຫຼ່ງ​ຜະ​ລິດ ແລະ ພາກ​ເຂື່ອນ​ໄຟ​ຟ້າ​ໃນ​ຂອບ​ເຂດ​ທົ່ວ​ປະ​ເທດ (ສະ​ບັບ ປີ 2022)",
  },
  {
    id: 3,
    pdfPath: "/pdf/service-fee/03.pdf",
    title: "ແຈ້ງ​ການ ການ​ເກັບ​ຄ່າ​ບໍ​ລິ​ການ​ເກາະ​ຫ້ອຍ​ບັນ​ດາ​ສາຍ​ສື່​ສານ ແລະ ອຸ​ປະ​ກອນ​ຕ່າງ​ໆ ປະ​ຈຳ​ປີ 2023 ແລະ ປິ 2024 (ສະ​ບັບ​ຊົ່ວ​ຄາວ ປີ 2024)",
  },
  {
    id: 4,
    pdfPath: "/pdf/service-fee/04.pdf",
    title: "ແຈ້ງ​ການ​ ການ​ປັບ​ປຸງ​ຄ່າ​ຈອງ​ໝໍ້​ນັບ​ໄຟ​ຕ່ຳ​ສຸດ ສຳ​ລັບ​ໝໍ້​ນັບ​ໄຟ​ທຸກ​ປະ​ເພດ (ສະ​ບັບ​ປັບ​ປຸງ ປີ 2023)",
  },
  {
    id: 5,
    pdfPath: "/pdf/service-fee/05.pdf",
    title: "ແຈ້ງ​ການ​ການ​ປັບ​ປຸງ​ລາ​ຄາ ຄ່າ​ບຳ​ລຸງ​ຮັກ​ສາ​ໝໍ້​ນັບ​ໄຟ ທຸກ​ປະ​ເພດ ນັ​ບ​ແຕ່​ປີ 2024-2029(ສະ​ບັບ​ປັບ​ປຸງ ປີ 2024)",
  },
  

  // Add more card data objects as needed
];

const Tables = () => {
  return (
    <>
      <div className="container mt-40 mb-40 wow tpfadeUp">
        <div className="row">
          <div
            className="table-responsive"
          >
            <table
              className="table table-hover"
            >
              <thead>
                <tr className="text-center fw-bold fs-5">
                  <th className="text-white bg-primary"
                    style={{ width: "9%",
                      paddingTop: "40px",
                      paddingBottom: "40px",
                    }}
                  >
                    ລ/ດ
                  </th>
                  
                  <th className="text-white bg-primary"
                    style={{ width: "75%",
                      paddingTop: "40px",
                      paddingBottom: "40px",
                    }}
                  >
                    ​ຫົວ​ຂໍ້
                  </th>
                  
                  <th className="text-white bg-primary"
                    style={{ width: "16%",
                      paddingTop: "40px",
                      paddingBottom: "40px",
                    }}
                  >
                    ​ດ​າວ​ໂຫລດ​ເອ​ກະ​ສານ
                  </th>
                </tr>
              </thead>
              <tbody>
                {cardData.map((item, i) => (
                  <tr className="fs-6">
                    <td
                      className="text-center"
                      key={i}
                      style={{
                        paddingTop: "33px",
                        paddingBottom: "33px",
                      }}
                    >
                      {item.id}
                    </td>
                    <td
                      style={{
                        paddingTop: "33px",
                        paddingBottom: "33px",
                      }}
                    >
                      {item.title}
                    </td>
                    
                    <td
                      className="text-center"
                      style={{
                        paddingTop: "33px",
                        paddingBottom: "33px",
                      }}
                    >
                      <Link href={item.pdfPath} target="_blank">
                        <button className="btn btn-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            class="bi bi-cloud-arrow-down"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708z"
                            />
                            <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                          </svg>
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="basic-pagination mt-2">
            <nav>
              <ul>
                <li>
                  <Link href="#">
                    <i className="far fa-angle-left"></i>
                  </Link>
                </li>
                <li>
                  <Link className="current" href="#">
                    1
                  </Link>
                </li>
                <li>
                  <Link href="#">2</Link>
                </li>
                <li>
                  <Link href="#">3</Link>
                </li>
                <li>
                  <Link href="#">4</Link>
                </li>

                <li>
                  <span>...</span>
                </li>
                <li>
                  <Link href="#">7</Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="far fa-angle-right"></i>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tables;
