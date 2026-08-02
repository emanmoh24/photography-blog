import React from "react";
import MainBtn from "../MainBtn/MainBtn";
import { Link } from "../../../node_modules/react-router";
import data from "../../../data/db.json"
export default function Footer() {
  const btn = {
    title: "اشترك",
    rounded: "rounded-full",
    width: "w-full",
    padding: "py-4 px-8",
    hover: "hover:-translate-y-1",
  };

  const info = data.siteInfo;

  return (
    <>
      <footer className="bg-neutral-950 border-t border-neutral-800 relative">
        <div className="pt-16 px-16 pb-8">
          <div className="grid grid-cols-4 pb-10">
            <div>
              <a
                href=""
                className="flex flex-wrap items-center font-bold text-xl text-white gap-3 group"
              >
                <div className="flex items-center justify-center bg-orange-500 rounded-xl px-4 py-2 shadow-[0_1px_20px_rgba(249,115,22,0.6)] group-hover:scale-105 duration-300">
                  ع
                </div>
                <span>{info.name}</span>
              </a>
              <p className="text-neutral-500 text-sm py-6 w-9/10">
                {info.description}
              </p>
              <div className="flex flex-wrap gap-3 text-neutral-500 text-lg">
                <a
                  href={info.social?.twitter}
                  target="_blank"
                  className="flex items-center justify-center bg-neutral-900 border border-neutral-800 rounded-xl p-3 hover:bg-orange-500 hover:border-orange-500 hover:scale-105 duration-300 hover:text-white"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a
                  href={info.social?.github}
                  target="_blank"
                  className="flex items-center justify-center bg-neutral-900 border border-neutral-800 rounded-xl p-3 hover:bg-orange-500 hover:border-orange-500 hover:scale-105 duration-300 hover:text-white"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href={info.social?.linkedin}
                  target="_blank"
                  className="flex items-center justify-center bg-neutral-900 border border-neutral-800 rounded-xl p-3 hover:bg-orange-500 hover:border-orange-500 hover:scale-105 duration-300 hover:text-white"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href={info.social?.youtube}
                  target="_blank"
                  className="flex items-center justify-center bg-neutral-900 border border-neutral-800 rounded-xl p-3 hover:bg-orange-500 hover:border-orange-500 hover:scale-105 duration-300 hover:text-white"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-base pb-6 ps-12 text-white font-semibold relative">
                استكشف
              </h2>
              <ul className="text-sm text-neutral-500">
                <li className="hover:-translate-x-2 hover:text-orange-500 duration-300 group pb-5">
                  <i className="fa-solid fa-angle-left text-neutral-950 group-hover:text-orange-500 duration-300"></i>
                  <Link to="/" className="ps-3">
                    الرئيسية
                  </Link>
                </li>
                <li className="hover:-translate-x-2 hover:text-orange-500 duration-300 group pb-5">
                  <i className="fa-solid fa-angle-left text-neutral-950 group-hover:text-orange-500 duration-300"></i>
                  <Link to="/Blog" className="ps-3">
                    المدونة
                  </Link>
                </li>
                <li className="hover:-translate-x-2 hover:text-orange-500 duration-300 group pb-5">
                  <i className="fa-solid fa-angle-left text-neutral-950 group-hover:text-orange-500 duration-300"></i>
                  <Link to="/About" className="ps-3">
                    من نحن
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-base pb-6 ps-12 text-white font-semibold relative ">
                التصنيفات
              </h2>
              <ul className="text-sm text-neutral-500">
                <li className="hover:-translate-x-2 hover:text-orange-500 duration-300 group pb-5">
                  <i className="fa-solid fa-angle-left text-neutral-950 group-hover:text-orange-500 duration-300"></i>
                  <a href="" className="ps-3">
                    اضاءة
                  </a>
                </li>
                <li className="hover:-translate-x-2 hover:text-orange-500 duration-300 group pb-5">
                  <i className="fa-solid fa-angle-left text-neutral-950 group-hover:text-orange-500 duration-300"></i>
                  <a href="" className="ps-3">
                    بورتريه
                  </a>
                </li>
                <li className="hover:-translate-x-2 hover:text-orange-500 duration-300 group pb-5">
                  <i className="fa-solid fa-angle-left text-neutral-950 group-hover:text-orange-500 duration-300"></i>
                  <a href="" className="ps-3">
                    مناظر طبيعية
                  </a>
                </li>
                <li className="hover:-translate-x-2 hover:text-orange-500 duration-300 group pb-5">
                  <i className="fa-solid fa-angle-left text-neutral-950 group-hover:text-orange-500 duration-300"></i>
                  <a href="" className="ps-3">
                    تقنيات
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-base pb-1 ps-12 text-white font-semibold relative ">
                ابقى على اطلاع
              </h2>
              <p className="text-neutral-500 text-sm py-5">
                اشترك للحصول على أحدث المقالات <br />
                والتحديثات.
              </p>

              <input
                type="email"
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 text-neutral-500 w-full mb-4"
                placeholder="أدخل بريدك الإلكتروني"
              />
              <MainBtn btnInfo={btn} />
            </div>
          </div>

          <div className="w-full flex flex-wrap items-center justify-between text-sm text-neutral-500">
            <span>
              2026 عدسة. صنع بكل{" "}
              <i className="fa-solid fa-heart text-orange-500"></i> جميع الحقوق
              محفوظة
            </span>
            <div>
              <ul className="flex flex wrap items-center justify-center gap-3">
                <li className="hover:text-orange-500 duration-300">
                  <Link to="/Privacy">سياسة الخصوصىة</Link>
                </li>
                <li className="hover:text-orange-500 duration-300">
                  <Link to="/Service">شروط الخدمة</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
