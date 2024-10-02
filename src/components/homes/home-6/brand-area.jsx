import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import moment from "moment";

import shape_1 from "../../../../public/assets/img/brand/image_01.png";

import edl_logo from "@/public/images/edl_logo.png";
import Link from "next/link";

const BrandArea = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/notiDistrict/get`,
          {
            headers: {
              "Content-Type": "application/json", // Set Content-Type header
            },
          }
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="tp-barnd-area tp-barnd-plr z-index-3 fix mt-35 grey-bg-3">
        <div className="tp-barnd-main-wrapper p-relative mt-15">
          <div className="tp-barnd-shape-1">
            <Image src={shape_1} alt="theme-pure" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-4">
                <div className="tp-barnd-left-item d-flex align-items-center">
                  <Image src={edl_logo} width={40} height={40} />
                  <h5
                    className="tp-barnd-title-sm"
                    style={{ fontFamily: "Noto Sans Lao" }}
                  >
                    ແຈ້ງມອດ​ໄຟ
                  </h5>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-8">
                {data.slice(0, 1).map((item, i) => (
                  <p key={i} className="text-white pt-2">
                    {moment(item.noti.start_date).format("DD-MM-YYYY")} ຫາ{" "}
                    {moment(item.noti.end_date).format("DD-MM-YYYY")} |{" "}
                    {item.noti.start_time}-{item.noti.end_time} |{" "}
                    {item.noti.title_head}
                  </p>
                ))}
              </div>
              <div className="col-xl-2 col-lg-2 text-end mt-2">
                <Link href="/turnoff" type="button" className="custom-btn">
                  ເບິ່ງ​ເພີ່ມ​ເຕີມ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandArea;
