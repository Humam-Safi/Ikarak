import React, { useState } from "react";
import PropertyCard from "../components/properties/PropertyCard";
import SearchBar from "../components/common/SearchBar";
import FilterSidebar from "../components/properties/FilterSidebar";
<<<<<<< HEAD
import propertiesData from "../data/properties.json"; // Import the data

const Properties = () => {
  // Use the imported data directly
  const [properties] = useState(propertiesData);
=======

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
>>>>>>> b9c3394a008875b0b021604e1f7187147dbae725

  const [filters, setFilters] = useState({
    type: "all",
    priceRange: [0, 1000000],
    bedrooms: "any",
    bathrooms: "any",
<<<<<<< HEAD
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
=======
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
>>>>>>> b9c3394a008875b0b021604e1f7187147dbae725
          <FilterSidebar filters={filters} setFilters={setFilters} />
        </div>

        {/* Main Content */}
<<<<<<< HEAD
        <div className="w-full lg:w-3/4">
          <SearchBar className="mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
=======
        <div className="w-full md:w-3/4">
          <SearchBar className="mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
>>>>>>> b9c3394a008875b0b021604e1f7187147dbae725
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Properties;
=======
export default Properties;
>>>>>>> b9c3394a008875b0b021604e1f7187147dbae725
