import React from "react";
import {Link} from "../../../node_modules/react-router"

export default function AuthorCard({ authorInfo }) {
  return (
    <>
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 mb-4 flex flex-wrap flex-col items-center justify-center duration-300 group hover:border-[#5D2F0F]">
        <div className="flex flex-wrap flex-col items-center pb-4">
          <div className="relative inline-block">
            <figure className="overflow-hidden rounded-[50%] w-25 h-25 border-4 border-neutral-800 group-hover:border-[#5D2F0F] duration-300 [mask-image:radial-gradient(circle_at_88%_88%,transparent_16px,black_17px)]">
              <img
                src={authorInfo.author.avatar}
                alt={authorInfo.author.name}
                className="w-full h-full object-cover"
              />
            </figure>
            <span className="absolute rounded-[50%] bg-orange-500 text-white w-6 h-6 flex items-center justify-center bottom-0 right-0 text-[10px]">
              <i className="fa-solid fa-check"></i>
            </span>
          </div>
          <h3 className="text-lg text-white font-bold pt-4">
            {authorInfo.author.name}
          </h3>
          <span className="text-sm font-medium text-orange-500">
            {authorInfo.author.role}
          </span>
        </div>

        <ul className="flex items-center justify-center gap-3">
          <li>
            <Link
              to=""
              className="flex items-center justify-center bg-neutral-800 rounded-lg py-3 px-2 text-neutral-500 duration-300 text-lg hover:bg-orange-500 hover:text-white"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="flex items-center justify-center bg-neutral-800 rounded-lg py-3 px-2 text-neutral-500 duration-300 text-lg hover:bg-neutral-500 hover:text-white"
            >
              <i className="fa-brands fa-github"></i>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center justify-center bg-neutral-800 rounded-lg py-3 px-2 text-neutral-500 duration-300 text-lg hover:bg-blue-500 hover:text-white"
            >
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
