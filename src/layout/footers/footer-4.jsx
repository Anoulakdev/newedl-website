import { CopyRight, SocialLinksTwo } from "@/src/common/social-links";
import EmailIcon from "@/src/svg/email";
import EmailThree from "@/src/svg/email-3";
import LocationTwo from "@/src/svg/location-2";
import PhoneThree from "@/src/svg/phone-3";
import RightArrow from "@/src/svg/right-arrow";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./GlowingCircle.module.css";

import footer_shape from "../../../public/assets/img/footer/footer-bottom-shape-4-1.png";
import footer_logo from "../../../public/assets/img/logo/logo-white.png";

import edl_logo from "@/public/images/edl_logo.png";
import play_logo from "@/public/images/playstore.png";
import app_logo from "@/public/images/appstore.png";
import facebook_logo from "@/public/images/facebook-icon.png";
import youtube_logo from "@/public/images/youtube-icon.png";
import tiktok_logo from "@/public/images/tiktok.png";

const footer_content = {
  sub_title: "SUBSCRIBE TO OUR NEWSLETTER",
  policy_text: (
    <>
      By subscribing, you accepted the our <a href="#">Policy</a>
    </>
  ),
  phone: "(856-21) 316133",
  email: "edlmdo@edl.com.la",
  location: "ບ້ານ ທົ່ງກາງ, ເມືອງ ສີສັດຕະນາກ, ນະຄອນຫຼວງວຽງຈັນ",

  footer_lisks: [
    { name: "ຂ່າວ​ສານ", link: "/newslist" },
    { name: "ວາ​ລະ​ສານ", link: "/magazine" },
    { name: "ອັດ​ຕາ​ລາ​ຄາ​ໄຟ", link: "/price" },
    { name: "ນິ​ຕິ​ກຳ", link: "/legislation" },
    { name: "​ແຈ້ງມອດ​ໄຟ", link: "/turnoff" },
    { name: "ຄ່າ​ບໍ​ລິ​ການ", link: "service-fee" },
    { name: "​ແຈ້ງການ​ປະ​ມູນ", link: "/notice-of-auction" },
    { name: "EV Charge", link: "https://e-service.edl.com.la" },
    { name: "ສາ​ລະ​ໜ້າ​ຮູ້", link: "/knowledge" },
    { name: "ແຜນ​ຜັງ​ເວບ​ໄຊ", link: "/sitemap" },
  ],
};
const { sub_title, policy_text, phone, email, location, footer_lisks } =
  footer_content;

