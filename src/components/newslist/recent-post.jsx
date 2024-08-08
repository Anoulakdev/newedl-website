import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import moment from "moment";

const RecentPost = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api_v1/user-svc/news/get`
        );
        setData(response.data.data);
        console.log(response);
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
            ຂ່າວ​ສານ​ລ່າ​ສຸ​ດ
          </h3>
        </div>
        <div className="sidebar__widget-content">
          <div className="sidebar__post rc__post">
            {data.length
              ? data.slice(0, 5)?.map((item, i) => (
                  <div key={i} className="rc__post mb-20 d-flex">
                    <div className="rc__post-thumb mr-20">
                      <Link
                        href={{
                          pathname: "/newsdetail",
                          query: { news_id: item.news_id },
                        }}
                      >
                        <Image
                          src={`${process.env.NEXT_PUBLIC_API_URL}/news/${item.image}`}
                          alt="theme-pure"
                          width={200}
                          height={100}
                        />
                      </Link>
                    </div>
                    <div className="rc__post-content">
                      <h3 className="rc__post-title">
                        <Link
                          href={{
                            pathname: "/newsdetail",
                            query: { news_id: item.news_id },
                          }}
                        >
                          {item.news_title_la}
                        </Link>
                      </h3>
                      <div className="rc__meta">
                        <span>{moment(item.posting_date).format("DD-MM-YYYY")}</span>
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentPost;
