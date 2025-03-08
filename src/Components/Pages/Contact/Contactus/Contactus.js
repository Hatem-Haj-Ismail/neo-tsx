import React from "react";
import "./Contactus.scss";
import { TfiEmail } from "react-icons/tfi";


const Contactus = () => {
  return (
    <div className="Contactus-container">
      <div className="header">
        <span className="badge">Contact us</span>
        <h2>
          Need help? Say <span>Hello</span>
        </h2>
        <p>
          Feel free to reach out to us using the options below, and our
          dedicated team will respond to your inquiries promptly.
        </p>
      </div>

      <div className="Contactus-card">
        {/* Linke Seite: Support-Optionen */}
        <div className="contactus-options">
          <div className="contactus-option">
            <div className="icon-container">
              <TfiEmail  />
            </div>
            <div className="text-container">
              <h4>Need support?</h4>
              <p>Get instant answers.</p>
            </div>
          </div>

          <div className="contactus-option">
            <div className="icon-container">
              <TfiEmail />
            </div>
            <div className="text-container">
              <h4>Feedback?</h4>
              <p>Tell us about it here.</p>
            </div>
          </div>

          <div className="contactus-option">
            <div className="icon-container">
              <TfiEmail   />
            </div>
            <div className="text-container">
              <h4>Report issue</h4>
              <p>Get priority support.</p>
            </div>
          </div>

          <div className="contactus-option">
            <div className="icon-container">
              <TfiEmail   />
            </div>
            <div className="text-container">
              <h4>Community</h4>
              <p>Connect with fellow users.</p>
            </div>
          </div>
        </div>

        {/* Rechte Seite: Kontaktformular */}
        <div className="Contactus-form">
          <h3>How can we help you today?</h3>
          <p>Let us know who you are and what you're looking for below.</p>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email address" />
              <input type="text" placeholder="Subject" />
            </div>
            <textarea placeholder="Message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
