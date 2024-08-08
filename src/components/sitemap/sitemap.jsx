import React from "react";
import Link from "next/link";
import menu_data from "@/src/layout/headers/menu-edl";

const Sitemap = () => {
  return (
    <div className="container pt-110 pb-70">
      <div className="row">
        <h1
          className="text-center"
          style={{ fontFamily: "Noto Sans Lao", fontSize: "50px" }}
        >
          ແຜນ​ຜັງ​ເວບ​ໄຊ
        </h1>
        <h2 className="text-center">Sitemap</h2>
      </div>
      <div className="row mt-50">
        <div class="col-lg-7 col-md-7 col-11 mx-auto">
          <nav>
            <ul>
              {menu_data.map((menu_item, i) => (
                <li key={i} className="my-2">
                  <Link className="fs-4 text-black fw-bold" href={menu_item.link}>
                    {menu_item.title}
                  </Link>
                  <ul className="ps-5 my-2">
                    {menu_item.sub_menus.map((sub_menu, i) => (
                      <li key={i} className="my-2">
                        <Link className="fs-5 text-primary text-decoration-underline" href={sub_menu.link}>
                          {sub_menu.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
