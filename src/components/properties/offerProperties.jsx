
import PropertyCard from "../../pages/propertyCard";
import propertiesData from "../../data/properties.json";
import React, { useEffect, useState } from "react";

const OfferProperties = () => {

  const [properties, setProperties] = useState([]);


  useEffect(() => {
    setProperties(propertiesData.properties.filter((property) => property.state === "offer"))
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 bg-gray-100 min-h-screen">
      <h1 className="text-5xl font-extrabold text-center mb-10 font-arabic text-blue-800">
        العروض الحصرية
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard
          img={property.image[0]}
          key={property.id}
          type={property.type}
          location={property.location}
          title={property.title}
          price={property.price}
          bedrooms={property.bedrooms}
          bathrooms={property.bathrooms}
          area={property.area}
          features={property.features}
          id={property.id}
        />
        ))}
      </div>
    </div>
  );
}
 
export default OfferProperties;