import React from "react";

const PropertyInfo = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">{property.title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">تفاصيل العقار</h3>
          <div className="space-y-2">
            <p>
              <span className="font-medium">النوع:</span> {property.type}
            </p>
            <p>
              <span className="font-medium">الموقع:</span> {property.location}
            </p>
            <p>
              <span className="font-medium">السعر:</span> {property.price}
            </p>
            <p>
              <span className="font-medium">المساحة:</span> {property.area} م²
            </p>
            <p>
              <span className="font-medium">غرف النوم:</span> {property.bedrooms}
            </p>
            <p>
              <span className="font-medium">الحمامات:</span>{" "}
              {property.bathrooms}
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">المميزات</h3>
          <div className="grid grid-cols-2 gap-2">
            {property.features?.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">الوصف</h3>
        <p className="text-gray-600">{property.description}</p>
      </div>

      {property.amenities && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">المرافق</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {property.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyInfo;
