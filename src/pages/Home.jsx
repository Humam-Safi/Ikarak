import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaCheck,
  FaClock,
  FaStar,
  FaHome,
  FaBuilding,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import PropertyCard from "./propertyCard";
import propertiesData from "../data/properties.json";
import WhatWeDo from "./whatWeDo";

const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    setProperties(propertiesData.properties);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-[30px] h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            مرحباً بكم في موقع عقارات حمصية
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
        <div className="max-w-7xl mx-auto px-[20px] mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            عقارات مميزة
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard
                img={property.image[0]}
                key={property.id}
                type={property.type}
                location={property.location}
                title={property.title}
                price={property.price}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                area={property.area}
                features={property.features}
                id={property.id}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-[20px] mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            عروض حصرية
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard
                img={property.image[0]}
                key={property.id}
                type={property.type}
                location={property.location}
                title={property.title}
                price={property.price}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                area={property.area}
                features={property.features}
                id={property.id}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-[20px] mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            عقارات قيد الانشاء
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard
                img={property.image[0]}
                key={property.id}
                type={property.type}
                location={property.location}
                title={property.title}
                price={property.price}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                area={property.area}
                features={property.features}
                id={property.id}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhatWeDo />

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
            <FaPhone className="text-xl" />
            اتصل بنا
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
