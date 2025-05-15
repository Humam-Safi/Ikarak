import React, { useContext, useMemo } from "react";
import SearchBar from "../components/common/SearchBar";
import FilterSidebar from "../components/properties/FilterSidebar";
import propertiesData from "../data/properties.json"; // Import the data
import PropertyCard from "./propertyCard";
import { Filter } from "../Context/filterContext";
import { Search } from "../Context/searchContext";
import AnimatedTitle from "../components/common/AnimatedTitle";

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
    <div className="container mx-auto px-4 py-12 bg-grey-50 min-h-screen">
      <div className="section-title mb-8">
        <AnimatedTitle
          text="العقارات المتاحة"
          tag="h1"
          animation="shimmer"
          className="font-extrabold text-4xl md:text-5xl text-center"
        />
      </div>
    
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Filter Sidebar */}
        <div className="w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-md border border-grey-200 h-max lg:sticky lg:top-20">
          <FilterSidebar />
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4">
          <SearchBar className="mb-8" />

          {mappedData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          ) : (
            <div className="text-center p-12 bg-white rounded-lg shadow-md">
              <p className="text-grey-700 text-xl">
                لا توجد عقارات مطابقة للمعايير المحددة
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
 
export default React.memo(Properties);