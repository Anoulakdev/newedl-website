import useSticky from "@/src/hooks/use-sticky";
import Offcanvus from "@/src/common/offcanvus";
import Link from "next/link";
import React, { useState } from "react";
import NavMenu from "./nav-menu";
import Image from "next/image";

import logo from "../../../public/assets/img/logo/logo-black.png";
import white_logo from "../../../public/assets/img/logo/logo-white.png";
import black_logo from "../../../public/assets/img/logo/logo-black.png";

import edl_banner from "@/public/images/CC3.png";
import lao from "@/public/images/national/laos.png";
import english from "@/public/images/national/united-kingdom.png";

const HeaderFour = ({ style_error }) => {
  const { sticky } = useSticky();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className={`${style_error ? "" : "tp-header-heightt"}`}>
        <div
          style={{
            backgroundColor: "#2329C1",
          }}
          id="header-sticky"
          className={`header-bottom__area ${
            style_error
              ? "header-sticky-bg-2 tp-error-header z-index-5"
              : "header-blur header-bottom__plr-4 z-index-3"
          }  header-bottom__transparent ${sticky && "header-sticky"}`}
        >
          <div
            className={`${style_error ? "container" : "container-fluid p-0"}`}
          >
            <div className="row g-0 align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                <div className="header-bottom__logo">
                  {style_error ? (
                    <Link href="/">
                      <Image src={logo} alt="theme-pure" />
                    </Link>
                  ) : (
                    <>
                      <Link className="white-logo" href="/">
                        <Image src={edl_banner} alt="theme-pure" />
                      </Link>
                      <Link className="black-logo" href="/">
                        <Image src={edl_banner} alt="theme-pure" />
                      </Link>
                    </>
                  )}
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 d-none d-lg-block">
                <div className="header-bottom__main-menu header-bottom__main-menu-4">
                  <nav id="mobile-menu">
                    <NavMenu />
                  </nav>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-8 col-6">
                <div className="header-bottom__right d-flex align-items-center justify-content-end">
                  <div
                    className={`header-bottom__action ${
                      style_error ? "" : "header-bottom__action-4"
                    }`}
                  >
                    <Link
                      className="d-none d-lg-inline-block header-bottom__action-2 border-none me-3"
                      href="/"
                    >
                      <Image src={lao} alt="" width={30} />
                    </Link>
                    <Link
                      className="d-none d-lg-inline-block header-bottom__action-2 border-none"
                      href="/coming-soon"
                    >
                      <Image src={english} alt="" width={30} />
                    </Link>
                  </div>
                  <div className="header-bottom__btn d-flex align-items-center"> 
                    <a
                      className="header-bottom__bar tp-menu-bar d-lg-none"
                      onClick={() => setSidebarOpen(true)}
                    >
                      <i className="fal fa-bars"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvus sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
};

export default HeaderFour;
