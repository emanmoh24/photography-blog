import React from "react";
import { useNavigate } from "../../../node_modules/react-router";

export default function SecArticleCard({ articleInfo, articleStyle }) {
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
    <div
      onClick={handleCardClick}
      className="group cursor-pointer flex flex-col md:flex-row w-full rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden hover:border-[#5D2F0F] duration-300"
    >
      <figure className="relative w-full h-64 md:h-auto md:w-1/2 overflow-hidden shrink-0">
        <img
          src={articleInfo.image}
          alt={articleInfo.title}
          className="w-full h-full object-cover group-hover:scale-105 duration-500"
        />
        {articleStyle?.badge}
      </figure>

      <div className="flex flex-col justify-between p-6 md:p-8 w-full md:w-1/2 ">
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-full font-semibold text-xs px-4 py-1.5 text-orange-500 border border-orange-500/30 bg-orange-500/10">
              {articleInfo.category}
            </span>
            <span className="text-sm text-neutral-400 flex items-center gap-1.5">
              <i className="fa-regular fa-clock"></i> {articleInfo.readTime}
            </span>
          </div>

          <h3 className="font-bold text-white text-xl sm:text-2xl mt-4 leading-snug group-hover:text-orange-500 duration-300">
            {articleInfo.title}
          </h3>

          <p className="text-sm sm:text-base text-neutral-400 mt-3">
            {articleInfo.excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between pt-6 mt-4 border-t border-neutral-800/60">
          <div className="flex items-center gap-3">
            <figure className="w-10 h-10 rounded-full overflow-hidden border border-neutral-700 shrink-0">
              <img
                src={articleInfo.author.avatar}
                alt={articleInfo.author.name}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="flex flex-col">
              <span className="text-white text-sm font-semibold">
                {articleInfo.author.name}
              </span>
              <span className="text-xs text-neutral-400">
                {formatDate(articleInfo.date)}
              </span>
            </div>
          </div>

          <span className="flex items-center gap-2 text-orange-500 font-semibold text-sm">
            <span className="group-hover:translate-x-1 duration-300">
              اقرأ المقال
            </span>
            <i className="fa-solid fa-arrow-left-long"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

  // return (
  //   <>
  //     <div
  //       onClick={handleCardClick}
  //       className="md:flex md:flex-wrap cursor-pointer min-[576px]:block content-center w-full hover:border-[#5D2F0F] duration-300 group"
  //     >
  //       <figure className={`relative overflow-hidden md:rounded-tr-3xl md:rounded-br-3xl min-[576px]:rounded-tr-3xl min-[576px]:rounded-tl-3xl min-[576px]:w-full md:${articleStyle.figureW} border border-neutral-800`}>
  //         <img
  //           src={articleInfo.image}
  //           alt={articleInfo.title}
  //           className="w-full h-full object-cover group-hover:scale-105 duration-300"
  //         />
  //         {articleStyle.badge}
  //       </figure>

  //       <div className={`bg-neutral-900 border min-[576px]:rounded-br-3xl md:rounded-br-0 min-[576px]:rounded-bl-3xl md:rounded-bl-0 border-neutral-800 min-[576px]:w-full md:rounded-tl-3xl md:rounded-bl-3xl ${articleStyle.cardPadding} md:${articleStyle.cardW}`}>
  //         <div className={`${articleStyle.padding} min-[576px]:pb-4` }>
  //           <div className="flex flex-wrap items-center gap-3">
  //             <span className="rounded-full font-semibold text-xs px-4 py-2 text-orange-500 border border-orange-500 bg-orange-500/10">
  //               {articleInfo.category}
  //             </span>
  //             <span className="text-sm text-neutral-500">
  //               <i className="fa-regular fa-clock"></i> {articleInfo.readTime}
  //             </span>
  //           </div>

  //           <h3
  //             className={`font-bold ${articleStyle.text} text-white mt-4 min-[576px]:text-2xl group-hover:text-orange-500 duration-300`}
  //           >
  //             {articleInfo.title}
  //           </h3>

  //           <p className="text-base text-neutral-500 mt-2">
  //             {articleInfo.excerpt}
  //           </p>
  //         </div>

  //         <div className="flex flex-wrap items-center justify-between">
  //           <div className="flex flex-wrap gap-3 relative items-center">
  //             <figure className="overflow-hidden rounded-[50%] w-12 h-12 border border-neutral-700">
  //               <img
  //                 src={articleInfo.author.avatar}
  //                 alt={articleInfo.author.name}
  //                 className="w-full"
  //               />
  //               {/* <span className="bg-orange-500 rounded-[50%] w-4 h-4 absolute bottom-0 left-0"></span> */}
  //             </figure>
  //             <div className="flex flex-col">
  //               <span className="text-white text-sm font-semibold">
  //                 {articleInfo.author.name}
  //               </span>
  //               <span className="text-xs text-neutral-500">
  //                 {formatDate(articleInfo.date)}
  //               </span>
  //             </div>
  //           </div>
  //           <a
  //             href=""
  //             className="flex items-center text-orange-500 font-semibold text-sm"
  //           >
  //             <span className="pe-1 group-hover:translate-x-2 duration-300">
  //               اقرأ المقال
  //             </span>
  //             <i className="fa-solid fa-arrow-left-long"></i>
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
// }
