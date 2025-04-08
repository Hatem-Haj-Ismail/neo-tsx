import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Testimonials.scss";
import hasan from "../../../../img/hasan_saoud-300x300-1.jpg";
import Jadid from "../../../../img/jadid.png";
import Kerem from "../../../../img/kerem.png";

// Importiere Material UI Icons
import { Star } from "@mui/icons-material";

// Definiere den Typ für Testimonials
interface Testimonial {
  id: number;
  name: string;
  position: string;
  image: string;
  message: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Hasan Al-Soud",
    position: "CEO Of Tiptop",
    image: hasan,
    message:
      "My new startup app is so much faster and easier to work with than my old one, and the team helped us to grow technically and move faster.",
  },
  {
    id: 2,
    name: "Michael Brown",
    position: "CTO of InnovateX",
    image: Jadid,
    message:
      "Their technical expertise and attention to detail helped us build a scalable and reliable web application.",
  },
  {
    id: 3,
    name: "Emily Davis",
    position: "Product Designer",
    image: Kerem,
    message:
      "The UI/UX improvements they made were a game-changer for our product. Highly recommended!",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="Testimonials-container">
      <div className="header">
        <span className="badge">Testimonials</span>
        <h2>
          <span>Success Stories</span> That Highlight Our Impact
        </h2>
      </div>

      <div className="Testimonials-card">
        <Swiper
          modules={[Pagination, Navigation, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="Testimonials-content">
                <div className="testimonial-text">
                  <div className="testimonial-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <h5>{testimonial.name}</h5>
                  <p className="position">{testimonial.position}</p>

                  {/* Material UI Stars */}
                  <div className="stars">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} color="primary" fontSize="large" />
                    ))}
                  </div>

                  <p className="testimonial-message">{testimonial.message}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;