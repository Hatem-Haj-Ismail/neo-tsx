import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "./GlobalPresence.scss";
import worldMap from "../../../../img/contact-map.png"; // Bild einbinden

const locations = [
  { top: "39%", left: "57.5%", city: "Istanbul, Turkey", phone: "+90 531 626 66 95", flag: "🇹🇷" },
  { top: "48%", left: "56%", city: "Berlin, Germany", phone: "+49 30 12345678", flag: "🇩🇪" },
  { top: "52%", left: "62.5%", city: "Paris, France", phone: "+33 1 23456789", flag: "🇫🇷" },
];

const GlobalPresence = () => {
  const [hoveredLocation, setHoveredLocation] = useState(null);

  return (
    <div className="GlobalPresence-container">
      <div className="header">
        <span className="badge">Global Presence</span>
        <h2>
          Explore <span>office locations</span>
        </h2>
        <p>
          From bustling city centers to innovative hubs, our offices reflect the energy of our team. 
          Feel free to visit us if you're in the area.
        </p>
      </div>

      <div className="GlobalPresence-map">
        <img src={worldMap} alt="World Map" />

        {locations.map((location, index) => (
          <div
            key={index}
            className="location-marker"
            style={{ top: location.top, left: location.left }}
            onMouseEnter={() => setHoveredLocation(location)}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            <div className="inner-circle"></div>
            <motion.div
              className="pulse-ring"
              initial={{ scale: 1, opacity: 1
               }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
            />
          </div>
        ))}

        {hoveredLocation && (
          <motion.div 
            className="info-card"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{ top: hoveredLocation.top, left: `calc(${hoveredLocation.left} + 5%)` }}
          >
            <strong>{hoveredLocation.city} {hoveredLocation.flag}</strong>
            <p>{hoveredLocation.phone}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default GlobalPresence;