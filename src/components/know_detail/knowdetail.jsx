import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Data from "./Data";

const getItemById = (id) => {
  return Data.find((item) => item.id.toString() === id);
};

export default function Knowdetail() {
  const router = useRouter();
  const know_id = router?.query?.know_id;

  const item = getItemById(know_id); // Get item with ID 1
  console.log(item);

  return (
    <>
      <div className="container pt-120 pb-30 wow tpfadeUp">
        <h1 className="pb-30" style={{ fontFamily: "Noto Sans Lao" }}>
          {item.title}
        </h1>
        <div className="text-center">
          <Link href={item.img} target="_blank">
          <img
            src={item.img}
            className="img-fluid"
            alt="theme-pure"
            width="80%"
          />
          </Link>
        </div>
        <div className="mt-40">{item.video}</div>
      </div>
    </>
  );
}
