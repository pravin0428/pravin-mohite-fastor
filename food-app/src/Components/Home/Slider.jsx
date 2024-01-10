import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Image } from "@chakra-ui/react";
import "swiper/swiper-bundle.css";

export default function Slider() {
  const imageStyle = {
    maxHeight: "400px",
    width: "100%",
    objectFit: "cover",
    objectPosition: "top",
  };

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
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 2000 }}
        autoHeight={true}
      >
        <SwiperSlide>
          <Image
            src="https://www.treebo.com/blog/wp-content/uploads/2023/09/Header-7.jpg"
            alt="banner2"
            style={imageStyle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://image.freepik.com/vector-gratis/banner-horizontal-restaurante-hamburguesas_23-2148608944.jpg"
            alt="banner3"
            style={imageStyle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Fresh-and-healthy-vegetables-banner-design-template-download-scaled.jpg"
            alt="banner3"
            style={imageStyle}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
