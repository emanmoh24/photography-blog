import React from "react";

export default function Badge({ badgeInfo }) {
  return (
    <>
      <div className="font-medium text-sm inline-flex flex-wrap items-center justify-center gap-2 rounded-full py-2 px-4 bg-orange-500/9 border-sm border border-[#63310E] w-fit mx-auto">
        <span className="text-orange-400 text-[6px]">
          <i class="fa-solid fa-circle fa-fade"></i>
        </span>
        <div>{badgeInfo.icon}</div>
        <span className={`text-neutral-300 ${badgeInfo.color}`}>
          {badgeInfo.title}
        </span>
      </div>
    </>
  );
}
