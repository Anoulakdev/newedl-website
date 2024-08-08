import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import imgoff from "@/public/images/turnoff/image15.png";
import moment from "moment";



const RecentPost = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL_UAT}/user-svc/notiDistrict/get`
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
          <h3 className="sidebar__widget-title" style={{ fontFamily: 'Noto Sans Lao', fontSize: '25px' }}>ແຈ້ງມອດ​ໄຟ​ລ່າ​ສຸ​ດ</h3>
        </div>
        <div className="sidebar__widget-content">
          <div className="sidebar__post rc__post">
          {data.length
                  ? data?.slice(0,5).map((item, i) => (
              <div key={i} className="rc__post mb-20 d-flex">
                <div className="rc__post-thumb mr-20">
                  <Link href="">
                    <Image src={imgoff} alt="theme-pure" />
                  </Link>
                </div>
                <div className="rc__post-content">
                  <h3 className="rc__post-title">
                    <Link href="">{item.noti.title_head}</Link>
                  </h3>
                  <div className="rc__meta">
                    <span>ມອດໄຟເວລາ: {item.noti.start_time} ໂມງ ຫາ{" "}
                                {item.noti.end_time} ໂມງ</span>< br />
                    <span className="text-danger">ວັນທີມອດໄຟ {moment(item.noti.start_date).format('DD-MM-YYYY')} ຫາ{" "}
                                {moment(item.noti.end_date).format('DD-MM-YYYY')}</span>
                  </div>
                </div>
              </div>
            )): null}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentPost;
