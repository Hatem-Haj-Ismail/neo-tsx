import React from 'react';
import './Varietyoffeatures.scss';
import Builttoscale from '../../../../img/scalability-or-scalable-system-flat-colors-icons-for-apps-and-websites-vector.png'; 
import ResponsiveDesign from '../../../../img/2504196.png'; 
import SEOFriendly from '../../../../img/5902318.png'; 
import TestOrder from '../../../../img/1875660.png'; 
import Detaileddocs from '../../../../img/9746449.png'; 
import Preimiumsupport from '../../../../img/4961759.png'; 
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";


const features = [
  {
    title: "Built to Scale",
    description: "The system has been built to handle millions of users and orders without any slowdown or performance issues,vand it has already been tested with hundreds of thousands of users.",
    img: Builttoscale
  },
  {
    title: "Responsive Design",
    description: "In addition to mobile apps, your marketplace will be responsive to mobile phones and tablets, providing a complete user experience on these smaller screens.",
    img: ResponsiveDesign
  },
  {
    title: "SEO Friendly",
    description: "The site has been built to be search engine optimized, providing the necessary options for search engines both for general site settings and product settings.",
    img: SEOFriendly
  },
  {
    title: "10,000+ Test Order",
    description: "Our quality assurance team has conducted thousands of tests and continues to perform automated and manual testing to ensure your applications are free from any technical issues.",
    img: TestOrder
  },
  {
    title: "Detailed docs & Video screencasts",
    description: "You will receive full documentation of the system along with video tutorials explaining how to use all sections of the system.",
    img: Detaileddocs
  },
  {
    title: "Preimium support",
    description: "Our support team offers a premium technical support experience with extremely fast response times, often within minutes, and provides swift assistance and solutions.",
    img: Preimiumsupport
  }
];

const Varietyoffeatures = () => {
  const navigate = useNavigate();

  return (
    <div className="Varietyoffeatures-container">
      <div className="Varietyoffeatures-card">
        <div className="header">
          <span className="badge">Variety of features
          </span>
          <h1>
          Discover the Power of <span>Neo</span> 
          </h1>
          <p>
          Key features that set Neo apart and drive your marketplace  success.
          </p>
        </div>

        <div className="Varietyoffeatures-content">
          {features.map((feature, index) => (
            <div className="feature-box" key={index}>
              <img src={feature.img} alt={feature.title} className="feature-image" />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
          <div></div>

        </div>
        <div className="button-container">
        <button className="Button" onClick={() => navigate("/features")}>
  <span className="buttonText">
  Explore all features <BsArrowRight className="icon" />
  </span>
</button>
</div>
      </div>
    </div>
  );
};

export default Varietyoffeatures;