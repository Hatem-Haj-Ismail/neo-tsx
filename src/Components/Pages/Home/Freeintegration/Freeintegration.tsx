import React from "react";
import { FaSackDollar } from "react-icons/fa6"; // Du kannst auch weiterhin react-icons verwenden
import { TbTruckDelivery } from "react-icons/tb";
import { SiTinyletter } from "react-icons/si";
import { Paid, LocalShipping, Sms } from "@mui/icons-material"; // Material UI Icons
import "./Freeintegration.scss";

// Typisierung der Feature-Komponente
interface FeatureProps {
  icon: React.ElementType; // Verwende React.ElementType für JSX-Komponenten
  text: string;
}

const Freeintegration: React.FC = () => {
  return (
    <div className="Freeintegration-container">
      <div className="header">
        <span className="badge">Get Started</span>
        <h1>
          Free integration with services of <span>Your Choice</span>
        </h1>
      </div>

      <div className="Freeintegration-card">
        <div className="Freeintegration-content">
          <div className="text">
            <span className="badge">Free Integration</span>
            <h2>Choose your services!</h2>
            <p>
              Neo is integrated with a wide range of service providers, but you’re not limited to choosing one. Select the service that suits you, and our team will integrate it with Neo.
            </p>
          </div>

          <div className="features">
            <Feature icon={Paid} text="Payment Gateways" /> {/* Material UI Icon */}
            <Feature icon={Sms} text="SMS & Whatsapp messaging & OTP" /> {/* Material UI Icon */}
            <Feature icon={LocalShipping} text="Delivery companies like Aramex, DHL, and others." /> {/* Material UI Icon */}
          </div>
        </div>
      </div>
    </div>
  );
};

// Typisierung der Feature-Komponente
const Feature: React.FC<FeatureProps> = ({ icon: Icon, text }) => {
  return (
    <div className="feature">
      <div className="icon">
        <Icon /> {/* Verwende das Material UI Icon als JSX-Komponente */}
      </div>
      <span>{text}</span>
    </div>
  );
};

export default Freeintegration;