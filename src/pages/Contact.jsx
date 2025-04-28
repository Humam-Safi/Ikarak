import React from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import Map from '../components/common/Map';
import propertiesData from '../data/properties.json'; // Import property data

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 sm:px-6 lg:px-8 py-12 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-48 h-48 bg-blue-200 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 font-arabic bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-900 animate-slideIn">
          تواصل معنا
        </h1>
        <div className="w-32 h-0.5 mx-auto mb-8 bg-gradient-to-r from-sky-600  to-sky-900 rounded-full shadow-md"></div>

        <div className="grid grid-cols-1 gap-6">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-[1.02] transition-all duration-500 ease-out backdrop-blur-sm bg-opacity-90">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 bg-gradient-to-r from-sky-600 to-sky-900 bg-clip-text text-transparent">
              معلومات التواصل
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                  <svg className="w-5 h-5 text-sky-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">العنوان</h3>
                  <p className="text-gray-600 text-sm">شارع العقارات 123، حمص، سوريا</p>
                </div>
              </div>
              <div className="group flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                  <FaPhone className="text-lg text-sky-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">الهاتف</h3>
                  <p className="text-gray-600 text-sm">+963 123 456 789</p>
                </div>
              </div>
              <div className="group flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                  <FaEnvelope className="text-lg text-sky-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">البريد الإلكتروني</h3>
                  <p className="text-gray-600 text-sm">info@ikarak.com</p>
                </div>
              </div>
              <div className="group flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                  <svg className="w-5 h-5 text-sky-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">ساعات العمل</h3>
                  <p className="text-gray-600 text-sm">الإثنين - الجمعة: 9:00 ص - 5:00 م</p>
                  <p className="text-gray-600 text-sm">السبت: 9:00 ص - 2:00 م</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-semibold text-sky-900 text-sm mb-3">تابعنا</h3>
              <div className="flex gap-4">
                <a href="https://wa.me/+963123456789" target="_blank" rel="noopener noreferrer" className="group">
                  <FaWhatsapp className="text-2xl text-sky-900 group-hover:text-blue-800 group-hover:scale-125 transform transition-all duration-300" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group">
                  <FaInstagram className="text-2xl text-sky-900 group-hover:text-blue-800 group-hover:scale-125 transform transition-all duration-300" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group">
                  <FaFacebook className="text-2xl text-sky-900 group-hover:text-blue-800 group-hover:scale-125 transform transition-all duration-300" />
                </a>
              </div>
            </div>
            <a
              href="https://wa.me/+963123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full bg-sky-900 text-white text-center py-3 rounded-xl font-semibold text-base  transform transition-all duration-300 shadow-lg"
            >
              تواصل معنا الآن
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center bg-gradient-to-r from-sky-600 to-sky-900 bg-clip-text text-transparent">
            موقعنا
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-4 hover:shadow-2xl transition-all duration-500 ease-out backdrop-blur-sm bg-opacity-90">
            <Map properties={propertiesData.properties} /> {/* Pass properties data */}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;