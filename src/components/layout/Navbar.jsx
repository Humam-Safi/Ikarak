import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/8a58f04b-80c2-4a84-a838-98f456a64eb8_removalai_preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                src={logo}
                alt="Aqarat Homsia Logo"
                className="w-36 h-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-white hover:bg-sky-900 px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200"
            >
              الرئيسية
            </Link>
            <Link
              to="/properties"
              className="text-gray-700 hover:text-white hover:bg-sky-900 px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200"
            >
              العقارات
            </Link>

            <Link
              to="/contact"
              className="text-gray-700 hover:text-white hover:bg-sky-900 px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200"
            >
              اتصل بنا
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-white hover:bg-sky-900 px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200"
            >
              من نحن
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition-colors duration-200"
            >
              <span className="sr-only">فتح القائمة</span>
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block text-gray-700 hover:text-white hover:bg-sky-900 px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200"
            >
              الرئيسية
            </Link>
            <Link
              to="/properties"
              className="block text-gray-700 hover:text-white hover:bg-sky-900 px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200"
            >
              العقارات
            </Link>

            <Link
              to="/contact"
              className="block text-gray-700 hover:text-white hover:bg-sky-900 px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200"
            >
              اتصل بنا
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-white hover:bg-sky-900 px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200"
            >
              من نحن
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
