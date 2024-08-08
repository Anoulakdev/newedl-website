
import React from "react";

import Image from "next/image";

import price1 from "@/public/images/edlprice/Asset1.png";
import price2 from "@/public/images/edlprice/Asset2.png";
import price3 from "@/public/images/edlprice/Asset3.png";
import price4 from "@/public/images/edlprice/Asset4.png";



const PriceArea = () => {
  return (
    <>
      <div className="tp-price-area pt-10 pb-80 grey-bg-3">
        <div className="container">
          <div className="row g-0">
            <div className="col-12">
              <div className="tp-price-sction-box text-center mb-40">
                <h3 className="tp-section-title-4 text-start text-black wow tpfadeLeft">ລາ​ຄາ​ໄຟ​ຟ້າ</h3>
              </div>
            </div>
          </div>

          <div className="row g-0 col-lg-6 col-md-6 wow tpfadeLeft">
            <ul
              className="nav nav-pills mb-4 bg-white p-3 rounded-3 shadow bg-body-tertiary" 
              style={{ fontSize: "15px" }}
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="0.4kv-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#0.4kv-home"
                  type="button"
                  role="tab"
                  aria-controls="0.4kv-home"
                  aria-selected="true"
                >
                  0.4 ກວ ປະ​ເພດ​ທີ່​ຢູ່ອ​າ​ໃສ
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="0.4kv-nohome-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#0.4kv-nohome"
                  type="button"
                  role="tab"
                  aria-controls="0.4kv-nohome"
                  aria-selected="false"
                >
                  0.4 ກວ ທີ່ບໍ່​ແມ່​ນປະ​ເພດ​ທີ່​ຢູ່ອ​າ​ໃສ
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="22kv-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#22kv"
                  type="button"
                  role="tab"
                  aria-controls="22kv"
                  aria-selected="false"
                >
                  22 ກວ
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="115kv-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#115kv"
                  type="button"
                  role="tab"
                  aria-controls="115kv"
                  aria-selected="false"
                >
                  115 ກວ
                </button>
              </li>
            </ul>
          </div>

          <div className="tab-content mt-3 wow tpfadeRight" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="0.4kv-home"
              role="tabpanel"
              aria-labelledby="0.4kv-home-tab"
              tabindex="0"
            >
              <div>
                <Image src={price4} className="img-fluid img-thumbnail"  />
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="0.4kv-nohome"
              role="tabpanel"
              aria-labelledby="0.4kv-nohome-tab"
              tabindex="0"
            >
              <div>
                <Image src={price2} className="img-fluid img-thumbnail"  />
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="22kv"
              role="tabpanel"
              aria-labelledby="22kv-tab"
              tabindex="0"
            >
              <div>
                <Image src={price1} className="img-fluid img-thumbnail" />
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="115kv"
              role="tabpanel"
              aria-labelledby="115kv-tab"
              tabindex="0"
            >
              <div>
                <Image src={price3} className="img-fluid img-thumbnail" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceArea;
