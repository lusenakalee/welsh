import React from "react";
import "./Locations.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay } from "swiper";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LocationPic from "../assets/location.png";
import LocationPic2 from "../assets/location2.png";
import LocationPic3 from "../assets/location3.png";
import LocationPic4 from "../assets/location3.png";

SwiperCore.use([Pagination, Navigation]);

function Locations() {


  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
     
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 2000 }}
      className="mySwiper px-4 pt-5 text-xs"
    >
  
      <SwiperSlide>
        <img
          alt="..."
          className="max-w-full rounded-lg shadow-lg"
          src={LocationPic}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          alt="..."
          className="max-w-full rounded-lg shadow-lg"
          src={LocationPic2}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          alt="..."
          className="max-w-full rounded-lg shadow-lg"
          src={LocationPic3}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          alt="..."
          className="max-w-full rounded-lg shadow-lg"
          src={LocationPic4}
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Locations;
