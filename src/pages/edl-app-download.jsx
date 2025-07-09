// app/redirect/page.tsx
"use client";

import { useEffect } from "react";

export default function RedirectPage() {
  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    let link = "";

    if (/android/i.test(ua)) {
      link = "https://play.google.com/store/apps/details?id=com.edl.edl_app";
    } else if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
      link = "https://apps.apple.com/la/app/edl-app/id6648761593";
    } else if (/HUAWEI|HONOR/i.test(ua)) {
      link = "https://appgallery.huawei.com/app/C113729013";
    } else {
      link = "https://play.google.com/store/apps/details?id=com.edl.edl_app";
    }

    // Redirect after short delay
    setTimeout(() => {
      window.location.href = link;
    }, 500);

    // Update manual link
    const linkElement = document.getElementById("manualLink");
    if (linkElement) {
      linkElement.setAttribute("href", link);
    }
  }, []);

  return (
    <div className="text-center mt-12 text-lg px-4">
      <p>ກຳລັງເປີດແອັບ EDL...</p>
      <p>
        If not redirected,{" "}
        <a id="manualLink" href="#" className="text-blue-600 underline">
          tap here
        </a>
        .
      </p>
    </div>
  );
}
