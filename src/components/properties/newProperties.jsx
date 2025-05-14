import PropertyCard from "../../pages/propertyCard";
import propertiesData from "../../data/properties.json";
import React, { useEffect, useState } from "react";
import AnimatedTitle from "../../components/common/AnimatedTitle";

const NewProperties = () => {

  const [properties, setProperties] = useState([]);


  useEffect(() => {
    setProperties(propertiesData.properties.filter((property) => property.state === "new"))
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 bg-grey-50 min-h-screen">
      <div className="section-title">
        <AnimatedTitle
          text="عقارات قيد الإنشاء"
          tag="h1"
          animation="shimmer"
          className="font-extrabold"
        />
      </div>
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