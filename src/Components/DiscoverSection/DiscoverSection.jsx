import React from "react";
import Badge from "../Badge/Badge";
import SectionCard from "../SectionCard/SectionCard";

export default function DiscoverSection() {
  const badge = {
    title: "التصنيفات",
    color: "text-orange-500",
  };

  const card = [
    {
      icon: <i className="fa-solid fa-sun"></i>,
      title: "إضاءة",
      desc: "3 مقالة",
    },
    {
      icon: <i className="fa-solid fa-user"></i>,
      title: "بورتريه",
      desc: "3 مقالة",
    },
    {
      icon: <i className="fa-solid fa-mountain-sun"></i>,
      title: "مناظر طبيعية",
      desc: "2 مقالة",
    },
    {
      icon: <i className="fa-solid fa-sliders"></i>,
      title: "تقنيات",
      desc: "5 مقالة",
    },
    {
      icon: <i className="fa-solid fa-toolbox"></i>,
      title: "معدات",
      desc: "3 مقالة",
    },
  ];

  return (
    <>
      <section className="bg-[#111111] py-24 px-6 border-b border-t border-neutral-800">
        <div>
          <div className="flex flex-wrap items-center justify-center flex-col">
            <Badge badgeInfo={badge} />
            <h2 className="font-bold text-5xl text-white py-6">
              استكشف حسب الموضوع
            </h2>
            <p className="text-lg text-neutral-400">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>
          </div>
          <div className="grid grid-cols-4 mx-auto w-[90%] pt-7 gap-6">
            {card.map((item, index)=> {
                return <SectionCard key = {index} cardInfo={item} />
            })}
          </div>
        </div>
      </section>
    </>
  );
}
