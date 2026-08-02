import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Badge from "../../Components/Badge/Badge";
import HeaderCard from "../../Components/HeaderCard/HeaderCard";
import ValuesSection from "../../Components/ValuesSection/ValuesSection";
import TeamSection from "../../Components/TeamSection/TeamSection";
import OrangeSection from "../../Components/OrangeSection/OrangeSection";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const badge = {
    title: "من نحن",
    color: "text-orange-500",
    icon: (
      <div className="text-orange-400 text-[8px] flex items-center justify-center">
        <i class="fa-solid fa-circle fa-fade"></i>
      </div>
    ),
  };

  const cards = [
    {
      icon: <i className="fa-solid fa-users"></i>,
      title: "+2مليون",
      desc: "قارئ شهرياً",
      hover: null,
      gap: null,
      font: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 font-bold text-3xl",
      rounded: "rounded-3xl",
      bg: "bg-[#161616]/70",
    },
    {
      icon: <i className="fa-solid fa-newspaper"></i>,
      title: "+500",
      desc: "مقالة منشورة",
      hover: null,
      gap: null,
      font: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 font-bold text-3xl",
      rounded: "rounded-3xl",
      bg: "bg-[#161616]/70",
    },
    {
      icon: <i className="fa-solid fa-pen-nib"></i>,
      title: "+50",
      desc: "كاتب خبير",
      hover: null,
      gap: null,
      font: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 font-bold text-3xl",
      rounded: "rounded-3xl",
      bg: "bg-[#161616]/70",
    },
    {
      icon: <i className="fa-solid fa-book-open"></i>,
      title: "+15",
      desc: "تصنيف",
      hover: null,
      gap: null,
      font: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 font-bold text-3xl",
      rounded: "rounded-3xl",
      bg: "bg-[#161616]/70",
    },
  ];

  return (
    <>
      <Navbar />
      <header className="text-center pt-40 pb-20 bg-neutral-950 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:60px_60px]">
        <div className="container mx-auto">
          <div>
            <Badge badgeInfo={badge} />
            <h1 className="text-white font-bold text-6xl py-6">
              مهمتنا هي{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                الإعلام والإلهام
              </span>
            </h1>
            <p className="text-xl text-neutral-500 w-3/5 mx-auto pb-12">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
              المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
            </p>
          </div>
          <div className="grid grid-cols-4 mx-auto w-3/4 gap-5">
            {cards.map((card, index) => {
              return <HeaderCard cardInfo={card} key={index} />;
            })}
          </div>
        </div>
      </header>
      <ValuesSection />
      <TeamSection />
      <OrangeSection />
      <Footer />
    </>
  );
}
