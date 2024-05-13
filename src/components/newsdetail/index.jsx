import FooterFour from "@/src/layout/footers/footer-4";
import React from "react";

import Government from "@/src/components/government/index2";
import HeaderFour from "@/src/layout/headers/header-4";
import ContentNews from "@/src/components/contentnews";

const NewsList = () => {

  return (
    <>
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <ContentNews/>
            {/* <Government /> */}
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default NewsList;
