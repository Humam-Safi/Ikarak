import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import PropertyCard from "./propertyCard";
import propertiesData from "../data/properties.json";
import Map from "../components/common/Map";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [properties, setProperties] = useState([]);
  const [relatedProperties, setRelatedProperties] = useState([]);

  useEffect(() => {
    setProperties(propertiesData.properties);
  }, []);

  useEffect(() => {
    const selectedProperty = properties.find((property) => property.id === Number(id));
    setProperty(selectedProperty);

    // Find related properties with the same location
    if (selectedProperty) {
      const related = properties.filter(
        (p) => p.location === selectedProperty.location && p.id !== selectedProperty.id
      );
      setRelatedProperties(related);
    }
  }, [id, properties]);

  if (!property) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  const images = property.image.map(img => ({
    original: img,
    thumbnail: img
  })) || [];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Right Side - Image Gallery */}
        <div className="order-1 md:order-2">
          <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={true}
            showNav={true}
          />
        </div>

        {/* Left Side - Property Details */}
        <div className="order-2 md:order-1 bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
          <p className="text-2xl font-bold text-blue-600 mb-4">{Number(property.price).toLocaleString()}$</p>
          <p className="text-lg text-gray-600 mb-6">{property.location}</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="border p-3 rounded">
              <span className="font-bold">النوع:</span> {property.type}
            </div>
            <div className="border p-3 rounded">
              <span className="font-bold">المساحة:</span> {property.area} م²
            </div>
            <div className="border p-3 rounded">
              <span className="font-bold">غرف النوم:</span> {property.bedrooms}
            </div>
            <div className="border p-3 rounded">
              <span className="font-bold">الحمامات:</span> {property.bathrooms}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-3">المميزات</h2>
            <ul className="list-disc list-inside">
              {property.features?.map((feature, index) => (
                <li key={index} className="text-gray-700">{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Map and Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Map */}
        <div className="bg-white p-6 rounded-lg shadow-lg h-[450px]">
          {/* Add your map component here */}
          <div className="h-full bg-gray-200 rounded">
            <Map />
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">معلومات إضافية</h2>
          <div className="space-y-4">
            <p className="text-gray-700">{property.description}</p>
            {/* Add more property details here */}
          </div>
        </div>
      </div>

      {/* Related Properties */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">عقارات مشابهة</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProperties.map((relatedProperty) => (
            <PropertyCard
              key={relatedProperty.id}
              img={relatedProperty.image[0]}
              type={relatedProperty.type}
              location={relatedProperty.location}
              title={relatedProperty.title}
              price={relatedProperty.price}
              bedrooms={relatedProperty.bedrooms}
              bathrooms={relatedProperty.bathrooms}
              area={relatedProperty.area}
              features={relatedProperty.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
