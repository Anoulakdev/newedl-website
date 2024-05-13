import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import SocialLinks from "@/src/common/social-links";
import ContactIcon from "@/src/svg/contact-icon";
import EmailIcon from "@/src/svg/email";
import LocationIcon from "@/src/svg/location-icon";
import PhoneIcon from "@/src/svg/phone-icon";
import RightArrow from "@/src/svg/right-arrow";

import edl_logo from "@/public/images/edl_logo.png";
import play_logo from "@/public/images/playstore.png";
import app_logo from "@/public/images/appstore.png";
import facebook_logo from "@/public/images/facebook-icon.png";
import youtube_logo from "@/public/images/youtube-icon.png";
import { useIsomorphicLayoutEffect } from "@/src/hooks/useIsomorphicEffect";

// footer_content
const footer_content = {
  
  description: (
    <>
      Our highly skilled development teams <br /> specialized in data analysis.
    </>
  ),
  phone: "(856-21) 316133",
  contact_mail: "edlmdo@edl.com.la",
  location: "ບ້ານ ທົ່ງກາງ, ເມືອງ ສີສັດຕະນາກ, ນະຄອນຫຼວງວຽງຈັນ",

  copy_right: (
    <>
      Copyright@ 2024 <span className="text-warning">Electricite Du Laos,</span>{" "}
      All Right Reserved
    </>
  ),

  footer_lisks: [
    {
      id: 1,
      cls_1: "col-xl-3 col-lg-3 col-md-5",
      cls_2: "footer-col-2",
      title: "ບໍ​ລິ​ການ",
      delay: ".7s",
      links: [
        { name: "ຂ່າວ​ສານ", link: "#" },
        { name: "​ລາ​ຄາ​ໄຟ", link: "#" },
        { name: "​ແຈ້ງມອດ​ໄຟ", link: "#" },
        { name: "​ແຈ້ງ​ປະ​ມູນ", link: "#" },
        { name: "​ຄວາມ​ຮູ້​ກ່ຽວ​ກັບ​ໄຟ", link: "#" },
      ],
    },
    {
      id: 2,
      cls_1: "col-xl-2 col-lg-2 col-md-6",
      cls_2: "footer-col-3",
      title: "ແຈ້ງ​ການ",
      delay: ".9s",
      links: [
        { name: "ວາ​ລະ​ສານ", link: "#" },
        { name: "​ສ້ອມ​ແປງໝໍ້​ນັບ​ໄຟ", link: "#" },
        { name: "ປ່ຽນ​ຖ່າຍ​ໝໍ້​ນັບ​ໄຟ", link: "#" },
        { name: "EV Charge", link: "#" },
      ],
    },
  ],
};
const {
  title,
  description,
  phone,
  contact_mail,
  location,
  copy_right,
  footer_lisks,
} = footer_content;

const Footer = () => {
  const [isOppen, setIsOppen] = useState(false);
  const oppenLan = () => {
    setIsOppen(!isOppen);
  };

  useIsomorphicLayoutEffect(() => {
    gsap.set(".tp-gsap-bg", { scaleX: 1 });
    let mm = gsap.matchMedia();
    mm.add("(min-width:1400px)", () => {
      gsap.to(".tp-gsap-bg", {
        scrollTrigger: {
          trigger: ".tp-gsap-bg",
          scrub: 0.02,
          start: "top bottom",
          end: "bottom bottom",
        },
        scaleX: 0.95,
        borderRadius: "30px",
        transformOrigin: "center center",
        ease: "none",
      });
    });
  }, []);

  return (
    <>
      <footer className="pb-50 fix">
        <div className="tp-footer__pl-pr p-relative">
          <div className="footer-black-bg bg-primary tp-gsap-bg"></div>
          <div className="tp-footer__area pt-50">
            <div className="container">
              <div className="tp-footer__border-bottom">
                <div className="row align-items-center">
                  <div
                    className="col-md-6 wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".3s"
                  >
                    <div className="tp-footer__top-text">
                      <span>ທ່ານສາມາດຮັບຮູ້ຂ່າວສານໄຟຟ້າໄດ້ກ່ອນຄົນອື່ນ ພຽງແຕ່ປ້ອນຂໍ້ມູນທີ່​ຢູ່ Email ຂອງທ່ານ ໃສ່ກ່ອງດ້ານຂ້າງ ທ່ານ​ຈະ​ໄດ້​ຮັບ​ການແຈ້ງເຕືອນກ່ອນຄົນອື່ນແລ້ວ</span>
                    </div>
                  </div>
                  <div
                    className="col-md-6 wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".5s"
                  >
                    <div className="tp-footer__input p-relative">
                      <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="ທີ່​ຢູ່​ Email" />
                        <span>
                          <EmailIcon />
                        </span>
                        <button>
                          <RightArrow />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tp-footer__top-space">
                <div className="row">
                  <div
                    className="col-xl-4 col-lg-4 col-md-7 pb-30 wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".5s"
                  >
                    <div className="tp-footer__widget footer-col-1">
                      <Link
                        href="/"
                        className="d-flex tp-footer__widget-logo mb-10"
                      >
                        <Image src={edl_logo} alt="" width={60} height={60} />
                        <span className="text-white fs-3 pt-1">
                          ລັດວິສາຫະກິດໄຟຟ້າລາວ
                        </span>
                      </Link>
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

                  {footer_lisks.map((item, i) => (
                    <div
                      key={i}
                      className={`${item.cls_1} pb-30 wow tpfadeUp`}
                      data-wow-duration=".9s"
                      data-wow-delay={item.delay}
                    >
                      <div className={`tp-footer__widget ${item.cls_2}`}>
                        <h4 className="tp-footer__widget-title fs-3">
                          {item.title}
                        </h4>
                        <div className="tp-footer__content">
                          <ul>
                            {item.links.map((link, i) => (
                              <li key={i}>
                                <Link href={link.link}>{link.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div
                    className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay="1s"
                  >
                    <div className="tp-footer__widget footer-col-4">
                      <h4 className="tp-footer__widget-title fs-3">ຕິດ​ຕໍ່</h4>
                      <div className="tp-footer__contact-info tp-footer__icon-space">
                        <ul>
                          <li>
                            <span>
                              <PhoneIcon />
                            </span>
                            <Link href={`tel:${phone}`}>{phone}</Link>
                          </li>
                          <li>
                            <span>
                              <ContactIcon />
                            </span>
                            <Link href={`mailto:${contact_mail}`}>
                              {contact_mail}
                            </Link>
                          </li>
                          <li>
                            <span>
                              <LocationIcon />
                            </span>
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
                    <span className="text-white">{copy_right}</span>
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

export default Footer;
