"use client";

import React from "react";
import News from "./news";
import Announcement from "./announcement2";
import Know from "./knowledge";
import ServiceArea from "./service-area1";

const PostboxArea = () => {
  return (
    <>
      <div className="postbox__area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div id="blog" className="postbox__wrapper pr-20 wow tpfadeUp">
                <News />
                <Know />
                <ServiceArea />
              </div>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="sidebar__wrapper">
              <Announcement />

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostboxArea;
