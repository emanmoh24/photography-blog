import React from "react";
import { Link } from "../../../node_modules/react-router";


export default function SecHeader({headerInfo}) {
  return (
    <>
      <header className="pt-40 pb-20 bg-neutral-950 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:60px_60px]">
        <ul className="flex flex-wrap items-center justify-center text-sm gap-3">
            <li className="hover:text-white duration-300 text-neutral-400">
                <Link to="/">الرئيسية</Link>
            </li>
            <li className="text-neutral-500">
                <i className="fa-solid fa-angle-left"></i>
            </li>
            <li className="text-orange-500">
              {headerInfo.title}
            </li>
        </ul>
        <div className="flex flex-wrap flex-col items-center justify-center">
            <span className="mt-6 flex items-center justify-center text-2xl text-orange-500 border border-[#662C06] bg-[#231309] rounded-2xl py-5 px-4">{headerInfo.icon}</span>
            <h2 className="font-bold text-white lg:text-5xl py-5 min-[375px]:text-4xl">{headerInfo.title}</h2>
            <span className="text-lg text-neutral-400">{headerInfo.date}</span>
        </div>
      </header>
    </>
  );
}
