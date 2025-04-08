import React from "react";
import "./Contactus.scss";
import { Email } from "@mui/icons-material"; // Import von Material UI Icon

// Interface für die Kontaktoptionen
interface ContactOption {
  title: string;
  description: string;
}

const Contactus: React.FC = () => {
  // Array von Support-Optionen mit Beschreibungen
  const contactOptions: ContactOption[] = [
    { title: "Need support?", description: "Get instant answers." },
    { title: "Feedback?", description: "Tell us about it here." },
    { title: "Report issue", description: "Get priority support." },
    { title: "Community", description: "Connect with fellow users." },
  ];

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
          {contactOptions.map((option, index) => (
            <div key={index} className="contactus-option">
              <div className="icon-container">
                <Email /> {/* Verwendung des Material UI Icons */}
              </div>
              <div className="text-container">
                <h4>{option.title}</h4>
                <p>{option.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Rechte Seite: Kontaktformular */}
        <div className="Contactus-form">
          <h3>How can we help you today?</h3>
          <p>Let us know who you are and what you're looking for below.</p>
          <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email address" required />
              <input type="text" placeholder="Subject" required />
            </div>
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;