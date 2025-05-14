import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import Toast from "../components/common/Toast";
import AnimatedTitle from "../components/common/AnimatedTitle";
import Map from "../components/common/Map";
import { Link } from "react-router-dom";

const Contact = () => {

  const [toast, setToast] = useState(null);



  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-primary-50
      via-white to-primary-100 px-4 sm:px-6 lg:px-8 py-12 overflow-hidden"
    >
      {/* Show toast notification if exists */}
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute top-0 left-0 w-48 h-48 bg-primary-200 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary-300 rounded-full opacity-10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Page title */}
        <div style={{
          width:"100%",
          textAlign:"center"
        }}>
          <AnimatedTitle
            text="اتصل بنا"
            tag="h1"
            animation="shimmer"
            className="text-4xl md:text-5xl font-extrabold text-center mb-4 font-arabic"
          />
        </div>
        <div className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-primary-300 to-primary-600 rounded-full shadow-md"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          {/* Contact Information Cards */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEnvelope className="text-2xl text-primary-900" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-grey-800">إيميل</h3>
            <a
              href="mailto:aqarathomsia@gmail.com"
              className="text-grey-600 hover:text-primary-900"
            >
              aqarathomsia@gmail.com
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaWhatsapp className="text-2xl text-primary-900" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-grey-800">واتساب</h3>
            <p className="text-grey-600 hover:text-primary-900">
              <a href="https://wa.me/963967517652" target="_blank" rel="noopener noreferrer">
                +963 967517652
              </a>
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPhone className="text-2xl text-primary-900" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-grey-800">هاتف</h3>
            <p className="text-grey-600 hover:text-primary-900">
              <a href="tel:+963967517652">+963 967517652</a>
            </p>
          </div>

          {/* Map and Address */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center lg:col-span-3">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMapMarkerAlt
                className="w-8 h-8 text-primary-900"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-grey-800">العنوان</h3>
            <p className="text-grey-600">سوريا - حمص</p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Contact;
