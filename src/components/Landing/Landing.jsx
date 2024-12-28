import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function Landing() {
  const images = [
    'https://ghasedak.com/files/1.jpg',
    'https://ghasedak.com/files/2.jpg',
    'https://ghasedak.com/files/3.jpg',
  ];

  return (
    <div className="h-[100vh] relative flex flex-col">
      {/* Slider */}
      <div className="flex-grow relative">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          className="h-full w-full"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Content */}
      <div
        className="w-full max-w-[90%] mx-auto -mt-[22%] p-6 bg-hero-bg bg-cover rounded-xl shadow-lg flex flex-col items-center justify-center gap-5 z-10"
      >
        <span className="text-goldtext drop-shadow-md text-[20px] md:text-[28px] lg:text-[38px] font-normal text-center">
          فرصتی طلایی و تکرار نشدنی!!!
        </span>
        <span className="text-whitec drop-shadow-md font-bold text-[28px] md:text-[40px] lg:text-[48px] text-center">
          جشن ۲۵ سالگی قاصدک سامانه
        </span>
        <span className="text-whitec drop-shadow-md font-medium text-[16px] md:text-[24px] lg:text-[32px] text-center">
          بپاس ۲۵ سال همراهی شما، با ۲۵+۲۵ درصد تخفیف ویژه قدردانی از وفاداری شما
        </span>
      </div>
    </div>
  );
}
