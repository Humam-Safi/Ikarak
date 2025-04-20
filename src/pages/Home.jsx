import React from "react";
import { Link } from "react-router-dom";
import {
  FaCheck,
  FaClock,
  FaStar,
  FaHome,
  FaBuilding,
  FaMapMarkerAlt,
} from "react-icons/fa";
import PropertyCard from "./propertyCard";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-[30px] h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            مرحباً بكم في عقارك حمص
          </h1>
          <p className="text-xl text-white mb-8">
            شريكك الموثوق في مجال العقارات
          </p>
          <Link
            to="/properties"
            className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition duration-300 flex items-center gap-2"
          >
            <FaHome className="text-xl" />
            تصفح العقارات
          </Link>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-[30px]">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            عقارات مميزة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PropertyCard title="شقة عصرية في وسط المدينة" type="مالك حصري" location="وسط المدينة، حمص" price="120,000 د.ل" />
            <PropertyCard title="شقة عصرية في وسط المدينة" type="مكتب عقاري" location="وسط المدينة، حمص" price="120,000 د.ل" />
            <PropertyCard title="شقة عصرية في وسط المدينة" type="مالك حصري" location="وسط المدينة، حمص" price="120,000 د.ل" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-[30px]">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            لماذا تختارنا؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ثقة وشفافية</h3>
              <p className="text-gray-600">
                نؤمن ببناء الثقة من خلال الشفافية الكاملة في جميع معاملاتنا
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaClock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">العميل أولاً</h3>
              <p className="text-gray-600">
                عملاؤنا هم أولويتنا. نبذل قصارى جهدنا لضمان رضاهم
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaStar className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">تميز</h3>
              <p className="text-gray-600">
                نسعى للتميز في كل جانب من جوانب خدمتنا وعملياتنا
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-[30px] text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            هل تبحث عن عقار أحلامك؟
          </h2>
          <p className="text-white text-xl mb-8">
            تواصل معنا اليوم واسمح لنا بمساعدتك في العثور على العقار المثالي
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition duration-300 flex items-center gap-2 justify-center mx-auto w-fit"
          >
            <FaHome className="text-xl" />
            اتصل بنا
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
