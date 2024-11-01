import Link from "next/link";
import React from "react";
import SEO from "../common/seo";
import Footer from "../layout/footers/footer";
import HeaderFour from "../layout/headers/header-4";

// error shape import here
import error_shape_1 from "../../public/assets/img/login/error-shape.png";
import error_shape_2 from "../../public/coming-soon.png";
import Image from "next/image";

const index = () => {
  return (
    <>
      <SEO pageTitle={"Oops.! Page Not Found!"} />
      {/* <HeaderFour style_error={true} /> */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div className="tp-error-area tp-error-ptb p-relative">
              <div className="tp-error-left-shape">
                <Image src={error_shape_1} alt="theme-pure" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-error-content-box text-center mb-40">
                      <Image src={error_shape_2} width={450} alt="theme-pure" />
                    </div>
                    <div className="tp-error-text-box text-center">
                      <Link
                        className="tp-btn-inner tp-btn-hover alt-color-black"
                        href="/"
                      >
                        <span>HOME</span>
                        <b></b>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default index;
