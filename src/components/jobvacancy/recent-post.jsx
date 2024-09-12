import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import imgjob from "@/public/images/jobvacancy/jobs.png";

const RecentPost = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/jobs/get`
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
            ປ​ະຫວັດ​ການ​ສະ​ໝັກວຽກ​
          </h3>
        </div>
        {data.length
          ? data.slice(0, 5)?.map((item, i) => (
              <div key={i} className="m-3">
                <div className="sidebar__post rc__post">
                  <Link
                    href={{
                      pathname: "/jobdetail",
                      query: { jobs_id: item.id },
                    }}
                  >
                    <div className="rc__post d-flex">
                      <div className="rc__post-thumb mr-20">
                        {item.image &&
                          (item.image.endsWith(".pdf") ? (
                            <Image
                              src={imgjob} // Placeholder image for PDFs
                              alt="theme-pure"
                            />
                          ) : (
                            <img
                              src={`${process.env.NEXT_PUBLIC_API_URL_IMG}/jobs/${item.image}`}
                              alt="theme-pure"
                            />
                          ))}
                      </div>
                      <div className="rc__post-content">
                        <h3
                          className="rc__post-title"
                          style={{ fontFamily: "Noto Sans Lao" }}
                        >
                          {item.title}
                        </h3>
                        <div className="rc__meta">
                          <span className="text-danger">
                            ເປີດຮັບວັນທີ{" "}
                            {moment(item.start_date).format("DD/MM/YYYY")} -{" "}
                            {moment(item.end_date).format("DD/MM/YYYY")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))
          : null}

          <div>
            
          </div>
      </div>
    </>
  );
};

export default RecentPost;
