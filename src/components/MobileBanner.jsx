import React from "react";

import logoMdwx from "@/assets/logoMdwx.jpg";

import logoEliana from "@/assets/logoEliana1.jpg";
import logoVapeshop from "@/assets/logoVapeshop.jpg";
import logoMoon from "@/assets/logoMoon.jpg";
const MobileBanner = () => {
  const links = [
    {
      id: 10,
      link: "https://moon-portafolio.vercel.app/",
      src: logoMoon,
      brand:
        "rounded-full object-cover w-20 h-20 md:w-40 md:h-40 shadow-thPrimary hover:shadow-thPrimary duration-300 cursor-pointer hover:shadow-xl shadow-md",
    },
    {
      id: 6,
      link: "https://eliana-vapeshop.vercel.app/",
      src: logoVapeshop,
      brand:
        "rounded-full object-cover w-20 h-20 md:w-40 md:h-40 shadow-[#35EEED] hover:shadow-[#35EEED] duration-300 cursor-pointer hover:shadow-xl shadow-md",
    },
    {
      id: 2,
      link: "https://eliana-maxwax.vercel.app/",
      src: logoMdwx,
      brand:
        "rounded-full object-cover w-20 h-20 md:w-40 md:h-40 shadow-[#29fd04] hover:shadow-[#29fd04]   duration-300 cursor-pointer hover:shadow-xl shadow-md",
    },
    {
      id: 4,
      link: "https://eliana-portafolio.vercel.app/",
      src: logoEliana,
      brand:
        "rounded-full object-cover w-20 h-20 md:w-40 md:h-40 shadow-thPrimary hover:shadow-thPrimary duration-300 cursor-pointer hover:shadow-xl shadow-md",
    },
  ];
  return (
    <div className=" lg:hidden flex items-center justify-center py-8 md:gap-5 gap-2">
      {links.map(({ id, link, src, brand }) => (
        <a key={id} href={link}>
          <div>
            <img src={src} alt="" className={brand} />
          </div>
        </a>
      ))}
    </div>
  );
};

export default MobileBanner;
