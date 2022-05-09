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
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
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
                src="https://modesens.com/banner/11768/getimg/?img=%2Fbanner%2F20220505blog-modesens1140x400.jpg"
                alt=""
              />
            </div>
            <div
              className="texts col1"
              style={{ position: "absolute", bottom: "0" }}
            >
              <h1>You Can Have Stunning New Arrivals</h1>
              <b>Use code MODESENS30 for 30% off</b>
              <br />
              <a href="">Shop Now</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col">
            <div
              style={{ position: "relative", height: "100%", width: "100%" }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://modesens.com/banner/11730/getimg/?img=%2Fbanner%2F20220503-modesens-PalmAngels-1140x400-M.jpg"
                alt=""
              />
            </div>

            <div
              className="texts"
              style={{ position: "absolute", bottom: "0" }}
            >
              <h1>Activewere Brands I Love</h1>
              <b>The Best Workout Clothers for Women in 2022</b>
              <br />
              <a href="">Read Now</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col">
            <div
              style={{ position: "relative", height: "100%", width: "100%" }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://modesens.com/banner/11727/getimg/?img=%2Fbanner%2F20220502-modesens-Mothersday-1140x400.jpg"
                alt=""
              />
            </div>

            <div
              className="texts"
              style={{ position: "absolute", zIndex: "2", bottom: "0" }}
            >
              <h1>The Perfect Present is Here</h1>
              <b>Shop this extraordinary Mother's Day Edit</b>
              <br />
              <a href="">Shop Now</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col ">
            <div
              style={{ position: "relative", height: "100%", width: "100%" }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://modesens.com/banner/11649/getimg/?img=%2Fbanner%2F20220426-modesens-StatementSandal-1140x400-M.jpg"
                alt=""
              />
            </div>

            <div
              className="texts"
              style={{ position: "absolute", zIndex: "2", bottom: "0" }}
            >
              <h1>Always Be a Step Ahead</h1>
              <b>Shop statement-making sandals</b>
              <br />
              <a href="">Shop Now</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col">
            <div
              style={{ position: "relative", height: "100%", width: "100%" }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://modesens.com/banner/11586/getimg/?img=%2Fbanner%2F20220419-modesens-TheBermudaShorts-1140x400-M.jpg"
                alt=""
              />
            </div>

            <div
              className="texts"
              style={{ position: "absolute", zIndex: "2", bottom: "0" }}
            >
              <h1>Always Trend: Cut-Outs</h1>
              <b>An elevated way to show some skin</b>
              <br />
              <a href="">Shop Now</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col">
            <div
              style={{ position: "relative", height: "100%", width: "100%" }}
            >
              <img
                style={{ height: "100%", width: "100%", margin: "auto" }}
                src="https://modesens.com/banner/11755/getimg/?img=%2Fbanner%2F20220506-modesens-Harrods-1140x400-M.jpg"
                alt=""
              />
            </div>

            <div
              className="texts"
              style={{ position: "absolute", bottom: "0" }}
            >
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
};