const FooterFour = () => {
  // const [reportData, setReportData] = useState(null);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       // Fetch data from the API using axios
  //       const response = await axios.get("/api/realtimeReport");
  //       setReportData(response.data);
  //       console.log(response);
  //       setError(null); // Clear any previous errors
  //     } catch (error) {
  //       setError(error.message);
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   // Call fetchData immediately and then every 3 seconds
  //   fetchData();
  //   const intervalId = setInterval(fetchData, 5000); // 3000 ms = 3 seconds

  //   // Clean up interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, []);

  // if (error) {
  //   return <p>Error: {error}</p>;
  // }

  // let value = 0; // Default value if reportData is 0 or the structure is missing

  // if (
  //   reportData &&
  //   reportData.rows &&
  //   reportData.rows[0] &&
  //   reportData.rows[0].metricValues &&
  //   reportData.rows[0].metricValues[0]
  // ) {
  //   value = reportData.rows[0].metricValues[0].value;
  // }

  return (
    <>
      <footer>
        <div className="tp-footer__pl-pr blue-bg z-index fix pt-50">
          <div className="tp-footer__area">
            <div className="tp-footer-bottom-shape">
              <Image src={footer_shape} alt="theme-pure" />
            </div>
            <div className="container">
              <div className="row">
                <div
                  className="col-xl-4 col-lg-4 col-md-6 pb-45 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                >
                  <div className="tp-footer__widget footer-widget-4 footer-col-4-1">
                    <div className="tp-footer__logo mb-15">
                      {/* <Link
                        href="/"
                        className="d-flex tp-footer__widget-logo mb-10"
                      >
                        <Image src={edl_logo} alt="" width={60} height={60} />
                        <span className="text-white fs-4 pt-1">
                          ລັດວິສາຫະກິດໄຟຟ້າລາວ
                        </span>
                      </Link> */}
                      <span className="text-white fs-4 pt-1">
                        ​ດາວ​ໂຫລດ EDL APP ໄດ້​ແລ້ວທີ່
                      </span>
                    </div>
                    <div className="d-flex tp-footer__widget-logo mb-15 ps-1">
                      <Link
                        href="https://play.google.com/store/apps/details?id=com.edl.edl_app"
                        target="_blank"
                        className="me-2"
                      >
                        <Image src={play_logo} alt="" width={145} height={60} />
                      </Link>
                      <Link
                        href="https://apps.apple.com/la/app/edl-app/id6648761593"
                        target="_blank"
                      >
                        <Image src={app_logo} alt="" width={145} height={60} />
                      </Link>
                    </div>

                    <div className="d-flex tp-footer__social mb-10 ps-1">
                      <Link
                        href="https://www.facebook.com/Edllao"
                        target="_blank"
                      >
                        <Image
                          src={facebook_logo}
                          alt=""
                          width={80}
                          height={80}
                        />
                      </Link>
                      <Link
                        href="https://www.youtube.com/@EDLChannelLaos"
                        target="_blank"
                      >
                        <Image
                          src={youtube_logo}
                          alt=""
                          width={80}
                          height={80}
                        />
                      </Link>
                      <Link
                        href="https://www.tiktok.com/@edllaos1?_r=1&_d=e6277fjjfd6j4e&sec_uid=MS4wLjABAAAAOQCSpWIVioW1PowBAIbDL2zchWYgNiuBtNg1omxyphX5PQ__DQv5wGOrwweBjeuI&share_author_id=7098626665651766299&sharer_language=th&source=h5_t&u_code=d1l047j3d8ahd2&ug_btm=b6880,b5836&sec_user_id=MS4wLjABAAAA5wno365wa-_QxG-CN9mUsYtTWRa8lzuCcXbrfPqHXlitcBYEi4PvKZ6zyaysGjkY&utm_source=whatsapp&social_share_type=5&utm_campaign=client_share&utm_medium=ios&tt_from=whatsapp&user_id=6594404152531664897&enable_checksum=1&share_link_id=65F9F575-28EE-4BE8-AD8C-BB1777CBBF6D&share_app_id=1180"
                        target="_blank"
                      >
                        <Image
                          src={tiktok_logo}
                          alt=""
                          width={80}
                          height={80}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-5 col-lg-5 col-md-6 pb-45 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                >
                  <div className="tp-footer__widget footer-widget-4 footer-col-4-2">
                    <h4
                      className="tp-footer__widget-title"
                      style={{ fontFamily: "Noto Sans Lao" }}
                    >
                      ບໍ​ລິ​ການ
                    </h4>
                    <div className="tp-footer__content">
                      <ul>
                        {footer_lisks.map((item, i) => (
                          <li key={i}>
                            <Link href={item.link}>{item.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-3 col-md-6 pb-45 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".7s"
                >
                  <div className="tp-footer__widget footer-widget-4 footer-col-4-3">
                    <h4
                      className="tp-footer__widget-title"
                      style={{ fontFamily: "Noto Sans Lao" }}
                    >
                      ຕິດ​ຕໍ່
                    </h4>
                    <div className="tp-contact-info-box">
                      <ul>
                        <li>
                          <PhoneThree />
                          <Link href={`tel:+85621316133`}>{phone}</Link>
                        </li>
                        <li>
                          <EmailThree />
                          <Link href={`mailto:${email}`}>{email}</Link>
                        </li>
                        <li>
                          <LocationTwo />{" "}
                          <Link
                            href="https://maps.google.com/maps?q=17.941032, 102.627797"
                            target="_blank"
                          >
                            {location}
                          </Link>
                        </li>
                        <br />
                        <li
                          className="d-flex align-items-center"
                          style={{ marginLeft: "-38px" }}
                        >
                          <div className={`${styles.circle} me-2`}></div>
                          <div className="fs-5 text-white">
                            ກຳ​ລັງ​ອອນ​ລາຍ{" "}
                            <span className="text-danger fw-bold">1</span>{" "}
                            ທ່ານ
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-copyright__area pt-20 pb-20">
            <div className="container">
              <div className="row justify-content-center">
                <div
                  className="col-md-6 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".7s"
                >
                  <div className="tp-copyright__text">
                    <span className="text-white">
                      <CopyRight />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterFour;
