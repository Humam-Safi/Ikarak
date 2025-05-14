import React from "react";
import AnimatedTitle from "../components/common/AnimatedTitle";

const WhatWeDo = () => {
  return (
    <div className="bg-gradient-to-b from-grey-100 to-white py-16">
      <div style={{
        width:"100%",
        textAlign:"center"
      }} className="container mx-auto px-4">
        <AnimatedTitle
          text="ماذا نفعل؟"
          tag="h1"
          animation="shimmer"
          className="text-4xl md:text-5xl font-extrabold text-center mb-4 font-arabic"
          
        />
        <div className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-primary-300 to-primary-600 rounded-full shadow-md"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First row - 2 cards */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl">
              <div className="bg-gradient-primary h-24 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="p-6 text-center">
                <AnimatedTitle
                  text="تأجير"
                  tag="h3"
                  animation="shadow"
                  className="text-2xl font-bold mb-4 text-grey-800"
                />
                <p className="text-grey-600">خدمة تأجير العقارات بأفضل الأسعار وأعلى الجودة</p>
              </div>
            </div>
          </div>

          {/* Sell Card */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl">
              <div className="bg-gradient-secondary h-24 flex items-center justify-center">
                <svg className="w-16 h-16 text-grey-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6 text-center">
                <AnimatedTitle
                  text="بيع"
                  tag="h3"
                  animation="glow"
                  className="text-2xl font-bold mb-4 text-grey-800"
                />
                <p className="text-grey-600">خدمة بيع العقارات بضمان أفضل الأسعار والشروط</p>
              </div>
            </div>
          </div>

          {/* Second row - 1 card */}
          <div className="transform hover:scale-105 transition-transform duration-300 sm:col-span-2 lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl">
              <div className="bg-gradient-to-r from-primary-400 to-secondary-400 h-24 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="p-6 text-center">
                <AnimatedTitle
                  text="شراء"
                  tag="h3"
                  animation="shimmer"
                  className="text-2xl font-bold mb-4 text-grey-800"
                />
                <p className="text-grey-600">خدمة شراء العقارات بأفضل الفرص الاستثمارية</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;