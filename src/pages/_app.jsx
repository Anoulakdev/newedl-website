import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
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

  useEffect(() => {
    // Clean up old Google Analytics cookies to prevent WAF decryption errors
    if (typeof document !== "undefined") {
      const cookiesToDelete = ["_ga", "_ga_SMP5VDXS3M"];
      const domains = [
        window.location.hostname,
        ".edl.com.la",
        "edl.com.la",
        ".www.edl.com.la",
        "www.edl.com.la",
      ];

      cookiesToDelete.forEach((cookieName) => {
        domains.forEach((domain) => {
          document.cookie = `${cookieName}=; Path=/; Domain=${domain}; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
        });
      });
    }

    // Simulate a loading delay (you can replace this with actual logic)
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(loadingTimeout);
  }, []);

  const skipLoadingForPages = ["/edl-app-download", "/edl-checkin"];
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
