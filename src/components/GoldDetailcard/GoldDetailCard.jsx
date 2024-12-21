import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function GoldDetailCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="text-right space-y-4">
        <div className="flex items-center space-x-2">
          <FaCheckCircle className="text-[#FFD93B] ml-2" size={25} />
          <span className="text-[#000000] font-semibold ">
            چرا این فرصت طلایی است؟
          </span>
        </div>
        <div className="break-words text-[#363636] font-normal">
          ۲۵ سال تلاش، تخصص، و تعهد به ارائه بهترین خدمات و محصولات در صنعت
          تلکام ایران را با شما جشن می‌گیریم. این کمپین به پاس قدردانی از اعتماد
          شما طراحی شده است. هدف ما این است که کسب‌وکار شما از آینده فناوری
          بیشترین بهره را ببرد.
        </div>
        <ul className="list-disc mr-[1rem] ">
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
      <div className="flex justify-center items-center">
        <img
          src="src/assets/img/testimgs.jpg"
          alt="Gold Campaign"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
}

export default GoldDetailCard;
