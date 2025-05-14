import React from "react";
import AnimatedTitle from "../components/common/AnimatedTitle";

const services = [
  {
    title: "بيع العقارات",
    description:
      "مساعدة متخصصة في شراء وبيع العقارات السكنية والتجارية.",
    icon: "🏠",
  },
  {
    title: "إدارة العقارات",
    description:
      "خدمات إدارة عقارية احترافية للملاك وأصحاب العقارات.",
    icon: "🔑",
  },
  {
    title: "تقييم العقارات",
    description:
      "خدمات تقييم دقيقة للعقارات لتحديد الأسعار العادلة في السوق.",
    icon: "💰",
  },
  {
    title: "الاستثمار العقاري",
    description:
      "إرشاد ودعم لفرص الاستثمار العقاري.",
    icon: "📈",
  },
  {
    title: "الخدمات القانونية",
    description:
      "مساعدة قانونية وإعداد المستندات لمعاملات العقارات.",
    icon: "⚖️",
  },
  {
    title: "تأمين العقارات",
    description: "حلول تأمين شاملة لعقاراتك.",
    icon: "🛡️",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <AnimatedTitle
        text="خدماتنا"
        tag="h1"
        animation="shimmer"
        className="text-3xl font-bold text-center mb-4 font-arabic"
      />
      <p className="text-center text-grey-700 mb-12 max-w-2xl mx-auto font-arabic">
        نقدم خدمات عقارية شاملة لمساعدتك في العثور على وشراء وبيع وإدارة العقارات في حمص.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <AnimatedTitle
              text={service.title}
              tag="h3"
              animation="shadow"
              className="text-xl font-bold mb-2 font-arabic"
              delay={index * 0.1}
            />
            <p className="text-grey-700 font-arabic">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <AnimatedTitle
          text="لماذا تختارنا؟"
          tag="h2"
          animation="wave"
          className="text-2xl font-bold mb-4 font-arabic"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <AnimatedTitle
              text="فريق خبير"
              tag="h3"
              animation="glow"
              className="font-bold mb-2 font-arabic"
              delay={0.1}
            />
            <p className="text-grey-700 font-arabic">
              محترفونا ذوو الخبرة مكرسون لنجاحك.
            </p>
          </div>
          <div>
            <AnimatedTitle
              text="معرفة محلية"
              tag="h3"
              animation="glow"
              className="font-bold mb-2 font-arabic"
              delay={0.2}
            />
            <p className="text-grey-700 font-arabic">
              فهم عميق لسوق العقارات في حمص.
            </p>
          </div>
          <div>
            <AnimatedTitle
              text="تركيز على العميل"
              tag="h3"
              animation="glow"
              className="font-bold mb-2 font-arabic"
              delay={0.3}
            />
            <p className="text-grey-700 font-arabic">
              رضاك هو أولويتنا القصوى.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
