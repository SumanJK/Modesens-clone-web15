import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../style/men/slidingnew.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export const Slidingnew = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={false}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" col ">
            <div
              style={{ position: "relative", height: "100%", width: "100%" }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://modesens.com/banner/11179/getimg/?img=%2Fbanner%2F20220309-modesens-Kids-1140x400.jpg"
                alt=""
              />
            </div>
            <div
              className="texts col1"
              style={{ position: "absolute", left:"0" ,right:"1",bottom:"0"}}
            >
              <h1>The Latest Kids Style</h1>
              <b>Shop for your little angel</b>
              <br />
              <a href="">Shop Now</a>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
};
