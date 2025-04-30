
import PropertyCard from "../../pages/propertyCard";
import propertiesData from "../../data/properties.json";
import React, { useEffect, useState } from "react";

const NewProperties = () => {

  const [properties, setProperties] = useState([]);


  useEffect(() => {
    setProperties(propertiesData.properties.filter((property) => property.state === "new"))
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 bg-gray-100 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-extrabold from-sky-300 to-sky-900 text-center mb-4 font-arabic bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-900 animate-slideIn">
            عقارات قيد الإنشاء
          </h1>
          <div className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-sky-300 to-sky-600 rounded-full shadow-md"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard
          img={property.image[0]}
          key={property.id}
          type={property.type}
          kind={property.kind}
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
 
export default NewProperties;