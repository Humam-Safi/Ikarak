import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "كيف أبدأ عملية شراء عقار؟",
    answer:
      "الخطوة الأولى هي التواصل مع فريقنا لمناقشة متطلباتك وميزانيتك. سنساعدك في فهم السوق ونرشدك خلال العملية بأكملها.",
  },
  {
    question: "ما هي المستندات المطلوبة لشراء عقار؟",
    answer:
      "ستحتاج إلى بطاقة هوية سارية، وإثبات الدخل، وأي مستندات مالية ذات صلة. سيقدم لك فريقنا قائمة كاملة بناءً على وضعك الخاص.",
  },
  {
    question: "كم تستغرق عملية شراء العقار؟",
    answer:
      "يختلف الجدول الزمني حسب نوع العقار وظروفك الخاصة. في المتوسط، تستغرق العملية من 1-3 أشهر من بداية البحث حتى الانتهاء.",
  },
  {
    question: "ما هي التكاليف المتضمنة في شراء عقار؟",
    answer:
      "بالإضافة إلى سعر العقار، ستحتاج إلى مراعاة رسوم التسجيل والرسوم القانونية وتكاليف التجديد المحتملة. نقدم تفصيلاً كاملاً خلال العملية.",
  },
  {
    question: "كيف تحددون قيم العقارات؟",
    answer:
      "نستخدم مزيجاً من تحليل السوق وتقييم حالة العقار واتجاهات السوق المحلية لتقديم تقييمات دقيقة.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8 ">
          <h1 className="text-4xl md:text-5xl font-extrabold from-sky-300 to-sky-900 text-center mb-4 font-arabic bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-900 animate-slideIn">
            الأسلئة الشائعة
          </h1>
          <div className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-sky-300 to-sky-600 rounded-full shadow-md"></div>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        اعثر على إجابات للأسئلة الشائعة حول شراء وبيع وإدارة العقارات في حمص.
      </p>

      <div className="max-w-4xl mx-auto transition-all">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className={`w-full text-right p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow ${openIndex === index ? "border-l-4 border-sky-900" : ""
                }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold">{faq.question}</h3>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50 rounded-b-lg">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">هل لا تزال لديك أسئلة؟</h2>
        <p className="text-gray-600 mb-4">
          تواصل مع فريقنا للحصول على مساعدة شخصية ونصائح خبراء.
        </p>
        <button className="bg-sky-900 text-white px-6 py-2 rounded-lg  transition-colors">
          <Link to="/contact">اتصل بنا  </Link>
        </button>
      </div>
    </div>
  );
};

export default FAQ;
