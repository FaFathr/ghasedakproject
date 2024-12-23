import React from "react";
import staricon from "../../../assets/icons/staricon.png";

export default function Form() {
  const options = [
    { id: 1, label: "سامانه  IPDR ", value: "IPDR" },
    { id: 2, label: "سامانه مهتاب PCEF/DPI ", value: "PCEF/DPI" },
    { id: 3, label: "سامانه OCS ", value: "OCS" },
    { id: 4, label: " سامانه CGN IP Plus ", value: "CGN IP Plus" },
    { id: 5, label: " نرم افزار SAMFONY BSS  ", value: "SAMFONY BSS" },
    { id: 6, label: " نرم افزار NETBILL AAA ", value: "NETBILL AAA" },
  ];

  return (
    <>
      <div className="bg-bgf w-full flex flex-col h-auto justify-start lg:flex-row">
        {/* سمت راست */}
        <div className="w-full lg:w-1/2 py-[110px] px-16 ">
          <img className="h-12 mb-4" src={staricon} alt="star icon" />
          <p className="text-[28px] lg:text-[28px] mb-4 text-whitec">
            چگونه از این
            <span className="text-goldtext"> فرصت طلایی </span>
            استفاده کنیم؟
          </p>
          <p className="text-whitec text-justify mt-10 flex flex-col text-[14px] lg:text-[16px]">
            از تاریخ ۱ تا ۳۰ دی‌ماه، با خرید هر محصول، به‌صورت خودکار از
            تخفیف بهره‌مند شوید. اگر دو محصول خریداری کنید، محصول دوم با ۵۰٪
            تخفیف ارائه خواهد شد.
            <br />
            <span className="text-whitec mt-20 text-justify">
              1-محصول موردنظر خود را از لیست انتخاب کنید.
              <br />
              2-برای مشاوره رایگان درخواست خود را ثبت کنید.
            </span>
          </p>
        </div>

        {/* سمت چپ */}
        <div className="w-full lg:w-1/2 bg-whitec p-6 flex items-center justify-center">
          <section className="w-full">
            <div className="container mx-auto">
              <div className="p-4 py-6 bg-gray-50 dark:bg-gray-800">
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="نام"
                      className="block w-full px-4 py-2 text-gray-700 bg-grayinput border border-bordercolor focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                      type="text"
                      placeholder="نام خانوادگی"
                      className="block w-full px-4 py-2 text-gray-700 bg-grayinput border border-bordercolor focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="mt-4">
                    <input
                      type="tel"
                      placeholder="09121234567"
                      className="block w-full px-4 py-2 text-gray-700 bg-grayinput border border-bordercolor focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="mt-4">
                    <select
                      className="block w-full px-4 py-2 text-gray-700 bg-grayinput border border-bordercolor focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      <option value="" disabled selected>
                        نوع محصول
                      </option>
                      {options.map((option) => (
                        <option key={option.id} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button className="w-full px-4 bg-bgf text-whitec py-2 mt-4 text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    ارسال پیام
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
