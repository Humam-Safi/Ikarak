import React, { useState } from "react";

const PropertyGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
        <p className="text-gray-500">لا توجد صور متاحة</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* الصورة الرئيسية */}
      <div className="relative h-96 rounded-lg overflow-hidden">
        <img
          src={images[selectedImage]}
          alt={`صورة العقار ${selectedImage + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* الصور المصغرة */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative h-20 rounded-md overflow-hidden ${
                selectedImage === index ? "ring-2 ring-blue-600" : ""
              }`}
            >
              <img
                src={image}
                alt={`صورة مصغرة ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyGallery;
