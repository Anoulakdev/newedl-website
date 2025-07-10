"use client";

import { useEffect } from "react";

export default function RedirectPage() {
  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    let link = "";

    const isAndroid = /android/i.test(ua);
    const isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
    const isMac = /Macintosh/.test(ua) && navigator.maxTouchPoints > 0;
    const isHuawei = /HUAWEI|HONOR|HuaweiBrowser|HarmonyOS|HMSCore/i.test(ua);

    if (isHuawei) {
      link = "https://appgallery.huawei.com/app/C113729013";
    } else if (isIOS || isMac) {
      link = "https://apps.apple.com/la/app/edl-app/id6648761593";
    } else if (isAndroid) {
      link = "https://play.google.com/store/apps/details?id=com.edl.edl_app";
    } else {
      link = "https://play.google.com/store/apps/details?id=com.edl.edl_app";
    }

    // เปลี่ยน href ของลิงก์ manual
    const manualLink = document.getElementById("manualLink");
    if (manualLink) manualLink.href = link;

    // Redirect หลังจาก 500ms
    setTimeout(() => {
      window.location.href = link;
    }, 500);
  }, []);

  return (
    <div className="text-center mt-12 text-lg">
      <p>
        ກຳລັງເປີດແອັບ EDL...
        <br />
        If not redirected,{" "}
        <a id="manualLink" href="#" className="text-blue-600 underline">
          tap here
        </a>
        .
      </p>
    </div>
  );
}
