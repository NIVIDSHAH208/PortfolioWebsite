import React from "react";
import IMG1 from "../../assets/avatar1.jpg";
import IMG2 from "../../assets/avatar2.jpg";
import IMG3 from "../../assets/avatar3.jpg";
// import Swiper core and required modules
import {  Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const myData = [
  {
    key: 1,
    image: IMG1,
    name: "Akshay Shakhia",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    key: 2,
    image: IMG2,
    name: "Anupama Gupta",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    key: 3,
    image: IMG3,
    name: "Darshil Jogani",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const SwiperTestimonial = () => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="container testimonials__container"
    >
      {myData.map(({ key, image, name, review }) => {
        return (
          <SwiperSlide key={key} className="testimonial">
            <div className="client__avatar">
              <img src={image} alt={name} />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperTestimonial;
