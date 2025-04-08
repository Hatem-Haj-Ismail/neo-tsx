import React, { useState, useEffect } from "react";
import "./Generalquestions.scss";
import { ArrowForward, Close } from "@mui/icons-material"; // Import von Material UI Icons

// Typ für eine Frage
interface Question {
  question: string;
  answer: string;
}

// Typ für eine Kategorie
interface FaqCategory {
  description: string;
  questions: Question[];
}

// Typ für die Struktur der faqData
interface FaqData {
  [category: string]: FaqCategory;
}

// Beispiel-Daten für FAQ
const faqData: FaqData = {
  "General questions": {
    description: "Discover the basics of Neo marketplace, including their importance for creating a unique marketplace, compatibility with the latest technologies, usage of the platform, and assistance for getting started.",
    questions: [
      {
        question: "What is Neo marketplace, and why do I need one?",
        answer: "Neo is a marketplace as Saas enable you to create QCommerce or Ecommerce marketplace and privide you with mobile, web and Admin panel."
      },
      {
        question: "Why should I use Neo instead of using other alternatives?",
        answer: "Neo includes all the features you need to manage stores, products, marketing, and financial reports. We built it based on practical experiences with dozens of previous clients and have tested it extensively to ensure a high level of service quality."
      },
      {
        question: "What is the process for getting started with Neo?",
        answer: "All you need to do is contact us, and a team of experts will reach out to understand your needs and prepare a demo tailored to your requirements. Additionally, our team is ready to develop custom features for you if the desired functionalities are not currently available."
      }
    ],
  },
  "License usage": {
    description: "Learn about using our themes on client websites, customizing theme code and design, renewal of theme licenses, restrictions on license transfers, and compatibility with self-hosted sites.",
    questions: [
      {
        question: "What is the licensing policy for Neo?",
        answer: "At Neo, we use a SaaS licensing model, so you pay a monthly or annual subscription to use our product, with no hidden fees."
      },
      {
        question: "Can I transfer my theme license to another person or website?",
        answer: "Ut in vestibulum risus, ut tincidunt sem. Morbi molestie egestas felis, consequat mattis magna suscipit non. Proin ex enim, faucibus sit amet odio vestibulum, condimentum egestas libero."
      },
    ],
  },
  "Support & updates": {
    description: "Find out how to get support, receive regular updates, and what to do if you encounter any bugs while using Neo.",
    questions: [
      {
        question: "How long do I have access to the updates and support?",
        answer: "Updates and technical support are provided throughout the subscription period."
      },
      {
        question: "What kind of support do you offer?",
        answer: "What sets us apart is our fast and efficient customer support. We respond within minutes, whether you contact us via WhatsApp or email, and solutions are provided immediately, typically within an hour."
      },
      {
        question: "How often do you release updates?",
        answer: "We continuously work on improving our product, releasing a new version each time new features are ready, after ensuring the new version is stable and free of any technical issues. You will also be regularly notified of the new features available with each release."
      }
    ],
  },
};

const Generalquestions: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("General questions");
  const [openQuestions, setOpenQuestions] = useState<{ [key: string]: number | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      let foundCategory = activeCategory;

      Object.keys(faqData).forEach((category) => {
        const section = document.getElementById(category);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top < 150) {
            foundCategory = category;
          }
        }
      });

      setActiveCategory(foundCategory);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeCategory]);

  const toggleQuestion = (category: string, index: number) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  return (
    <div className="faq-container">
      {/* Sidebar */}
      <div className="faq-sidebar">
        {Object.keys(faqData).map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => {
              setActiveCategory(category);
              document.getElementById(category)?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* FAQ Content */}
      <div className="faq-content">
        {Object.entries(faqData).map(([category, data], index) => (
          <div key={category} id={category}>
            {/* Trennlinie nur über "License usage" und "Support & updates" */}
            {(category === "License usage" || category === "Support & updates") && <hr className="faq-divider" />}
            
            <h2>{category}</h2>
            <p>{data.description}</p>
            
            <div className="faq-list">
              {data.questions.map((item, questionIndex) => (
                <div
                  key={questionIndex}
                  className={`faq-item ${openQuestions[category] === questionIndex ? "open" : ""}`}
                  onClick={() => toggleQuestion(category, questionIndex)}
                >
                  <div className="faq-question">
                    <span>{questionIndex + 1}. {item.question}</span>
                    <span className="close-icon">
                      {openQuestions[category] === questionIndex ? <Close /> : <ArrowForward />}
                    </span>
                  </div>
                  {openQuestions[category] === questionIndex && (
                    <div className="faq-answer">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Generalquestions;