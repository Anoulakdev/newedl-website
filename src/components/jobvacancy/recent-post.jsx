import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import imgoff from "@/public/images/turnoff/image-151.png";
import moment from "moment";
import imgjob from "@/public/images/jobvacancy/image82job.png";

const RecentPost = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://uat-api.edl.com.la/api_v1/customer-svc/notiDistrict/get"
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
      <div className="sidebar__widget mb-40">
        <div className="sidebar__widge-title-box">
          <h3
            className="sidebar__widget-title"
            style={{ fontFamily: "Noto Sans Lao", fontSize: "25px" }}
          >
            ປ​ະ​ກາດ​ສະ​ໝັກວຽກ​ລ່າ​ສຸ​ດ
          </h3>
        </div>
        <div className="sidebar__widget-content">
          <div className="sidebar__post rc__post">
            <Link href="/jobdetail">
              <div className="rc__post mb-20 d-flex">
                <div className="rc__post-thumb mr-20">
                  <Image src={imgjob} alt="theme-pure" />
                </div>
                <div className="rc__post-content">
                  <h3 className="rc__post-title" style={{ fontFamily: "Noto Sans Lao" }}>ພະນັກງານພັດທະນາໂປຣແກຣມ</h3>
                  <div className="rc__meta">
                    <span>ສຳນັກງານໃຫຍ່ໄຟຟ້າລາວ-ນະຄອນຫຼວງວຽງຈັນ</span>
                    <br />
                    <span className="text-danger">
                      ເປີດຮັບວັນທີ 02/11/2023 - 04/11/2023
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/jobdetail">
              <div className="rc__post mb-20 d-flex">
                <div className="rc__post-thumb mr-20">
                  <Image src={imgjob} alt="theme-pure" />
                </div>
                <div className="rc__post-content">
                  <h3 className="rc__post-title" style={{ fontFamily: "Noto Sans Lao" }}>ພະນັກງານພັດທະນາໂປຣແກຣມ</h3>
                  <div className="rc__meta">
                    <span>ສຳນັກງານໃຫຍ່ໄຟຟ້າລາວ-ນະຄອນຫຼວງວຽງຈັນ</span>
                    <br />
                    <span className="text-danger">
                      ເປີດຮັບວັນທີ 02/11/2023 - 04/11/2023
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/jobdetail">
              <div className="rc__post mb-20 d-flex">
                <div className="rc__post-thumb mr-20">
                  <Image src={imgjob} alt="theme-pure" />
                </div>
                <div className="rc__post-content">
                  <h3 className="rc__post-title" style={{ fontFamily: "Noto Sans Lao" }}>ພະນັກງານພັດທະນາໂປຣແກຣມ</h3>
                  <div className="rc__meta">
                    <span>ສຳນັກງານໃຫຍ່ໄຟຟ້າລາວ-ນະຄອນຫຼວງວຽງຈັນ</span>
                    <br />
                    <span className="text-danger">
                      ເປີດຮັບວັນທີ 02/11/2023 - 04/11/2023
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentPost;
