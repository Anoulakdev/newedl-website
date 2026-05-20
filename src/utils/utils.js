export const animationCreate = () => {
  if (typeof window !== "undefined") {
    const wowjs = require("wowjs");
    let WOWClass = null;
    if (typeof wowjs === "function") {
      WOWClass = wowjs;
    } else if (wowjs && typeof wowjs.WOW === "function") {
      WOWClass = wowjs.WOW;
    } else if (wowjs && wowjs.default) {
      if (typeof wowjs.default === "function") {
        WOWClass = wowjs.default;
      } else if (wowjs.default && typeof wowjs.default.WOW === "function") {
        WOWClass = wowjs.default.WOW;
      }
    }

    if (WOWClass) {
      window.WOW = WOWClass;
      new WOWClass({ live: false }).init();
    } else {
      console.warn("WOW.js constructor not found in exports:", wowjs);
    }
  }
};
