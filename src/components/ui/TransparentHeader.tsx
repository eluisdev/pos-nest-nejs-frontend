"use client";

import React, { useState, useEffect } from "react";

const TransparentHeader = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`${isScrolled ? "bg-black/70" : "bg-black/95"
        } flex sm:flex-row-reverse flex-col justify-between fixed z-10 w-full p-3 px-10 transition-all duration-500`}
    >
      {children}
    </section>
  );
};

export default TransparentHeader;