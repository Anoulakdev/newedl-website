import { CopyRight, SocialLinksTwo } from "@/src/common/social-links";
import EmailIcon from "@/src/svg/email";
import EmailThree from "@/src/svg/email-3";
import LocationTwo from "@/src/svg/location-2";
import PhoneThree from "@/src/svg/phone-3";
import RightArrow from "@/src/svg/right-arrow";
import Link from "next/link";
import Image from "next/image";
import React from "react";

import footer_shape from "../../../public/assets/img/footer/footer-bottom-shape-4-1.png";
import footer_logo from "../../../public/assets/img/logo/logo-white.png";

import edl_logo from "@/public/images/edl_logo.png";
import play_logo from "@/public/images/playstore.png";
import app_logo from "@/public/images/appstore.png";
import facebook_logo from "@/public/images/facebook-icon.png";
import youtube_logo from "@/public/images/youtube-icon.png";

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
    { name: "ຂ່າວ​ສານ", link: "#" },
    { name: "ວາ​ລະ​ສານ", link: "#" },
    { name: "​ລາ​ຄາ​ໄຟ", link: "#" },
    { name: "​ສ້ອມ​ແປງໝໍ້​ນັບ​ໄຟ", link: "#" },
    { name: "​ແຈ້ງມອດ​ໄຟ", link: "#" },
    { name: "ປ່ຽນ​ຖ່າຍ​ໝໍ້​ນັບ​ໄຟ", link: "#" },
    { name: "​ແຈ້ງ​ປະ​ມູນ", link: "#" },
    { name: "EV Charge", link: "#" },
    { name: "​ຄວາມ​ຮູ້​ກ່ຽວ​ກັບ​ໄຟ", link: "#" },
  ],
};
const { sub_title, policy_text, phone, email, location, footer_lisks } =
  footer_content;

const FooterFour = () => {
  return (
    <>
      <footer>
        <div className="tp-footer__pl-pr blue-bg-2 z-index fix pt-50">
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
                    <div className="tp-footer__logo mb-10">
                    <Link
                        href="/"
                        className="d-flex tp-footer__widget-logo mb-10"
                      >
                        <Image src={edl_logo} alt="" width={60} height={60} />
                        <span className="text-white fs-3 pt-1">
                          ລັດວິສາຫະກິດໄຟຟ້າລາວ
                        </span>
                      </Link>
                    </div>
                    <div className="d-flex tp-footer__widget-logo mb-10 ps-1">
                        <Link href="#" className="me-2">
                          <Image
                            src={play_logo}
                            alt=""
                            width={145}
                            height={60}
                          />
                        </Link>
                        <Link href="#">
                          <Image
                            src={app_logo}
                            alt=""
                            width={145}
                            height={60}
                          />
                        </Link>
                      </div>

                      <div className="d-flex tp-footer__social mb-10 ps-1">
                      <Link href="https://www.facebook.com/Edllao" target="_blank">
                          <Image
                            src={facebook_logo}
                            alt=""
                            width={80}
                            height={80}
                          />
                        </Link>
                        <Link href="https://www.youtube.com/@EDLChannelLaos" target="_blank">
                          <Image
                            src={youtube_logo}
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
                    <h4 className="tp-footer__widget-title" style={{ fontFamily: 'Noto Sans Lao' }}>ບໍ​ລິ​ການ</h4>
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
                    <h4 className="tp-footer__widget-title" style={{ fontFamily: 'Noto Sans Lao' }}>ຕິດ​ຕໍ່</h4>
                    <div className="tp-contact-info-box">
                      <ul>
                        <li>
                          <PhoneThree />
                          <Link href={`tel:${phone}`}>{phone}</Link>
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
