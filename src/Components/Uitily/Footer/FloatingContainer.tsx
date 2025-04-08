import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Importiere das Material UI Icon
import war from "../../../img/أنشئ-وحسّن-سوقك-الإلكتروني.png";
import "./FloatingContainer.scss";

// Funktionskomponente für den FloatingContainer
const FloatingContainer: React.FC = () => {
  return (
    <div className="FloatingContainer-container">
      <div className="FloatingContainer-card">
        <div className="FloatingContainer-content">
          <div className="FloatingContainer-header">
            <span className="badge">Get Started</span>
            <h2>
              Build and Optimize <span>Your Marketplace</span>
            </h2>
            <p>
              Let Neo help you create a successful and dynamic multi-vendor marketplace.
            </p>
            <button className="Button">
              <span className="buttonText">
                Get Started with Neo <ArrowForwardIcon className="icon" />
              </span>
            </button>
          </div>

          <div className="image">
            <img src={war} alt="Build and Optimize Your Marketplace" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingContainer;