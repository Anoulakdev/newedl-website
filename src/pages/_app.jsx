import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import usePageTracking from "../hooks/usePageTracking";
import "@/src/styles/index.scss";
import Image from "next/image";
import Spinner from "@/public/EDL_Logo.gif";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  usePageTracking();

  useEffect(() => {
    // Simulate a loading delay (you can replace this with actual logic)
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(loadingTimeout);
  }, []);

  const skipLoadingForPages = ["/edl-app-download"];
  const shouldSkipLoading = skipLoadingForPages.includes(router.pathname);

  return (
    <>
      {loading && !shouldSkipLoading ? (
        // <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <div className="w-100 h-100 d-flex justify-content-center align-items-center fixed-top">
          <Image src={Spinner} width={400} height={400} />
        </div>
      ) : (
        <div>
          <Component {...pageProps} />
          <ToastContainer />
        </div>
      )}
    </>
  );
}
