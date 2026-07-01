import React, { useEffect } from "react";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/images/edl_logo.svg",
      permanent: false,
    },
  };
}

export default function Uploads() {
  const router = useRouter();

  useEffect(() => {
    // Fallback client-side redirect if server-side redirect is bypassed
    router.replace("/images/edl_logo.svg");
  }, [router]);

  return null;
}
