import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{property.title}</h2>
        <p className="text-gray-600 mt-1">{property.location}</p>
        <p className="text-lg font-semibold text-blue-600 mt-2">
          {property.price}
        </p>
        <div className="flex justify-between flex-col mt-4 text-gray-700">
          <span className="font-bold">{property.bedrooms} غرف نوم</span>
          <span className="mt-2 font-bold">{property.bathrooms} حمامات</span>
          <span className="mt-2 font-bold">{property.area} م²</span>
        </div>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300">
          عرض التفاصيل
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;