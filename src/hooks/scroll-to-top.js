import React, { useEffect } from "react";
import useSticky from "./use-sticky";

const ScrollToTop = () => {
  const { sticky } = useSticky();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button
        onClick={scrollTop}
        className={`scroll-top scroll-to-target ${sticky ? "open" : ""}`}
        data-target="html"
        aria-label="Scroll to top"
      >
        <i className="far fa-angle-double-up"></i>
      </button>
    </>
  );
};

export default ScrollToTop;
