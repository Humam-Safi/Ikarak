import React, { useState } from "react";
import PropertyCard from "../components/properties/PropertyCard";
import SearchBar from "../components/common/SearchBar";
import FilterSidebar from "../components/properties/FilterSidebar";
import propertiesData from "../data/properties.json"; // Import the data

const Properties = () => {
  // Use the imported data directly
  const [properties] = useState(propertiesData);

  const [filters, setFilters] = useState({
    type: "all",
    priceRange: [0, 1000000],
    bedrooms: "any",
    bathrooms: "any",
    area: [0, 500],
  });

  return (
    <div className="container mx-auto px-4 py-12 bg-gray-100 min-h-screen">
      <h1 className="text-5xl font-extrabold text-center mb-10 font-arabic text-blue-800">
        العقارات المتاحة
      </h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Filter Sidebar */}
        <div className="w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <FilterSidebar filters={filters} setFilters={setFilters} />
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4">
          <SearchBar className="mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;