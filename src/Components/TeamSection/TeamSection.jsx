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
            <h2 className="font-bold text-4xl text-white py-4">
              تعرف على كتابنا
            </h2>
            <p className="text-lg text-neutral-500">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
              المجتمع.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 w-[85%] mx-auto">
            {authors.map((author, index)=> {
              return <AuthorCard authorInfo ={author} key = {author.id || index}/>
            })}
          </div>
        </div>
      </section>
    </>
  );
}
