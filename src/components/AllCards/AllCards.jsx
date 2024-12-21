import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function AllCards() {
  const cards = [
    {
      id: 1,
      title: " نرم افزار NETBILL AAA ",
      description: "سامانه جامع مدیریت کاربران اینترنت",
      features: [
        "NetBill سيستمي كامل و جامع منطبق با",
        "استانداردهای RFC روز در حوزه AAA",
      ],
      image: "src/assets/img/testimgs.jpg",
      URL:"https://ghasedak.com/portal/%d9%86%d8%b1%d9%85-%d8%a7%d9%81%d8%b2%d8%a7%d8%b1-netbill/"
    },
    {
      id: 2,
      title: " نرم افزار SAMFONY BSS   ",
      description: "سامانه جامع مدیریت کاربران اینترنت",
      features: [
        "NetBill سيستمي كامل و جامع منطبق با",
        "استانداردهای RFC روز در حوزه AAA",
      ],
      image: "src/assets/img/testimgs.jpg",
      URL:"https://ghasedak.com/portal/%d9%86%d8%b1%d9%85-%d8%a7%d9%81%d8%b2%d8%a7%d8%b1-%d8%b3%d9%85%d9%81%d9%88%d9%86%db%8c-bss/"
    },
    {
      id: 3,
      title: "سامانه CGN IP Plus  ",
      description: "سامانه جامع مدیریت کاربران اینترنت",
      features: [
        "NetBill سيستمي كامل و جامع منطبق با",
        "استانداردهای RFC روز در حوزه AAA",
      ],
      image: "src/assets/img/testimgs.jpg",
      URL:"https://ghasedak.com/portal/%d8%b3%d8%a7%d9%85%d8%a7%d9%86%d9%87-cgn-ip-plus/"
    },
    {
      id: 4,
      title: " سامانه OCS ",
      description: "سامانه جامع مدیریت کاربران اینترنت",
      features: [
        "NetBill سيستمي كامل و جامع منطبق با",
        "استانداردهای RFC روز در حوزه AAA",
      ],
      image: "src/assets/img/testimgs.jpg",
      URL:"https://ghasedak.com/portal/%d9%86%d8%b1%d9%85-%d8%a7%d9%81%d8%b2%d8%a7%d8%b1-ocs/"
    },
    {
      id: 5,
      title: "نرم افزار پستخانه",
      description: "سامانه جامع مدیریت کاربران اینترنت",
      features: [
        "NetBill سيستمي كامل و جامع منطبق با",
        "استانداردهای RFC روز در حوزه AAA",
      ],
      image: "src/assets/img/testimgs.jpg",
      URL:"https://ghasedak.com/portal/%d9%86%d8%b1%d9%85-%d8%a7%d9%81%d8%b2%d8%a7%d8%b1-%d9%be%d8%b3%d8%aa%d8%ae%d8%a7%d9%86%d9%87/"
    },
    {
      id: 6,
      title: " سامانه مهتاب PCEF/DPI ",
      description: "سامانه جامع مدیریت کاربران اینترنت",
      features: [
        "NetBill سيستمي كامل و جامع منطبق با",
        "استانداردهای RFC روز در حوزه AAA",
      ],
      image: "src/assets/img/testimgs.jpg",
      URL:"https://ghasedak.com/portal/%d9%86%d8%b1%d9%85-%d8%a7%d9%81%d8%b2%d8%a7%d8%b1-%d9%85%d9%87%d8%aa%d8%a7%d8%a8/"
    },
    {
      id: 7,
      title: "  سامانه  IPDR",
      description: "سامانه جامع مدیریت کاربران اینترنت",
      features: [
        "NetBill سيستمي كامل و جامع منطبق با",
        "استانداردهای RFC روز در حوزه AAA",
      ],
      image: "src/assets/img/testimgs.jpg",
      URL:"https://ghasedak.com/portal/%d8%b3%d8%a7%d9%85%d8%a7%d9%86%d9%87-ipdr/"
    },
    {
      id: 8,
      title: "سامانه دژUTM ",
      description: "سامانه جامع مدیریت کاربران اینترنت",
      features: [
        "NetBill سيستمي كامل و جامع منطبق با",
        "استانداردهای RFC روز در حوزه AAA",
      ],
      image: "src/assets/img/testimgs.jpg",
      URL:"https://ghasedak.com/portal/%d8%b3%d8%a7%d9%85%d8%a7%d9%86%d9%87-%d8%af%da%98/"
    },

  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
      {cards.map((card) => (
        <div key={card.id} className="relative w-full h-60 overflow-hidden  ">
          <div
            className=" absolute inset-0 bg-[#FFFFFF] flex flex-col justify-center items-start  text-right p-2"
            style={{
              clipPath: "polygon(100% 0, 0 0, 100% 100%)",
            }}
          >
            <div className="mb-16  ">
              <h3 className="text-lg font-bold text-gray-800 ">{card.title}</h3>
              <p className="text-sm text-[#404040] mt-2 font-semibold">
                {card.description}
              </p>

              <ul className="text-[12px]   sm:text-[11px] md:text-base lg:text-base text-[#404040] mt-2 leading-6">
                {card.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              {/* <IoArrowForwardCircleOutline
                className="mt-4 text-[#A8A7B9]"
                size={35}
              /> */}
                 <a
                href={card.URL}
                target="_blank" 
                rel="noopener noreferrer" 
              >
                <IoArrowForwardCircleOutline
                  className="mt-4 text-[#A8A7B9]"
                  size={35}
                />
              </a>
            </div>
          </div>
          <div
            className="absolute inset-0 p-2"
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              clipPath: "polygon(0 100%, 100% 100%, 0 0)",
            }}
          ></div>
          <div
            className="absolute inset-0 top bottom-[5px] top-[-3px]"
            style={{
              clipPath: "polygon(0 0, 1% 0, 100% 99%, 99% 100%)",
              backgroundColor: "#B0B0B0",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default AllCards;
