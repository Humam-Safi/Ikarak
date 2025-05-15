import React, { useContext, useMemo, useState, useEffect } from "react";
import SearchBar from "../components/common/SearchBar";
import FilterSidebar from "../components/properties/FilterSidebar";
import propertiesData from "../data/properties.json"; // Import the data
import PropertyCard from "./propertyCard";
import { Filter } from "../Context/filterContext";
import { Search } from "../Context/searchContext";
import AnimatedTitle from "../components/common/AnimatedTitle";

const SaleProperties = () => {
  const { filter } = useContext(Filter);
  const { search } = useContext(Search);
  const dollarToSyp = 11500;
  const data = propertiesData.properties.filter((property) => (property.kind === "بيع"));
  const [isLoaded, setIsLoaded] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);

    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  const filteredProperties = useMemo(
    () =>
      data.filter(
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
    <div className="min-h-screen bg-gradient-to-b from-grey-50 to-white pb-12">
      {/* Page header with gradient background */}
      <div className="py-12 mb-8 relative overflow-hidden">
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
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm mb-8">
              <SearchBar />
            </div>

            {mappedData.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            )}
          </div>
        </div>
      </div>
      
      {/* Back to top button */}
    </div>
  );
};

export default React.memo(SaleProperties);
