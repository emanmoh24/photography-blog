import React from "react";
import ArticlesNav from "../ArticlesNav/ArticlesNav";
import { useState } from "react";
import { useEffect } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";

export default function ArticlesSection() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    async function getArticles() {
      try {
        const response = await fetch("http://localhost:3000/posts");
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      }
    }

    getArticles();
  }, []);

  const searchArticles = articles.filter((article) => {    
    return (
      article.title.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <>
      <ArticlesNav search={searchTerm} setSearch ={setSearchTerm} />
      <section className="bg-neutral-950 py-10">
        <div className="container mx-auto w-[90%]">
          <div className="flex flex-wrap items-center justify-between pb-8">
            <span className="text-neutral-400">
              {" "}
              عرض{" "}
              <span className="text-white font-bold">
                {articles.length}
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
            {articles.map((article, index) => (
              <ArticleCard articleInfo={article} key={article.id || index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
