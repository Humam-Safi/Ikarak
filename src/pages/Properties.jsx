import React, { useContext, useMemo } from "react";
import SearchBar from "../components/common/SearchBar";
import FilterSidebar from "../components/properties/FilterSidebar";
import propertiesData from "../data/properties.json"; // Import the data
import PropertyCard from "./propertyCard";
import { Filter } from "../Context/filterContext";
import { Search } from "../Context/searchContext";

const Properties = () => {
  const { filter } = useContext(Filter);
  const { search } = useContext(Search);
  const dollarToSyp = 11500;


  const filteredProperties = useMemo(
    () =>
      propertiesData.properties.filter(
        (property) =>
          (filter.type === "الكل" || property.type === filter.type) &&
          (filter.bedrooms === "أي" ||
            Number(property.bedrooms) >=
              Number(filter.bedrooms.replace("+", ""))) &&
          (filter.bathrooms === "أي" ||
            Number(property.bathrooms) >=
              Number(filter.bathrooms.replace("+", ""))) &&
          Number(property.area) >= filter.area[0] &&
          Number(property.area) <= filter.area[1] &&
          (filter.currency === "syp"
            ? Number(property.price) > 500000
              ? Number(property.price) >= Number(filter.priceRange[0])
              : Number(property.price) * dollarToSyp >=
                Number(filter.priceRange[0])
            : Number(property.price) > 500000
            ? Number(property.price) / dollarToSyp >=
              Number(filter.priceRange[0])
            : Number(property.price) >= Number(filter.priceRange[0])) &&
          (filter.currency === "syp"
            ? Number(property.price) > 500000
              ? Number(property.price) <= Number(filter.priceRange[1])
              : Number(property.price) * dollarToSyp <=
                Number(filter.priceRange[1])
            : Number(property.price) > 500000
            ? Number(property.price) / dollarToSyp <=
              Number(filter.priceRange[1])
            : Number(property.price) <= Number(filter.priceRange[1]))
      ),
    [filter]
  );

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
    <div className="container mx-auto px-4 py-12 bg-gray-100 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-extrabold from-sky-300 to-sky-900 text-center mb-4 font-arabic bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-900 animate-slideIn">
            العقارات المتاحة
          </h1>
          <div className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-sky-300 to-sky-600 rounded-full shadow-md"></div>
    

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Filter Sidebar */}
        <div className="w-full h-full lg:w-1/4 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <FilterSidebar />
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4">
          <SearchBar className="mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
            {mappedData.map((property) => (
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

export default React.memo(Properties);
