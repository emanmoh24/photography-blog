import React from "react";
import logo from "../../assets/Images/logo-GdqARQRt.png";
import { NavLink, Link } from "../../../node_modules/react-router";
import { useState } from "react";

// export default function Navbar() {

// return (
//   <>
//     <nav className="py-3 bg-neutral-900 fixed top-0 left-0 right-0 z-50">
//       <div className="w-[90%] mx-auto">
//         <div className="flex flex-wrap justify-between items-center">
//           <a href="#" className="flex gap-1.5 group">
//             <figure className="w-12.5 group-hover:scale-105 duration-300">
//               <img src={logo} alt="magnifier" className="w-full" />
//             </figure>
//             <div className="flex flex-col">
//               <span className="text-white font-bold text-xl">عدسة</span>
//               <span className="text-orange-400 text-xs">
//                 عالم التصوير الفوتوغرافي
//               </span>
//             </div>
//           </a>
//           <ul className="flex gap-5 rounded-full border border-neutral-800 py-4 px-2 font-medium text-sm ">
//             <li className="ps-1">
//               <NavLink
//                 className={({ isActive }) =>` ${isActive
//                       ? "bg-linear-to-l from-orange-600 to-orange-500 py-2 px-4 rounded-full text-white"
//                       : "text-neutral-400 hover:text-white duration-300 py-2 px-4"
//                   }`
//                 }
//                 to="/"
//               >
//                 الرئيسية
//               </NavLink>
//             </li>
//             <li className="px-1">
//               <NavLink to="/Blog" className={({ isActive }) =>` ${isActive
//                       ? "bg-linear-to-l from-orange-600 to-orange-500 py-2 px-4 rounded-full text-white"
//                       : "text-neutral-400 hover:text-white duration-300 py-2 px-4"
//                   }`
//                 }>المدونة</NavLink>
//             </li>
//             <li className="pe-1">
//               <NavLink to="/About" className={({ isActive }) =>` ${isActive
//                       ? "bg-linear-to-l from-orange-600 to-orange-500 py-2 px-4 rounded-full text-white"
//                       : "text-neutral-400 hover:text-white duration-300 py-2 px-4"
//                   }`
//                 }>من نحن</NavLink>
//             </li>
//           </ul>
//           <ul className="flex  gap-4 items-center">
//             <li className="text-neutral-500">
//               <button className="cursor-pointer hover:text-orange-500 duration-300 border-neutral-900 border rounded-lg hover:border-neutral-500 p-3">
//                 <span>
//                   <i className="fa-solid fa-magnifying-glass"></i>
//                 </span>
//               </button>
//             </li>
//             <li className="text-white font-semibold text-sm bg-linear-to-l from-orange-600 to-orange-500 py-4 px-8 rounded-full hover:-translate-y-1 duration-300">
//               <Link to="/Blog">ابدأ القراءة</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   </>
// );
// import React, { useState } from "react";
// import { NavLink, Link } from "react-router-dom";

// Replace with your actual logo import path
// import logo from './assets/logo.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // const linkClass = ({ isActive }) =>
  //   `block text-center transition-all duration-300 py-2 px-4 rounded-full ${
  //     isActive
  //       ? "bg-gradient-to-l from-orange-600 to-orange-500 text-white"
  //       : "text-neutral-400 hover:text-white"
  //   }`;

  return (
    <nav className="py-3 bg-neutral-950 fixed top-0 left-0 right-0 z-50 border-b border-neutral-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[56px]">
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <figure className="w-10 sm:w-12 group-hover:scale-105 transition-transform duration-300">
              <img src={logo} alt="magnifier" className="w-full h-auto" />
            </figure>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg sm:text-xl leading-tight">
                عدسة
              </span>
              <span className="min-[375px]:hidden text-orange-400 text-[10px] sm:text-xs">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-2 rounded-full border border-neutral-800 py-4 px-3 font-medium text-sm">
            <li>
              <NavLink
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "bg-linear-to-l from-orange-600 to-orange-500 py-2 px-4 rounded-full text-white"
                      : "text-neutral-400 hover:text-white duration-300 py-2 px-4"
                  }`
                }
                to="/"
              >
                الرئيسية
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "bg-linear-to-l from-orange-600 to-orange-500 py-2 px-4 rounded-full text-white"
                      : "text-neutral-400 hover:text-white duration-300 py-2 px-4"
                  }`
                }
                to="/Blog"
              >
                المدونة
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "bg-linear-to-l from-orange-600 to-orange-500 py-2 px-4 rounded-full text-white"
                      : "text-neutral-400 hover:text-white duration-300 py-2 px-4"
                  }`
                }
                to="/About"
              >
                من نحن
              </NavLink>
            </li>
          </ul>

          <div className="flex items-center gap-2 sm:gap-4">
            <button className="min-[375px]:hidden cursor-pointer text-neutral-400 hover:text-orange-500 transition-colors border-neutral-800 border rounded-xl hover:border-neutral-600 p-2.5 sm:p-3">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-current stroke-2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>

            <Link
              to="/Blog"
              className="hidden sm:inline-block text-white font-semibold text-xs sm:text-sm bg-gradient-to-l from-orange-600 to-orange-500 py-2.5 px-5 sm:py-3 sm:px-6 rounded-full hover:-translate-y-0.5 transition-transform duration-300"
            >
              ابدأ القراءة
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-neutral-300 hover:text-white p-2 hover:border hover:border-neutral-800 rounded-xl"
            >
              <svg
                className="w-6 h-6 fill-none stroke-current stroke-2"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <path d="M4 12h16M4 6h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden z-50 pt-4 pb-3 border rounded-2xl bg-neutral-900 px-4 py-5 border-neutral-800 mt-3 flex flex-col gap-3">
            <ul className="flex flex-col gap-6 font-medium text-sm">
              <li>
                <NavLink
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    ` ${
                      isActive
                        ? "py-3 px-4 rounded-xl text-orange-500 bg-[#211209] border border-[#43240f] flex"
                        : "text-neutral-400 hover:text-white duration-300 py-2 px-4"
                    }`
                  }
                  to="/"
                >
                  الرئيسية
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setIsOpen(false)}
               className={({ isActive }) =>
                    ` ${
                      isActive
                        ? "py-3 px-4 rounded-xl text-orange-500 bg-[#211209] border border-[#43240f] flex"
                        : "text-neutral-400 hover:text-white duration-300 py-2 px-4"
                    }`
                  }
                  to="/Blog"
                >
                  المدونة
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setIsOpen(false)}
               className={({ isActive }) =>
                    ` ${
                      isActive
                        ? "py-3 px-4 rounded-xl text-orange-500 bg-[#211209] border border-[#43240f] flex"
                        : "text-neutral-400 hover:text-white duration-300 py-2 px-4"
                    }`
                  }
                  to="/About"
                >
                  من نحن
                </NavLink>
              </li>
            </ul>

            <Link
              to="/Blog"
              onClick={() => setIsOpen(false)}
              className="sm:hidden text-center text-white font-semibold text-sm bg-gradient-to-l from-orange-600 to-orange-500 py-2.5 px-6 rounded-full"
            >
              ابدأ القراءة
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
// }
