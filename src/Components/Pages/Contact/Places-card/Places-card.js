import React from "react";
import "./Places-card.scss";

const locations = [
  { city: "Istanbul, Turkey", phone: "+90 531 626 66 95", flag: "🇹🇷" },
  { city: "Muscat, Oman", phone: "+90 531 626 66 95", flag: "🇴🇲" },
  { city: "Cairo, Egypt", phone: "+90 531 626 66 95", flag: "🇪🇬" },
];

const Placescard = () => {
  return (
    <div className="Placescard-container">
      <div className="Placescard-card">
        <div className="Placescard-content">
          {locations.map((location, index) => (
            <div key={index} className="Placescard-location">
              <strong>{location.city} {location.flag}</strong>
              <p>{location.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Placescard;
