import profile1 from "../assets/images/profile.jpg";
import profile2 from "../assets/images/daas.jpg";
import logoImg from "../assets/images/Screenshot 2025-04-10 195541.png";
import { FaCheck, FaClock, FaMoneyBillWave, FaPhone } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-[30px] h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            من نحن
          </h1>
          <p className="text-xl text-white">شريكك الموثوق في مجال العقارات</p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-[30px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">قصتنا</h2>
              <p className="text-gray-600 mb-4">
                تأسست عقارك حمص في عام 2025, وكانت في طليعة صناعة العقارات في
                سوريا. بدأنا بمهمة بسيطة: مساعدة الناس في العثور على منازلهم
                المثالية وجعل عملية شراء العقارات سلسة قدر الإمكان.
              </p>
              <p className="text-gray-600">
                اليوم، نحن نطمح بأن نكون أحد المنصات العقارية الرائدة في سوريا,
                التي تربط آلاف المشترين والبائعين كل عام.
              </p>
            </div>
            <div>
              <img className=" h-[300px] rounded-lg w-[550px]" src={logoImg} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-[30px]">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            مهمتنا وقيمنا
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">الثقة والشفافية</h3>
              <p className="text-gray-600">
                نؤمن ببناء الثقة من خلال الشفافية الكاملة في جميع معاملاتنا.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaClock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">العميل أولاً</h3>
              <p className="text-gray-600">
                عملاؤنا هم أولويتنا. نبذل قصارى جهدنا لضمان رضاهم.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaMoneyBillWave className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">التميز</h3>
              <p className="text-gray-600">
                نسعى للتميز في كل جانب من جوانب خدمتنا وعملياتنا.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-[30px]">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            فريقنا
          </h2>
          <div className="flex justify-center items-center gap-9">
            <div className="text-center">
              <div>
                <img
                  className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4"
                  src={profile1}
                  alt=""
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">همام صافي</h3>
              <p className="text-gray-600">
                المدير التنفيذي والمؤسس و مدير المبيعات
              </p>
            </div>
            <div className="text-center">
              <div>
                <img
                  className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4"
                  src={profile2}
                  alt=""
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">عبدالله دعاس</h3>
              <p className="text-gray-600">
                المدير التنفيذي والمؤسس و مدير العقارات
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-[30px] text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            هل تريد معرفة المزيد؟
          </h2>
          <p className="text-white text-xl mb-8">
            تواصل مع فريقنا لأي استفسارات أو أسئلة
          </p>
          <div className=" flex items-center w-[fit-content] mx-auto gap-2 bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition duration-300 cursor-pointer">
            
            <a href="https://wa.me/963933333333" className="flex items-center gap-2"> <FaPhone />اتصل بنا</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
