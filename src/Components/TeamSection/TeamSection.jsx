import React from "react";
import Badge from "../Badge/Badge";
import AuthorCard from "../AuthorCard/AuthorCard";
import { useState  } from "react";
import { useEffect  } from "react";
import data from "../../../data/db.json"

export default function TeamSection() {
  const badge = {
    title: "فريقنا",
    color: "text-orange-500",
    icon: null,
  };

  const authors = data.posts;

  return (
    <>
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto">
          <div className="text-center pb-16">
            <Badge badgeInfo={badge} />
            <h2 className="font-bold lg:text-4xl text-white py-4 min-[375px]:text-4xl">
              تعرف على كتابنا
            </h2>
            <p className="text-lg text-neutral-500 min-[375px]:w-9/10 mx-auto">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
              المجتمع.
            </p>
          </div>
          <div className="grid min-[375px]:grid-cols-1 min-[375px]:w-[90%] min-[374px]:gap-3 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mx-auto">
            {authors.map((author, index)=> {
              return <AuthorCard authorInfo ={author} key = {author.id || index}/>
            })}
          </div>
        </div>
      </section>
    </>
  );
}
