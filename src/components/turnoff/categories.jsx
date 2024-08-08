import Link from "next/link";
import React from "react";

const categories_data = [
  { id: 1, titile: "ສາຂານະຄອນຫລວງ1", items: "01" },
  { id: 2, titile: "ສາຂານະຄອນຫລວງ2", items: "02" },
  { id: 3, titile: "​ສາ​ຂາ​ແຂວງວຽງ​ຈັນ", items: "03" },
  { id: 4, titile: "​ສາ​ຂາ​ແຂວງບໍ​ລິ​ຄຳ​ໄຊ", items: "04" },
  { id: 5, titile: "​ສາ​ຂາ​ແຂວງໄຊ​ສົມ​ບູນ", items: "05" },
];
const Categories = () => {
  return (
    <>
      <div className="sidebar__widget mb-40">
        <div className="sidebar__widge-title-box">
          <h3 className="sidebar__widget-title fs-4" style={{fontFamily: 'Noto Sans Lao'}}>ສາ​ຂາ​ແຂວງ</h3>
        </div>
        <div className="sidebar__widget-content">
          <ul>
            {categories_data.map((item, i) => (
              <li key={i}>
                <Link href="">
                  <span>
                    <i className="fal fa-angle-right"></i>
                    {item.titile}
                  </span>
                  {/* <span>{item.items}</span> */}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Categories;
