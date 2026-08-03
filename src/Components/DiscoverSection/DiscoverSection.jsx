import React from "react";
import Badge from "../Badge/Badge";
import SectionCard from "../SectionCard/SectionCard";
import { useState } from "react";
import { useEffect } from "react";
import data from "../../../data/db.json";

export default function DiscoverSection() {
  const badge = {
    title: "التصنيفات",
    color: "text-orange-500",
    icon: (
      <div class="relative flex items-center justify-center">
        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75"></span>
        <span class="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
      </div>
    ),
  };

  const categories = data.categories;
  
  const icon = [
    <i className="fa-solid fa-sun"></i>,
    <i className="fa-solid fa-user"></i>,
    <i className="fa-solid fa-mountain-sun"></i>,
    <i className="fa-solid fa-sliders"></i>,
    <i className="fa-solid fa-toolbox"></i>,
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
            {categories.map((category, index) => {
              return (
                <SectionCard
                  key={index}
                  cardInfo={category}
                  cardIcon={icon[index]}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
