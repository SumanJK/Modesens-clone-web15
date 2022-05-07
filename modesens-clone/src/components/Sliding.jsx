import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../style/slider.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

export const Sliding = () =>{
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper container"
      >
        <SwiperSlide> 
          <div className="col-1 col">
          
              <div style={{position: "relative", height: "100%",width: "100%"}}>
              <img style={{height: "100%", width: "100%"}} src="https://modesens.com/banner/11724/getimg/?img=%2Fbanner%2F20220504-modesens-Oluxury-1140x400.jpg" alt="" />
              </div>
              <div style={{position: "absolute", zIndex:"2",bottom: "0"}}>
              <h1 >You Can Have Stunning New Arrivals</h1>
            <b>Use code MODESENS30 for 30% off</b>
            <br />
            <a href="">Shop Now</a>
              </div>
            
                
          </div>
        </SwiperSlide>
        <SwiperSlide> 
          <div className="col-2 col">
          <div className="text-1">
            <h1>Activewere Brands I Love</h1>
            <b>The Best Workout Clothers for Women in 2022</b>
            <br />
            <a href="">Read Now</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide> 
          <div className="col-3 col">
          <div className="text-2">
            <h1>The Perfect Present is Here</h1>
            <b>Shop this extraordinary Mother's Day Edit</b>
            <br />
            <a href="">Shop Now</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide> 
          <div className="col-4 col">
          <div className="text-2">
            <h1>Always Be a Step Ahead</h1>
            <b>Shop statement-making sandals</b>
            <br />
            <a href="">Shop Now</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide> 
          <div className="col-5 col">
          <div className="text-2">
            <h1>Always Trend: Cut-Outs</h1>
            <b>An elevated way to show some skin</b>
            <br />
            <a href="">Shop Now</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide> 
          <div className="col-6 col">
          <div className="text-2">
            <h1>Let's Shop at Harrods this Weekend</h1>
            <b>Rewards members get a special 10% off</b>
            <br />
            <a href="">Shop Now</a>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}