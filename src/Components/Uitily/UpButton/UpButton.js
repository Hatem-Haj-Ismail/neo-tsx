import React, { useState, useEffect } from "react";
import "./UpButton.scss";
import { LiaAngleUpSolid } from "react-icons/lia";

const UpButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

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
      }}
    >
      <LiaAngleUpSolid size={20} /> {/* Icon-Größe auf 20px reduziert */}
    </button>
  );
};

export default UpButton;