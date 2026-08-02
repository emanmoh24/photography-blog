import React from "react";
import HeaderCard from "../HeaderCard/HeaderCard";

export default function ValuesSection() {
  const valueCards = [
    {
      icon: <i className="text-4xl fa-solid fa-bullseye"></i>,
      title: "الجودة أولاً",
      desc: "محتوى مدروس ومكتوب بخبرة",
      hover:
        "duration-300 hover:border-[#5D2F0F] hover:bg-linear-to-br hover:from-[#2D1C14] hover:to-[#2C2514] group",
      gap: "gap-2",
      font: "text-lg font-bold text-white",
      rounded: "rounded-2xl",
      bg: "bg-#181818",
      group: "group-hover:text-orange-500 duration-300",
    },
    {
      icon: <i className="text-4xl fa-solid fa-bolt"></i>,
      title: "تركيز عملي",
      desc: "أمثلة واقعية يمكنك تطبيقها اليوم",
      hover:
        "duration-300 hover:border-[#5D2F0F] hover:bg-linear-to-br hover:from-[#2D1C14] hover:to-[#2C2514] group",
      gap: "gap-2",
      font: "text-lg font-bold text-white",
      rounded: "rounded-2xl",
      bg: "bg-#181818",
      group: "group-hover:text-orange-500 duration-300",
    },
    {
      icon: <i className="text-4xl fa-solid fa-handshake"></i>,
      title: "المجتمع",
      desc: "تعلم مع آلاف المصورين",
      hover:
        "duration-300 hover:border-[#5D2F0F] hover:bg-linear-to-br hover:from-[#2D1C14] hover:to-[#2C2514] group",
      gap: "gap-2",
      font: "text-lg font-bold text-white",
      rounded: "rounded-2xl",
      bg: "bg-#181818",
      group: "group-hover:text-orange-500 duration-300",
    },
    {
      icon: <i className="text-4xl fa-solid fa-arrows-rotate"></i>,
      title: "دائماً محدث",
      desc: "أحدث الاتجاهات وأفضل الممارسات",
      hover:
        "duration-300 hover:border-[#5D2F0F] hover:bg-linear-to-br hover:from-[#2D1C14] hover:to-[#2C2514] group",
      gap: "gap-2",
      font: "text-lg font-bold text-white",
      rounded: "rounded-2xl",
      bg: "bg-#181818",
      group: "group-hover:text-orange-500 duration-300",
    },
  ];

  return (
    <>
      <section className="py-20 bg-[#111111] border-t border-b border-neutral-800">
        <div className="container mx-auto">
          <div className="text-center pb-16">
            <h2 className="text-white text-4xl font-bold pb-4 values relative">
              قيمنا
            </h2>
            <p className="text-neutral-400 text-lg">
              المبادئ التي توجه كل ما نقوم بإنشائه
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4 mx-auto w-[85%]">
            {valueCards.map((card, index) => {
              return <HeaderCard cardInfo={card} key={index} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
