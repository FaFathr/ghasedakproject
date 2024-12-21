import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function AllCards() {
  const cards = [
    {
      id: 1,
      title: "نرم افزار NetBill",
      description: "سامانه جامع مدیریت کاربران اینترنت",
      features: [
        "سیستم یکپارچه با پروتکل‌های AAA",
        "هماهنگ با استانداردهای RFC",
        "پشتیبانی از ISPهای مختلف",
      ],
      image: "src/assets/img/testimgs.jpg",
    },
    {
      id: 2,
      title: "نرم افزار NetBill",
      description: "سامانه جامع مدیریت کاربران اینترنت",
      features: [
     
        "NetBill سيستمي كامل و جامع منطبق با",
        "استانداردهای RFC روز در حوزه AAA",
      ],
      image: "src/assets/img/testimgs.jpg",
    },
    {
      id: 3,
      title: "نرم افزار NetBill",
      description: "سامانه جامع مدیریت کاربران اینترنت",
      features: [
      
        "NetBill سيستمي كامل و جامع منطبق با",
        "استانداردهای RFC روز در حوزه AAA",
      ],
      image: "src/assets/img/testimgs.jpg",
    },
    {
      id: 4,
      title: "نرم افزار NetBill",
      description: "سامانه جامع مدیریت کاربران اینترنت",
      features: [
      
        "NetBill سيستمي كامل و جامع منطبق با",
        "استانداردهای RFC روز در حوزه AAA",
      ],
      image: "src/assets/img/testimgs.jpg",
    },
    {
      id: 5,
      title: "نرم افزار NetBill",
      description: "سامانه جامع مدیریت کاربران اینترنت",
      features: [
        
        "NetBill سيستمي كامل و جامع منطبق با",
        "استانداردهای RFC روز در حوزه AAA",
      ],
      image: "src/assets/img/testimgs.jpg",
    },
    {
      id: 6,
      title: "نرم افزار NetBill",
      description: "سامانه جامع مدیریت کاربران اینترنت",
      features: [
  
        "NetBill سيستمي كامل و جامع منطبق با",
        "استانداردهای RFC روز در حوزه AAA",
      ],
      image: "src/assets/img/testimgs.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
      {cards.map((card) => (
        <div
          key={card.id}
          className="relative w-full h-60 overflow-hidden rounded-lg"
        >
          <div
            className=" absolute inset-0 bg-[#F5F7F8] flex flex-col justify-center items-start p-2 text-right"
            style={{
              clipPath: "polygon(100% 0, 0 0, 100% 100%)",
            }}
          >
            <div className="mt-0 mb-10">
              <h3 className="text-lg font-bold text-gray-800 ">{card.title}</h3>
              <p className="text-sm text-[#404040] mt-2 font-semibold">{card.description}</p>
              <ul className="text-sm text-gray-600 mt-4 space-y-1">
                {card.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>

              <IoArrowForwardCircleOutline
                className="mt-4 text-[#A8A7B9]"
                size={35}
              />
            </div>
          </div>

          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              clipPath: "polygon(0 100%, 100% 100%, 0 0)",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default AllCards;
