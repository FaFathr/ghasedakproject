import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function GoldDetailCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  mt-[7%] justify-center items-center">
      <div className="text-right space-y-4">
        <div className="flex items-center space-x-2">
          <FaCheckCircle className="text-[#FFD93B] ml-2" size={25} />
          <span className="text-[#000000] font-semibold text-[32px]">
            چرا این فرصت طلایی است؟
          </span>
        </div>
        <div className="break-words text-[20] text-[#363636] font-normal leading-10">
          ۲۵ سال تلاش، تخصص، و تعهد به ارائه بهترین خدمات و محصولات در صنعت
          تلکام ایران را با شما جشن می‌گیریم. این کمپین به پاس قدردانی از اعتماد
          شما طراحی شده است. هدف ما این است که کسب‌وکار شما از آینده فناوری
          بیشترین بهره را ببرد.
        </div>
        <ul className="list-disc mr-[1rem] flex flex-col gap-6 ">
          <li>
            <span className="text-[#363636] font-semibold">۲۵٪ تخفیف</span> نقدی
            برای تمامی محصولات.
          </li>
          <li>
            <span className="text-[#363636] font-semibold">۵۰٪تخفیف</span> برای
            محصول دوم (انتخاب با شما)
          </li>
          <li>
            <span className="text-[#363636] font-semibold">پرداخت اقساطی</span>{" "}
            ۶ ماهه تا سقف ۵۰۰ میلیون تومان.
          </li>
          <li>
            <span className="text-[#363636] font-semibold">مشاوره رایگان</span>{" "}
            برای انتخاب محصول مناسب.
          </li>
        </ul>
      </div>
      <div className="flex justify-end items-center">
        <img
          src="https://ghasedak.com/files/mhnds.png"
          alt="Gold Campaign"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
}

export default GoldDetailCard;
