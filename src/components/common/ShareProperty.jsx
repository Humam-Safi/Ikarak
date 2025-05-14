import React, { useState } from 'react';
import { FaShareAlt, FaWhatsapp, FaFacebook, FaTwitter, FaCopy, FaCheck } from 'react-icons/fa';

const ShareProperty = ({ propertyId, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const propertyUrl = `${window.location.origin}/property/${propertyId}`;

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title}\n${propertyUrl}`)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(propertyUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(propertyUrl)}&text=${encodeURIComponent(title)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(propertyUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative" dir="rtl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-sky-900 text-white p-2 rounded-full hover:bg-sky-700 transition-colors duration-300"
        aria-label="مشاركة العقار"
      >
        <FaShareAlt className="text-lg" />
      </button>

      {isOpen && (
        <div className="absolute bottom-12 right-0 bg-white rounded-lg shadow-lg p-3 animate-fade-in-up min-w-[160px]">
          <div className="flex flex-col space-y-3">
            <a
              href={shareLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-500 hover:text-green-600 transition-colors duration-300 gap-2"
              aria-label="مشاركة على واتساب"
            >
              <FaWhatsapp className="text-xl" />
              <span className="text-sm">واتساب</span>
            </a>
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300 gap-2"
              aria-label="مشاركة على فيسبوك"
            >
              <FaFacebook className="text-xl" />
              <span className="text-sm">فيسبوك</span>
            </a>
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sky-400 hover:text-sky-500 transition-colors duration-300 gap-2"
              aria-label="مشاركة على تويتر"
            >
              <FaTwitter className="text-xl" />
              <span className="text-sm">تويتر</span>
            </a>
            <button
              onClick={copyToClipboard}
              className="flex items-center text-gray-600 hover:text-gray-700 transition-colors duration-300 gap-2"
              aria-label="نسخ الرابط"
            >
              {copied ? (
                <>
                  <FaCheck className="text-xl text-green-500" />
                  <span className="text-sm text-green-500">تم النسخ</span>
                </>
              ) : (
                <>
                  <FaCopy className="text-xl" />
                  <span className="text-sm">نسخ الرابط</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareProperty; 