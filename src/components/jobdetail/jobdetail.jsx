import ClockIcon from "@/src/svg/clock-icon";
import LocationIconThree from "@/src/svg/location-icon-3";
import NiceSelect from "@/src/ui/nice-select";
import Link from "next/link";
import React, { useState } from "react";

const CareerDetailsArea = () => {
  const [isOpen, setIsOpen] = useState(false);
  const applyHandler = () => {
    setIsOpen(true);
  };

  const selectHandler = (e) => {};

  return (
    <>
      <div className="career-details-area career-border-bottom pt-110 pb-110">
        <div className="container">
          <div className="row align-content-start">
            <div className="col-xl-7 col-lg-7">
              <div className="career-details-wrapper">
                <div className="career-details-title-box">
                  <h4
                    className="career-details-title lh-sm fw-bold"
                    style={{ fontFamily: "Noto Sans Lao" }}
                  >
                    ວິຊາການ IT Programmer (ພະນັກງານໄອທີພັດທະນາ Program)
                  </h4>
                </div>

                <h4
                  className="career-details-title-sm"
                  style={{ fontFamily: "Noto Sans Lao" }}
                >
                  ເງື່ອນໄຂຜູ້ສະໝັກ
                </h4>

                <div className="career-details-job-list">
                  <ul>
                    <li>
                      <i className="fal fa-long-arrow-right"></i>
                      ເພດ: ຍິງ ຫຼື ຊາຍ ແລະ ມີອາຍຸລະຫວ່າງ 23 - 30 ປີ.
                    </li>
                    <li>
                      <i className="fal fa-long-arrow-right"></i>
                      ມີໃບປະກາດຈົບການສຶກສາລະດັບຊັ້ນສູງຂຶ້ນໄປ ທາງດ້ານສາຂາວິຊາ
                      ເຕັກໂນໂລຊີຂໍ້ມູນຂ່າວສານ (ໄອທີ), ວິທະຍາສາດຄອມພິວເຕີ,
                      ວິສະວະກຳຄອມພິວເຕີ ຫຼື ສາຂາທີ່ກ່ຽວຂ້ອງກັບການພັດທະນາ Program
                      ຈາກພາຍໃນ ຫຼື ຕ່າງປະເທດ.
                    </li>
                    <li>
                      <i className="fal fa-long-arrow-right"></i>
                      ມີຄວາມຮູ້ທາງດ້ານໂຄງສ້າງຂອງໂປຣແກຣມ ແລະ
                      ສາມາດຂຽນໂປຣແກຣມລະດັບພື້ນຖານ ຫຼື ມີຜົນງານ
                      ກ່ຽວກັບການສ້າງໂປຣແກຣມໃດໜຶ່ງມາກ່ອນ ຍິ່ງເປັນການດີ
                      (ຈະພິຈາລະນາເປັນພິເສດ).
                    </li>
                    <li>
                      <i className="fal fa-long-arrow-right"></i>
                      ສາມາດສື່ສານພາສາອັງກິດ (ເວົ້າ, ຂຽນ, ອ່ານ, ຟັງ)
                      ລະດັບກາງຂຶ້ນໄປ.
                    </li>
                    <li>
                      <i className="fal fa-long-arrow-right"></i>
                      ມີແນວຄິດສ້າງສັນ, ຊອກຮູ້ຮ່ຳຮຽນ ແລະ ພັດທະນາຕົນເອງຢູ່ເລື້ອຍໆ.
                    </li>
                    <li>
                      <i className="fal fa-long-arrow-right"></i>
                      ມີຄວາມຮັບຜິດຊອບຕໍ່ວຽກງານມອບໝາຍ, ມີຄວາມເສຍສະຫຼະສູງ,
                      ສາມາດເຮັດວຽກເປັນທີມ ແລະ ເຮັດ ວຽກພາຍໃຕ້ຄວາມກົດດັນໄດ້ດີ.
                    </li>
                  </ul>
                </div>

                <h4
                  className="career-details-title-sm mt-4"
                  style={{ fontFamily: "Noto Sans Lao" }}
                >
                  ຄວາມສາມາດທີ່ຕ້ອງການ
                </h4>

                <div className="career-details-job-list">
                  <ul>
                    <li>
                      <i className="fal fa-long-arrow-right"></i>
                      ຮູ້ນຳໃຊ້ໃນລະດັບພື້ນຖານໃນພາສາ Programming ໃດໜຶ່ງເຊັ່ນ:
                      C/C++, C#, JAVA, PHP ແລະ JavaScript.
                    </li>
                    <li>
                      <i className="fal fa-long-arrow-right"></i>
                      ຮູ້ນຳໃຊ້ໃນລະດັບພື້ນຖານກ່ຽວກັບ Framework ທາງດ້ານ Front-End
                      ເຊັ່ນ: Angular, React (NextJS), Vue (NuxtJS), Flutter ແລະ
                      ອື່ນໆ.
                    </li>
                    <li>
                      <i className="fal fa-long-arrow-right"></i>
                      ຮູ້ນຳໃຊ້ໃນລະດັບພື້ນຖານ ທາງດ້ານ Back-End ເຊັ່ນ: Node
                      (NestJS), Python (Django), JAVA (Spring), Dot Net (C#),
                      Go, GraphQL, Redis ແລະ ອື່ນໆ.
                    </li>
                    <li>
                      <i className="fal fa-long-arrow-right"></i>
                      ຮູ້ນຳໃຊ້ຖານຂໍ້ມູນ (Database) ເຊັ່ນ: PostgreSQL, MySQL, SQL
                      Server, Oracle, MongoDB ແລະ ຖານຂໍ້ມູນອື່ນໆ.
                    </li>
                    <li>
                      <i className="fal fa-long-arrow-right"></i>
                      ມີປະສົບການຜ່ານການເຮັດວຽກກ່ຽວກັບການພັດທະນາ Program ມາກ່ອນ
                      ຫຼື ຜ່ານການເຂົ້າຝຶກອົບຮົມ ໃນຫຼັກສູດການຂຽນ
                      Program/ອອກແບບເວັບໄຊ ຍິ່ງເປັນການດີ (ຈະພິຈາລະນາເປັນພິເສດ).
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 career-details-pin">
              <div className="col-xxl-12">
                <div className="postbox__apply-btn-border">
                  <div id="my-btn" className="postbox__apply-btn-box">
                    {!isOpen && (
                      <button
                        onClick={() => applyHandler()}
                        className="submit-btn mb-50 w-100"
                      >
                        ປ້​ອນ​ຂໍ້​ມູນ​ສະ​ໝັກ​ວຽກ​
                      </button>
                    )}
                  </div>
                </div>
              </div>
              {isOpen && (
                <div id="show" className="career-details-hide-wrapper">
                  <div className="career-details-apply-info-box pb-10">
                    <div className="career-details-profile-box pb-20">
                      <h4 className="career-details-title-xs">Profile</h4>
                      {/* <p>Basic information about you</p> */}
                    </div>
                    <div className="postbox__comment-form">
                      <form
                        onSubmit={(e) => e.preventDefault()}
                        className="box"
                      >
                        <div className="row gx-20">
                          <div className="col-12">
                            <div className="postbox__comment-input mb-30">
                              <input
                                type="text"
                                className="inputText"
                                required
                              />
                              <span className="floating-label">
                                ຊື່ ແລະ ນາມ​ສະ​ກຸນ
                              </span>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="postbox__comment-input mb-30">
                              <input
                                type="text"
                                className="inputText"
                                required
                              />
                              <span className="floating-label">ອີ​ເມວ</span>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="postbox__comment-input mb-30">
                              <input
                                type="text"
                                className="inputText"
                                required
                              />
                              <span className="floating-label">ເບີ​ໂທ</span>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="postbox__comment-input mb-30">
                              <input
                                type="text"
                                className="inputText"
                                required
                              />
                              <span className="floating-label">ທີ່​ຢູ່</span>
                            </div>
                          </div>
                          <div className="col-xxl-12">
                            <div className="postbox__comment-input mb-30">
                              <textarea
                                className="textareaText"
                                required
                              ></textarea>
                              <span className="floating-label-2">
                                ເຫດ​ຜົນ
                              </span>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="career-details-apply-info-box">
                    <div className="col-xxl-12">
                      <div className="postbox__resume-title-box">
                        <h5
                          className="career-details-title-xs pb-15"
                          style={{ fontFamily: "Noto Sans Lao" }}
                        >
                          ອັບ​ໂຫລດ resume ຫລື CV
                        </h5>
                      </div>
                      <div className="postbox__resume mb-30">
                        <input id="cv" type="file" hidden />
                        <label htmlFor="cv">
                          <span>ອັບ​ໂຫລດ resume ຫລື CV</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-xxl-12">
                      <div className="postbox__btn-box mb-50">
                        <button className="submit-btn w-100 fs-5">
                          ສົ່ງ​ຟອມ​ສະ​ໝັກ
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerDetailsArea;
