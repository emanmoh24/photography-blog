import React from "react";
import { Link } from "../../../node_modules/react-router";
import MainBtn from "../MainBtn/MainBtn";

function parseMarkdownSections(contentString) {
  if (!contentString) return { intro: "", sections: [] };

  const blocks = contentString.split("\n\n");
  const intro = blocks[0]?.startsWith("##") ? "" : blocks[0];
  const sections = [];

  let currentSection = null;

  blocks.forEach((block) => {
    const trimmed = block.trim();
    if (trimmed.startsWith("##")) {
      if (currentSection) sections.push(currentSection);
      const title = trimmed.replace(/^##\s*/, "");
      currentSection = {
        title,
        description: "",
      };
    } else if (currentSection) {
      currentSection.description = trimmed;
    }
  });

  if (currentSection) sections.push(currentSection);

  return { intro, sections };
}

export default function ArticleBody({ article }) {
  const { intro, sections } = parseMarkdownSections(article?.content);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  function formatDate(dateString) {
    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day);

    return new Intl.DateTimeFormat("ar-EG-u-nu-arab", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  }

  const btn = {
    title: "تصفح المزيد",
    rounded: "rounded-xl text-center",
    width: "w-full",
    padding: "py-4 px-8",
    hover: "hover:bg-linear-to-r hover:from-orange-600 hover:to-orange-700",
    to: "/Blog",
  };

  return (
    <>
      <section className="py-12 bg-neutral-950">
        <div className="container mx-auto">
          <div className="grid min-[375px]:grid-cols-1 grid-cols-3 w-[95%] mx-auto text-white gap-12">
            <div className="col-span-1">
              <div className="sticky top-10 min-[375px]:w-[356px] min-[576px]:w-[547px] md:w-[729px] lg:w-[972px]">
                <div className="grid grid-cols-1 gap-4">


                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-lg text-orange-500 border flex items-center justify-center rounded-lg p-2 bg-[#231309] border-[#662C06]">
                      <i className="fa-solid fa-list"></i>
                    </span>
                    <span className="font-bold">محتويات المقال</span>
                  </div>

                  <ul>
                    {sections.map((section, index) => {
                      const sectionId = `section-${index}`;
                      return (
                        <li
                          key={index}
                          className="mb-3 hover:bg-[#1D1510] duration-300 group p-3 rounded-xl cursor-pointer"
                        >
                          <a
                            href={`#${sectionId}`}
                            onClick={(e) => scrollToSection(e, sectionId)}
                            className="flex items-center gap-3"
                          >
                            <span className="text-xs font-bold bg-neutral-800 text-neutral-500 rounded-lg px-2.5 py-1 group-hover:bg-[#341D0E] group-hover:text-orange-500 duration-300">
                              {index + 1}
                            </span>
                            <span className="text-sm text-neutral-400 group-hover:text-orange-500 duration-300">
                              {section.title}
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 bg-neutral-950 rounded-xl">
                      <div className="w-3/4 mx-auto flex flex-col items-center justify-center gap-2">
                        <span className="flex items-center justify-center text-orange-500 text-xl">
                          <i className="fa-regular fa-clock"></i>
                        </span>
                        <span className="font-bold text-white text-center">
                          {article.readTime}
                        </span>
                        <span className="text-xs text-neutral-500">
                          وقت القراءة
                        </span>
                      </div>
                    </div>

                    <div className="p-4 bg-neutral-950 rounded-xl">
                      <div className="w-3/4 mx-auto flex flex-col items-center justify-center gap-2">
                        <span className="flex items-center justify-center text-orange-500 text-xl">
                          <i className="fa-regular fa-calendar"></i>
                        </span>
                        <span className="font-bold text-white text-center">
                          {formatDate(article.date)}
                        </span>
                        <span className="text-xs text-neutral-500">
                          تاريخ النشر{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-linear-to-l from-[#161209] to-[#221409] border border-[#482408] rounded-2xl p-6">
                  <div className="w-3/4 mx-auto flex flex-col items-center justify-center gap-3">
                    <span className="flex items-center justify-center text-orange-500 text-xl bg-[#4B2407] p-4 rounded-xl">
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <span className="font-bold text-white text-center">
                      لا تفوّت جديدنا
                    </span>
                    <span className="text-sm text-neutral-500">
                      اشترك للحصول على أحدث المقالات
                    </span>
                    <MainBtn btnInfo={btn} />
                  </div>
                </div>


                </div>
              </div>
            </div>

            <div className="col-span-2">
              <div>
                {article?.excerpt && (
                  <blockquote className="text-white text-lg italic p-6 border border-[#4D2407] bg-linear-to-r from-[#221309] to-[#161209] rounded-2xl mb-10">
                    {article.excerpt}
                  </blockquote>
                )}

                {intro && (
                  <p className="text-lg text-neutral-400 mb-8">
                    {intro}
                  </p>
                )}

                <dl className="pt-6">
                  {sections.map((section, index) => {
                    const sectionId = `section-${index}`;
                    return (
                      <React.Fragment key={index}>
                        <dt
                          id={sectionId}
                          className="pb-6 font-bold text-white text-3xl flex items-center gap-3 scroll-mt-10"
                        >
                          <span className="text-2xl text-orange-500 border flex items-center justify-center rounded-xl p-2 bg-[#231309] border-[#662C06]">
                            <i className="fa-solid fa-camera"></i>
                          </span>
                          <span>{section.title}</span>
                        </dt>

                        <dd className="text-lg text-neutral-400 pb-14">
                          {section.description}
                        </dd>
                      </React.Fragment>
                    );
                  })}
                </dl>

                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-lg text-orange-500 border flex items-center justify-center rounded-lg p-2 bg-[#231309] border-[#662C06]">
                        <i className="fa-solid fa-tag"></i>
                      </span>
                      <span className="font-bold">الوسوم</span>
                    </div>
                    <ul className="flex items-center gap-2">
                      {article.tags.map((tag) => {
                        return (
                          <li className="cursor-pointer border border-neutral-800 rounded-full text-neutral-500 text-sm px-3 py-2 w-fit duration-300 hover:text-orange-500 hover:border-[#8F410D]">
                            #{tag}{" "}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex items-center justify-between">
                    <div className="flex items-center gap-3 ">
                      <span className="text-lg text-orange-500 border flex items-center justify-center rounded-lg p-2 bg-[#231309] border-[#662C06]">
                        <i className="fa-solid fa-tag"></i>
                      </span>
                      <span className="font-bold">شارك المقال</span>
                    </div>
                    <ul className="flex items-center gap-3">
                      <li className="flex items-center justify-center rounded-lg bg-neutral-800 text-neutral-500 border border-neutral-700 p-2 duration-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white">
                        <Link>
                          {" "}
                          <i className="fa-brands fa-x-twitter"></i>
                        </Link>
                      </li>
                      <li className="flex items-center justify-center rounded-lg bg-neutral-800 text-neutral-500 border border-neutral-700 p-2 duration-300 hover:bg-blue-400 hover:border-blue-400 hover:text-white">
                        <Link>
                          {" "}
                          <i className="fa-brands fa-linkedin"></i>
                        </Link>
                      </li>
                      <li className="flex items-center justify-center rounded-lg bg-neutral-800 text-neutral-500 border border-neutral-700 p-2 duration-300 hover:bg-green-500 hover:border-green-500 hover:text-white">
                        <Link>
                          {" "}
                          <i className="fa-brands fa-whatsapp"></i>
                        </Link>
                      </li>
                      <li className="flex items-center justify-center rounded-lg bg-neutral-800 text-neutral-500 border border-neutral-700 p-2 duration-300 hover:bg-orange-500 hover:border-orange-500 hover:text-white">
                        <Link>
                          {" "}
                          <i className="fa-solid fa-link"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex items-center gap-4 min-[375px]:flex-col md:flex-row">
                    <figure className="overflow-hidden border-3 rounded-2xl border-[#43240F]">
                      <img
                        src={article.author.avatar}
                        alt={article.author.name}
                        className="w-full"
                      />
                    </figure>
                    <div className="flex flex-col items-start min-[375px]:items-center md:items-start ">
                      <span className="font-semibold text-orange-500 text-xs">
                        كاتب المقال
                      </span>
                      <span className="text-white font-bold text-xl">
                        {article.author.name}
                      </span>
                      <span className="text-neutral-500 text-sm">
                        {article.author.role}
                      </span>
                      <span className="text-neutral-400 text-sm mt-3 min-[375px]:text-center">
                        مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                        الفوتوغرافي.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
