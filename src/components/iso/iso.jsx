"use client";
import React from "react";
import Image from "next/image";

import img1 from "@/public/images/iso/EDL_Quality_Policy1.jpg";
import img2 from "@/public/images/iso/logoiso.jpeg";

const Organize = () => {
  return (
    <>
      <div className="container mt-60 mb-60 text-center wow tpfadeUp">
        <div className="row">
        <div className="col-lg-6 col-md-6 col-6">
          <Image src={img1} className="img-fluid" alt="theme-pure" />
        </div>
        <div className="col-lg-6 col-md-6 col-6">
          <Image src={img2} className="img-fluid" alt="theme-pure" style={{ width: '470px' }}/>
        </div>

        </div>
      </div>
    </>
  );
};

export default Organize;