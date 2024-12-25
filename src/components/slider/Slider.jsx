import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import slider1 from "../../assets/img/SLDIER1.jpg";
import slider2 from "../../assets/img/SLDIER2.jpg";
import slider3 from "../../assets/img/SLDIER3.jpg";

export default function Slider() {
  const [background, setBackground] = useState("radial-gradient(circle, rgba(24,18,53,0.13489145658263302) 10%, rgba(23,18,53,1) 60%)");
  const handleSlideChange = (swiper) => {
    const gradients = [
      "radial-gradient(circle, rgba(24,18,53,0.13489145658263302) 10%, rgba(23,18,53,1) 60%)",
    ];
    setBackground(gradients[swiper.activeIndex % gradients.length]);
  };
  return (
    <div
      style={{
        background: background,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        transition: "background 0.5s ease",
        position: "relative",
        margin:"20px 0px"
      }}
    >
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-full h-full"
        onSlideChange={(swiper) => handleSlideChange(swiper)}
      >
        {[slider1, slider2, slider3].map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: background,
                  mixBlendMode: "multiply",
                }}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="absolute w-[60%] inset-0 flex items-center justify-center pointer-events-none"
        style={{
          zIndex: 10, 
        }}
      >
        <h1 className="text-whitec mr-10 text-center text-[22px] sm:text-[28px] md:text-[24px] lg:text-[32px] xl:text-[32px] font-bold px-4">
  قاصدک سامانه پیشرو در صنعت تلکام کشور
  <br />
  با ۲۵ سال سابقه درخشان!!!
</h1>

      </div>
    </div>
  );
}
