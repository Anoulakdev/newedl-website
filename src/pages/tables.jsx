"use client";

import Link from "next/link";
import React, { useState } from "react";

import Image from "next/image";

// blog page data
const cardData = [
  {
    id: 1,
    pdfPath: "/pdf/legislation/01.pdf",
    title:
      "ຂໍ້​ກຳ​ນົດ​ຂອງ​ລັດ​ວິ​ສາ​ຫະ​ກິດ​ໄຟ​ຟ້າ​ລາວ ວ່າ​ດ້ວຍ ການ​ເກາະ​ຫ້ອຍ​ສາຍ​ໂທ​ລະ​ຄົມ ແລະ ອຸ​ປະ​ກອນ​ສື່​ສານ​ຕ່າງໆ ຮ່ວມ​ກັບ​ລະ​ບົບ​ຕາ​ຂ່າຍ​ໄຟ​ຟ້າ​",
  },
  {
    id: 2,
    pdfPath: "/pdf/legislation/02.pdf",
    title:
      "ຂໍ້​ກຳ​ນົດ​ວ່າ​ດ້ວຍ ຂັ້ນ​ຕອນ​ການ​ດຳ​ເນີນ​ເອ​ກະ​ສານ​ວຽກ​ງານ​ການ​ເຈ​ລະ​ຈາ, ເຊັນ ແລະ ຈັດ​ຕັ້ງ​ປະ​ຕິ​ບັດ​ສັນ​ຍາ​ຊື້-ຂາຍ​ໄຟ​ຟ້າ ກັບ​ລູກ​ຄ້າ​ລາຍ​ກາງ ໃນ​ກຳ​ລັງ​ການ​ຊົມ​ໃຊ້​ໄຟ​ຟ້າ​ຕ່ຳ​ກວ່າ 5MVA ຫາ 315 kVA.(ສະ​ບັບ​ປີ 2023)",
  },
  {
    id: 3,
    pdfPath: "/pdf/legislation/03.pdf",
    title:
      "ຂໍ້​ກຳ​ນົດຂອງ​ລັດ​ວິ​ສາ​ຫະ​ກິດ​ໄຟ​ຟ້າ​ລາວ ວ່າ​ດ້ວຍ ມາດ​ຕະ​ຖານ​ການ​ຕິດ​ຕັ້ງ ແລະ ການ​ເຊື່ອມ​ຕໍ່​ລະ​ບົບ​ຜະ​ລິດ​ພະ​ລັງ​ງານ​ໄຟ​ຟ້າ​ດ້ວຍ​ແສງ​ຕາ​ເວັນ ທີ່​ຕິດ​ຕັ້ງ​ຢູ່​ເທິງ​ຫຼັງ​ຄາ (Solar Rooftop)",
  },
  {
    id: 4,
    pdfPath: "/pdf/legislation/04.pdf",
    title:
      "ຂໍ້​ແນະ​ນຳ ລັດ​ວິ​ສາ​ຫະ​ກິດ​ໄຟ​ຟ້າ​ລາວ ຕໍ່​ກັບ​ຫຼັກ​ການ​ພິ​ຈາ​ລະ​ນາ​ຮັບ​ຊື້​ໄຟ​ຟ້າ​ຈາກ​ເອ​ກະ​ຊົນ (ສະ​ບັບ ປີ 2024)",
  },
  {
    id: 5,
    pdfPath: "/pdf/legislation/05.pdf",
    title:
      "ຂໍ້​ແນະ​ນຳຂອງ​ລັດ​ວິ​ສາ​ຫະ​ກິດ​ໄຟ​ຟ້າ​ລາວ ສຳ​ລັບ​ການ​ສະ​ໜອງ​ໄຟ​ຟ້າ ໃຫ້​ລູ​ກ​ຄ້າ​ລາຍ​ໃຫ່​ຍ ທີ່​ມິ​ກຳ​ລັງ​ຕິດ​ຕັ້ງ​ນັບ​ແຕ່ 5 MVA ຂຶ້ນ​ໄປ (ສະ​ບັບ​ປັ​ບ​ປຸງ ປີ 2023)",
  },

  // Add more card data objects as needed
];

const Tables = () => {
  return (
    
      <div className="container wow tpfadeUp">
        <div className="row mt-50 mb-50">
          <div>
            <table className="table table-hover">
              <thead>
                <tr className="text-center fw-bold fs-5 table-primary">
                  <th
                    style={{width: '8%'}}
                  >
                    ລ/ດ
                  </th>

                  <th
                    style={{width: '75%'}}
                  >
                    ​ຫົວ​ຂໍ້
                  </th>

                  <th
                    style={{width: '17%'}}
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
                      
                    >
                      {item.id}
                    </td>
                    <td
                      
                    >
                      {item.title}
                    </td>

                    <td
                      className="text-center"
                      
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

      
    
  );
};

export default Tables;
