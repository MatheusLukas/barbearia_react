import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={1}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="h-[350px]  " src="/img1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[350px] " src="/img2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[350px] " src="/img3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[350px] " src="/img4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[350px] " src="/img5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[350px] " src="/img6.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
