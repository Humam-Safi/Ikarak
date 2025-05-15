import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible after a short delay for animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="bg-grey-900 text-white py-8 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-24 h-24 rounded-full bg-primary-400"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${
                5 + Math.random() * 10
              }s linear infinite, pulse ${
                2 + Math.random() * 3
              }s ease-in-out infinite alternate`,
              opacity: Math.random() * 0.05 + 0.025,
              filter: "blur(50px)",
              transform: `scale(${Math.random() * 2 + 0.5})`,
            }}
          ></div>
        ))}
      </div>

      {/* Wave decoration at the top */}
      <div className="absolute top-0 left-0 right-0 transform rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 60"
          className="w-full h-auto fill-grey-800"
        >
          <path d="M0,32L80,37.3C160,43,320,53,480,53.3C640,53,800,43,960,42.7C1120,43,1280,53,1360,58.7L1440,64L1440,64L1360,64C1280,64,1120,64,960,64C800,64,640,64,480,64C320,64,160,64,80,64L0,64Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us - with fade-in-up animation */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <h3
              style={{
                color: "white",
              }}
              className="text-xl font-bold mb-4 border-b border-primary-500 pb-2 w-fit relative"
            >
              عن عُمرَانَك
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 animate-gradient-shift"></span>
            </h3>
            <p className="text-grey-300">
              شركة عقارات رائدة في حمص، سوريا. نقدم مجموعة واسعة من خدمات
              العقارات لتلبية احتياجات عملائنا.
            </p>
          </div>

          {/* Quick Links - with fade-in-up animation */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h3
              style={{
                color: "white",
              }}
              className="text-xl font-bold mb-4 border-b border-primary-500 pb-2 w-fit relative"
            >
              روابط سريعة
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 animate-gradient-shift"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-grey-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-grey-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  اتصل بنا
                </Link>
              </li>
              <li>
                <Link
                  to="/properties"
                  className="text-grey-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  العقارات
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links - with fade-in-up animation */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <h3
              style={{
                color: "white",
              }}
              className="text-xl font-bold mb-4 border-b border-primary-500 pb-2 w-fit relative"
            >
              روابط قانونية
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 animate-gradient-shift"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-grey-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-grey-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link
                  to="/user-guide"
                  className="text-grey-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  دليل المستخدم
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - with fade-in-up animation */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h3
              style={{
                color: "white",
              }}
              className="text-xl font-bold mb-4 border-b border-primary-500 pb-2 w-fit relative"
            >
              اتصل بنا
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 animate-gradient-shift"></span>
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 group">
                <FaMapMarkerAlt className="text-primary-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-grey-300 group-hover:text-white transition-colors duration-300">
                  سوريا - حمص
                </span>
              </li>
              <li className="flex items-center gap-2 group">
                <FaPhone className="text-primary-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-grey-300 group-hover:text-white transition-colors duration-300">
                  +963 967517632
                </span>
              </li>
              <li className="flex items-center gap-2 group">
                <FaEnvelope className="text-primary-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-grey-300 group-hover:text-white transition-colors duration-300">
                  omranak27@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer - with fade-in animation */}
        <div
          className={`mt-8 pt-8 border-t border-grey-800 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="flex justify-center items-center mb-4">
            <Link
              to="/"
              className="text-primary-400 hover:text-primary-300 font-bold relative transition-all duration-300 group text-center text-2xl"
            >
              عُمرَانَك
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
          <div className="mt-4 text-center">
            <p className="animate-pulse" style={{ color: "white" }}>
              &copy; جميع الحقوق محفوظة. عُمرَانَك {new Date().getFullYear()}.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://wa.me/963967517632"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-400 transition-colors duration-300"
              >
                <FaWhatsapp size={27} />
              </a>
              <a
                href="https://www.facebook.com/share/15W9atfKaw/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-400 transition-colors duration-300"
              >
                <FaFacebook size={27} />
              </a>
              <a
                href="https://www.instagram.com/omra.nak?igsh=b3JocHZuZW4zejhk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-400 transition-colors duration-300"
              >
                <FaInstagram size={27} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated footer gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-700 via-primary-500 to-secondary-500 animate-gradient-shift bg-[length:200%_200%]"></div>

      {/* Floating circles at the bottom */}
      <div className="absolute bottom-2 left-0 right-0 opacity-60 overflow-hidden h-8">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0 rounded-full bg-primary-500"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 30 + 5}px`,
              height: `${Math.random() * 30 + 5}px`,
              opacity: Math.random() * 0.2 + 0.1,
              animation: `float ${
                3 + Math.random() * 2
              }s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
