import React from "react";
import MainBtn from "../MainBtn/MainBtn";
import fstUser from "../../assets/Images/imgi_3_photo-1507003211169-0a1dd7228f2d.jpg";
import secUser from "../../assets/Images/imgi_5_photo-1500648767791-00dcc994a43e.jpg";
import thrUser from "../../assets/Images/imgi_7_photo-1472099645785-5658abf4ff4e.jpg";
import { useState } from "react";
import { useEffect } from "react";

export default function Form() {
  const btn = {
    title: (
      <i class="fa-regular text-2xl fa-envelope flex items-center justify-center"></i>
    ),
    rounded: "rounded-2xl",
    width: "w-fit",
    padding: "px-4 py-4",
    hover: null,
  };

  const secBtn = {
    title: "اشترك الآن",
    rounded: "rounded-xl",
    width: "w-fit",
    padding: "py-4 px-8",
    hover: "hover:bg-linear-to-l hover:from-orange-700 hover:to-orange-600",
    to: "",
  };

  return (
    <>
      <section className="p-24 bg-neutral-950 min-[375px]:px-5">
        <div className="rounded-3xl min-[375px]:p-8 border min-[375px]:w-full lg:w-3/4 mx-auto border-neutral-800 p-12 bg-neutral-900 flex flex-wrap items-center justify-center flex-col">
          <div className="flex flex-wrap items-center justify-center flex-col">
            <div className="w-fit">
              <MainBtn btnInfo={btn} />
            </div>
            <h2 className="text-white md:text-4xl min-[375px]:text-3xl font-bold py-5 min-[375px]:text-center ">
              اشترك في{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-400">
                نشرتنا الإخبارية
              </span>
            </h2>
            <p className="text-lg text-neutral-400 pb-5 min-[375px]:text-center">
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
              الإلكتروني
            </p>
          </div>
          <form className="flex flex-wrap items-center w-full justify-center gap-3">
            <input
              type="email"
              className="min-[375px]:w-full bg-neutral-950 border py-4 border-neutral-700 rounded-xl p-3 md:w-2/4 text-neutral-400 text-base focus:border-orange-500 focus:outline-orange-500"
              placeholder="أدخل بريدك الإلكتروني"
            />
            <div className="md:w-fit">
              <MainBtn btnInfo={secBtn} />
            </div>
          </form>

          <div className="flex flex-wrap items-center py-6 gap-3 min-[375px]:justify-center">
            <div className="flex flex-wrap items-center -space-x-1">
              <figure className="rounded-[50%] overflow-hidden w-8 [mask-image:radial-gradient(circle_30px_at_-9px_50%,transparent_50%,black_50%)]">
                <img src={fstUser} alt="user" className="w-full" />
              </figure>
              <figure className="rounded-[50%] overflow-hidden w-8 [mask-image:radial-gradient(circle_30px_at_-9px_50%,transparent_50%,black_50%)] ">
                <img src={secUser} alt="user" className="w-full " />
              </figure>
              <figure className="rounded-[50%] overflow-hidden w-8 ">
                <img src={thrUser} alt="user" className="w-full  " />
              </figure>
            </div>
            <ul className="flex flex-wrap gap-4 text-sm text-neutral-500 min-[375px]:gap-2 min-[375px]:justify-center">
              <li>
                <span>
                  انضم لـ{" "}
                  <span className="font-medium text-white">+10,000</span> مصور
                </span>
              </li>
              <li>&bull;</li>
              <li>بدون إزعاج</li>
              <li>&bull;</li>
              <li>إلغاء الاشتراك في أي وقت</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
