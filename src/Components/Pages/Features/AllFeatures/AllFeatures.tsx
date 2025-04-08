import React from 'react';
import './AllFeatures.scss';
import { MobileFriendly, Handshake, Shield, PieChart, People, Language } from '@mui/icons-material'; // Material UI Icons

// Typ für ein Feature
interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Features-Daten
const features: Feature[] = [
  {
    title: "Responsive Design",
    description: "In addition to mobile apps, your marketplace will be responsive to mobile phones and tablets, providing a complete user experience on these smaller screens.",
    icon: <MobileFriendly fontSize="large" />
  },
  {
    title: "SEO Friendly",
    description: "The site has been built to be search engine optimized, providing the necessary options for search engines both for general site settings and product settings.",
    icon: <Handshake fontSize="large" />
  },
  {
    title: "Quality Guaranteed",
    description: "Our quality assurance team has conducted thousands of tests and continues to perform automated and manual testing to ensure your applications are free from any technical issues.",
    icon: <Shield fontSize="large" />
  },
  {
    title: "Built to scale",
    description: "The system has been built to handle millions of users and orders without any slowdown or performance issues, and it has already been tested with hundreds of thousands of users.",
    icon: <PieChart fontSize="large" />
  },
  {
    title: "Premium support",
    description: "Our support team offers a premium technical support experience with extremely fast response times, often within minutes, and provides swift assistance and solutions.",
    icon: <People fontSize="large" />
  },
  {
    title: "Multilingual",
    description: "All Neo components are multilingual including the website, the admin panel, and the mobile apps for customer, merchant, and driver.",
    icon: <Language fontSize="large" />
  },
];

const AllFeatures: React.FC = () => {
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