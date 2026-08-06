import React from "react";
import Badge from "../Badge/Badge";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import { useState } from "react";
import { useEffect } from "react";
import SecArticleCard from "../SecArticleCard/SecArticleCard";
import data from "../../../data/db.json";

export default function ChosenArticlesSection() {
  const badge = {
    title: "مميز",
    color: "text-orange-500",
    icon: (
      <div class="relative flex items-center justify-center">
        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75"></span>
        <span class="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
      </div>
    ),
  };

  const btn = {
    title: "عرض الكل",
    icon: <i class="fa-solid fa-angle-left"></i>,
    rounded: "rounded-xl",
    padding: "py-2 px-6",
    to: "/Blog",
  };

  const articleStyle = {
    badge: (
      <div className="flex items-center absolute text-white top-[5%] right-[3%] font-semibold text-xs bg-linear-to-r from-orange-500 to-amber-500 rounded-full px-3 py-1 ">
        <span className="text-[8px]">
          <i className="fa-solid fa-star"></i>
        </span>
        <span className="ps-1">مميز</span>{" "}
      </div>
    ),
    text: "text-3xl",
    padding: "pb-25",
    cardPadding: "p-10",
    figureW: "w-[50%]",
    cardW: "w-[50%]",
  };

  const articles = data.posts;

  return (
    <>
      <section className="py-24 bg-linear-to-l from-[#160E0A] to-40% to-neutral-950">
        <div className="mx-auto w-[90%]">
          <div className="text-right">
            <Badge badgeInfo={badge} />
            <h2 className="text-white font-bold lg:text-6xl lg:py-5 min-[375px]:text-4xl min-[375px]:py-3">
              مقالات مختارة
            </h2>
            <div className="flex flex-wrap items-center justify-between w-full pb-8">
              <p className="text-lg text-neutral-500 min-[576px]:w-full min-[576px]:mb-4 md:w-fit md:mb-0 lg:mb-0">
                محتوى منتقى لبدء رحلة تعلمك
              </p>
              <div className="min-[375px]:w-fit min-[375px]:py-5">
                <PrimaryBtn btnInfo={btn} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full">
            {articles.slice(0, 3).map((article, index) => {
              return (
                <SecArticleCard
                  articleInfo={article}
                  key={article.id || index}
                  articleStyle={articleStyle}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
