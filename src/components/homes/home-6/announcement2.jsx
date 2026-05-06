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

  const validData1 = data1.filter((item1) => {
    const currentDate = new Date();
    const startDate = new Date(item1.start_date);
    const endDate = new Date(item1.end_date);
    return currentDate >= startDate && currentDate <= endDate;
  });

  const validData3 = data3.filter((item3) => {
    const currentDate = new Date();
    const startDate = new Date(item3.start_date);
    const endDate = new Date(item3.end_date);
    return currentDate >= startDate && currentDate <= endDate;
  });

  return (
    <>
      <style jsx>{`
        .announcement-card {
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          overflow: hidden;
        }
        .announcement-card:hover {
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
          transform: translateY(-5px);
        }
        .card-general {
          background-color: #e0f2fe;
          background-image: radial-gradient(at 0% 0%, rgba(255,255,255,0.9) 0px, transparent 60%),
                            radial-gradient(at 100% 100%, #7dd3fc 0px, transparent 80%);
          border: 1px solid rgba(56, 189, 248, 0.5);
        }
        .card-auction {
          background-color: #ffe4e6;
          background-image: radial-gradient(at 0% 0%, rgba(255,255,255,0.9) 0px, transparent 60%),
                            radial-gradient(at 100% 100%, #fda4af 0px, transparent 80%);
          border: 1px solid rgba(251, 113, 133, 0.5);
        }
        .card-job {
          background-color: #dcfce7;
          background-image: radial-gradient(at 0% 0%, rgba(255,255,255,0.9) 0px, transparent 60%),
                            radial-gradient(at 100% 100%, #86efac 0px, transparent 80%);
          border: 1px solid rgba(74, 222, 128, 0.5);
        }
        .item-link {
          transition: all 0.3s ease;
          text-decoration: none;
          padding: 14px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.9);
        }
        .item-link:hover {
          background: #ffffff;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          transform: translateY(-3px);
        }
        .item-link:hover .icon-box {
          transform: scale(1.05);
        }
        .icon-box {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: rgba(13, 110, 253, 0.1);
          color: #0d6efd;
          transition: transform 0.2s ease;
        }
        .icon-box-danger {
          background: rgba(220, 53, 69, 0.1);
          color: #dc3545;
        }
        .icon-box-success {
          background: rgba(25, 135, 84, 0.1);
          color: #198754;
        }
        .header-title {
          position: relative;
          padding-bottom: 12px;
        }
        .header-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 40px;
          height: 4px;
          background: linear-gradient(90deg, #0d6efd, #0dcaf0);
          border-radius: 4px;
        }
        .header-title-danger::after {
          background: linear-gradient(90deg, #dc3545, #f8d7da);
        }
        .header-title-success::after {
          background: linear-gradient(90deg, #198754, #d1e7dd);
        }
        .custom-badge {
          box-shadow: 0 2px 8px rgba(220, 53, 69, 0.3);
        }
      `}</style>

      <div id="payment-method" className="tp-payment__area pt-50">
        <div className="container pe-xl-4">
          <div className="row">
            <div className="col-xl-12">
              <div className="row g-4">
                
                {/* ແຈ້ງ​ການຕ່າງ​ໆ */}
                <div className="col-md-12">
                  <div className="announcement-card card-general rounded-4 p-4 tpfadeRight p-relative z-index wow" data-wow-duration=".9s" data-wow-delay=".3s">
                    <div className="mb-4">
                      <h3 className="header-title fw-bold m-0 d-inline-flex align-items-center" style={{ fontFamily: "Noto Sans Lao", fontSize: "1.4rem" }}>
                        ແຈ້ງ​ການຕ່າງ​ໆ
                      </h3>
                    </div>

                    <div className="announcement-list">
                      {data2.length ? (
                        data2.slice(0, 3).map((item2, i2) => (
                          <a
                            key={i2}
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              const url = `${process.env.NEXT_PUBLIC_API_URL_IMG}/services/${item2.file_url}`;
                              const filename = `${item2.title}.pdf`;
                              downloadFile(url, filename);
                            }}
                            className="d-flex align-items-center mb-2 item-link"
                          >
                            <div className="icon-box me-3 flex-shrink-0">
                              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                              <h6 className="mb-1 text-dark text-truncate" style={{ fontFamily: "Noto Sans Lao", lineHeight: "1.5" }} title={item2.title}>
                                {item2.title}
                              </h6>
                              <small className="text-muted d-flex align-items-center" style={{ fontFamily: "Noto Sans Lao" }}>
                                <svg className="me-1" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                {moment(item2.start_date).format("DD-MM-YYYY")}
                              </small>
                            </div>
                          </a>
                        ))
                      ) : (
                        <div className="text-center py-4">
                          <span className="text-muted" style={{ fontFamily: "Noto Sans Lao" }}>ຍັງ​ບໍ່​ມີ​ຂໍ້​ມູນ</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-3 pt-3 border-top text-center">
                      <Link href="/service-fee" className="btn btn-outline-primary rounded-pill px-4 py-2" style={{ fontFamily: "Noto Sans Lao", fontSize: "0.9rem" }}>
                        ເພີ່ມເຕີມ
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ແຈ້ງການ​ປະ​ມູນ */}
                <div className="col-md-12">
                  <div className="announcement-card card-auction rounded-4 p-4 tpfadeLeft p-relative z-index wow" data-wow-duration=".9s" data-wow-delay=".5s">
                    <div className="mb-4">
                      <h3 className="header-title header-title-danger fw-bold m-0 d-inline-flex align-items-center" style={{ fontFamily: "Noto Sans Lao", fontSize: "1.4rem" }}>
                        ແຈ້ງການ​ປະ​ມູນ
                        {validData1.length > 0 && (
                          <span className="badge bg-danger rounded-pill custom-badge ms-2" style={{ fontSize: "0.8rem", transform: "translateY(-2px)" }}>
                            {validData1.length}
                          </span>
                        )}
                      </h3>
                    </div>

                    <div className="announcement-list">
                      {validData1.length ? (
                        validData1.slice(0, 3).map((item1, i1) => (
                          <a
                            key={i1}
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              const url = `${process.env.NEXT_PUBLIC_API_URL_IMG}/pads/${item1.file_url}`;
                              const filename = `${item1.title}.pdf`;
                              downloadFile(url, filename);
                            }}
                            className="d-flex align-items-center mb-2 item-link"
                          >
                            <div className="icon-box icon-box-danger me-3 flex-shrink-0">
                              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0-.83-.83-.83-2.17 0-3L11 10"></path><path d="m16 16 6-6"></path><path d="m8 8 6-6"></path><path d="m9 7 8 8"></path><path d="m21 11-8-8"></path></svg>
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                              <h6 className="mb-1 text-dark text-truncate" style={{ fontFamily: "Noto Sans Lao", lineHeight: "1.5" }} title={item1.title}>
                                {item1.title}
                              </h6>
                              <small className="text-muted d-flex align-items-center" style={{ fontFamily: "Noto Sans Lao" }}>
                                <svg className="me-1" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                {moment(item1.start_date).format("DD-MM-YYYY")} ຫາ {moment(item1.end_date).format("DD-MM-YYYY")}
                              </small>
                            </div>
                          </a>
                        ))
                      ) : (
                        <div className="text-center py-4">
                          <span className="text-muted" style={{ fontFamily: "Noto Sans Lao" }}>ຍັງ​ບໍ່​ມີ​ຂໍ້​ມູນ</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-3 pt-3 border-top text-center">
                      <Link href="/notice-of-auction" className="btn btn-outline-danger rounded-pill px-4 py-2" style={{ fontFamily: "Noto Sans Lao", fontSize: "0.9rem" }}>
                        ເພີ່ມເຕີມ
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ປະ​ກາ​ດ​ຮັບ​ສະ​ໝັກ */}
                <div className="col-md-12">
                  <div className="announcement-card card-job rounded-4 p-4 tpfadeUp p-relative z-index wow" data-wow-duration=".9s" data-wow-delay=".7s">
                    <div className="mb-4">
                      <h3 className="header-title header-title-success fw-bold m-0 d-inline-flex align-items-center" style={{ fontFamily: "Noto Sans Lao", fontSize: "1.4rem" }}>
                        ປະ​ກາ​ດ​ຮັບ​ສະ​ໝັກ
                        {validData3.length > 0 && (
                          <span className="badge bg-danger rounded-pill custom-badge ms-2" style={{ fontSize: "0.8rem", transform: "translateY(-2px)" }}>
                            {validData3.length}
                          </span>
                        )}
                      </h3>
                    </div>

                    <div className="announcement-list">
                      {validData3.length ? (
                        validData3.slice(0, 3).map((item3, i3) => (
                          <Link
                            key={i3}
                            href={{
                              pathname: "/jobdetail",
                              query: { jobs_id: item3.id },
                            }}
                            className="d-flex align-items-center mb-2 item-link text-decoration-none"
                          >
                            <div className="icon-box icon-box-success me-3 flex-shrink-0">
                              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                              <h6 className="mb-1 text-dark text-truncate" style={{ fontFamily: "Noto Sans Lao", lineHeight: "1.5" }} title={item3.title}>
                                {item3.title}
                              </h6>
                              <div className="d-flex align-items-center mt-1">
                                <span className="badge bg-success bg-opacity-10 text-success rounded-pill px-2 py-1 fw-normal" style={{ fontFamily: "Noto Sans Lao", fontSize: "0.75rem" }}>
                                  <span className="d-inline-block rounded-circle bg-success me-1" style={{ width: '6px', height: '6px', marginBottom: '1px' }}></span>
                                  ເປີດປະ​ກາ​ດ​ຮັບ​ສະ​ໝັກ
                                </span>
                              </div>
                            </div>
                          </Link>
                        ))
                      ) : (
                        <div className="text-center py-4">
                          <span className="text-muted" style={{ fontFamily: "Noto Sans Lao" }}>ຍັງ​ບໍ່​ມີ​ຂໍ້​ມູນ</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-3 pt-3 border-top text-center">
                      <Link href="/jobvacancy" className="btn btn-outline-success rounded-pill px-4 py-2" style={{ fontFamily: "Noto Sans Lao", fontSize: "0.9rem" }}>
                        ເພີ່ມເຕີມ
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
