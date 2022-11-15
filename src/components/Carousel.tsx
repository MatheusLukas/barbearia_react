import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
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
        className="mySwiper "
        id="carousel"
      >
        <SwiperSlide>
          <Image
            width={225}
            height={350}
            className="rounded-none md:rounded-lg "
            src="/img1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={225}
            height={350}
            className="rounded-none md:rounded-lg"
            src="/img2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={225}
            height={350}
            className="rounded-none md:rounded-lg "
            src="/img3.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={225}
            height={350}
            className="rounded-none md:rounded-lg"
            src="/img4.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={225}
            height={350}
            className="rounded-none md:rounded-lg "
            src="/img5.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={225}
            height={350}
            className="rounded-none md:rounded-lg "
            src="/img6.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
