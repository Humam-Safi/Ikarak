import React, { useContext, useMemo, useState, useEffect } from "react";
import SearchBar from "../components/common/SearchBar";
import FilterSidebar from "../components/properties/FilterSidebar";
import propertiesData from "../data/properties.json"; // Import the data
import PropertyCard from "./propertyCard";
import { Filter } from "../Context/filterContext";
import { Search } from "../Context/searchContext";
import AnimatedTitle from "../components/common/AnimatedTitle";
import { FaArrowUp, FaFilter } from "react-icons/fa";

const SaleProperties = () => {
  const { filter } = useContext(Filter);
  const { search } = useContext(Search);
  const dollarToSyp = 11500;
  const data = propertiesData.properties.filter((property) => (property.kind === "بيع"));
  const [isLoaded, setIsLoaded] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    // Trigger animation after initial load
    setTimeout(() => setIsLoaded(true), 300);

    // Add scroll listener for back to top button
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

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
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-12 mb-8 relative overflow-hidden">
        {/* Animated particles in header */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-white/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s linear infinite, pulse ${2 + Math.random() * 3}s ease-in-out infinite alternate`,
                opacity: Math.random() * 0.5 + 0.3,
                transform: `scale(${Math.random() * 2 + 0.5})`,
              }}
            ></div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="section-title mb-2 text-center">
            <AnimatedTitle
              text="العقارات المتاحة للبيع"
              tag="h1"
              animation="shimmer"
              className="font-extrabold text-4xl md:text-5xl text-white"
            />
          </div>
        </div>
        
        {/* Wave SVG at bottom of header */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-grey-50">
            <path d="M0,64L80,69.3C160,75,320,85,480,90.7C640,96,800,96,960,85.3C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>
    
      <div className="container mx-auto px-4 transition-all duration-500">
        <div className="flex flex-col lg:flex-row gap-10 relative">
          {/* Mobile filter toggle button */}
          <button 
            onClick={() => setShowSidebar(!showSidebar)}
            className="lg:hidden fixed bottom-6 left-6 z-40 bg-primary-500 text-white p-4 rounded-full shadow-floating hover:bg-primary-600 transition-all duration-300"
          >
            <FaFilter className="text-xl" />
          </button>
          
          {/* Filter Sidebar */}
          <div className={`w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-md border border-grey-200 h-max lg:sticky lg:top-20 transition-all duration-300 transform lg:transform-none lg:translate-x-0 fixed lg:relative z-30 top-0 right-0 bottom-0 ${showSidebar ? 'translate-x-0' : 'translate-x-full'} lg:opacity-100`}>
            <div className="lg:hidden flex justify-between items-center mb-4 border-b pb-3">
              <h3 className="font-bold text-xl text-grey-900">خيارات البحث</h3>
              <button 
                onClick={() => setShowSidebar(false)}
                className="p-2 rounded-full bg-grey-100 hover:bg-grey-200 transition-colors"
              >
                ✕
              </button>
            </div>
            <FilterSidebar />
          </div>

          {/* Dark overlay when sidebar is open on mobile */}
          {showSidebar && (
            <div 
              className="fixed inset-0 bg-grey-900/50 z-20 lg:hidden"
              onClick={() => setShowSidebar(false)}
            ></div>
          )}

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
      <button 
        onClick={scrollToTop} 
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-primary-500 text-white shadow-lg transition-all duration-300 hover:bg-primary-600 hover:shadow-xl z-20 transform ${showBackToTop ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default React.memo(SaleProperties);
