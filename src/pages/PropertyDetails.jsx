import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../styles/gallery.css";
import PropertyCard from "./propertyCard";
import propertiesData from "../data/properties.json";
import Map from "../components/common/Map";
import AnimatedTitle from "../components/common/AnimatedTitle";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMapMarkerAlt,
  FaHome,
  FaMap,
  FaSatellite
} from "react-icons/fa";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [relatedProperties, setRelatedProperties] = useState([]);
  const [mapView, setMapView] = useState('osm');

  useEffect(() => {
    const allProperties = propertiesData.properties;
    const selectedProperty = allProperties.find((p) => p.id === Number(id));
    setProperty(selectedProperty);

    if (selectedProperty) {
      const related = allProperties.filter(
        (p) =>
          p.location === selectedProperty.location &&
          p.id !== selectedProperty.id
      );
      setRelatedProperties(related);
    }
  }, [id]);

  useEffect(() => {
    if (property) {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "RealEstateListing",
        name: property.title,
        description: property.description,
        price: property.price,
        address: {
          "@type": "PostalAddress",
          addressLocality: property.location,
        },
      };

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [property]);

  if (!property) {
    return (
      <div className="container mx-auto px-4 text-center text-gray-600 text-lg">
        جاري التحميل...
      </div>
    );
  }

  const images = property.image.map((img, idx) => ({
    original: img,
    thumbnail: img,
    originalAlt: `${property.title} - صورة ${idx + 1}`,
    thumbnailAlt: `معاينة - صورة ${idx + 1}`,
    loading: "lazy",
    renderItem: (item) => (
      <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <img
          src={item.original}
          alt={item.originalAlt}
          className="w-full h-[500px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300 rounded-2xl" />
      </div>
    ),
    renderThumbInner: () => (
      <div className="rounded-xl w-full overflow-hidden border border-gray-300 hover:border-primary-500 transition duration-300 shadow-sm">
        <img
          src={img}
          alt={`صورة ${idx + 1}`}
          className="h-14 w-full object-cover"
        />
      </div>
    ),
  }));

  const priceDisplay =
    Number(property.price) > 500000
      ? Number(property.price).toLocaleString() + " ل.س"
      : Number(property.price).toLocaleString() + "$";

  return (
    <div className="container mx-auto px-4  bg-gray-50">
      <AnimatedTitle
        text="تفاصيل العقار"
        tag="h1"
        animation="slide-in"
        className="text-5xl font-extrabold text-primary-700 mb-8 text-center"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        <div className="order-1 lg:order-2">
          <AnimatedTitle
            text="📸 المعرض"
            tag="h2"
            animation="fade-in"
            className="text-2xl font-semibold text-gray-800 mb-4"
          />
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <ImageGallery
              items={images}
              showPlayButton={false}
              showFullscreenButton={true}
              showNav={true}
              showIndex={true}
              showThumbnails={true}
              thumbnailPosition="bottom"
              slideInterval={4000}
              slideOnThumbnailOver={true}
              additionalClass="rounded-3xl"
            />
          </div>
        </div>

        <div className="order-2 lg:order-1">
          <AnimatedTitle
            text="📝 معلومات العقار"
            tag="h2"
            animation="fade-in"
            className="text-2xl font-semibold text-gray-800 mb-4"
          />
          <div className="bg-white p-10 rounded-3xl shadow-2xl space-y-6">
            <h2 className="text-3xl font-bold text-primary-700">{property.title}</h2>

            <div className="flex flex-col gap-3 text-gray-700">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary-500 animate-pulse" />
                <span>{property.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaHome className="text-primary-500 animate-pulse" />
                <span>{property.type}</span>
              </div>
            </div>

            <p className="text-4xl font-semibold text-primary-600">{priceDisplay}</p>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="bg-primary-50 p-5 rounded-2xl hover:shadow-lg transition">
                <FaBed className="text-primary-500 text-3xl mx-auto mb-1" />
                <div className="text-xl font-bold text-gray-800">{property.bedrooms}</div>
                <p className="text-sm text-gray-500">غرف النوم</p>
              </div>
              <div className="bg-primary-50 p-5 rounded-2xl hover:shadow-lg transition">
                <FaBath className="text-primary-500 text-3xl mx-auto mb-1" />
                <div className="text-xl font-bold text-gray-800">{property.bathrooms}</div>
                <p className="text-sm text-gray-500">الحمامات</p>
              </div>
              <div className="bg-primary-50 p-5 rounded-2xl hover:shadow-lg transition">
                <FaRulerCombined className="text-primary-500 text-3xl mx-auto mb-1" />
                <div className="text-xl font-bold text-gray-800">{property.area}</div>
                <p className="text-sm text-gray-500">م²</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary-700 mb-3">المميزات</h3>
              <div className="flex flex-wrap gap-3">
                {property.features &&
                  property.features
                    .filter((feature) => feature.has)
                    .map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-primary-100 text-primary-800 px-4 py-1 rounded-full text-sm font-medium shadow-sm hover:bg-primary-200 transition"
                      >
                        {feature.name}
                      </span>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        <div className="bg-white p-8 rounded-3xl shadow-2xl">
          <AnimatedTitle
            text="📍 الموقع على الخريطة"
            tag="h2"
            animation="fade-in"
            className="text-2xl font-semibold text-gray-800 mb-4"
          />
          <div className="flex justify-center mb-4 space-x-4">
             <button
             style={{
              marginRight:"10px",
              marginLeft:"10px"
             }}
              onClick={() => setMapView('osm')}
              className={`px-4  py-2 rounded-lg transition-colors duration-200 flex items-center gap-2 ${
                mapView === 'osm' ? 'bg-primary-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <FaMap />
              <span>خريطة</span>
            </button>
            <button
              onClick={() => setMapView('satellite')}
              className={`px-4 mr-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2 ${
                mapView === 'satellite' ? 'bg-primary-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <FaSatellite />
              <span >قمر صناعي</span>
            </button>
          </div>
          <div className="h-[400px] rounded-2xl overflow-hidden">
            <Map properties={[property]} mapType={mapView} />
          </div>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-2xl">
          <AnimatedTitle
            text="📝 الوصف والمعلومات الإضافية"
            tag="h2"
            animation="fade-in"
            className="text-2xl font-semibold text-gray-800 mb-4"
          />
          <p className="text-gray-700 leading-relaxed text-lg">{property.description}</p>
        </div>
      </div>

      {relatedProperties.length > 0 && (
        <div className="mt-16">
          <AnimatedTitle
            text="🏠 عقارات مشابهة"
            tag="h2"
            animation="shimmer"
            className="text-3xl font-extrabold text-primary-700 mb-8 text-center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProperties.map((related) => (
              <PropertyCard
                key={related.id}
                id={related.id}
                img={related.image[0]}
                type={related.type}
                kind={related.kind}
                location={related.location}
                title={related.title}
                price={related.price}
                bedrooms={related.bedrooms}
                bathrooms={related.bathrooms}
                area={related.area}
                features={related.features}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
