import React from "react";
import "./testimonials.css";
// import AVTR1 from "../../assets/avatar1.jpg";
// import AVTR2 from "../../assets/avatar2.jpg";
// import AVTR3 from "../../assets/avatar3.jpg";
// import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    name: "MindX Technology School",
    review:
      "Second Prize of MindX's Hackathon",
  },
  {
    name: "Banking Academy",
    review:
      "Encouragement scholarships of Banking Academy.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>My Archivements</h5>
      <h2>Awarded</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {data.map(({ name, review },index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
