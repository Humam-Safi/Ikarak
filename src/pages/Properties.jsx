import React, { useState, useMemo, useContext } from "react";
import PropertyCard from "./propertyCard";
import SearchBar from "../components/common/SearchBar";
import AnimatedTitle from "../components/common/AnimatedTitle";
import Map from "../components/common/Map";
import { FaMap, FaList, FaSatellite, FaExclamationCircle } from "react-icons/fa";
import propertiesData from "../data/properties.json";
import { FilterContext } from "../Context/filterContext";

const propertyTypes = ['الكل', 'شقة', 'منزل', 'فيلا', 'أرض', 'تجاري'];
const locationOptions = ['الكل', 'دمشق', 'حلب', 'حمص', 'حماة', 'اللاذقية', 'طرطوس', 'دير الزور', 'الحسكة'];

const Properties = () => {
  const [search, setSearch] = useState("");
  const { filter, setFilter } = useContext(FilterContext);
  const [viewMode, setViewMode] = useState("map"); // 'map' | 'satellite' | 'list'

  const data = useMemo(() => propertiesData.properties || [], []);

  const filteredProperties = useMemo(() => {
    return data.filter((p) => {
      const matchesType = filter.type === 'الكل' || p.type === filter.type;
      const matchesLocation = filter.location === 'الكل' || (p.location && p.location.toLowerCase().includes(filter.location.toLowerCase()));
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
                            (p.location && p.location.toLowerCase().includes(search.toLowerCase()));

      return matchesType && matchesLocation && matchesSearch;
    });
  }, [data, filter.type, filter.location, search]);

  const handleFilterChange = (key, value) =>
    setFilter((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Title */}
      <div className="px-6 py-8 text-center">
        <AnimatedTitle
          text="المشاريع العقارية"
          tag="h1"
          animation="fade"
          className="text-4xl md:text-5xl font-bold text-gray-800"
        />
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded-lg shadow gap-4 mx-4 mb-6 sticky top-4 z-20">
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode("map")}
            className={`p-2 rounded-lg ${viewMode === "map" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
            title="عرض على الخريطة"
          >
            <FaMap />
          </button>
          <button
            onClick={() => setViewMode("satellite")}
            className={`p-2 rounded-lg ${viewMode === "satellite" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
            title="عرض على شكل قمر صناعي"
          >
            <FaSatellite />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-lg ${viewMode === "list" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
            title="عرض على شكل قائمة"
          >
            <FaList />
          </button>
        </div>
      </div>

      {/* View Switcher */}
      {viewMode !== "list" ? (
        <div className="relative w-full h-screen">
          {/* Filter controls and SearchBar on map view */}
          <div className="absolute top-4 right-4 z-30 flex flex-col gap-2">
            {/* SearchBar */}
            <div className="w-48">
               <SearchBar onSearch={setSearch} className="text-xs" />
            </div>

            {/* Location Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {locationOptions.map(loc => (
                <button
                  key={loc}
                  onClick={() => handleFilterChange('location', loc)}
                  className={`px-3 py-1 rounded-full border text-xs ${
                    filter.location === loc
                      ? "bg-green-500 text-white border-green-500"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>

            {/* Property Type Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {propertyTypes.map(type => (
                <button
                  key={type}
                  onClick={() => handleFilterChange('type', type)}
                  className={`px-3 py-1 rounded-full border text-xs ${
                    filter.type === type
                      ? "bg-green-500 text-white border-green-500"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <Map
            properties={filteredProperties}
            mapType={viewMode === "satellite" ? "satellite" : "osm"}
          />
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              قائمة العقارات
            </h2>
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map((p) => (
                  <PropertyCard key={p.id} {...p} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <FaExclamationCircle className="mx-auto text-4xl text-blue-300 mb-4" />
                <p className="text-xl">لا توجد عقارات مطابقة</p>
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
};

export default Properties;
