import React from "react";
import { useNavigate } from "../../../node_modules/react-router";

export default function SectionCard({ cardInfo, cardIcon }) {
const navigate = useNavigate();

  const handleCategoryClick = (e) => {
    e.preventDefault();
    
    if (cardInfo?.name) {
      navigate(`/Blog?category=${encodeURIComponent(cardInfo.name)}`);
    }
  };
  
  return (
    <>
      <button
        onClick={handleCategoryClick}
        className="flex flex-wrap items-center justify-around bg-neutral-900 border border-neutral-800 p-5 rounded-2xl duration-300 hover:-translate-y-2 hover:bg-linear-to-tl hover:from-amber-500 to-orange-500 group"
      >
        <div className="flex flex-wrap flex-col items-start">
          <span className="group-hover:text-white group-hover:bg-[#FBA933] group-hover:border-[#FBA933] duration-300 flex items-center justify-center text-orange-500 border border-orange-600 bg-orange-500/7 rounded-xl py-4 mb-4 px-3 text-xl">
            {cardIcon}
          </span>
          <span className="text-lg text-white font-bold mb-1">
            {cardInfo.name}
          </span>
          <span className="text-sm text-neutral-500 group-hover:text-white duration-300">
            {cardInfo.count} مقالة
          </span>
        </div>
        <span className="flex items-center justify-center rounded-[50%] bg-neutral-900 w-8 h-8 text-neutral-900 group-hover:text-white group-hover:bg-[#FBA933] duration-300">
          <i class="fa-solid fa-angle-left"></i>
        </span>
      </button>
    </>
  );
}
