import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import war from "../../../img/أنشئ-وحسّن-سوقك-الإلكتروني.png"


import "./FloatingContainer.scss";

const FloatingContainer = () => {
  return (
<div className="FloatingContainer-container">
  

      <div className="FloatingContainer-card">
        <div className="FloatingContainer-content">
        <div className="FloatingContainer-header">
          <span className="badge">Get Started
          </span>
          <h2>
          Build and Optimize <span>Your Marketplace</span> 
          </h2>
          <p>
          Let Neo help you create a successful and dynamic multi-vendor marketplace.
          </p>
          <button className="Button">
  <span className="buttonText">
  Get Started with Neo  <BsArrowRight className="icon" />
  </span>
</button>
        </div>

          <div className="image">
            <img src={war} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingContainer;