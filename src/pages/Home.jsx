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
  FaArrowRight,
} from "react-icons/fa";
import PropertyCard from "./propertyCard";
import propertiesData from "../data/properties.json";
import WhatWeDo from "./whatWeDo";

const Home = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [offerProperties, setOfferProperties] = useState([]);
  const [newProperties, setNewProperties] = useState([]);

  useEffect(() => {
    setFeaturedProperties(propertiesData.properties.filter((property) => property.state === "featured"));
    setOfferProperties(propertiesData.properties.filter((property) => property.state === "offer"));
    setNewProperties(propertiesData.properties.filter((property) => property.state === "new"));
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-sky-600 to-sky-900">
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
            className="bg-white text-sky-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition duration-300 flex items-center gap-2"
          >
            <FaHome className="text-xl" />
            تصفح العقارات
          </Link>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-[20px] mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 font-arabic bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-900 animate-slideIn">
          عقارات مميزة
        </h1>
        <div className="w-32 h-0.5 mx-auto mb-8 bg-gradient-to-r from-sky-600 to-sky-900 rounded-full shadow-md"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.slice(0, 3).map((property) => (
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
          <Link
            to="/featured-properties"
            className="mt-8 bg-sky-900 hover:bg-sky-700 text-white px-6 py-2 rounded-md flex items-center gap-2 w-fit mx-auto transition duration-300"
          >
            عرض الكل <FaArrowRight />
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-[20px] mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 font-arabic bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-900 animate-slideIn">
          عروض حصرية
        </h1>
        <div className="w-32 h-0.5 mx-auto mb-8 bg-gradient-to-r from-sky-600 to-sky-900 rounded-full shadow-md"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerProperties.slice(0, 3).map((property) => (
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
          <Link
            to="/offer-properties"
            className="mt-8 bg-sky-900  hover:bg-sky-700 text-white px-6 py-2 rounded-md flex items-center gap-2 w-fit mx-auto  transition duration-300"
          >
            عرض الكل <FaArrowRight />
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-[20px] mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 font-arabic bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-900 animate-slideIn">
          عقارات قيد الإنشاء
        </h1>
        <div className="w-32 h-0.5 mx-auto mb-8 bg-gradient-to-r from-sky-600 to-sky-900 rounded-full shadow-md"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newProperties.slice(0, 3).map((property) => (
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
          <Link
            to="/new-properties"
            className="mt-8 bg-sky-900 text-white px-6 py-2 rounded-md flex items-center gap-2 w-fit mx-auto hover:bg-sky-700 transition duration-300"
          >
            عرض الكل <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhatWeDo />

      {/* Call to Action Section */}
      <section className="py-16 bg-sky-900">
        <div className="max-w-7xl mx-auto px-[30px] text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            هل تبحث عن عقار أحلامك؟
          </h2>
          <p className="text-white text-xl mb-8">
            تواصل معنا اليوم واسمح لنا بمساعدتك في العثور على العقار المثالي
          </p>
          <Link
            to="/contact"
            className="text-white bg-white  px-8 py-3 rounded-md text-lg font-semibold  transition duration-300 flex items-center gap-2 justify-center mx-auto w-fit"
            style={{color:"#0f2560da"}}
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
0