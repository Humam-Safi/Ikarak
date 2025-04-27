import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom red marker icon
const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  iconRetinaUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Map = ({ properties = [] }) => {
  // Default center (use the first property's coordinates or fallback to Homs, Syria)
  const defaultCenter = Array.isArray(properties) && properties.length > 0 
    ? [properties[0].latitude, properties[0].longitude] 
    : [34.7326, 36.7137];

  // Group properties by coordinates to handle duplicates
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

  return (
    <MapContainer
      center={defaultCenter}
      zoom={14}
      style={{ height: '400px', width: '100%', borderRadius: '1rem' }}
      className="shadow-md"
      aria-label="خريطة توضح مواقع العقارات في حمص، سوريا"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {Object.entries(groupedByCoords).map(([key, estates]) => {
        const [lat, lon] = key.split(',').map(Number);
        return (
          <Marker key={key} position={[lat, lon]} icon={redIcon}>
            <Popup>
              {estates.map((estate) => (
                <div key={estate.id} className="mb-2">
                  <h3 className="font-semibold text-blue-800">{estate.title}</h3>
                  <p className="text-sm text-gray-600">{estate.location}</p>
                  <p className="text-sm text-gray-600">السعر: {estate.price.toLocaleString()} ل.س</p>
                  <p className="text-sm text-gray-600">غرف النوم: {estate.bedrooms} | الحمامات: {estate.bathrooms}</p>
                  <p className="text-sm text-gray-600">المساحة: {estate.area} م²</p>
                </div>
              ))}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;