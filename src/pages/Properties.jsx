import React, { useState } from "react";
import PropertyCard from "../components/properties/PropertyCard";
import SearchBar from "../components/search/SearchBar";
import FilterSidebar from "../components/properties/FilterSidebar";

const Properties = () => {
  const [properties] = useState([
    {
      id: 1,
      title: "شقة عصرية في وسط المدينة",
      type: "شقة",
      location: "وسط المدينة، حمص",
      price: "150,000 دولار",
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      image: "/images/properties/apartment1.jpg",
      features: ["موقف سيارات", "شرفة", "حماية"],
      amenities: ["مسبح", "نادي رياضي", "حماية 24/7"],
    },
    {
      id: 2,
      title: "فيلا فاخرة مع حديقة",
      type: "فيلا",
      location: "الوائري، حمص",
      price: "250,000 دولار",
      bedrooms: 4,
      bathrooms: 3,
      area: 200,
      image: "/images/properties/villa1.jpg",
      features: ["حديقة", "كراج", "حماية"],
      amenities: ["حديقة خاصة", "مسبح", "موقف سيارات"],
    },
    // Add more sample properties as needed
  ]);

  const [filters, setFilters] = useState({
    type: "all",
    priceRange: [0, 1000000],
    bedrooms: "any",
    bathrooms: "any",
    area: [0, 1000],
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 font-arabic">
        العقارات المتاحة
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filter Sidebar */}
        <div className="w-full md:w-1/4">
          <FilterSidebar filters={filters} setFilters={setFilters} />
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4">
          <SearchBar className="mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
