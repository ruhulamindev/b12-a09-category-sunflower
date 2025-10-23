import React from "react";
import MyContainerLayout from "./MyContainerLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSwiper = () => {
  return (
    <MyContainerLayout>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        className="mySwiper rounded mt-1"
      >
        <SwiperSlide>
          <img
            src="/ui/img-1.jpg"
            alt="Slide 1"
            className="w-full h-[350px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xl md:text-3xl lg:text-4xl font-semibold text-center px-4">
            Welcome to A Local Skill Exchange Platform 🌻
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/ui/img-2.jpg"
            alt="Slide 2"
            className="w-full h-[350px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xl md:text-3xl lg:text-4xl font-semibold text-center px-4">
            Welcome to A Local Skill Exchange Platform 🌻
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/ui/img-3.png"
            alt="Slide 3"
            className="w-full h-[350px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xl md:text-3xl lg:text-4xl font-semibold text-center px-4">
            Welcome to A Local Skill Exchange Platform 🌻
          </div>
        </SwiperSlide>
      </Swiper>
    </MyContainerLayout>
  );
};

export default HeroSwiper;
