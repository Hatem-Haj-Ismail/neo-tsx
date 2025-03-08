import React from "react";
import {  FaSackDollar } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { TbHandFingerRight } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import "./MarketplaceCard.scss";
import deliveryImage from "../../../../img/عامل-توصيل-يحمل-طرد-بين-يديه-1.webp";
import deliveryImage2 from "../../../../img/عامل-توصيل-يجلس-في-سيارة-لتوصيل-الطلبات.webp";

const MarketplaceCard = () => {
  const navigate = useNavigate();

  return (
    <div className="marketplace-container">
      <div className="header">
        <span className="badge">Get Started</span>
        <h1>
          Create Your <span>Ideal</span> Marketplace
        </h1>
        <p>
          All the tools you need to build, manage, and scale your 
          marketplace effortlessly.
        </p>
      </div>

      <div className="marketplace-card">
        <div className="marketplace-content">
          <div className="text">
            <span className="badge">Marketplace Builder</span>
            <h2>
              All-in-One <span>Marketplace Setup</span>
            </h2>
            <p>
              Launch a fully functional multi-vendor marketplace with Neo’s
              easy-to-use setup tools.
            </p>

            <button className="Button" onClick={() => navigate("/features")}>
  <span className="buttonText">
  Discover more <BsArrowRight className="icon" />
  </span>
</button>
          </div>

          <div className="features">
            <Feature icon={<TbHandFingerRight />} text="Rich Product Details with Variants & Addons" />
            <Feature icon={<IoTimeOutline />} text="Mobile & Web apps for Customers & Merchants" />
            <Feature icon={<FaSackDollar />} text="Finance & Loyalty Program included" />
            <Feature icon={<IoTimeOutline />} text="Get Premium Support in Minutes" />

          </div>
        </div>
      </div>

      <div className="Quickcommerce-wrapper">
        <div className="Quickcommerce-container">
          <div className="Quickcommerce-card">
            <div className="Quickcommerce-content">
            <span className="badge">Quickcommerce
            </span>

              <div className="Quickcommerce-text">
                <h3>
                Build QuickCommerce Marketplace
                <span> Food Groceries & more..</span>

                </h3>
                <p>Access all the required tools to build QCommerce marketplace like Delivery zones, Fleet managment, Driver Appm, Working hours & More..</p>
              </div>
              <img src={deliveryImage} alt="Quickcommerce" className="quickcommerce-image" />
            </div>
          </div>
        </div>

        <div className="Quickcommerce-container">
          <div className="Quickcommerce-card">
            <div className="Quickcommerce-content">
            <span className="badge">Traditional Commerce
            </span>

              <div className="Quickcommerce-text">
                <h3>
                Build Traditional Marketplace  Like
                <span> Amazon & Noon</span>

                </h3>
                <p>Access all the required tools to build Ecommerce marketplace like Shipment tracking, Combined basket, Products variants & More..</p>
              </div>
              <img src={deliveryImage2} alt="Quickcommerce" className="quickcommerce-image" />
            </div>
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

export default MarketplaceCard;