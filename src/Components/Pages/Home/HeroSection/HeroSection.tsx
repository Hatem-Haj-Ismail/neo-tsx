import React, { useState, useEffect } from "react";
import "./HeroSection.scss";
import neog3 from "../../../../img/neo_g3.gif";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const HeroSection: React.FC = () => {
  const words: string[] = ["React", "Node.js", "Express", "JavaScript"];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [words.length]);

  const features = [
    { icon: <CheckCircleIcon fontSize="small" />, text: "Quick setup" },
    { icon: <CheckCircleIcon fontSize="small" />, text: "No hidden fees" },
    { icon: <CheckCircleIcon fontSize="small" />, text: "Continuous updates" }
  ];

  return (
    <div className="hero">
      {/* Text Section */}
      <div className="textSection">
        <h1>
          Build{" "}
          <span className="animatedWord">
            {words[currentIndex]}
          </span>
          <br /> marketplace
        </h1>
        <p>Neo empowers you to create a seamless and powerful multi-vendor marketplace.</p>
        
        {/* Buttons Section */}
        <div className="buttons">
          <button className="Button">
            <span className="buttonText">Live Demo</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="icon" width="24" height="24">
              <path d="M10 4l5 5-5 5"></path>
            </svg>
          </button>
          <button className="consultation">Book a free consultation session</button>
        </div>

        {/* Divider */}
        <hr className="divider" />

        {/* Icons Section */}
        <div className="icons">
          {features.map((feature, index) => (
            <div key={index}>
              {feature.icon} {feature.text}
            </div>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="imageSection">
        <img src={neog3} alt="Demo" className="demoImage" />
      </div>
    </div>
  );
};

export default HeroSection;