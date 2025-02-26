import CGNIPPlus from "../../assets/img/CGN IP Plus.png";
import MAHTABPCEFDPI from "../../assets/img/MAHTAB PCEFDPI.png";
import IPDR from "../../assets/img/IPDR.png";
import NetBill from "../../assets/img/NetBill.png";
import OCSOCS from "../../assets/img/OCS.png";
import SAMFONY from "../../assets/img/SAMFONY.jpg";
import iconreadmore from "../../assets/icons/iconreadmore.png";

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
      image: NetBill,
      URL: "https://ghasedak.com/portal/%d9%86%d8%b1%d9%85-%d8%a7%d9%81%d8%b2%d8%a7%d8%b1-netbill/",
    },
    {
      id: 2,
      title: " نرم افزار SAMFONY BSS   ",
      description: "سامانه جامع پشتیبانی و مدیریت کسب و کار تلکام",
      features: [
        " یکی از خصوصیات ذاتی اغلب  ",
        "فضاهای کسب و کار، نرخ تغییرات زیاد به ......" ,
      ],
      image: SAMFONY,
      URL: "https://ghasedak.com/portal/%d9%86%d8%b1%d9%85-%d8%a7%d9%81%d8%b2%d8%a7%d8%b1-%d8%b3%d9%85%d9%81%d9%88%d9%86%db%8c-bss/",
    },
    {
      id: 3,
      title: "سامانه CGN IP Plus  ",
      description: "سامانه مدیرت IP",
      features: [
        "با رشد و گسترش خدمات اینترنت پرسرعت",
        "ر کشور، مساله کمبود IP برای ارائه......",
      ],
      image: CGNIPPlus,
      URL: "https://ghasedak.com/portal/%d8%b3%d8%a7%d9%85%d8%a7%d9%86%d9%87-cgn-ip-plus/",
    },
    {
      id: 4,
      title: " سامانه OCS ",
      description: "سیستم شارژ آنلاین (OCS)",
      features: [
        "سیستم شارژ آنلاین (OCS) یک سیستم ",
        "مورد استفاده در شبکه‌های ارتباطات",
      ],
      image: OCSOCS,
      URL: "https://ghasedak.com/portal/%d9%86%d8%b1%d9%85-%d8%a7%d9%81%d8%b2%d8%a7%d8%b1-ocs/",
    },
    {
      id: 6,
      title: " سامانه مهتاب PCEF/DPI ",
      description: "نرم افزار تفکیک ترافیک مهتاب",
      features: [
        " سامانه MAHTAB PCEF/DPI راه حلی جامع ",
        "  و کاملا بومی و منعطف جهت تحلیل و ......",
      ],
      image: MAHTABPCEFDPI,
      URL: "https://ghasedak.com/portal/%d9%86%d8%b1%d9%85-%d8%a7%d9%81%d8%b2%d8%a7%d8%b1-%d9%85%d9%87%d8%aa%d8%a7%d8%a8/",
    },
    {
      id: 7,
      title: "  سامانه  IPDR",
      description: "سابقه جزئیات پروتکل اینترنت ",
      features: [
        "سابقه جزئیات پروتکل اینترنت (IPDR) یک ",
        " فرمت استاندارد برای جمع‌آوری و .......",
      ],
      image: IPDR,
      URL: "https://ghasedak.com/portal/%d8%b3%d8%a7%d9%85%d8%a7%d9%86%d9%87-ipdr/",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mt-[2%] gap-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className="flex rounded-lg shadow-md overflow-hidden transform transition-all duration-700 hover:scale-95 hover:shadow-lg"
        >
          {/* متن سمت راست */}
          <div className="w-1/2 p-4 flex flex-col bg-whitec justify-center gap-10 items-start">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-headingpro mb-2">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-headingpro my-7">
                {card.description}
              </p>
              <ul className="text-xs sm:text-sm md:text-base leading-6 font-thin text-justify opacity-80 text-headingpro list-disc list-inside">
                {card.features.map((feature, index) => (
                  <li className="list-none" key={index}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center w-full">
              <a
                href={card.URL}
                className="text-blue-500 hover:text-blue-700 mt-4 text-sm flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={iconreadmore} alt="read more" />
              </a>
            </div>
          </div>
          {/* تصویر سمت چپ */}
          <div className="w-1/2 h-full">
            <img
              className="w-full h-full bg-cover object-cover"
              src={card.image}
              alt={card.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllCards;
