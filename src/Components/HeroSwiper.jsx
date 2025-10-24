import React from "react";
import MyContainerLayout from "./MyContainerLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const HeroSwiper = () => {
  return (
    <MyContainerLayout>
      <div className="bg-amber-300 flex flex-col md:flex-row items-center gap-6 border p-2">
        {/* left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-4">
            Welcome to A Local Skill Exchange Platform
          </h1>
          <p className="text-gray-700 text-lg md:text-xl">
            Learn, Share, and Grow Your Skills with Local Talents.
          </p>
        </motion.div>
        {/* right */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 w-full"
        >
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
                src="/img-1.jpg"
                alt="Slide 1"
                className="w-full h-auto object-contain "
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/img-2.jpg"
                alt="Slide 2"
                className="w-full h-auto object-contain flex items-center"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/img-3.jpg"
                alt="Slide 3"
                className="w-full h-auto object-contain "
              />
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </MyContainerLayout>
  );
};

export default HeroSwiper;
