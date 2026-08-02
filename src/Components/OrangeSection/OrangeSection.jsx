import React from "react";
import {Link} from "../../../node_modules/react-router"

export default function OrangeSection() {
  return (
    <>
      <section className="bg-linear-to-br from-orange-600 to-amber-500 py-20">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="font-bold text-4xl text-white">
              لديك أسئلة؟ دعنا نتحدث!
            </h2>
            <p className="text-[#fffc] text-lg w-2/4 mx-auto py-8">
              نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
              أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="mailto:hello@adasah.com" className="text-white flex items-center justify-center bg-black rounded-xl py-4 px-7 border border-black hover:-translate-y-1 hover:bg-neutral-900 duration-300 font-semibold text-base gap-2">
                <span className="flex items-center justify-center"><i className="fa-solid fa-envelope"></i></span>
                <span>تواصل معنا</span>
            </Link>
            <Link to="/Blog" className="rounded-xl py-4 px-7 border-2 border-[#fffc] hover:text-black hover:bg-white hover:border-white duration-300 font-semibold text-base text-white">
                تصفح المقالات
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
