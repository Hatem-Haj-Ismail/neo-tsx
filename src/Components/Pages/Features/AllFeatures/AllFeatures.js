import React from 'react';
import './AllFeatures.scss';
import { FaMobileAlt, FaHandshake, FaShieldAlt, FaChartLine, FaHeadset, FaLanguage, FaChartPie } from "react-icons/fa"; // FaChartPie importieren
import { BsFillPeopleFill } from "react-icons/bs";

const features = [
  {
    title: "Responsive Design",
    description: "In addition to mobile apps, your marketplace will be responsive to mobile phones and tablets, providing a complete user experience on these smaller screens.",
    icon: <FaMobileAlt size={40} />
  },
  {
    title: "SEO Friendlyn",
    description: "The site has been built to be search engine optimized, providing the necessary options for search engines both for general site settings and product settings.",
    icon: <FaHandshake size={40} />
  },
  {
    title: "Quality Guaranteed",
    description: "Our quality assurance team has conducted thousands of tests and continues to perform automated and manual testing to ensure your applications are free from any technical issues.",
    icon: <FaShieldAlt size={40} />
  },
  {
    title: "Built to scale",
    description: "The system has been built to handle millions of users and orders without any slowdown or performance issues. and it has already been tested with hundreds of thousands of users.",
    icon: <FaChartPie size={40} /> // FaChartPie statt <i> verwenden
  },
  {
    title: "Premium support",
    description: "Our support team offers a premium technical support experience with extremely fast response times, often within minutes, and provides swift assistance and solutions.",
    icon: <BsFillPeopleFill size={40} />
  },
  {
    title: "Multilingual",
    description: "All Neo components are multilingual including the website, the admin panel, and the mobile apps for customer merchant and driver.",
    icon: <FaLanguage size={40} />
  },
];

const AllFeatures = () => {
  return (
    <div className="AllFeatures-container">
      <div className="AllFeatures-card">
        <div className="header">
          <span className="badge">All Features</span>
          <h1>
            Discover everything
            you can do with <span>Neo</span>
          </h1>
          <p>
            Explore our suite of features designed to streamline your
            operations, drive sales, and enhance customer satisfaction.
          </p>
        </div>

        <div className="AllFeatures-content">
          {features.map((feature, index) => (
            <div className="feature-box" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFeatures;