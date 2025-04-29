import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom divIcon for the marker (no external image)
const estateIcon = (isHovered) => new L.DivIcon({
  html: `
    <div style="
      background-color: ${isHovered ? '#7f9cf5' : '#4f46e5'};
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid #ffffff;
      box-shadow: ${isHovered ? '0 0 8px rgba(79, 70, 229, 0.8)' : '0 0 5px rgba(0,0,0,0.3)'};
      transition: background-color 0.3s ease, box-shadow 0.3s ease;
    "></div>
  `,
  className: '', // Remove default Leaflet styles
  iconSize: [20, 20], // Size of the marker
  iconAnchor: [10, 10], // Center the marker
  popupAnchor: [0, -10], // Popup position relative to marker
});

// دالة لإنشاء علامة للعقارات
const EstateMarker = ({ position, estates }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Marker
      position={position}
      icon={estateIcon(isHovered)}
      eventHandlers={{
        mouseover: () => setIsHovered(true),
        mouseout: () => setIsHovered(false),
        click: (e) => {
          console.log("Marker clicked!", e);
        },
      }}
    >
      <Popup>
        {estates.map((estate) => (
          <div key={estate.id} className="mb-2">
            <h3 className="font-semibold text-indigo-700">{estate.title}</h3>
            <p className="text-sm text-gray-600">{estate.location}</p>
            <p className="text-sm text-gray-600">السعر: {estate.price.toLocaleString()} ل.س</p>
            <p className="text-sm text-gray-600">غرف النوم: {estate.bedrooms} | الحمامات: {estate.bathrooms}</p>
            <p className="text-sm text-gray-600">المساحة: {estate.area} م²</p>
          </div>
        ))}
      </Popup>
      <style jsx>{`
        .leaflet-marker-icon {
          transition: transform 0.3s ease-in-out;
        }
        .leaflet-marker-icon:hover {
          transform: ${isHovered ? 'scale(1.2)' : 'scale(1)'};
        }
      `}</style>
    </Marker>
  );
};

const Map = ({ properties = [] }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const defaultCenter = Array.isArray(properties) && properties.length > 0 
    ? [properties[0].latitude, properties[0].longitude] 
    : [34.7326, 36.7137];

  const groupedByCoords = Array.isArray(properties)
    ? properties.reduce((acc, property) => {
        const key = `${property.latitude},${property.longitude}`;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(property);
        return acc;
      }, {})
    : {};

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="relative">
      <MapContainer
        center={defaultCenter}
        zoom={14}
        style={{
          height: isFullScreen ? '100vh' : '400px',
          width: '100%',
          borderRadius: isFullScreen ? '0' : '1rem',
          zIndex: isFullScreen ? 50 : 0,
        }}
        className={`shadow-md ${isFullScreen ? 'fixed top-0 left-0' : ''}`}
        aria-label="خريطة توضح مواقع العقارات في حمص، سوريا"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {Object.entries(groupedByCoords).map(([key, estates]) => {
          const [lat, lon] = key.split(',').map(Number);
          return (
            <EstateMarker key={key} position={[lat, lon]} estates={estates} />
          );
        })}
      </MapContainer>
      
    </div>
  );
};

export default Map;