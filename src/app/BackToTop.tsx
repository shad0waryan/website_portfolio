"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 600);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <a
    //   href="#about"
    //   aria-label="Back to top"
    //   className={`fixed bottom-5 right-5 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-teal-300/40 bg-[#0f172a]/95 text-lg font-semibold text-teal-200 shadow-lg shadow-black/30 transition duration-300 xl:hidden ${
    //     isVisible
    //       ? "translate-y-0 opacity-100"
    //       : "pointer-events-none translate-y-3 opacity-0"
    //   }`}
    // >
    //   ^
    // </a>
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      aria-label="Back to top"
      className={`fixed bottom-5 right-5 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-teal-300/40 bg-[#0f172a]/95 text-lg font-semibold text-teal-200 shadow-lg shadow-black/30 transition duration-300 xl:hidden ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      ↑
    </button>
  );
}
