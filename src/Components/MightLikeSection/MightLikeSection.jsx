import React from "react";
import { Link } from "../../../node_modules/react-router";
import LastCard from "../LastCard/LastCard";
import data from "../../../data/db.json";
import { useParams } from "../../../node_modules/react-router";

export default function MightLikeSection() {
  const articles = data.posts;
  const { id } = useParams();

  const article = data.posts.find((post) => String(post.id) === String(id));

  const relatedArticles = data.posts.filter(
    (post) =>
      post.category === article?.category && String(post.id) !== String(id),
  );

  return (
    <>
      <section className="bg-neutral-950 ">
        <div className="container mx-auto py-12 w-[90%]">
          <div className="flex items-center justify-between relative might-like">
            <div className="flex items-center gap-3">
              <span className="text-xl text-orange-500 border flex items-center justify-center rounded-2xl px-3 py-4 bg-[#231309] border-[#662C06]">
                <i className="fa-solid fa-images"></i>
              </span>
              <div className="flex flex-col">
                <span className="font-bold text-white text-2xl">
                  مقالات قد تعجبك
                </span>
                <span className="text-sm text-neutral-400">
                  استكشف المزيد من المحتوى المميز
                </span>
              </div>
            </div>
            <Link
              to="/Blog"
              className="flex items-center justify-center gap-2 text-orange-500 group hover:text-amber-500 durantion-300"
            >
              <span>عرض الكل</span>
              <span className="group-hover:-translate-x-2 duration-300">
                <i className="fa-solid fa-arrow-left-long"></i>
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-10">
            {relatedArticles.slice(0, 3).map((article, index) => {
              return <LastCard article={article} key={article.id || index} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
