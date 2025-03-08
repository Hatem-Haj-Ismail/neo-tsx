import React from "react";
import {  FaSackDollar } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { SiTinyletter } from "react-icons/si";
import "./Freeintegration.scss";

const Freeintegration = () => {
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
            <span className="badge">Free Integration            </span>
            <h2>
            Choose your services!
            </h2>
            <p>
            Neo is integrated with a wide range of service providers, but you’re not limited to choosing one. Select the service that suits you, and our team will integrate it with Neo.
            </p>
          </div>

          <div className="features">
            <Feature icon={<FaSackDollar />} text="Payment Gateways" />
            <Feature icon={<SiTinyletter />} text="SMS & Whatsapp messageing & OTP" />
            <Feature icon={<TbTruckDelivery />} text="Delivery companies like Aramex, DHL, and others." />

          </div>
        </div>
      </div>
    </div>
  );
};



const Feature = ({ icon, text }) => {
  return (
    <div className="feature">
      <div className="icon">{icon}</div>
      <span>{text}</span>
    </div>
  );
};

export default Freeintegration;