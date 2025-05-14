import React, { useState, useEffect, useCallback, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import {
  FaCheck,
  FaClock,
  FaStar,
  FaSearch,
  FaArrowRight,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";
import PropertyCard from "./propertyCard";
import propertiesData from "../data/properties.json";
import WhatWeDo from "./whatWeDo";
import AnimatedSection from "../components/common/AnimatedSection";
import AnimatedTitle from "../components/common/AnimatedTitle";

// Lazy load components
const LazyPropertyCard = lazy(() => import("./propertyCard"));
const LazyWhatWeDo = lazy(() => import("./whatWeDo"));

const Home = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [offerProperties, setOfferProperties] = useState([]);
  const [newProperties, setNewProperties] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Debounced scroll handler
  const handleScroll = useCallback(
    debounce(() => {
      setScrollPosition(window.pageYOffset);
    }, 100),
    []
  );

  useEffect(() => {
    try {
      const properties = propertiesData.properties || [];
      setFeaturedProperties(properties.filter((property) => property.state === "featured"));
      setOfferProperties(properties.filter((property) => property.state === "offer"));
      setNewProperties(properties.filter((property) => property.state === "new"));
    } catch (error) {
      console.error("Error loading properties:", error);
    } finally {
      setIsLoading(false);
      setIsLoaded(true); // Remove setTimeout for instant load
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const heroParallax = Math.min(scrollPosition * 0.1, 60); // Reduced parallax intensity
  const sectionTransform = (index) => ({
    transform: isLoaded ? "translateY(0)" : "translateY(30px)",
    opacity: isLoaded ? 1 : 0,
    transition: `all 0.4s ease-out ${0.1 + index * 0.1}s`, // Faster transition
  });

  const PropertySection = React.memo(({ title, properties, link, animation, index }) => (
    <div style={sectionTransform(index)} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12" dir="rtl">
      <div className="flex items-center justify-center mb-8 relative">
        <span className="w-12 h-1 bg-gradient-to-r from-primary-300 to-secondary-300 rounded-full mr-4"></span>
        <AnimatedTitle
          text={title}
          tag="h2"
          animation={animation}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 bg-gradient-to-r from-primary-700 to-secondary-500 bg-clip-text text-transparent drop-shadow-md"
          style={{ fontFamily: '"Tajawal", "Noto Sans Arabic", "Arial", sans-serif' }}
          aria-label={title}
        />
        <span className="w-12 h-1 bg-gradient-to-r from-primary-300 to-secondary-300 rounded-full ml-4"></span>
        <div className="absolute w-24 h-1 bg-gradient-to-r from-primary-300 via-secondary-400 to-primary-300 rounded-full opacity-0 animate-underline" style={{ bottom: "-8px", transition: "opacity 0.3s ease-in-out" }}></div>
      </div>

      {isLoading ? (
        <div className="text-center py-12">
          <div className="animate-pulse text-xl text-gray-600">جارٍ التحميل...</div>
        </div>
      ) : properties.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.slice(0, 3).map((property, idx) => (
            <div
              key={property.id}
              className="transform transition-all duration-300"
              style={{
                transitionDelay: `${idx * 0.05}s`, // Reduced delay
                transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                opacity: isLoaded ? 1 : 0,
              }}
            >
              <Suspense fallback={<div className="animate-pulse h-64 bg-gray-200 rounded-lg" />}>
                <LazyPropertyCard
                  img={property.image?.[0] || "/fallback-image.jpg"}
                  type={property.type}
                  kind={property.kind}
                  location={property.location}
                  title={property.title}
                  price={property.price}
                  bedrooms={property.bedrooms}
                  bathrooms={property.bathrooms}
                  area={property.area}
                  features={property.features}
                  id={property.id}
                />
              </Suspense>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center p-8 bg-white rounded-lg shadow-sm">
          <p className="text-gray-600 text-lg">لا توجد عقارات متاحة حاليًا</p>
        </div>
      )}
      <Link
        to={link}
        className="mt-8 mx-auto bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full flex items-center gap-2 w-fit transition-all duration-300 group hover:shadow-md"
      >
        عرض الكل
        <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  ));

  return (
    <div className="min-h-screen bg-gray-50">
      <a
        href="https://wa.me/963967517652"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
        aria-label="التواصل عبر واتساب"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-out"
          style={{
            backgroundImage: "url('/images/estate.jpg')",
            transform: `translateY(${heroParallax}px) scale(1.03)`, // Reduced scale
            filter: "brightness(0.65)",
          }}
          loading="lazy" // Suggest lazy loading attribute
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-gray-900/90" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center z-10">
          <div
            className="mb-6 transform transition-all duration-700"
            style={{
              transform: isLoaded ? "translateY(0)" : "translateY(30px)",
              opacity: isLoaded ? 1 : 0,
            }}
          >
            <div style={{ width: "500px" }}>
              <AnimatedTitle
                text="مرحباً بكم في"
                tag="h1"
                animation="reveal"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white py-4 mb-2"
              />
              <AnimatedTitle
                text="عقارات حمصية"
                tag="h1"
                animation="gradient-shift"
                className="text-4xl py-2 sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-secondary-300 to-secondary-500"
                delay={0.3}
              />
            </div>
          </div>

          <AnimatedTitle
            text="شريكك الموثوق في مجال العقارات"
            tag="p"
            animation="glow"
            className="text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-2xl bg-gray-900/50 px-4 py-2 rounded-full backdrop-blur-sm"
            delay={0.6}
          />

          <div
            className="transform transition-all duration-700 delay-900"
            style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? "scale(1)" : "scale(0.9)" }}
          >
            <Link
              to="/properties"
              className="group relative bg-secondary-500 text-gray-900 px-6 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-secondary-400 transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-1"
            >
              <FaSearch className="text-lg group-hover:rotate-12 transition-transform" />
              تصفح العقارات
              <FaArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 sm:gap-6">
          {[
            { text: "موثوق", icon: <FaStar className="text-secondary-400" /> },
            { text: "سريع", icon: <FaClock className="text-secondary-400" /> },
            { text: "شفاف", icon: <FaCheck className="text-secondary-400" /> },
          ].map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-gray-900/30 backdrop-blur-sm rounded-full flex items-center gap-2 transform hover:scale-105 transition-all duration-300"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.5s ease-out ${0.9 + index * 0.1}s`,
              }}
            >
              {item.icon}
              <span className="text-white text-sm sm:text-base">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full fill-white">
            <path d="M0,64L80,69.3C160,75,320,85,480,90.7C640,96,800,96,960,85.3C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
          </svg>
        </div>
      </section>

      {/* Properties Sections */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        <PropertySection
          title="عقارات مميزة"
          properties={featuredProperties}
          link="/featured-properties"
          animation="shimmer"
          index={0}
        />
        <PropertySection
          title="عروض حصرية"
          properties={offerProperties}
          link="/offer-properties"
          animation="shadow"
          index={1}
        />
        <PropertySection
          title="عقارات قيد الإنشاء"
          properties={newProperties}
          link="/new-properties"
          animation="shimmer"
          index={2}
        />
      </section>

      {/* Why Choose Us Section */}
      <Suspense fallback={<div className="py-16 text-center text-gray-600">جارٍ التحميل...</div>}>
        <LazyWhatWeDo />
      </Suspense>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedTitle
            text="هل تبحث عن عقار أحلامك؟"
            tag="h2"
            animation="wave"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
          />
          <p className="text-white text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم واسمح لنا بمساعدتك في العثور على العقار المثالي
            <br />
            <span className="text-secondary-300">خبراء عقاريون في خدمتك</span>
          </p>
          <Link
            to="/contact"
            className="relative bg-white text-primary-700 px-6 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 justify-center mx-auto w-fit shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            <FaPhone className="text-lg" />
            اتصل بنا
          </Link>
        </div>
      </section>
    </div>
  );
};

// Debounce function to limit scroll event frequency
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default Home;