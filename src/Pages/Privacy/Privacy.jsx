import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import SecHeader from "../../Components/SecHeader/SecHeader";
import Alert from "../../Components/Alert/Alert";
import List from "../../Components/List/List";
import { Link } from "../../../node_modules/react-router";
import { useEffect } from "react";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const privacy = [
    {
      section: 1,
      title: "مقدمة",
      content:
        "مرحباً بك في عدسة. نحن نحترم خصوصيتك وملتزمون بحماية بياناتك الشخصية. ستعلمك سياسة الخصوصية هذه بكيفية العناية ببياناتك الشخصية عند زيارة موقعنا وتخبرك عن حقوق الخصوصية الخاصة بك.",
    },
    {
      section: 2,
      title: "المعلومات التي نجمعها",
      details: [
        {
          category: "بيانات الهوية",
          description:
            "تشمل الاسم الأول، الاسم الأخير، اسم المستخدم أو معرف مشابه.",
        },
        {
          category: "بيانات الاتصال",
          description: "تشمل عنوان البريد الإلكتروني.",
        },
        {
          category: "البيانات التقنية",
          description:
            "تشمل عنوان IP، نوع المتصفح، المنطقة الزمنية، ونظام التشغيل.",
        },
        {
          category: "بيانات الاستخدام",
          description: "تشمل معلومات حول كيفية استخدامك لموقعنا وخدماتنا.",
        },
      ],
      icon: (
        <span className="rounded-[50%] bg-linear-to-r from-orange-500 to-amber-500 flex items-center justify-center w-4 h-4 text-black text-[8px] font-bold">
          <i className="fa-solid fa-check"></i>
        </span>
      ),
    },
    {
      section: 3,
      title: "كيف نستخدم معلوماتك",
      details: [
        "لتقديم خدمتنا والحفاظ عليها",
        "لإخطارك بالتغييرات في خدمتنا",
        "لتقديم دعم العملاء",
        "لجمع تحليلات أو معلومات قيمة لتحسين خدمتنا",
        "لمراقبة استخدام خدمتنا",
        "لاكتشاف ومنع ومعالجة المشاكل التقنية",
      ],
      icon: (
        <span className="rounded-[50%] bg-linear-to-r from-orange-500 to-amber-500 flex items-center justify-center w-4 h-4 text-black text-[8px] font-bold">
          <i className="fa-solid fa-check"></i>
        </span>
      ),
    },
    {
      section: 4,
      title: "ملفات تعريف الارتباط",
      content:
        "نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتتبع النشاط على موقعنا. يمكنك توجيه متصفحك لرفض جميع ملفات تعريف الارتباط أو للإشارة عند إرسال ملف تعريف ارتباط. ومع ذلك، إذا لم تقبل ملفات تعريف الارتباط، فقد لا تتمكن من استخدام بعض أجزاء موقعنا.",
    },
    {
      section: 5,
      title: "أمان البيانات",
      content:
        "لقد وضعنا تدابير أمنية مناسبة لمنع فقدان بياناتك الشخصية أو استخدامها أو الوصول إليها بشكل غير مصرح به عن طريق الخطأ. نحن نحد الوصول إلى بياناتك الشخصية لأولئك الذين لديهم حاجة عملية للمعرفة.",
    },
    {
      section: 6,
      title: "حقوقك",
      details: [
        "طلب الوصول إلى بياناتك الشخصية",
        "طلب تصحيح بياناتك الشخصية",
        "طلب مسح بياناتك الشخصية",
        "الاعتراض على معالجة بياناتك الشخصية",
        "طلب تقييد معالجة بياناتك الشخصية",
        "الحق في سحب الموافقة",
      ],
      icon: (
        <span className="rounded-[50%] bg-linear-to-r from-orange-500 to-amber-500 flex items-center justify-center w-4 h-4 text-black text-[8px] font-bold">
          <i className="fa-solid fa-check"></i>
        </span>
      ),
    },
    {
      section: 7,
      title: "تواصل معنا",
      content:
        "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا:",
      email: "hello@adasah.com",
    },
  ];

  const header = {
    title: "سياسة الخصوصية",
    date: "آخر تحديث: 15 يناير 2026",
    icon: <i class="fa-solid fa-lock"></i>,
  };

  const alert = {
    title: "خصوصيتك تهمنا",
    desc: "نحن ملتزمون بحماية معلوماتك الشخصية والشفافية بشأن ما نجمعه.",
    icon: <i class="fa-solid fa-shield-halved"></i>,
    style: "border-[#502407] bg-[#231309] text-orange-500",
    font: "text-[#ffb86acc]",
  };

  return (
    <>
      <Navbar />
      <SecHeader headerInfo={header} />
      <section className="bg-neutral-950">
        <div className="container mx-auto py-16">
          <Alert alertInfo={alert} />
          {privacy.map((item, index) => {
            return <List data={item} key={index} />;
          })}
          <span className="service relative text-sm flex items-center justify-center text-neutral-400 pt-25">
            {" "}
            باستخدام موقعنا، فإنك توافق على شروط الخدمة هذه. انظر أيضاً{" "}
            <Link
              to="/Service"
              className="font-medium text-orange-500 hover:text-orange-400 duration-300"
            >
              {" "}
              شروط الخدمة
            </Link>
            .
          </span>
        </div>
      </section>
      <Footer />
    </>
  );
}
