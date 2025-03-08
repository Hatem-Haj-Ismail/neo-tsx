import React, { useEffect, useRef } from "react";
import img1 from "../../../../img/1.webp";
import img2 from "../../../../img/2.webp";
import img3 from "../../../../img/3.webp";
import img4 from "../../../../img/4.webp";
import "./Whatwedo.scss";

const contents = [
  { id: 1, title: "Control Everything", text: "Rich Management tools", h2Title: "Control Everything", contentText: "Easily create, edit, and organize content for your marketplace.", imageUrl: img1 },
  { id: 2, title: "Multiple Services", text: "Build Super Apps", h2Title: "Build Super Apps", contentText: "Neo enables you to create and customize multiple services.", imageUrl: img2 },
  { id: 3, title: "Loyalty Program", text: "Points, Coupons, Referrals", h2Title: "Reward your customers", contentText: "Attract more customers with a points rewards system.", imageUrl: img3 },
  { id: 4, title: "Finance & Reports", text: "Detailed Reports", h2Title: "Financial Transparency", contentText: "The system includes an e-wallet for each party.", imageUrl: img4 },
];

export const Whatwedo = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="Whatwedo-container">
      <div className="Whatwedo-header">
        <span className="badge">What we do</span>
        <h1>
          Awesome <span>services</span> redefined
        </h1>
        <p>Discover how our cutting-edge software can transform your operations.</p>
      </div>

      <div className="Whatwedo-list">
        {contents.map((item, index) => (
          <div key={item.id} className="Whatwedo-card" ref={(el) => (cardsRef.current[index] = el)}>
            <div className="Whatwedo-content">
              <div className="text">
                <h6 className="Whatwedo-badge">{item.title}</h6>
                <h2>{item.h2Title}</h2>
                <p>{item.contentText}</p>
                <button className="Whatwedo-Button">Discover more</button>
              </div>
              <div className="image">
                <img src={item.imageUrl} alt={item.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whatwedo;
