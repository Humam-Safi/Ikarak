import {
  FaMapMarkerAlt,
  FaStar,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaArrowRight,
} from "react-icons/fa";
import React, { memo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropertyCardEffect from "../components/common/PropertyCardEffect";
import AnimatedTitle from "../components/common/AnimatedTitle";

const PropertyCard = memo((props) => {
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const fallbackImage = "/images/image.jpg";
  
  const priceCurrency =
    Number(props.price) > 500000
      ? Number(props.price).toLocaleString() + " ل.س"
      : Number(props.price).toLocaleString() + "$";

  // Pre-load the image to check for errors
  useEffect(() => {
    if (!props.img) {
      setImgError(true);
      return;
    }
    
    const img = new Image();
    img.src = props.img;
    img.onload = () => {
      // Image loaded successfully
    };
    img.onerror = () => {
      setImgError(true);
    };
  }, [props.img]);

  const handleImageError = () => {
    setImgError(true);
  };

  return (
    <PropertyCardEffect>
      <div 
        className="w-full bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-floating transition-all duration-500 transform hover:-translate-y-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden group cursor-pointer">
          <div className="h-52 sm:h-60 md:h-64 bg-grey-100 overflow-hidden">
            {imgError ? (
              <div className="w-full h-full flex items-center justify-center bg-grey-100">
                <img
                  src={fallbackImage}
                  alt={props.title || "Property"}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </div>
            ) : (
              <img
                src={props.img}
                alt={props.title || "Property"}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                width="400"
                height="300"
                srcSet={`${props.img} 400w, ${props.img} 800w`}
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={handleImageError}
              />
            )}
            
            {/* Overlay gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-t from-grey-900/70 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
          </div>
          
          <span className="absolute top-3 right-3 z-10 bg-primary-600/90 backdrop-blur-sm text-orange-300 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-sm">
            <FaStar className="text-secondary-300" />
            {props.type}
          </span>
          
          <span style={{
            fontWeight:"bold"
          }} className="absolute top-3 text-white left-3 z-10 bg-secondary-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-sm transform transition-transform duration-300 translate-y-0">
            {props.kind}
          </span>
        </div>
        
        <div className="p-5 md:p-6">
          <h4>{props.title}</h4>
          <p className="text-grey-700 mb-4 flex items-center gap-1.5">
            <FaMapMarkerAlt className="text-primary-500" />
            {props.location}
          </p>

          <div className="grid grid-cols-3 gap-2 md:gap-4 mb-5 text-sm md:text-base">
            <div className="flex items-center gap-1.5 md:gap-2 text-grey-800 group">
              <FaBed className="text-primary-600 group-hover:scale-125 transition-transform duration-300" />
              <span>{props.bedrooms} غرفة</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 text-grey-800 group">
              <FaBath className="text-primary-600 group-hover:scale-125 transition-transform duration-300" />
              <span>{props.bathrooms} حمامات</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 text-grey-800 group">
              <FaRulerCombined className="text-primary-600 group-hover:scale-125 transition-transform duration-300" />
              <span>{props.area} m²</span>
            </div>
          </div>

          <div className="border-t border-grey-100 pt-4">
            <div className="text-sm mb-4">
              <h4 className="font-semibold text-grey-800">مميزات العقار:</h4>
              <div className="flex flex-wrap gap-2">
                {props.features?.map((feature, index) => (
                  <span
                    key={index}
                    className="bg-grey-50 px-3 py-1 rounded-full text-xs md:text-sm text-grey-800 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-5">
              <span className="font-bold text-lg md:text-xl text-primary-700  px-3 py-1 rounded-md">
                {priceCurrency}
              </span>
              <Link
                to={`/property/${props.id}`}
                className="w-full sm:w-auto bg-gradient-primary hover:bg-gradient-to-r hover:from-primary-700 hover:to-primary-500 hover:shadow-lg px-5 py-2.5 rounded-lg text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base group"
              >
                <span>عرض التفاصيل</span>
                <FaArrowRight className="text-sm transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PropertyCardEffect>
  );
});

export default PropertyCard;
