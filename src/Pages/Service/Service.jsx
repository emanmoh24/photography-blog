import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import SecHeader from "../../Components/SecHeader/SecHeader";
import Alert from "../../Components/Alert/Alert";
import List from "../../Components/List/List";
import { Link } from "../../../node_modules/react-router";
import { useEffect } from "react";

export default function Service() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const header = {
    title: "شروط الخدمة",
    date: "آخر تحديث: 15 يناير 2026",
    icon: <i class="fa-regular fa-file-lines"></i>,
  };

  const alert = {
    title: "إشعار مهم",
    desc: "يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا. بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بهذه الشروط.",
    icon: <i class="fa-solid fa-triangle-exclamation"></i>,
    style: "border-[#4A3907] bg-[#211B09] text-[#F0B100]",
    font: "text-[#ffdf20cc]",
  };

  const service = [
    {
      section: 1,
      title: "الموافقة على الشروط",
      content:
        "بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بشروط الخدمة هذه وجميع القوانين واللوائح المعمول بها. إذا لم توافق على أي من هذه الشروط، فأنت ممنوع من استخدام هذا الموقع أو الوصول إليه.",
    },
    {
      section: 2,
      title: "رخصة الاستخدام",
      content:
        "يُمنح الإذن للوصول المؤقت إلى المواد على موقع عدسة للعرض الشخصي غير التجاري فقط. هذا منح ترخيص وليس نقل ملكية.",
      details: [
        "تعديل أو نسخ المواد",
        "استخدام المواد لأي غرض تجاري أو للعرض العام",
        "محاولة فك أو عكس هندسة أي برنامج على الموقع",
        "إزالة أي حقوق نشر أو علامات ملكية من المواد",
        "نقل المواد إلى شخص آخر أو نسخها على أي خادم آخر",
      ],
      icon: (
        <span className="rounded-[50%] flex items-center justify-center text-[#FF6467] text-xs font-bold">
          <i class="fa-solid fa-x"></i>
        </span>
      ),
    },
    {
      section: 3,
      title: "إخلاء المسؤولية",
      content:
        'المواد الموجودة على موقع عدسة مقدمة على أساس "كما هي". عدسة لا يقدم أي ضمانات، صريحة أو ضمنية، ويخلي مسؤوليته من جميع الضمانات الأخرى.',
    },
    {
      section: 4,
      title: "القيود",
      content:
        "في أي حال من الأحوال، لن يكون عدسة أو مورديه مسؤولين عن أي أضرار ناتجة عن استخدام أو عدم القدرة على استخدام المواد على الموقع.",
    },
    {
      section: 5,
      title: "محتوى المستخدم",
      content:
        "إذا نشرت محتوى على موقعنا (مثل التعليقات)، فإنك تمنحنا ترخيصاً غير حصري وعالمي ومجاني لاستخدام هذا المحتوى وإعادة إنتاجه وتعديله وتوزيعه.",
      details: [
        "أن يكون تشهيرياً أو فاحشاً أو مسيئاً",
        "انتهاك حقوق الملكية الفكرية للآخرين",
        "احتواء فيروسات أو أكواد ضارة",
        "انتهاك أي قوانين أو لوائح معمول بها",
        "الإعلان عن منتجات أو خدمات غير مصرح بها",
      ],
       icon: (
        <span className="rounded-[50%] flex items-center justify-center text-[#FF6467] text-xs font-bold">
          <i class="fa-solid fa-x"></i>
        </span>
      ),
    },
    {
      section: 6,
      title: "التعديلات",
      content:
        "قد يراجع عدسة شروط الخدمة هذه في أي وقت دون إشعار. باستخدام هذا الموقع، فإنك توافق على الالتزام بالنسخة الحالية من شروط الخدمة.",
    },
    {
      section: 7,
      title: "معلومات الاتصال",
      content: "إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى التواصل معنا:",
      email: "hello@adasah.com",
    },
  ];

  return (
    <>
      <Navbar />
      <SecHeader headerInfo={header} />
      <section className="bg-neutral-950">
        <div className="container mx-auto py-16">
          <Alert alertInfo={alert} />
          {service.map((item, index) => {
            return <List data={item} key={index} />;
          })}
          <span className="service relative text-sm flex items-center justify-center text-neutral-400 pt-25">
            {" "}
            باستخدام موقعنا، فإنك توافق على شروط الخدمة هذه. انظر أيضاً{" "}
            <Link
              to="/Privacy"
              className="font-medium text-orange-500 hover:text-orange-400 duration-300"
            >
              {" "}
              سياسة الخصوصية
            </Link>
            .
          </span>
        </div>
      </section>
      <Footer />
    </>
  );
}
