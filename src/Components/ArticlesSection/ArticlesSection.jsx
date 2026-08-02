import React from "react";
import ArticlesNav from "../ArticlesNav/ArticlesNav";
import { useState } from "react";
import { useEffect } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import {useSearchParams} from "../../../node_modules/react-router"
import data from "../../../data/db.json"

export default function ArticlesSection() {

  const articles = data.posts
  const [searchTerm, setSearchTerm] = useState("");
  
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState(
    categoryFromUrl || "الكل"
  );

  function getFilteredArticles(articlesList, search, category) {
    return articlesList.filter((article) => {

      const term = search?.trim().toLowerCase() || "";
      const articleTitle = article.title?.toLowerCase() || "";
      const matchesSearch = !term || articleTitle.includes(term);

      const articleCategory = article.category?.trim().toLowerCase() || "";
      const targetCategory = category?.trim().toLowerCase() || "";

      const matchesCategory =
        targetCategory === "الكل" ||
        targetCategory === "جميع المقالات" ||
        articleCategory === targetCategory;

      return matchesSearch && matchesCategory;
    });
  }

  const filteredArticles = getFilteredArticles(
    articles,
    searchTerm,
    selectedCategory
  );

  return (
    <>
      <ArticlesNav
        search={searchTerm}
        setSearch={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <section className="bg-neutral-950 py-10">
        <div className="container mx-auto w-[90%]">
          <div className="flex flex-wrap items-center justify-between pb-8">
            <span className="text-neutral-400">
              {" "}
              عرض{" "}
              <span className="text-white font-bold">
                {filteredArticles.length}
              </span>{" "}
              مقال
            </span>
            <div class="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
              <button class="cursor-pointer p-2 rounded-lg transition-all duration-300 bg-orange-500 text-white">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  ></path>
                </svg>
              </button>
              <button class="cursor-pointer p-2 rounded-lg transition-all duration-300 text-neutral-400 hover:text-white">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => (
                <ArticleCard articleInfo={article} key={article.id || index} />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-20 col-span-3 gap-4">
                <span className="flex items-center justify-center rounded-[50%] bg-neutral-900 border border-neutral-700 text-neutral-500 text-3xl font-bold w-25 h-25">
                  <i className="fa-regular fa-sad-cry"></i>
                </span>
                <span className="font-bold text-white text-2xl">
                  لا توجد مقالات
                </span>
                <span className="text-neutral-400">
                  حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
                </span>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
