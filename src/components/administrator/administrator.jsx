"use client";
import React from "react";
import Image from "next/image";
import axios from "axios";
import img from "@/public/images/organization/LaoS.jpg";

const Administrator = () => {
  return (
    <>
      <div className="container-fluid mt-50 mb-50 text-center wow tpfadeUp">
        <Image src={img} className="img-fluid" alt="theme-pure" />
        {/* <Image src={`${process.env.NEXT_PUBLIC_API_URL}/customer-svc/structure/structureImage/f8dc6aed967231010d305c8e744ec6b978.png`} className="img-fluid" alt="theme-pure" width={600} height={600}/> */}
      </div>
    </>
  );
};

export default Administrator;
