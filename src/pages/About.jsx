import { FaCheck, FaClock, FaMoneyBillWave, FaPhone } from "react-icons/fa";
import logo from "/images/logo.png";
import AnimatedTitle from "../components/common/AnimatedTitle";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-primary">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-[30px] h-full flex flex-col justify-center items-center text-center">
          <AnimatedTitle
            text="من نحن"
            tag="h1"
            animation="reveal"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <AnimatedTitle
            text="شريكك الموثوق في مجال العقارات"
            tag="p"
            animation="glow"
            className="text-xl text-white"
            delay={0.3}
          />
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-[30px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedTitle
                text="قصتنا"
                tag="h2"
                animation="shadow"
                className="text-3xl font-bold text-primary-800 mb-6"
              />
              <p className="text-grey-700 mb-4">
                تأسست عُمرَانَك في عام 2025, وكانت في طليعة صناعة العقارات في
                سوريا. بدأنا بمهمة بسيطة: مساعدة الناس في العثور على منازلهم
                المثالية وجعل عملية شراء العقارات سلسة قدر الإمكان.
              </p>
              <p className="text-grey-700">
                اليوم، نحن نطمح بأن نكون أحد المنصات العقارية الرائدة في سوريا,
                التي تربط آلاف المشترين والبائعين كل عام.
              </p>
            </div>
            <div>
              <img
                className="mt-[80px] h-[500px] rounded-lg w-[750px]"
                src={logo}
                style={{
                  filter:
                    "brightness(0.9) sepia(1) hue-rotate(155deg) saturate(2) contrast(1.2)",
                  mixBlendMode: "multiply",
                  backgroundColor: "transparent",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section className="py-16 bg-grey-50">
        <div className="max-w-7xl mx-auto px-[30px]">
          <div className="section-title mb-8">
            <AnimatedTitle
              text="مهمتنا و قيمنا"
              tag="h1"
              animation="shimmer"
              className="font-extrabold text-4xl md:text-5xl text-center"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaCheck className="w-6 h-6 text-primary-700" />
              </div>
              <AnimatedTitle
                text="الثقة والشفافية"
                tag="h3"
                animation="glow"
                className="text-xl font-semibold mb-2"
                delay={0.1}
              />
              <p className="text-grey-700">
                نؤمن ببناء الثقة من خلال الشفافية الكاملة في جميع معاملاتنا.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaClock className="w-6 h-6 text-primary-700" />
              </div>
              <AnimatedTitle
                text="العميل أولاً"
                tag="h3"
                animation="glow"
                className="text-xl font-semibold mb-2"
                delay={0.2}
              />
              <p className="text-grey-700">
                عملاؤنا هم أولويتنا. نبذل قصارى جهدنا لضمان رضاهم.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaMoneyBillWave className="w-6 h-6 text-primary-700" />
              </div>
              <AnimatedTitle
                text="التميز"
                tag="h3"
                animation="glow"
                className="text-xl font-semibold mb-2"
                delay={0.3}
              />
              <p className="text-grey-700">
                نسعى للتميز في كل جانب من جوانب خدمتنا وعملياتنا.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-[30px] text-center">
          <AnimatedTitle
            text="هل تريد معرفة المزيد؟"
            tag="h2"
            animation="wave"
            className="text-3xl font-bold text-white mb-4"
          />
          <p className="text-white text-xl mb-8">
            تواصل مع فريقنا لأي استفسارات أو أسئلة
          </p>
          <div className="flex items-center w-[fit-content] mx-auto gap-2 bg-white text-primary-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-grey-50 transition duration-300 cursor-pointer">
            <a href="/contact" className="flex items-center gap-2">
              <FaPhone className="text-primary-600" />
              اتصل بنا
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
