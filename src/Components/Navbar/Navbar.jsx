import React from "react";
import logo from "../../assets/Images/logo-GdqARQRt.png";
import { NavLink, Link } from "../../../node_modules/react-router";

export default function Navbar() {
  return (
    <>
      <nav className="py-3 bg-neutral-900 fixed top-0 left-0 right-0 z-50">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-wrap justify-between items-center">
            <a href="#" className="flex gap-1.5 group">
              <figure className="w-12.5 group-hover:scale-105 duration-300">
                <img src={logo} alt="magnifier" className="w-full" />
              </figure>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl">عدسة</span>
                <span className="text-orange-400 text-xs">
                  عالم التصوير الفوتوغرافي
                </span>
              </div>
            </a>
            <ul className="flex flex-wrap gap-5 rounded-full border border-neutral-800 py-4 px-2 font-medium text-sm ">
              <li className="ps-1">
                <NavLink
                  className={({ isActive }) =>` ${isActive
                        ? "bg-linear-to-l from-orange-600 to-orange-500 py-2 px-4 rounded-full text-white"
                        : "text-neutral-400 hover:text-white duration-300 py-2 px-4"
                    }`
                  }
                  to="/"
                >
                  الرئيسية
                </NavLink>
              </li>
              <li className="px-1">
                <NavLink to="/Blog" className={({ isActive }) =>` ${isActive
                        ? "bg-linear-to-l from-orange-600 to-orange-500 py-2 px-4 rounded-full text-white"
                        : "text-neutral-400 hover:text-white duration-300 py-2 px-4"
                    }`
                  }>المدونة</NavLink>
              </li>
              <li className="pe-1">
                <NavLink to="/About" className={({ isActive }) =>` ${isActive
                        ? "bg-linear-to-l from-orange-600 to-orange-500 py-2 px-4 rounded-full text-white"
                        : "text-neutral-400 hover:text-white duration-300 py-2 px-4"
                    }`
                  }>من نحن</NavLink>
              </li>
            </ul>
            <ul className="flex flex-wrap gap-4 items-center">
              <li className="text-neutral-500">
                <button className="cursor-pointer hover:text-orange-500 duration-300 border-neutral-900 border rounded-lg hover:border-neutral-500 p-3">
                  <span>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                </button>
              </li>
              <li className="text-white font-semibold text-sm bg-linear-to-l from-orange-600 to-orange-500 py-4 px-8 rounded-full hover:-translate-y-1 duration-300">
                <Link to="/Blog">ابدأ القراءة</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
