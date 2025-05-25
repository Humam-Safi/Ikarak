import React, { useMemo } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ScaleControl,
  useMap,
  useMapEvent,
} from "react-leaflet";
import L from "leaflet";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaHome,
  FaBed,
  FaBath,
  FaRulerCombined,
} from "react-icons/fa";

import "leaflet/dist/leaflet.css";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadowUrl from "leaflet/dist/images/marker-shadow.png";

// Fix leaflet default marker
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl: iconShadowUrl });

// Ripple Effect
function MapClickRipple() {
  const map = useMap();
  useMapEvent("click", (e) => {
    const circle = L.circle(e.latlng, {
      radius: 500,
      color: "#4f46e5",
      weight: 2,
      fillOpacity: 0.2,
    }).addTo(map);
    setTimeout(() => map.removeLayer(circle), 800);
  });
  return null;
}

// Popup content
function EstatePopup({ estate }) {
  const price = Number(estate.price).toLocaleString() + " ل.س";

  return (
    <div className="space-y-2 p-2" style={{ maxWidth: '220px' }}>
      {estate.image?.[0] && (
        <img
          src={estate.image[0]}
          alt={estate.title}
          className="w-full h-24 object-cover rounded-md"
        />
      )}
      <h3 className="font-bold text-indigo-700 text-base">{estate.title}</h3>
      <p className="text-sm text-gray-600 flex items-center gap-1">
        <FaMapMarkerAlt className="text-primary-500" /> {estate.location}
      </p>
      <p className="text-sm text-gray-600 flex items-center gap-1">
        <FaHome className="text-primary-500" /> {estate.type}
      </p>
      <p className="text-sm text-gray-600 flex items-center gap-1">
        <FaBed className="text-primary-500" /> {estate.bedrooms} غرف نوم
      </p>
      <p className="text-sm text-gray-600 flex items-center gap-1">
        <FaBath className="text-primary-500" /> {estate.bathrooms} حمامات
      </p>
      <p className="text-sm text-gray-600 flex items-center gap-1">
        <FaRulerCombined className="text-primary-500" /> {estate.area} م²
      </p>
      <p className="text-primary-600 font-bold mt-2">السعر: {price}</p>
      <Link
        to={`/property/${estate.id}`}
        className="inline-block mt-2 px-3 py-1 bg-gray-400 text-white rounded text-sm hover:bg-gray-500"
        style={{
          color:"white"
        }}
      >
        عرض التفاصيل
      </Link>
    </div>
  );
}

// Map Component
const Map = ({ properties = [], mapType = "osm" }) => {
  const center = useMemo(() => {
    return properties.length > 0
      ? [properties[0].latitude, properties[0].longitude]
      : [34.7326, 36.7137]; // Homs as default
  }, [properties]);

  const tileLayerConfig = {
    osm: {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: '&copy; OpenStreetMap contributors',
    },
    satellite: {
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      attribution: '&copy; Esri & contributors',
    },
  };

  const tile = tileLayerConfig[mapType] || tileLayerConfig.osm;

  return (
    <div className="w-full h-full relative">
      <MapContainer center={center} zoom={13} scrollWheelZoom className="w-full h-full z-10">
        <ScaleControl position="bottomleft" imperial={false} />
        <MapClickRipple />
        <TileLayer url={tile.url} attribution={tile.attribution} />
        
        {properties.map((estate) => (
          <Marker
            key={estate.id}
            position={[estate.latitude, estate.longitude]}
          >
            <Popup>
              <EstatePopup estate={estate} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
