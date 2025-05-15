import React, { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedTitle from "../components/common/AnimatedTitle";

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
    <div className="container mx-auto px-4 py-8">
      <div style={{
        width:'100%',
        textAlign:"center"
      }}>
        <AnimatedTitle
          text="الأسلئة الشائعة"
          tag="h1"
          animation="shimmer"
          className="text-4xl md:text-5xl font-extrabold text-center mb-4 font-arabic"
        />
      </div>
      <div className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-primary-300 to-primary-600 rounded-full shadow-md"></div>
      <p className="text-center text-grey-700 mb-12 max-w-2xl mx-auto">
        اعثر على إجابات للأسئلة الشائعة حول شراء وبيع وإدارة العقارات في حمص.
      </p>

      <div className="max-w-4xl mx-auto transition-all">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className={`w-full text-right p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow ${openIndex === index ? "border-l-4 border-primary-600" : ""
                }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h4 className="">{faq.question}</h4>
                <span className={`text-xl text-black transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-grey-50 rounded-b-lg border-b border-l border-r border-grey-200">
                <p className="text-grey-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <AnimatedTitle
          text="هل لا تزال لديك أسئلة؟"
          tag="h2"
          animation="glow"
          className="text-2xl font-bold mb-4"
        />
        <p className="text-grey-700 mb-4">
          تواصل مع فريقنا للحصول على مساعدة شخصية ونصائح خبراء.
        </p>
        <Link to="/contact" className="bg-gradient-primary text-white px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-md inline-block hover:-translate-y-1">
          اتصل بنا
        </Link>
      </div>
    </div>
  );
};

export default FAQ;
