const WhatWeDo = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white py-16">
      <div className="container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold from-sky-300 to-sky-900 text-center mb-4 font-arabic bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-900 animate-slideIn">
           ماذا نفعل؟
          </h1>
          <div className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-sky-300 to-sky-600 rounded-full shadow-md"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First row - 2 cards */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl">
              <div className="bg-blue-500 h-24 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">تأجير</h3>
                <p className="text-gray-600">خدمة تأجير العقارات بأفضل الأسعار وأعلى الجودة</p>
              </div>
            </div>
          </div>

          {/* Sell Card */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl">
              <div className="bg-green-500 h-24 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">بيع</h3>
                <p className="text-gray-600">خدمة بيع العقارات بضمان أفضل الأسعار والشروط</p>
              </div>
            </div>
          </div>

          {/* Second row - 1 card */}
          <div className="transform hover:scale-105 transition-transform duration-300 sm:col-span-2 lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl">
              <div className="bg-purple-500 h-24 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">شراء</h3>
                <p className="text-gray-600">خدمة شراء العقارات بأفضل الفرص الاستثمارية</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;