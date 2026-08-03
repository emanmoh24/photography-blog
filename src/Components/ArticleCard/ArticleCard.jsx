import React from "react";
import {useNavigate} from "../../../node_modules/react-router"

export default function ArticleCard({ articleInfo }) {
  function formatDate(dateString) {
    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day);

    return new Intl.DateTimeFormat("ar-EG-u-nu-arab", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  }

    const navigate = useNavigate();
  
    const handleCardClick = () => {
      navigate(`/Article/${articleInfo.id}`);
    };

  return (
    <>
      <div className="cursor-pointer group hover:-translate-y-1 duration-300" onClick={handleCardClick}>
        <figure className="overflow-hidden relative rounded-tr-3xl rounded-tl-3xl border-e border-s border-b border-neutral-800 group-hover:border-neutral-500 duration-300">
          <img
            src={articleInfo.image}
            alt={articleInfo.title}
            className="w-full group-hover:scale-105 duration-300"
          />
          <div className="rounded-full text-white font-semibold text-xs absolute top-[10%] right-[8%] bg-neutral-800 px-3 py-1">
            {articleInfo.category}
          </div>
        </figure>

        <div className="p-6 bg-neutral-900 rounded-br-3xl rounded-bl-3xl border-e border-s border-b border-neutral-800 group-hover:border-neutral-500 duration-300 ">
          <div className="pb-5">
            <ul className="flex flex-wrap items-center text-neutral-500 text-sm gap-4 ">
              <li>
                <span>
                  <i class="fa-regular fa-clock"></i>
                </span>
                <span className="ps-2">{articleInfo.readTime}</span>
              </li>
              <li>
                <span>&bull;</span>
              </li>
              <li>
                <span>{formatDate(articleInfo.date)}</span>
              </li>
            </ul>
            <h3 className="article-title relative py-4 font-bold text-2xl text-white group-hover:text-orange-500 duration-300">
              {articleInfo.title}
            </h3>
            <p className="text-sm text-neutral-500">{articleInfo.excerpt}</p>
          </div>

          <div className="flex flex-wrap items-center justify-between pt-4">
            <div className="flex flex-wrap gap-3">
              <figure className="rounded-[50%] w-10 h-10 overflow-hidden border border-neutral-800">
                <img
                  src={articleInfo.author.avatar}
                  alt={articleInfo.author.name}
                  className="w-full"
                />
              </figure>
              <div>
                <h4 className="font-medium text-sm text-white">
                  {articleInfo.author.name}
                </h4>
                <span className="text-xs text-neutral-500">
                  {articleInfo.author.role}
                </span>
              </div>
            </div>
            <span className="group-hover:bg-orange-400 group-hover:border-orange-400 duration-300 group-hover:text-white flex items-center justify-center text-orange-500 bg-orange-500/9 border border-orange-500 rounded-[50%] w-7 h-7 text-xs">
              <i className="fa-solid fa-angle-left"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
