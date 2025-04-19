import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={property.image || '/images/property-placeholder.jpg'}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded">
          {property.type}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-2">{property.location}</p>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-blue-600 font-bold">{property.price}</span>
          <div className="flex gap-2 text-gray-600">
            <span>{property.bedrooms} غرف نوم</span>
            <span>{property.bathrooms} حمامات</span>
            <span>{property.area} م²</span>
          </div>
        </div>
        
        <Link
          to={`/property/${property.id}`}
          className="block w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition-colors"
        >
          عرض التفاصيل
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;