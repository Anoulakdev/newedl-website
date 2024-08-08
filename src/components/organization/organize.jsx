"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

import img from "@/public/images/organization/LaoOK1.png";
import Rolling from "@/public/images/gif/Rolling.gif";

const Organize = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api_v1/user-svc/structure/type/2`
        );
        setData(response.data.data);
        setIsLoading(false);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="text-center pt-30">
          <Image src={Rolling} width={100} height={100} />
        </div>
      ) : (
        <div className="container-fluid mt-50 mb-50 text-center wow tpfadeUp">
          <img
            src={`${process.env.NEXT_PUBLIC_API_URL}/structures/${data.str_image}`}
            className="img-fluid"
            alt="theme-pure"
          />
        </div>
      )}
    </>
  );
};

export default Organize;
