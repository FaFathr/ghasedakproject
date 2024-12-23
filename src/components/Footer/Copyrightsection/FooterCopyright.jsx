import React from 'react';
import footerlogo from '../../../assets/img/logofooter.png';
import homeicon from '../../../assets/icons/HomeIcon.png';
import newsicon from '../../../assets/icons/newsicon.png';
import telephoneicon from '../../../assets/icons/telephoneicon.png';

export default function FooterCopyright() {
  const menuItems = [
    { icon: homeicon, label: 'خانه', link: 'https://ghasedak.com/portal/' },
    { icon: newsicon, label: 'درباره ما', link: 'https://ghasedak.com/portal/%d8%b3%d8%ae%d9%86-%d9%85%d8%af%db%8c%d8%b1%d8%b9%d8%a7%d9%85%d9%84/' },
    { icon: telephoneicon, label: 'تماس با ما', link: 'https://ghasedak.com/portal/contact/' },
  ];

  return (
    <div className='bg-bgf h-auto bg-opacity-90 flex flex-col md:flex-row justify-between items-center p-4'>
      <div className='mb-4 md:mb-'>
        <img src={footerlogo} alt="Footer Logo" className='w-24 md:w-auto' />
      </div>
      <div className='text-center md:text-left'>
        <span className='text-[8px] text-graypro'>
          کلیه حقوق مادی و معنوی این سایت متعلق به شرکت "قاصدک سامانه" می‌باشد.
        </span>
      </div>
      <div>
        <ul className='list-none flex flex-wrap justify-center md:justify-start'>
          {menuItems.map((item, index) => (
            <li key={index} className='flex items-center mr-4 mb-2 md:mb-'>
              <a href={item.link} className='flex items-center text-whitec mobile-link'>
                <img src={item.icon} alt={item.label} className='mr-2 mobile-icon' />
                <span className='text-whitec text-[10px] mx-1 mobile-text'>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
