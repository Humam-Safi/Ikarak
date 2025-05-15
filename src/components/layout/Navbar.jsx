import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-2 lg:px-4 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-lg shadow-soft " 
          : "bg-gradient-to-b from-white to-white/90 py-1"
      }`}
    >
      <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <div className="relative overflow-hidden">
                {/* Logo with transparent background */}
                <img
                  src={logo}
                  alt="Aqarat Homsia Logo"
                  className={`w-32 h-auto transition-transform duration-300 ${
                    scrolled ? "scale-90" : ""
                  } group-hover:scale-105`}
                  style={{
                    filter: "brightness(0.9) sepia(1) hue-rotate(155deg) saturate(2) contrast(1.2)",
                    mixBlendMode: "multiply",
                    backgroundColor: "transparent"
                  }}
                />
                {/* Gold accent effect - more transparent */}
                <div className="absolute top-0 left-0 h-full w-full opacity-10 bg-gradient-to-br from-transparent via-secondary-500/20 to-transparent pointer-events-none"></div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" label="الرئيسية" />
            <NavLink to="/sale-properties" label="عروض البيع" />
            <NavLink to="/rent-properties" label="عروض الأجار" />
            <NavLink to="/contact" label="اتصل بنا" />
            <NavLink to="/about" label="من نحن" />
            <NavLink to="/user-guide" label="دليل المستخدم" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-1.5 rounded-full bg-gradient-primary text-white hover:shadow-md focus:outline-none transition-all duration-300"
              aria-expanded={isOpen}
            >
              <span className="sr-only">فتح القائمة</span>
              {isOpen ? (
                <FaTimes className="h-4 w-4" />
              ) : (
                <FaBars className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-lg mx-1 my-1 rounded-xl shadow-soft border border-grey-100">
          <div className="p-2 space-y-4">
            <MobileNavLink style={{marginLeft:"20px"}} to="/" label="الرئيسية" />
            <MobileNavLink to="/sale-properties" label="عروض البيع" />
            <MobileNavLink to="/rent-properties" label="عروض الأجار" />
            <MobileNavLink to="/contact" label="اتصل بنا" />
            <MobileNavLink to="/about" label="من نحن" />
            <MobileNavLink to="/user-guide" label="دليل المستخدم" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`relative px-2 py-1 text-sm font-medium transition-all duration-300 rounded-full ${
        isActive 
          ? "bg-gradient-primary text-white" 
          : "text-grey-800 hover:text-primary-600 hover:bg-grey-50"
      }`}
    >
      {label}
      {!isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
      )}
    </Link>
  );
};

const MobileNavLink = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`block px-3 py-1.5 rounded-lg text-center text-base font-medium transition-all duration-300 ${
        isActive 
          ? "bg-gradient-primary text-white shadow-md" 
          : "bg-grey-50 text-grey-800 hover:bg-grey-100 hover:text-primary-600"
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;