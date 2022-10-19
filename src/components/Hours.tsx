import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Hours() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="card_hours" id="manha">
          08:00
        </SwiperSlide>
        <SwiperSlide className="card_hours">09:00</SwiperSlide>
        <SwiperSlide className="card_hours">10:00</SwiperSlide>
        <SwiperSlide className="card_hours">11:00</SwiperSlide>
        <SwiperSlide className="card_hours">12:00</SwiperSlide>
        <SwiperSlide className="card_hours">13:00</SwiperSlide>
        <SwiperSlide className="card_hours">14:00</SwiperSlide>
        <SwiperSlide className="card_hours" id="tarde">
          15:00
        </SwiperSlide>
        <SwiperSlide className="card_hours">16:00</SwiperSlide>
        <SwiperSlide className="card_hours">17:00</SwiperSlide>
        <SwiperSlide className="card_hours" id="night">
          18:00
        </SwiperSlide>
        <SwiperSlide className="card_hours">19:00</SwiperSlide>
        <SwiperSlide className="card_hours">20:00</SwiperSlide>
      </Swiper>
    </>
  );
}
