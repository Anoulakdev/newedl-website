import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import moment from "moment";
import styles from "./customlink.module.css";

function truncateText(text, wordLimit) {
  const words = text.split(" ");
  if (words.length <= wordLimit) {
    return text;
  }
  return words.slice(0, wordLimit).join(" ") + "...";
}

const Announcement = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/pads/get`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setData1(response1.data.data);
        console.log("Response 1:", response1);

        const response2 = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/priceServices/get`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setData2(response2.data.data);
        console.log("Response 2:", response2);

        const response3 = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/jobs/get`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setData3(response3.data.data);
        console.log("Response 3:", response3);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const downloadFile = async (url, filename) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const blob = await response.blob();
      const blobURL = window.URL.createObjectURL(blob);
      const aTag = document.createElement("a");
      aTag.href = blobURL;
      aTag.setAttribute("download", filename);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
      window.URL.revokeObjectURL(blobURL);
    } catch (error) {
      console.error("Error downloading file:", error.message);
    }
  };

  const countValidDates1 = (data1) => {
    const currentDate = new Date();
    return data1.filter((item1) => {
      const startDate = new Date(item1.start_date);
      const endDate = new Date(item1.end_date);
      return currentDate >= startDate && currentDate <= endDate;
    }).length;
  };

  const countValidDates3 = (data3) => {
    const currentDate = new Date();
    return data3.filter((item3) => {
      const startDate = new Date(item3.start_date);
      const endDate = new Date(item3.end_date);
      return currentDate >= startDate && currentDate <= endDate;
    }).length;
  };

  return (
    <>
      <div
        id="payment-method"
        className="tp-payment__area pt-30 pb-30 grey-bg-3"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="row g-4">
                <div className="col-md-6">
                  <div
                    className={`px-5 py-3 tp-payment__bg-color-3 tpfadeLeft p-relative z-index wow`}
                    data-wow-duration=".9s"
                    data-wow-delay=".5s"
                    style={{ height: "330px" }}
                  >
                    <div style={{ height: "245px" }}>
                      <div className="d-flex position-relative">
                        <h3
                          className="tp-payment__title fw-bold"
                          style={{ fontFamily: "Noto Sans Lao" }}
                        >
                          ແຈ້ງການ​ປະ​ມູນ{" "}
                        </h3>
                        <span
                          className="badge rounded-pill text-bg-danger position-absolute"
                          style={{ top: "0", left: "162px" }}
                        >
                          {countValidDates1(data1)}
                        </span>
                        <style jsx>{`
                          @media (max-width: 768px) {
                            .badge {
                              left: 131px !important;
                            }
                          }

                          @media (max-width: 992px) and (min-width: 769px) {
                            .badge {
                              left: 110px !important;
                            }
                          }
                        `}</style>
                      </div>

                      {data1.length ? (
                        data1.slice(0, 3).map((item1, i1) => (
                          <div key={i1} className="mb-1">
                            <a
                              onClick={(e) => {
                                e.preventDefault();
                                const url = `${process.env.NEXT_PUBLIC_API_URL_IMG}/pads/${item1.file_url}`;
                                const filename = `${item1.title}.pdf`;
                                downloadFile(url, filename);
                              }}
                              href="#"
                              className={styles.link}
                            >
                              {truncateText(item1.title, 4)}
                              <br />
                              {moment(item1.start_date).format("DD-MM-YYYY")} ຫາ {moment(item1.end_date).format("DD-MM-YYYY")}
                            </a>
                            <br />
                            <br />
                          </div>
                        ))
                      ) : (
                        <h4
                          className="text-center mt-30"
                          style={{ fontFamily: "Noto Sans Lao" }}
                        >
                          ຍັງ​ບໍ່​ມີ​ຂໍ້​ມູນ
                        </h4>
                      )}
                    </div>

                    <div className="text-center">
                      <Link
                        href="/notice-of-auction"
                        type="button"
                        className="btn btn-primary mt-2"
                      >
                        ເພີ່ມ​ເຕີມ
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div
                    className={`px-5 py-3 tp-payment__bg-color-3 tpfadeRight p-relative z-index wow`}
                    data-wow-duration=".9s"
                    data-wow-delay=".5s"
                    style={{ height: "330px" }}
                  >
                    <div style={{ height: "245px" }}>
                      <h3
                        className="tp-payment__title fw-bold"
                        style={{ fontFamily: "Noto Sans Lao" }}
                      >
                        ແຈ້ງ​ການຕ່າງ​ໆ
                      </h3>

                      {data2.length ? (
                        data2.slice(0, 3).map((item2, i2) => (
                          <div key={i2} className="mb-1">
                            <a
                              onClick={(e) => {
                                e.preventDefault();
                                const url = `${process.env.NEXT_PUBLIC_API_URL_IMG}/services/${item2.file_url}`;
                                const filename = `${item2.title}.pdf`;
                                downloadFile(url, filename);
                              }}
                              href="#"
                              className={styles.link}
                            >
                              {truncateText(item2.title, 4)}
                              <br />
                              {moment(item2.start_date).format("DD-MM-YYYY")} ຫາ {moment(item2.end_date).format("DD-MM-YYYY")}
                            </a>
                            <br />
                            <br />
                          </div>
                        ))
                      ) : (
                        <h4
                          className="text-center mt-30"
                          style={{ fontFamily: "Noto Sans Lao" }}
                        >
                          ຍັງ​ບໍ່​ມີ​ຂໍ້​ມູນ
                        </h4>
                      )}
                    </div>

                    <div className="text-center">
                      <Link
                        href="/service-fee"
                        type="button"
                        className="btn btn-primary mt-2"
                      >
                        ເພີ່ມ​ເຕີມ
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div
                    className={`px-5 py-3 tp-payment__bg-color-3 tpfadeLeft p-relative z-index wow`}
                    data-wow-duration=".9s"
                    data-wow-delay=".5s"
                    style={{ height: "330px" }}
                  >
                    <div style={{ height: "245px" }}>
                      <div className="d-flex position-relative">
                        <h3
                          className="tp-payment__title fw-bold"
                          style={{ fontFamily: "Noto Sans Lao" }}
                        >
                          ປະ​ກາ​ດ​ຮັບ​ສະ​ໝັກ{" "}
                        </h3>
                        <span
                          className="badge rounded-pill text-bg-danger position-absolute"
                          style={{ top: "0", left: "193px" }}
                        >
                          {countValidDates3(data3)}
                        </span>
                        <style jsx>{`
                          @media (max-width: 768px) {
                            .badge {
                              left: 157px !important;
                            }
                          }

                          @media (max-width: 992px) and (min-width: 769px) {
                            .badge {
                              left: 131px !important;
                            }
                          }
                        `}</style>
                      </div>

                      {data3.length ? (
                        data3.slice(0, 3).map((item3, i3) => (
                          <div key={i3} className="mb-1">
                            <Link
                              href={{
                                pathname: "/jobdetail",
                                query: { jobs_id: item3.id },
                              }}
                              className={styles.link}
                            >
                              {truncateText(item3.title, 8)}
                              <br />
                              <p
                                className={`text-${
                                  moment().isBefore(item3.start_date)
                                    ? "warning"
                                    : moment().isAfter(item3.end_date)
                                    ? "danger"
                                    : "success"
                                }`}
                              >
                                {moment().isBefore(item3.start_date)
                                  ? "ລໍ​ຖ້າ​ເປີດປະ​ກາ​ດ​ຮັບ​ສະ​ໝັກ"
                                  : moment().isAfter(item3.end_date)
                                  ? "ປິດປະ​ກາ​ດ​ຮັບ​ສະ​ໝັກ"
                                  : "ເປີດປະ​ກາ​ດ​ຮັບ​ສະ​ໝັກ"}
                              </p>
                            </Link>
                            <br />
                            <br />
                          </div>
                        ))
                      ) : (
                        <h4
                          className="text-center mt-30"
                          style={{ fontFamily: "Noto Sans Lao" }}
                        >
                          ຍັງ​ບໍ່​ມີ​ຂໍ້​ມູນ
                        </h4>
                      )}
                    </div>

                    <div className="text-center">
                      <Link
                        href="/jobvacancy"
                        type="button"
                        className="btn btn-primary mt-2"
                      >
                        ເພີ່ມ​ເຕີມ
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Announcement;
