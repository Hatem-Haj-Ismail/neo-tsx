import React from 'react';
import './Howitworks.scss';
import { ArrowForward } from '@mui/icons-material'; // Importiere das Material UI Icon

interface Step {
  step: string;
  title: string;
  description: string;
}

export const Howitworks: React.FC = () => {
  const steps: Step[] = [
    {
      step: "STEP 1",
      title: "Easy Registration",
      description:
        "Sign up quickly and start building your marketplace with no upfront costs.",
    },
    {
      step: "STEP 2",
      title: "Customizable Design",
      description:
        "Personalize your marketplace to match your brand’s identity with intuitive customization options.",
    },
    {
      step: "STEP 3",
      title: "Accelerate Growth",
      description:
        "Utilize Neo’s tools to attract more vendors and customers, driving rapid growth.",
    },
  ];

  return (
    <div className="Howitworks-container">
      <div className="header">
        <span className="badge">How it works</span>
        <h1>
          Simple steps, <span>Unlimited</span> Potential
        </h1>
        <p>
          Build, customize, and expand your marketplace with Neo’s robust features.
        </p>
      </div>

      {/* Schritte in die Howitworks-card */}
      <div className="Howitworks-card">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="step">
              <span className="step-badge">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <a href="#" className="learn-more">Learn more</a>
            </div>

            {/* Nur zwischen den ersten beiden Steps anzeigen */}
            {index < steps.length - 1 && (
              <div className="step-arrow">
                <ArrowForward /> {/* Hier verwenden wir das Material UI Icon */}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <hr className="step-divider" />
    </div>
  );
};