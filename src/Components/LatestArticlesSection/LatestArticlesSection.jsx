import React, { useEffect } from "react";
import Badge from "../Badge/Badge";
import ArticleCard from "../ArticleCard/ArticleCard";
import { useState } from "react";
import {Link} from "../../../node_modules/react-router"
import data from "../../../data/db.json"

export default function LatestArticlesSection() {
  const badge = {
    title: "الأحدث",
    color: "text-orange-500",
        icon: (
      <div class="relative flex items-center justify-center">
        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75"></span>
        <span class="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
      </div>
    ),
  };

  const articles = data.posts

  return (
    <>
      <section className="py-24 bg-linear-to-r from-[#160E0A] to-40% to-neutral-950">
        <div className="mx-auto w-[90%]">
          <div className="pb-10">
            <Badge badgeInfo={badge} />
            <h2 className="text-white font-bold text-6xl py-5">
              أحدث المقالات
            </h2>
            <div className="flex flex-wrap items-center justify-between w-full">
              <p className="text-lg text-neutral-500">
                محتوى جديد طازج من المطبعة
              </p>
              <Link
                to="/Blog"
                className="text-base text-orange-500 font-semibold hover:text-amber-500 duration-300 group"
              >
                <span className="pe-2"> عرض جميع المقالات</span>
                <i className="fa-solid fa-arrow-left-long group-hover:-translate-x-2 duration-300"></i>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {articles.slice(3,6).map((article, index) => (
              <ArticleCard articleInfo={article} key={article.id || index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
