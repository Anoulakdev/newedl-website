import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";

import FooterFour from "@/src/layout/footers/footer-4";
import React from "react";
import Jobhistory from "@/src/components/jobhistory/jobhistory";

import HeaderFour from "@/src/layout/headers/header-4";
import imgbread from "@/public/images/navbar/Hire.png"

const JobHistory = () => {
  return (
    <>
      {/* <HeaderTen /> */}
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={"ປະ​ຫວັດ​ສະ​ໝັກ​ວຽກ​ທັງ​ໝົດ"} imgbread={imgbread}/>
            <Jobhistory />
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default JobHistory;