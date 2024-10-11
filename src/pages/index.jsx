import React from "react";
import SEO from "../common/seo";
import HomeFour from "../components/homes/home-6/index2";
import Wrapper from "../layout/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"EDL Website"} />
      <HomeFour />
    </Wrapper>
  );
};

export default Home;
