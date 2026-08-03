import React from "react";
import { Link } from "../../../node_modules/react-router";
import image from "../../assets/Images/photo-1500835556837-99ac94a94552.jfif";
import MainBtn from "../MainBtn/MainBtn";
import user from "../../assets/Images/imgi_3_photo-1507003211169-0a1dd7228f2d.jpg";

export default function ArticleHead({ article }) {
    function formatDate(dateString) {
    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day);

    return new Intl.DateTimeFormat("ar-EG-u-nu-arab", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  }
  const btn = {
    title: article.category,
    rounded: "rounded-full",
    width: "w-full",
    padding: "py-2 px-4",
    hover: "hover:bg-linear-to-l hover:from-orange-700 hover:to-orange-600",
    to: "",
    text: "text-sm font-bold",
  };
  return (
    <>
      <header
        style={{ backgroundImage: `url(${article.image})` }}
        className="bg-cover bg-center h-screen w-full pt-30"
      >
        <div className="container mx-auto w-[90%]">
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/50 to-[#0a0a0a]" />
          <div className="relative z-10 container mx-auto px-4 py-8 text-white h-full flex flex-col justify-between flex-1">
            <ul className="inline-flex w-fit items-center gap-3 bg-black/10 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full text-sm font-medium">
              <li className="text-neutral-400 hover:text-white duration-300">
                <Link to="/">
                  <i class="fa-solid fa-house"></i>
                </Link>
              </li>
              <li className="text-neutral-500">
                <i className="fa-solid fa-angle-left"></i>
              </li>
              <li className="text-neutral-400 hover:text-white duration-300">
                <Link to="/Blog">المدونة</Link>
              </li>
              <li className="text-neutral-500">
                <i className="fa-solid fa-angle-left"></i>
              </li>
              <li className="text-orange-500">{article.category}</li>
            </ul>

            <div className="p-12">
              <ul className="inline-flex items-center gap-3">
                <li>
                  <MainBtn btnInfo={btn} />
                </li>
                <li className="flex items-center gap-1 text-sm text-neutral-400">
                  <span>
                    <i className="fa-regular fa-calendar"></i>
                  </span>
                  <span>{formatDate(article.date)}</span>
                </li>
                <li className="flex items-center gap-1 text-sm text-neutral-400">
                  <span>
                    <i className="fa-regular fa-clock"></i>
                  </span>
                  <span>{article.readTime}</span>
                </li>
              </ul>

              <h1 className="text-white text-6xl font-bold leading-[75px] w-9/10 py-6">
                {article.title}{" "}
              </h1>

              <div className="inline-flex items-center gap-2 rounded-2xl bg-neutral-900 border border-neutral-700 py-4 px-5">
                <figure className="rounded-[50%] overflow-hidden w-15 h-15 border-2 border-orange-800">
                  <img src={article.author.avatar} alt={article.author.name} className="w-full" />
                </figure>
                <div className="flex flex-col">
                  <span className="text-white font-bold">{article.author.name}</span>
                  <span className="text-sm text-neutral-400">{article.author.role}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
