import React from 'react';
import logo from '../../../assets/img/logo.png';
import footericon from '../../../assets/img/Group.png';

export default function Mainsec() {
  const services = [
    { id: 1, name: 'سامانه IPDR', link: 'https://www.ghasedak.com/portal/%d8%b3%d8%a7%d9%85%d8%a7%d9%86%d9%87-ipdr/' },
    { id: 2, name: 'سامانه مهتاب PCEF/DPI', link: 'https://www.ghasedak.com/portal/%d9%86%d8%b1%d9%85-%d8%a7%d9%81%d8%b2%d8%a7%d8%b1-%d9%85%d9%87%d8%aa%d8%a7%d8%a8/' },
    { id: 3, name: 'سامانه پستخانه Mail Server', link: 'https://www.ghasedak.com/portal/%d9%86%d8%b1%d9%85-%d8%a7%d9%81%d8%b2%d8%b2%d8%a7%d8%b1-%d9%be%d8%b3%d8%aa%d8%ae%d8%a7%d9%86%d9%87/' },
    { id: 4, name: 'سامانه دژ UTM', link: 'https://www.ghasedak.com/portal/%d8%b3%d8%a7%d9%85%d8%a7%d9%86%d9%87-%d8%af%da%98/' },
    { id: 5, name: 'سامانه NetBill', link: 'https://www.ghasedak.com/portal/%d9%86%d8%b1%d9%85-%d8%a7%d9%81%d8%b2%d8%a7%d8%b2-netbill/' },
    { id: 6, name: 'سامانه سمفونی BSS', link: 'https://www.ghasedak.com/portal/%d9%86%d8%b1%d9%85-%d8%a7%d9%81%d8%b2%d8%b2%d8%a7%d8%b1-%d8%b3%d9%85%d9%81%d9%88%d9%86%db%8c-bss/' },
    { id: 7, name: 'سامانه CGN IP PLUS', link: 'https://www.ghasedak.com/portal/%d8%b3%d8%a7%d9%85%d8%a7%d9%86%d9%87-cgn-ip-plus/' },
    { id: 8, name: 'سامانه OCS', link: 'https://www.ghasedak.com/portal/%d9%86%d8%b1%d9%85-%d8%a7%d9%81%d8%b2%d8%a7%d8%b2-ocs/' },
  ];

  const news = [
    { id: 1, title: ' حضور قاصدک سامانه در پنجمین همایش مدیران فناوری اطلاعات', link: '#', date: 'اردیبهشت 27, 1396' },
    { id: 2, title: 'NetBill محصول برگزیده در پنجمین همایش مدیران فناوری اطلاعات', link: '#', date: 'فروردین 5, 1396' },
    { id: 3, title: 'برگزاری دوره آموزشی نت بیل', link: '#', date: 'بهمن 11, 1395' },
  ];

  return (
    <div className="bg-bgf flex flex-wrap lg:flex-nowrap justify-center items-stretch gap-20 h-auto w-full py-16 px-8 bg-white text-black">
      {/* بخش معرفی */}
      <div className="w-full md:w-[45%] lg:w-[25%] text-center md:text-right min-h-[250px]">
        <img src={logo} alt="logo" className="h-[64px] mx-auto md:mx-0" />
        <p className="mt-4 text-grayt text-[13px] text-justify">
          جمعی از فارغ التحصیلان دانشگاه صنعتی شریف، مهندسین کارآزموده، باتجربه و جوان شرکت را پایه گذاری کردند و از ابتدای
          تاسیس بعنوان یکی از پیشگامان در ایران مطرح بوده‏ و با بهره‏ گیری از متخصصین مجرب توانسته ‏است طی سالهای گذشته
          ‏ارائه کننده کشور باشد.
        </p>
      </div>

      {/* بخش اطلاعات تماس */}
      <div className="w-full md:w-[45%] lg:w-[25%] text-center md:text-right min-h-[250px]">
        <h3 className="font-bold text-lg text-whitec mb-4">اطلاعات تماس</h3>
        <ul>
          <li className="text-grayt text-[13px]">تهران ، شهر پردیس ، بخش مرکزی ، پردیس فاز ۶ ، پارک فناوری پردیس ، خیابان دانش شمالی ، کوچه دانش یازدهم ، قطعه </li>
          <li className="text-grayt text-[13px]">کدپستی: ۱۶۵۴۱۲۰۹۶۲</li>
          <li className="text-grayt text-[13px]">شماره تلفن: 021-73010</li>
          <li className="text-grayt text-[13px]">پست الکترونیک: info[at]ghasedak.com</li>
        </ul>
      </div>

      {/* بخش خدمات و محصولات */}
      <div className="w-full md:w-[45%] lg:w-[25%] text-center md:text-right text-whitec min-h-[250px]">
        <h3 className="font-bold text-lg mb-4">خدمات و محصولات</h3>
        <div>
          {services.map((service) => (
            <div key={service.id} className="flex justify-start items-center mt-2">
              <img className="h-[14px]" src={footericon} alt="icon" />
              <a
                href={service.link}
                className="text-graypro mr-4 text-[13px] hover:underline"
              >
                {service.name}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* بخش اخبار قاصدک */}
      <div className="w-full md:w-[45%] lg:w-[25%] text-center md:text-right text-whitec min-h-[250px]">
        <h3 className="font-bold text-lg mb-4">اخبار قاصدک</h3>
        <div>
          {news.map((item) => (
            <div key={item.id} className="mb-4">
              <a
                href={item.link}
                className="text-grayt text-[13px] hover:underline"
              >
                {item.title}
              </a>
              <div className="text-graypro text-[11px]">{item.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
