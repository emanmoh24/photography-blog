import React from "react";

export default function SecArticleCard({ articleInfo }) {
  function formatDate(dateString) {
    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day);

    return new Intl.DateTimeFormat("ar-EG-u-nu-arab", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  }
  return (
    <>
      <a
        href="#"
        className="flex flex-wrap content-center w-full hover:border-[#5D2F0F] duration-300 group"
      >
        <figure className="relative overflow-hidden rounded-tr-3xl rounded-br-3xl w-[50%] border border-neutral-800">
          <img
            src={articleInfo.image}
            alt={articleInfo.title}
            className="w-full h-full object-cover group-hover:scale-105 duration-300"
          />
          <div className="flex items-center absolute text-white top-[5%] right-[3%] font-semibold text-xs bg-linear-to-r from-orange-500 to-amber-500 rounded-full px-3 py-1 ">
            <span className="text-[8px]">
              <i className="fa-solid fa-star"></i>
            </span>
            <span className="ps-1">مميز</span>
          </div>
        </figure>

        <div className="bg-neutral-900 border border-neutral-800 rounded-tl-3xl rounded-bl-3xl p-10 w-[50%]">
          <div className="pb-25">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full font-semibold text-xs px-4 py-2 text-orange-500 border border-orange-500 bg-orange-500/10">
                {articleInfo.category}
              </span>
              <span className="text-sm text-neutral-500">
                <i className="fa-regular fa-clock"></i> {articleInfo.readTime}
              </span>
            </div>

            <h3 className="font-bold text-3xl text-white mt-4 group-hover:text-orange-500 duration-300">
              {articleInfo.title}
            </h3>

            <p className="text-base text-neutral-500 mt-2">
              {articleInfo.excerpt}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between">
            <div className="flex flex-wrap gap-3 relative items-center">
              <figure className="overflow-hidden rounded-[50%] w-12 h-12 border border-neutral-700">
                <img
                  src={articleInfo.author.avatar}
                  alt={articleInfo.author.name}
                  className="w-full"
                />
                {/* <span className="bg-orange-500 rounded-[50%] w-4 h-4 absolute bottom-0 left-0"></span> */}
              </figure>
              <div className="flex flex-col">
                <span className="text-white text-sm font-semibold">
                  {articleInfo.author.name}
                </span>
                <span className="text-xs text-neutral-500">
                  {formatDate(articleInfo.date)}
                </span>
              </div>
            </div>
            <a
              href=""
              className="flex items-center text-orange-500 font-semibold text-sm"
            >
              <span className="pe-1 group-hover:translate-x-2 duration-300">
                اقرأ المقال
              </span>
              <i className="fa-solid fa-arrow-left-long"></i>
            </a>
          </div>
        </div>
      </a>
    </>
  );
}
