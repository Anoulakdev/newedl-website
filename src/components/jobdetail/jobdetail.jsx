import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import moment from "moment";

const CareerDetailsArea = () => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const applyHandler = () => {
    setIsOpen(true);
  };

  const jobsId = router?.query?.jobs_id;

  // console.log("Jobs===>", jobsId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/jobs/getbyId?id=${jobsId}`
        );
        setData(response.data.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const initialFormData = {
    full_name: "",
    email: "",
    cv_file: "",
    status: "A",
    phone_number: "",
    address: "",
    note: "",
    job: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, cv_file: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Step 1: Upload the file
      const fileData = new FormData();
      fileData.append("file", formData.cv_file);

      const uploadResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/uploads/single/jobs`,
        fileData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const filename = uploadResponse.data.data.image;

      // Step 2: Update formData with uploaded file's filename
      const newFormData = {
        ...formData,
        cv_file: filename,
        job: jobsId,
        job_title: data.title,
      };

      console.log("Data sent:", newFormData);

      // Step 3: Submit the form data
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/jobApplies/add`,
        newFormData
      );

      // Step 4: Send email with form data
      await axios.post("/api/sendEmail", newFormData);

      toast.success("ສົ່ງ​ຟອມ​ສຳ​ເລັດ");
      router.push("/jobvacancy");
    } catch (error) {
      toast.error("ສົ່ງ​ຟອມບໍ່​ສຳ​ເລັດ");
    }
  };

  const currentDate = moment();
  const startDate = moment(data.start_date); // assuming you have a start_date field
  const endDate = moment(data.end_date); // assuming you have an end_date field

  const isDateInRange = currentDate.isBetween(startDate, endDate);

  return (
    <>
      <div className="career-details-area career-border-bottom pt-50 pb-50">
        <div className="container">
          <div className="row align-content-start">
            <div className="col-xl-7 col-lg-7">
              <div className="career-details-wrapper">
                <div className="career-details-title-box">
                  <h4
                    className="career-details-title lh-sm fw-bold"
                    style={{ fontFamily: "Noto Sans Lao" }}
                  >
                    {data.title}
                  </h4>
                </div>
                <div className="htmljobs">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: data.description,
                    }}
                  ></p>
                </div>

                {data.image &&
                  (data.image.endsWith(".pdf") ? (
                    <iframe
                      src={`${process.env.NEXT_PUBLIC_API_URL_IMG}/jobs/${data.image}`}
                      width="100%"
                      height="500px"
                      title="PDF Document"
                    ></iframe>
                  ) : (
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_URL_IMG}/jobs/${data.image}`}
                      alt="job-image"
                    />
                  ))}
              </div>
            </div>

            {isDateInRange && (
              <div className="col-xl-5 col-lg-5 career-details-pin">
                <div className="career-details-apply-info-box pb-10">
                  <div className="career-details-profile-box pb-20">
                    <h3 style={{ fontFamily: "Noto Sans Lao" }}>
                      ປະ​ຫວັດ​ສະ​ໝັກ​ວຽກ
                    </h3>
                  </div>
                  <div className="postbox__comment-form">
                    <form onSubmit={handleSubmit} className="box">
                      <div className="row gx-20">
                        <div className="col-12">
                          <div className="postbox__comment-input mb-30">
                            <input
                              type="text"
                              name="full_name"
                              value={formData.full_name}
                              onChange={handleChange}
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
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
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
                              name="phone_number"
                              value={formData.phone_number}
                              onChange={handleChange}
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
                              name="address"
                              value={formData.address}
                              onChange={handleChange}
                              className="inputText"
                              required
                            />
                            <span className="floating-label">ທີ່​ຢູ່</span>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="postbox__comment-input mb-30">
                            <input
                              type="text"
                              name="note"
                              value={formData.note}
                              onChange={handleChange}
                              className="inputText"
                              required
                            />
                            <span className="floating-label">
                              ຫົວ​ຂໍ້​ສະ​ໝັກ​ວຽກ
                            </span>
                          </div>
                        </div>
                        <div className="col-xxl-12">
                          <div className="postbox__resume-title-box">
                            <h5
                              className="career-details-title-xs pb-15"
                              style={{ fontFamily: "Noto Sans Lao" }}
                            >
                              ອັບ​ໂຫລດ ເອ​ກະ​ສານ​ແນະ​ນຳ​ຕົວ
                            </h5>
                          </div>
                          <div className="postbox__resume mb-30">
                            <label htmlFor="cv">
                              <span>
                                <h5 style={{ fontFamily: "Noto Sans Lao" }}>
                                  ​ອັບ​ໂຫຼ​ດເປັນ PDF
                                </h5>
                                <br />
                                <input
                                  id="cv"
                                  type="file"
                                  name="cv_file"
                                  accept=".pdf"
                                  onChange={handleFileChange}
                                  required
                                />
                              </span>
                            </label>
                          </div>
                        </div>
                        <div className="col-xxl-12">
                          <div className="postbox__btn-box mb-50">
                            <button
                              type="submit"
                              className="submit-btn w-100 fs-5"
                              disabled={isSubmitting}
                            >
                              {isSubmitting
                                ? "ກຳລັງສົ່ງແບບ​ຟອມ​ສະ​ໝັກ..."
                                : "ສົ່ງແບບ​ຟອມ​ສະ​ໝັກ"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerDetailsArea;
