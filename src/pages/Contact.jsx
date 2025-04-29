import React from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import Map from '../components/common/Map';
import propertiesData from '../data/properties.json'; // Import property data

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 sm:px-6 lg:px-8 py-12 overflow-hidden">
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/96897091987"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Email Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-[1.02] transition-all duration-500 ease-out">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEnvelope className="text-2xl text-pink-500" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">إيميل</h3>
            <p className="text-gray-600">aqarathomsia@gmail.com</p>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-[1.02] transition-all duration-500 ease-out">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaWhatsapp className="text-2xl text-green-500" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">واتساب</h3>
            <p className="text-gray-600">96897091987</p>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-[1.02] transition-all duration-500 ease-out">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPhone className="text-2xl text-sky-900" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">هاتف</h3>
            <p className="text-gray-600">96897091987</p>
          </div>
        </div>

        {/* Address Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-sky-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">العنوان</h3>
          <p className="text-gray-600">سوريا - حمص</p>
        </div>

        {/* Map Section */}
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