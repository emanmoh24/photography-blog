import React from "react";
import {Link} from "../../../node_modules/react-router"

export default function PrimaryBtn({btnInfo}) {
  return (
    <>
      <Link to={btnInfo.to} className={`${btnInfo.rounded} ${btnInfo.padding} md:w-fit min-[375px]:w-full min-[375px]:justify-center group flex flex-wrap items-center gap-1 cursor-pointer text-white font-semibold text-base bg-linear-to-l from-orange-600 to-orange-500 hover:-translate-y-1 duration-300`}>
        <span>{btnInfo.title}</span>
        <span className="text-xs group-hover:-translate-x-1 duration-300">
            {btnInfo.icon}
        </span>
      </Link>
    </>
  );
}
