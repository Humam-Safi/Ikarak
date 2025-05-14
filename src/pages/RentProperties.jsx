import React, { useState, useEffect } from "react";
import PropertyCard from "./propertyCard";
import FilterSidebar from "../components/properties/FilterSidebar";
import SearchBar from "../components/common/SearchBar";
import propertiesData from "../data/properties.json";
import AnimatedTitle from "../components/common/AnimatedTitle";

const RentProperties = () => {
  const [properties, setProperties] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredProperties, setFilteredProperties] = useState([]);

  // Initialize properties from data
  useEffect(() => {
    setProperties(propertiesData.properties.filter(property => property.kind === "للأجار"));
    setFilteredProperties(propertiesData.properties.filter(property => property.kind === "للأجار"));
  }, []);

  // Filter properties based on search query
  useEffect(() => {
    if (query.trim() === "") {
      setFilteredProperties(properties);
    } else {
      const searchLower = query.toLowerCase();
      setFilteredProperties(
        properties.filter(
          (property) =>
            property.location.toLowerCase().includes(searchLower) ||
            property.title.toLowerCase().includes(searchLower)
        )
      );
    }
  }, [query, properties]);

  // Handle search input changes
  const handleSearch = (searchTerm) => {
    setQuery(searchTerm);
  };

  return (
    <div className="container mx-auto px-4 py-12 bg-grey-50 min-h-screen">
      <div className="section-title">
        <AnimatedTitle
          text="عقارات للأجار"
          tag="h1"
          animation="shimmer"
          className="font-extrabold"
        />
      </div>
    
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Filter Sidebar */}
        <div className="w-full h-full lg:w-1/4 bg-white p-6 rounded-lg shadow-md border border-grey-200">
          <FilterSidebar />
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4">
          <SearchBar className="mb-8" onSearch={handleSearch} />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard
                img={property.image[0]}
                key={property.id}
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(RentProperties);
