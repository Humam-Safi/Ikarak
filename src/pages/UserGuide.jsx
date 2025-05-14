import React, { useEffect } from 'react';
import { FaSearch, FaInfoCircle, FaPhone, FaHome } from 'react-icons/fa';
import AnimatedTitle from '../components/common/AnimatedTitle';

const UserGuide = () => {
  useEffect(() => {
    // Add animation class to sections with a delay
    const sections = document.querySelectorAll('.animate-section');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('animate-fade-in-up');
      }, index * 200); // 200ms delay between each section
    });
  }, []);

  return (
    <div className="min-h-screen bg-grey-50 py-12">
      <div className="container mx-auto px-4">
        {/* Animated header */}
        <div style={{ width: "100%", textAlign: 'center' }}>
          <AnimatedTitle
            text="دليل المستخدم"
            tag="h1"
            animation="shimmer"
            className="text-4xl md:text-5xl font-extrabold text-center mb-4 font-arabic"
          />
        </div>
        <div className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-primary-300 to-primary-600 rounded-full shadow-md animate-pulse"></div>

        <div className="max-w-4xl mx-auto">
          {/* Introduction Section */}
          <div className="animate-section opacity-0 bg-white rounded-lg shadow-md p-8 mb-6 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex  mb-4">
              <FaHome className="text-3xl text-primary-700 animate-pulse-smooth hover:animate-rotate ml-4" />
              <AnimatedTitle
                text="كيفية استخدام الموقع"
                tag="h2"
                animation="shimmer"
                className="text-2xl font-bold text-primary-700"
              />
            </div>
            <p className="text-grey-700 mb-4">
              مرحباً بك في دليل استخدام موقع عقارات حمصية. هذا الدليل سيساعدك في فهم كيفية استخدام جميع ميزات الموقع بفعالية.
            </p>
          </div>

          {/* Search Section */}
          <div className="animate-section opacity-0 bg-white rounded-lg shadow-md p-8 mb-6 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaSearch className="text-3xl text-primary-700 animate-pulse-smooth hover:animate-rotate ml-4" />
              <AnimatedTitle
                text="البحث عن العقارات"
                tag="h2"
                animation="shadow"
                className="text-2xl font-bold text-primary-700"
              />
            </div>
            <ul className="list-none space-y-4">
              <li className="flex items-center text-grey-700 hover:text-primary-700 transition-colors duration-200">
                <span className="w-2 h-2 bg-primary-700 rounded-full ml-3"></span>
                استخدم شريط البحث في الأعلى للبحث عن العقارات حسب الموقع أو النوع
              </li>
              <li className="flex items-center text-grey-700 hover:text-primary-700 transition-colors duration-200">
                <span className="w-2 h-2 bg-primary-700 rounded-full ml-3"></span>
                استخدم الفلاتر الجانبية لتحديد نطاق السعر والمساحة وعدد الغرف
              </li>
              <li className="flex items-center text-grey-700 hover:text-primary-700 transition-colors duration-200">
                <span className="w-2 h-2 bg-primary-700 rounded-full ml-3"></span>
                تصفح العقارات المميزة والعروض الحصرية في الصفحة الرئيسية
              </li>
            </ul>
          </div>

          {/* Property Details Section */}
          <div className="animate-section opacity-0 bg-white rounded-lg shadow-md p-8 mb-6 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaInfoCircle className="text-3xl text-primary-700 animate-pulse-smooth hover:animate-rotate ml-4" />
              <AnimatedTitle
                text="تفاصيل العقار"
                tag="h2"
                animation="glow"
                className="text-2xl font-bold text-primary-700"
              />
            </div>
            <ul className="list-none space-y-4">
              <li className="flex items-center text-grey-700 hover:text-primary-700 transition-colors duration-200">
                <span className="w-2 h-2 bg-primary-700 rounded-full ml-3"></span>
                انقر على أي عقار لعرض تفاصيله الكاملة
              </li>
              <li className="flex items-center text-grey-700 hover:text-primary-700 transition-colors duration-200">
                <span className="w-2 h-2 bg-primary-700 rounded-full ml-3"></span>
                شاهد الصور وتفاصيل الموقع والمميزات
              </li>
              <li className="flex items-center text-grey-700 hover:text-primary-700 transition-colors duration-200">
                <span className="w-2 h-2 bg-primary-700 rounded-full ml-3"></span>
                تواصل مباشرة مع المالك عبر معلومات الاتصال المتوفرة
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="animate-section opacity-0 bg-white rounded-lg shadow-md p-8 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaPhone className="text-3xl text-primary-700 animate-pulse-smooth hover:animate-rotate ml-4" />
              <AnimatedTitle
                text="التواصل معنا"
                tag="h2"
                animation="shadow"
                className="text-2xl font-bold text-primary-700"
              />
            </div>
            <p className="text-grey-700 mb-4">
              إذا كنت بحاجة إلى مساعدة إضافية، يمكنك التواصل معنا عبر:
            </p>
            <ul className="list-none space-y-4">
              <li className="flex items-center text-grey-700 hover:text-primary-700 transition-colors duration-200">
                <span className="w-2 h-2 bg-primary-700 rounded-full ml-3"></span>
                الاتصال المباشر على الرقم: 0967517652
              </li>
              <li className="flex items-center text-grey-700 hover:text-primary-700 transition-colors duration-200">
                <span className="w-2 h-2 bg-primary-700 rounded-full ml-3"></span>
                إرسال بريد إلكتروني إلى: aqarathomsia@gmail.com
              </li>
              <li className="flex items-center text-grey-700 hover:text-primary-700 transition-colors duration-200">
                <span className="w-2 h-2 bg-primary-700 rounded-full ml-3"></span>
                زيارة صفحة "اتصل بنا" للمزيد من خيارات التواصل
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes pulse-smooth {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-pulse-smooth {
            animation: pulse-smooth 2s infinite ease-in-out;
          }
          .hover\:animate-rotate:hover {
            animation: rotate 1s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default UserGuide;