import React, { useEffect, useState } from "react";
import SearchBar from "../components/common/SearchBar";
import FilterSidebar from "../components/properties/FilterSidebar";
import propertiesData from "../data/properties.json"; // Import the data
import PropertyCard from "./propertyCard";

const Properties = () => {
  // Use imported data, with sample data as fallback
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    setProperties(propertiesData.properties);
  }, []);

  const [filters, setFilters] = useState({
    type: "all",
    priceRange: [0, 1000000],
    bedrooms: "any",
    bathrooms: "any",
    area: [0, 500], // Adjusted to a reasonable range based on sample data
  });

  return (
    <div className="container mx-auto px-4 py-12 bg-gray-100 min-h-screen">
      <h1 className="text-5xl font-extrabold text-center mb-10 font-arabic text-blue-800">
        العقارات المتاحة
      </h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Filter Sidebar */}
        <div className="w-fit h-fit lg:w-1/4 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <FilterSidebar filters={filters} setFilters={setFilters} />
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4">
          <SearchBar className="mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
            {properties.map((property) => (
              <PropertyCard
                img={property.image}
                key={property.id}
                type={property.type}
                location={property.location}
                title={property.title}
                price={property.price}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                area={property.area}
                features={property.features}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
