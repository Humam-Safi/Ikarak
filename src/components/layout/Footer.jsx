import { FaFacebook , FaInstagram, FaWhatsapp} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">عن عقارات حمصية</h3>
            <p className="text-gray-300">
              منصة عقارات حمصية هي منصة رقمية متكاملة تهدف إلى دعم وتطوير تجارة العقارات الالكترونية
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white">من نحن</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">روابط مهمة</h3>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="text-gray-300 hover:text-white">سياسة الخصوصية</a></li>
              <li><a href="/faq" className="text-gray-300 hover:text-white">الأسئلة الشائعة</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="ml-2">البريد الإلكتروني: info@ikarak.com</span>
              </li>
              <li className="flex items-center">
                <span className="ml-2">الهاتف: +963 933333333</span>
              </li>
              <li className="flex items-center">
                <span className="ml-2">العنوان: سوريا , حمص</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">فيسبوك</span>
              <FaFacebook fontSize= "30px" className="mr-[10px]" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">واتساب</span>
              <FaWhatsapp fontSize= "30px" className="mr-[30px]"/>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">إنستغرام</span>
              <FaInstagram fontSize= "30px" className="mr-[10px]"/>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} عقارات حمصية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;