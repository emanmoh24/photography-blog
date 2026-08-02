import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Badge from "../../Components/Badge/Badge";
import ArticlesSection from "../../Components/ArticlesSection/ArticlesSection";
import { useEffect } from "react";

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const badge = {
    title: "مدونتنا",
    color: "text-orange-500",
    icon: (
      <span className="text-orange-500">
        <i class="fa-regular fa-newspaper"></i>
      </span>
    ),
  };
  return (
    <>
      <Navbar />
      <header className="pt-40 pb-20 bg-neutral-950 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:60px_60px]">
        <div className="container mx-auto">
          <div className="text-center">
            <Badge badgeInfo={badge} />
            <h1 className="text-white font-bold text-6xl py-6">
              استكشف{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                مقالاتنا
              </span>
            </h1>
            <p className="text-xl text-neutral-500 w-3/5 mx-auto pb-12">
              اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
            </p>
          </div>
        </div>
      </header>
      <ArticlesSection />
      <Footer />
    </>
  );
}
