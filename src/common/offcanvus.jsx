import Link from "next/link";
import React from "react";
import Image from "next/image";
import MobileMenus from "../layout/headers/mobile-menus";
import lao from "@/public/images/national/laos.png";
import english from "@/public/images/national/united-kingdom.png";

// images import
import logo from "@/public/images/CC3.png";
import canvus_img_1 from "../../public/assets/img/project/project-inner-4.jpg";
import canvus_img_2 from "../../public/assets/img/project/project-inner-5.jpg";
import canvus_img_3 from "../../public/assets/img/project/project-inner-6.jpg";
import canvus_img_4 from "../../public/assets/img/project/project-inner-7.jpg";

const Offcanvus = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <div className="tpoffcanvas-area">
        <div className={`tpoffcanvas ${sidebarOpen && "opened"}`}>
          <div className="tpoffcanvas__close-btn">
            <button className="close-btn" onClick={() => setSidebarOpen(false)}>
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="text-center my-3">
            <Link href="/" onClick={() => setSidebarOpen(false)}>
              <Image src={logo} alt="theme-pure" />
            </Link>
          </div>
          <div className="mobile-menu mean-container">
            <MobileMenus />
          </div>

          <div className="tpoffcanvas__social">
            <div className="text-center">
              <Link className="me-3" href="#">
                <Image src={lao} alt="" width={50} />
              </Link>
              <Link href="#">
                <Image src={english} alt="" width={50} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`body-overlay ${sidebarOpen && "apply"}`}
        onClick={() => setSidebarOpen(false)}
      ></div>
    </>
  );
};

export default Offcanvus;
