import React from "react";
import { Link } from "../../../node_modules/react-router";

export default function ArticleBody() {
  return (
    <>
      <section className="py-12 bg-neutral-950">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 w-[95%] mx-auto text-white gap-12">
            <div className="col-span-2">
              <div>
                <blockquote className="text-white text-lg italic p-6 border border-[#4D2407] bg-linear-to-r from-[#221309] to-[#161209] rounded-2xl mb-10">
                  "تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح
                  احترافية حول الإضاءة والتكوين."
                </blockquote>
                <p className="text-lg text-neutral-400">
                  الساعة الذهبية هي أكثر الأوقات سحراً للتصوير الفوتوغرافي. ذلك
                  الوقت القصير بعد شروق الشمس وقبل غروبها حيث يكون الضوء ناعماً
                  ودافئاً وساحراً.
                </p>
                <dl className="pt-14">
                  <dt className="pb-6 font-bold text-white text-3xl flex items-center gap-3">
                    <span className="text-2xl text-orange-500 border flex items-center justify-center rounded-xl p-2 bg-[#231309] border-[#662C06]">
                      <i className="fa-solid fa-camera"></i>
                    </span>
                    <span>لماذا الساعة الذهبية؟</span>
                  </dt>
                  <dd className="text-lg text-neutral-400 pb-14">
                    الضوء خلال هذا الوقت له صفات فريدة: ظلال طويلة ناعمة، ألوان
                    دافئة ذهبية، وتباين منخفض يجعل كل شيء يبدو أجمل. البورتريهات
                    تكتسب توهجاً طبيعياً والمناظر الطبيعية تتحول إلى لوحات فنية.
                  </dd>
                  <dt className="pb-6 font-bold text-white text-3xl flex items-center gap-3">
                    <span className="text-2xl text-orange-500 border flex items-center justify-center rounded-xl p-2 bg-[#231309] border-[#662C06]">
                      <i className="fa-solid fa-camera"></i>
                    </span>
                    <span>لماذا الساعة الذهبية؟</span>
                  </dt>
                  <dd className="text-lg text-neutral-400 pb-14">
                    الضوء خلال هذا الوقت له صفات فريدة: ظلال طويلة ناعمة، ألوان
                    دافئة ذهبية، وتباين منخفض يجعل كل شيء يبدو أجمل. البورتريهات
                    تكتسب توهجاً طبيعياً والمناظر الطبيعية تتحول إلى لوحات فنية.
                  </dd>
                  <dt className="pb-6 font-bold text-white text-3xl flex items-center gap-3">
                    <span className="text-2xl text-orange-500 border flex items-center justify-center rounded-xl p-2 bg-[#231309] border-[#662C06]">
                      <i className="fa-solid fa-camera"></i>
                    </span>
                    <span>لماذا الساعة الذهبية؟</span>
                  </dt>
                  <dd className="text-lg text-neutral-400 pb-14">
                    الضوء خلال هذا الوقت له صفات فريدة: ظلال طويلة ناعمة، ألوان
                    دافئة ذهبية، وتباين منخفض يجعل كل شيء يبدو أجمل. البورتريهات
                    تكتسب توهجاً طبيعياً والمناظر الطبيعية تتحول إلى لوحات فنية.
                  </dd>
                </dl>
              </div>
            </div>

            <div className="col-span-1">
              <div>
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-lg text-orange-500 border flex items-center justify-center rounded-lg p-2 bg-[#231309] border-[#662C06]">
                      <i className="fa-solid fa-list"></i>
                    </span>
                    <span className="font-bold">محتويات المقال</span>
                  </div>

                  <ul>
                    <li className="mb-4 ps-3 hover:bg-[#1D1510] duration-300 group p-3 rounded-xl">
                      <Link className="flex items-center gap-3">
                        <span className="text-xs font-bold bg-neutral-800 text-neutral-500 rounded-lg px-2 py-1 group-hover:bg-[#341D0E] group-hover:text-orange-500 duration-300">
                          1
                        </span>
                        <span className="text-sm text-neutral-400 group-hover:text-orange-500 duration-300">
                          لماذا الساعة الذهبية
                        </span>
                      </Link>
                    </li>
                    <li className="mb-4 ps-3 hover:bg-[#1D1510] duration-300 group p-3 rounded-xl">
                      <Link className="flex items-center gap-3">
                        <span className="text-xs font-bold bg-neutral-800 text-neutral-500 rounded-lg px-2 py-1 group-hover:bg-[#341D0E] group-hover:text-orange-500 duration-300">
                          1
                        </span>
                        <span className="text-sm text-neutral-400 group-hover:text-orange-500 duration-300">
                          لماذا الساعة الذهبية
                        </span>
                      </Link>
                    </li>
                    <li className="mb-4 ps-3 hover:bg-[#1D1510] duration-300 group p-3 rounded-xl">
                      <Link className="flex items-center gap-3">
                        <span className="text-xs font-bold bg-neutral-800 text-neutral-500 rounded-lg px-2 py-1 group-hover:bg-[#341D0E] group-hover:text-orange-500 duration-300">
                          1
                        </span>
                        <span className="text-sm text-neutral-400 group-hover:text-orange-500 duration-300">
                          لماذا الساعة الذهبية
                        </span>
                      </Link>
                    </li>
                    <li className="mb-4 ps-3 hover:bg-[#1D1510] duration-300 group p-3 rounded-xl">
                      <Link className="flex items-center gap-3">
                        <span className="text-xs font-bold bg-neutral-800 text-neutral-500 rounded-lg px-2 py-1 group-hover:bg-[#341D0E] group-hover:text-orange-500 duration-300">
                          1
                        </span>
                        <span className="text-sm text-neutral-400 group-hover:text-orange-500 duration-300">
                          لماذا الساعة الذهبية
                        </span>
                      </Link>
                    </li>
                    <li className="mb-4 ps-3 hover:bg-[#1D1510] duration-300 group p-3 rounded-xl">
                      <Link className="flex items-center gap-3">
                        <span className="text-xs font-bold bg-neutral-800 text-neutral-500 rounded-lg px-2 py-1 group-hover:bg-[#341D0E] group-hover:text-orange-500 duration-300">
                          1
                        </span>
                        <span className="text-sm text-neutral-400 group-hover:text-orange-500 duration-300">
                          لماذا الساعة الذهبية
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
