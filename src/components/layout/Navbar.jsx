import { useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/8a58f04b-80c2-4a84-a838-98f456a64eb8_removalai_preview.png"; // Updated import for the image
=======
import Logo from "./Logo";
import { FaBars, FaTimes } from "react-icons/fa";
>>>>>>> b9c3394a008875b0b021604e1f7187147dbae725

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-[20px]">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link style={{
              width: "140px",
              height: "auto",
              marginRight: "5px",
            }} to="/" className="flex-shrink-0">
              <img src={logo} alt="Aqarat Homsia Logo" />
=======
      <div className="max-w-7xl mx-auto px-[30px]">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <Logo />
>>>>>>> b9c3394a008875b0b021604e1f7187147dbae725
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              الرئيسية
            </Link>
            <Link
              to="/properties"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              العقارات
            </Link>
            <Link
              to="/property-details"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              تفاصيل العقار
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              اتصل بنا
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              من نحن
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">فتح القائمة</span>
              {!isOpen ? (
                <FaBars className="block h-6 w-6" />
              ) : (
                <FaTimes className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-[30px] pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              الرئيسية
            </Link>
            <Link
              to="/properties"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              العقارات
            </Link>
            <Link
              to="/property-details"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              تفاصيل العقار
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              اتصل بنا
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              من نحن
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> b9c3394a008875b0b021604e1f7187147dbae725
