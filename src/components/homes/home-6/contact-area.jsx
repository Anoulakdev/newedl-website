import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import contact_img from "../../../../public/assets/img/hero/hero-4-3.png";
import shape_1 from "../../../../public/assets/img/contact/shape-4-1.png";

const ContactArea = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    description: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      full_name: "",
      phone_number: "",
      description: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/feedbacks/add`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("ສົ່ງ​ຄຳຄິດ​ເຫັນ​ສຳ​ເລັດ");
        resetForm();
        router.push("/");
      }
    } catch (error) {
      toast.error("ສົ່ງ​ຄຳຄິດ​ເຫັນບໍ່​ສຳ​ເລັດ");
    }
  };
  return (
    <>
      <div className="tp-contact-area tp-contact-overlay pt-80 pb-60 blue-bg z-index p-relative fix">
        <div className="tp-contact-glob-img">
          <Image src={contact_img} alt="theme-pure" />
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-xl-5 col-12 z-index-3 wow tpfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="tp-contact-section-box pb-25">
                <h3 className="tp-section-title-4" style={{ fontSize: "55px" }}>
                  ສົ່ງ​ຄ​ຳ​ຄິ​ດ​ເຫັນ
                </h3>
              </div>
            </div>

            <div
              className="col-xl-7 col-12 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-contact-input-wrapper p-relative">
                <div className="tp-contact-shape">
                  <Image src={shape_1} alt="theme-pure" />
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="tp-contact-input mb-20">
                        <input
                          type="text"
                          placeholder="ຊື່ ແລະ ນາມ​ສະ​ກຸນ"
                          className="fs-5"
                          id="full_name"
                          name="full_name"
                          value={formData.full_name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="tp-contact-input mb-20">
                        <input
                          type="number"
                          placeholder="ເບີ​ໂທ"
                          className="fs-5"
                          id="phone_number"
                          name="phone_number"
                          value={formData.phone_number}
                          onChange={handleChange}
                          maxLength="15"
                          onInput={(e) => {
                            if (e.target.value.length > 15) {
                              e.target.value = e.target.value.slice(0, 15); // Trim the input to 15 digits
                            }
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="tp-contact-input mb-20">
                        <textarea
                          placeholder="ປ້ອນ​ຄຳ​ຄິດ​ເຫັນ"
                          className="fs-5"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="tp-contact-btn">
                        <button
                          type="submit"
                          className="tp-btn-yellow-lg yellow-bg w-100 fs-4"
                        >
                          ສົ່ງ
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;
