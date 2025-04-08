import React, { useState, useEffect } from "react";
import { ArrowUpward } from "@mui/icons-material"; // Importiere Material UI Icon
import "./UpButton.scss";

const UpButton: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0); // Typisierung für scrollProgress

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`upButton ${scrollProgress > 0 ? "visible" : ""}`}
      onClick={scrollToTop}
      style={{
        "--progress": `${scrollProgress}%`,
      } as React.CSSProperties} // CSSProperties-Typisierung für Style
    >
      <ArrowUpward fontSize="inherit" /> {/* Material UI Icon */}
    </button>
  );
};

export default UpButton;