import React from "react";
import { useNavigate } from "../../../node_modules/react-router";

export default function LastCard({ article }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (article?.id) {
      navigate(`/Article/${article.id}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="cursor-pointer hover:border-[#5A2B0C] group relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 text-white max-w-sm duration-300"
    >
      <figure className="relative w-full h-52">
        <img
          src={article?.image}
          alt={article?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/40 to-neutral-900" />

        <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-md">
          {article?.category}
        </span>
      </figure>

      <div className="p-6 pt-2">
        <h3 className="font-bold text-white mb-6 leading-snug text-base group-hover:text-orange-500 duration-300 line-clamp-2">
          {article.title}
        </h3>

        <div className="flex items-center justify-between text-sm text-neutral-400">
          <div className="flex items-center gap-2">
            {article.author.avatar && (
              <figure className="w-8 h-8 rounded-full overflow-hidden border border-neutral-700">
                <img
                  src={article.author.avatar}
                  alt={article.author.name || "Author"}
                  className="w-full h-full object-cover"
                />
              </figure>
            )}
            <span>{article.author.name}</span>
          </div>
          <span>{article.readTime}</span>
        </div>
      </div>
    </div>
  );
}