import React from "react";
import { NavLink } from "../../../node_modules/react-router";

export default function ArticlesNav({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
}) {
  const categories = [
    { label: "جميع المقالات", value: "الكل" },
    { label: "إضاءة", value: "إضاءة" },
    { label: "بورتريه", value: "بورتريه" },
    { label: "مناظر طبيعية", value: "مناظر طبيعية" },
    { label: "تقنيات", value: "تقنيات" },
    { label: "معدات", value: "معدات" },
  ];
  return (
    <>
      <nav className="py-4 bg-neutral-950 border-b border-neutral-800 sticky top-18 z-50">
        <div className="container mx-auto w-[90%]">
          <div className="flex flex-wrap items-center justify-between">
            <div class="relative w-full md:w-80">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="ابحث في المقالات..."
                class="bg-neutral-900 border border-neutral-800 rounded-xl text-neutral-400 w-full px-5 py-3 pr-12"
                type="search"
              />
              <svg
                class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <ul className="flex items-center gap-3">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.value;

                return (
                  <li
                    key={cat.value}
                    onClick={() => setSelectedCategory(cat.value)}
                    className={`text-sm font-medium border rounded-xl py-2 px-3 cursor-pointer duration-300 ${
                      isActive
                        ? "bg-orange-500 text-white border-orange-500"
                        : "text-neutral-400 border-neutral-800 bg-neutral-900 hover:border-[#5D2F0F]"
                    }`}
                  >
                    <button type="button">{cat.label}</button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
