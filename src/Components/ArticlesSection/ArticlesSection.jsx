import React from "react";
import ArticlesNav from "../ArticlesNav/ArticlesNav";
import { useState } from "react";
import { useEffect } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import { useSearchParams } from "../../../node_modules/react-router";
import data from "../../../data/db.json";
import SecArticleCard from "../SecArticleCard/SecArticleCard";
import Pagination from "../Pagination/Pagination";

export default function ArticlesSection() {
  const articles = data.posts;
  const [searchTerm, setSearchTerm] = useState("");

  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState(
    categoryFromUrl || "الكل",
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
    selectedCategory,
  );

  const [layout, setLayout] = useState("grid");
  const articleStyle = {
    badge: null,
    text: "text-2xl",
    padding: "pb-4",
    cardPadding: "p-6",
    figureW : "w-[30%]", 
    cardW : "w-[70%]"
  };

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
            <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
              <button
                onClick={() => {
                  setLayout("grid");
                }}
                className={`cursor-pointer p-2 rounded-lg transition-all duration-300 ${
                  layout === "grid"
                    ? "bg-orange-500 text-white"
                    : "text-neutral-400 hover:text-white bg-neutral-900"
                }`}
              >
                <svg
                  className="w-5 h-5"
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
              <button
                onClick={() => {
                  setLayout("list");
                }}
                className={`cursor-pointer p-2 rounded-lg transition-all duration-300 ${
                  layout === "list"
                    ? "bg-orange-500 text-white"
                    : "text-neutral-400 hover:text-white bg-neutral-900"
                }`}
              >
                <svg
                  className="w-5 h-5"
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

          <div
            className={
              layout === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "flex flex-col gap-6"
            }
          >
            {filteredArticles.map((article, index) =>
              layout === "grid" ? (
                <ArticleCard articleInfo={article} key={article.id || index} />
              ) : (
                <SecArticleCard
                  articleStyle={articleStyle}
                  articleInfo={article}
                  key={article.id || index}
                />
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
}
