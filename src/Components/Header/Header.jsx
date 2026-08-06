import React from "react";
import HeaderCard from "../HeaderCard/HeaderCard";
import Badge from "../Badge/Badge";
import MainBtn from "../MainBtn/MainBtn";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import {Link} from "../../../node_modules/react-router"

export default function Header() {
  const badge = {
    title: "مرحبا بك في عدسة",
    color: "text-white",
    icon: (
      <div class="relative flex items-center justify-center">
        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75"></span>
        <span class="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
      </div>
    ),
  };

  const card = [
    {
      icon: <i className="fa-solid fa-users"></i>,
      title: "+50",
      desc: "مقالة",
      hover: "hover:scale-105 duration-300",
      gap: null,
      font: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 font-bold text-3xl",
      rounded: "rounded-3xl",
      bg: "bg-[#161616]/70",
    },
    {
      icon: <i className="fa-solid fa-newspaper"></i>,
      title: "+10ألف",
      desc: "قارئ",
      hover: "hover:scale-105 duration-300",
      gap: null,
      font: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 font-bold text-3xl",
      rounded: "rounded-3xl",
      bg: "bg-[#161616]/70",
    },
    {
      icon: <i className="fa-solid fa-pen-nib"></i>,
      title: "4",
      desc:"تصنيفات",
      hover: "hover:scale-105 duration-300",
      gap: null,
      font: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 font-bold text-3xl",
      rounded: "rounded-3xl",
      bg: "bg-[#161616]/70",
    },
    {
      icon: <i className="fa-solid fa-book-open"></i>,
      title: "6",
      desc: "كاتب",
      hover: "hover:scale-105 duration-300",
      gap: null,
      font: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 font-bold text-3xl",
      rounded: "rounded-3xl",
      bg: "bg-[#161616]/70",
    },
  ];

  const btn = {
    title: "استكشف المقالات",
    icon: <i className="fa-solid fa-arrow-left-long"></i>,
    rounded: "rounded-full",
    padding: "py-4 px-8",
    to: "/Blog"
  };

  return (
    <>
      <header className="pt-40 pb-20 lg:py-60 bg-neutral-950 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:60px_60px]">
        <div className="container mx-auto w-[90%]">
          <div>
            <div className="text-center mx-auto ">
              <Badge badgeInfo={badge} />

              <h1 className="font-bold text-white min-[375px]:text-5xl min-[375px]:w-full min-[375px]:leading-[60px] md:text-6xl mx-auto py-5 md:leading-[75px] lg:text-7xl lg:leading-[90px]">
                اكتشف <span className="text-orange-400">فن</span> <br /> التصوير
                الفوتوغرافي
              </h1>
              <p className="text-2xl min-[375px]:text-xl text-neutral-500 min-[375px]:w-full w-2/4 mx-auto pt-2">
                انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-2 pt-10">
              <PrimaryBtn btnInfo={btn} />
              <Link to="/About" className="min-[375px]:w-full md:w-fit min-[375px]:justify-center flex flex-wrap items-center gap-1 cursor-pointer text-white font-semibold text-base rounded-full py-4 px-8 border border-neutral-800 hover:border-orange-500 hover:bg-orange-500/5 hover:text-orange-500 duration-300 ">
                <span>
                  <i className="fa-solid fa-circle-info"></i>
                </span>
                اعرف المزيد
              </Link>
            </div>
            <div className="grid min-[375px]:grid-cols-2 md:grid-cols-4 gap-4 min-[576px]:w-9/10 lg:w-[90%] mx-auto pt-16">
              {card.map((item, index) => {
                return <HeaderCard key={index} cardInfo={item} />;
              })}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
