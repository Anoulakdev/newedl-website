import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function magazinedetail() {
  const router = useRouter();
  const magazine_id = router?.query?.magazine_id;

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api_v1/user-svc/magazines/byId?id=${magazine_id}`
        );
        setData(response.data.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  

  return (
    <>
      <div className="container pt-120 pb-50">
        <iframe
          allowfullscreen="true"
          src={data.file_url}
          height="700"
          width="100%"
          frameborder="0"
        ></iframe>
      </div>
    </>
  );
}
