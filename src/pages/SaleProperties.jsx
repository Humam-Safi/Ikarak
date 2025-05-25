import React, { useContext, useMemo, useState, useEffect } from "react";
import SearchBar from "../components/common/SearchBar";
import FilterSidebar from "../components/properties/FilterSidebar";
import propertiesData from "../data/properties.json"; // Import the data
import PropertyCard from "./propertyCard";
import { FilterContext } from "../Context/FilterContext";
import { Search } from "../Context/searchContext";
import AnimatedTitle from "../components/common/AnimatedTitle";
import { filterProperties } from "../utils/filterUtils";
import Map from "../components/common/Map";
import { FaMap, FaList, FaSatellite, FaExclamationCircle, FaThLarge } from "react-icons/fa";

const SaleProperties = () => {
  const { filter } = useContext(FilterContext);
  const { search } = useContext(Search);
  const data = propertiesData.properties.filter((property) => (property.kind === "بيع"));
  const [isLoaded, setIsLoaded] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'map' | 'satellite'

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  const filteredProperties = useMemo(() => {
    return filterProperties(data, filter);
  }, [filter, data]);

  const mappedData = useMemo(
    () =>
      filteredProperties.filter((property) => {
        const searchLower = search.toLowerCase();
        return (
          property.location.toLowerCase().includes(searchLower) ||
          property.title.toLowerCase().includes(searchLower)
        );
      }),
    [filteredProperties, search]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-grey-50 to-white pb-12">
      {/* Page header with gradient background */}
      <div className=" relative overflow-hidden">
       {/* Page title */}
       <div style={{
          width:"100%",
          textAlign:"center"
        }}>
          <AnimatedTitle
            text="عروض البيع المتاحة"
            tag="h1"
            animation="shimmer"
            className="text-4xl md:text-5xl font-extrabold text-center mb-4 font-arabic"
          />
        </div>
        <div className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-primary-300 to-primary-600 rounded-full shadow-md"></div>
      </div>

      <div className="container mx-auto px-4 transition-all duration-500">
        <div className="flex flex-col lg:flex-row gap-10 relative">
          {/* Filter Sidebar - Always visible */}
          <div className="w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-md border border-grey-200 h-max lg:sticky lg:top-20">
            <FilterSidebar />
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm mb-8 flex justify-between items-center">
              <SearchBar className="flex-grow mr-4"/>
               <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg ${viewMode === "grid" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
                  title="عرض على شكل شبكة"
                >
                  <FaThLarge />
                </button>
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
              </div>
            </div>

            {viewMode !== "grid" ? (
               <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-md">
                <Map properties={mappedData} mapType={viewMode === "satellite" ? "satellite" : "osm"} />
              </div>
            ) : (
              mappedData.length > 0 ? (
                <div className={`grid gap-8 grid-cols-1 md:grid-cols-2`}>
                  {mappedData.map((property, idx) => (
                    <div
                      key={property.id}
                      className="transform transition-all duration-700"
                      style={{
                        transitionDelay: `${idx * 0.1}s`,
                        transform: isLoaded ? 'translateY(0)' : 'translateY(50px)',
                        opacity: isLoaded ? 1 : 0
                      }}
                    >
                      <PropertyCard
                        img={property.image[0]}
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
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center p-12 bg-white rounded-lg shadow-md transform transition-all duration-500 opacity-0 translate-y-10" style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(50px)'
                }}>
                  <div className="text-8xl mb-4 text-grey-300 flex justify-center">🏠</div>
                  <h3 className="text-2xl font-bold text-grey-800 mb-2">لا توجد عقارات مطابقة</h3>
                  <p className="text-grey-600 text-lg">
                    لا توجد عقارات مطابقة للمعايير المحددة، يرجى تغيير معايير البحث
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Back to top button */}
    </div>
  );
};

export default React.memo(SaleProperties);
