import React, { useEffect } from 'react';
import { FaSearch, FaInfoCircle, FaPhone, FaHome } from 'react-icons/fa';

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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Animated header with bounce effect */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 font-arabic bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-900 animate-bounce-slow">
          دليل المستخدم
        </h1>
        <div className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-sky-300 to-sky-600 rounded-full shadow-md animate-pulse"></div>
        
        <div className="max-w-4xl mx-auto">
          {/* Introduction Section */}
          <div className="animate-section opacity-0 bg-white rounded-lg shadow-md p-8 mb-6 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaHome className="text-3xl text-sky-900 animate-bounce-slow ml-4" />
              <h2 className="text-2xl font-bold text-sky-900">كيفية استخدام الموقع</h2>
            </div>
            <p className="text-gray-600 mb-4">
              مرحباً بك في دليل استخدام موقع عقارات حمصية. هذا الدليل سيساعدك في فهم كيفية استخدام جميع ميزات الموقع بفعالية.
            </p>
          </div>

          {/* Search Section */}
          <div className="animate-section opacity-0 bg-white rounded-lg shadow-md p-8 mb-6 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaSearch className="text-3xl text-sky-900 animate-bounce-slow ml-4" />
              <h2 className="text-2xl font-bold text-sky-900">البحث عن العقارات</h2>
            </div>
            <ul className="list-none space-y-4">
              <li className="flex items-center text-gray-600 hover:text-sky-900 transition-colors duration-200">
                <span className="w-2 h-2 bg-sky-900 rounded-full ml-3"></span>
                استخدم شريط البحث في الأعلى للبحث عن العقارات حسب الموقع أو النوع
              </li>
              <li className="flex items-center text-gray-600 hover:text-sky-900 transition-colors duration-200">
                <span className="w-2 h-2 bg-sky-900 rounded-full ml-3"></span>
                استخدم الفلاتر الجانبية لتحديد نطاق السعر والمساحة وعدد الغرف
              </li>
              <li className="flex items-center text-gray-600 hover:text-sky-900 transition-colors duration-200">
                <span className="w-2 h-2 bg-sky-900 rounded-full ml-3"></span>
                تصفح العقارات المميزة والعروض الحصرية في الصفحة الرئيسية
              </li>
            </ul>
          </div>

          {/* Property Details Section */}
          <div className="animate-section opacity-0 bg-white rounded-lg shadow-md p-8 mb-6 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaInfoCircle className="text-3xl text-sky-900 animate-bounce-slow ml-4" />
              <h2 className="text-2xl font-bold text-sky-900">تفاصيل العقار</h2>
            </div>
            <ul className="list-none space-y-4">
              <li className="flex items-center text-gray-600 hover:text-sky-900 transition-colors duration-200">
                <span className="w-2 h-2 bg-sky-900 rounded-full ml-3"></span>
                انقر على أي عقار لعرض تفاصيله الكاملة
              </li>
              <li className="flex items-center text-gray-600 hover:text-sky-900 transition-colors duration-200">
                <span className="w-2 h-2 bg-sky-900 rounded-full ml-3"></span>
                شاهد الصور وتفاصيل الموقع والمميزات
              </li>
              <li className="flex items-center text-gray-600 hover:text-sky-900 transition-colors duration-200">
                <span className="w-2 h-2 bg-sky-900 rounded-full ml-3"></span>
                تواصل مباشرة مع المالك عبر معلومات الاتصال المتوفرة
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="animate-section opacity-0 bg-white rounded-lg shadow-md p-8 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaPhone className="text-3xl text-sky-900 animate-bounce-slow ml-4" />
              <h2 className="text-2xl font-bold text-sky-900">التواصل معنا</h2>
            </div>
            <p className="text-gray-600 mb-4">
              إذا كنت بحاجة إلى مساعدة إضافية، يمكنك التواصل معنا عبر:
            </p>
            <ul className="list-none space-y-4">
              <li className="flex items-center text-gray-600 hover:text-sky-900 transition-colors duration-200">
                <span className="w-2 h-2 bg-sky-900 rounded-full ml-3"></span>
                الاتصال المباشر على الرقم: 0967517652
              </li>
              <li className="flex items-center text-gray-600 hover:text-sky-900 transition-colors duration-200">
                <span className="w-2 h-2 bg-sky-900 rounded-full ml-3"></span>
                إرسال بريد إلكتروني إلى: aqarathomsia@gmail.com
              </li>
              <li className="flex items-center text-gray-600 hover:text-sky-900 transition-colors duration-200">
                <span className="w-2 h-2 bg-sky-900 rounded-full ml-3"></span>
                زيارة صفحة "اتصل بنا" للمزيد من خيارات التواصل
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGuide; 