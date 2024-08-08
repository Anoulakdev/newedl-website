import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";

import FooterFour from "@/src/layout/footers/footer-4";
import React from "react";
import Organize from "@/src/components/organization/organize";

import Government from "@/src/components/government/index2";
import HeaderFour from "@/src/layout/headers/header-4";
import Post from "@/src/components/newslist/post1";
import imgbread from "@/public/images/navbar/News.png";

const NewsList = () => {
  return (
    <>
      {/* <HeaderTen /> */}
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={"ຂ່າວ​ສານ"} imgbread={imgbread} />
            <Post />
            {/* <Government /> */}
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default NewsList;
