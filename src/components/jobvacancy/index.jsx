import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";

import FooterFour from "@/src/layout/footers/footer-4";
import React from "react";
import Jobvacancy from "@/src/components/jobvacancy/jobvacancy";

import Government from "@/src/components/government/index2";
import HeaderFour from "@/src/layout/headers/header-4";
import imgbread from "@/public/images/navbar/Hire.png"

const JobVacancy = () => {
  return (
    <>
      {/* <HeaderTen /> */}
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={"ປະ​ກາດ​ຮັບ​ສະ​ໝັກ"} imgbread={imgbread}/>
            <Jobvacancy />
            {/* <Government /> */}
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default JobVacancy;