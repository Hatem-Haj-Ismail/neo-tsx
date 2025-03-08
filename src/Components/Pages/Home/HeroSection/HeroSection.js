import React, { useState, useEffect } from "react";
import "./HeroSection.scss";
import neog3 from "../../../../img/neo_g3.gif";
import { FaCheckCircle } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";



const HeroSection = () => {
  const words = ["Food", "eCommerce", "FoodB2B", "Grocery"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <div className="textSection">
      <h1>
          Build{" "}
          <span className="animatedWord">
            {words.map((word, index) => (
              <span
                key={index}
                className={`word ${index === currentIndex ? "visible" : "hidden"}`}
              >
                {word}
              </span>
            ))}
          </span>
          <br /> marketplace
        </h1>
        <p>
          Neo empowers you to create a seamless and powerful multi-vendor
          marketplace.
        </p>
        <div className="buttons">
        <button className="Button">
  <span className="buttonText">
    Live Demo <BsArrowRight className="icon" />
  </span>
</button>
          <button className="consultation">
            Book a free consultation session
          </button>
        </div>
        <hr className="divider" />
        <div className="icons">
          <div><FaCheckCircle /> Quick setup</div>
          <div><FaCheckCircle /> No hidden fees</div>
          <div><FaCheckCircle /> Continuous updates</div>
        </div>
      </div>
      <div className="imageSection">
        <img
          src={neog3}
          alt="Demo"
          className="demoImage"
        />
      </div>
    </div>
  );
};

export default HeroSection;