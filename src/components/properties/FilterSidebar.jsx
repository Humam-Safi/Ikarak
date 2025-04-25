import React, { useContext } from 'react';
import { Filter } from '../Context/filterContext';

const FilterSidebar = () => {
  const propertyTypes = ['الكل', 'شقة', 'منزل', 'فيلا', 'أرض', 'تجاري'];
  const bedroomOptions = ['أي', '1', '2', '3', '4', '5+'];
  const bathroomOptions = ['أي', '1', '2', '3', '4+'];

  const { filter, setFilter } = useContext(Filter);

  const HANDLE_FILTER_CHANGE = (key, value) => {
    // Ensure price range values don't cross
    if (key === 'priceRange') {
      const [min, max] = value;
      if (min > max) {
     
        value = [min, min]; 
      }
    }
    if (key === 'area') {
      const [min, max] = value;
      if (min > max) {
        value = [min, min];
      }
    }

    setFilter(prevFilter => ({
      ...prevFilter,
      [key]: value
    }));
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('ar-AE').format(num);
  };

  return (
    <div className="space-y-8 font-arabic p-4 bg-white rounded-lg shadow border border-gray-200">
      {/* Property Type Filter */}
      <div>
        <label htmlFor="propertyType" className="block text-md font-semibold text-gray-800 mb-2">
          نوع العقار
        </label>
        <select
          id="propertyType"
          name="type"
          value={filter.type}
          onChange={(e) => HANDLE_FILTER_CHANGE('type', e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2.5 text-base border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md shadow-sm transition duration-150 ease-in-out"
        >
          {propertyTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* Bedrooms Filter */}
      <div>
        <label htmlFor="bedrooms" className="block text-md font-semibold text-gray-800 mb-2">
          عدد غرف النوم
        </label>
        <select
          id="bedrooms"
          name="bedrooms"
          value={filter.bedrooms}
          onChange={(e) => HANDLE_FILTER_CHANGE('bedrooms', e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2.5 text-base border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md shadow-sm transition duration-150 ease-in-out"
        >
          {bedroomOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      {/* Bathrooms Filter */}
      <div>
        <label htmlFor="bathrooms" className="block text-md font-semibold text-gray-800 mb-2">
          عدد الحمامات
        </label>
        <select
          id="bathrooms"
          name="bathrooms"
          value={filter.bathrooms}
          onChange={(e) => HANDLE_FILTER_CHANGE('bathrooms', e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2.5 text-base border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md shadow-sm transition duration-150 ease-in-out"
        >
          {bathroomOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="space-y-3">
        <label className="block text-md font-semibold text-gray-800 mb-2">نطاق السعر</label>
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>{formatNumber(filter.priceRange[0])}</span>
          <span>{formatNumber(filter.priceRange[1])}</span>
        </div>
        {/* Min Price Slider */}
        <input
          type="range"
          id="minPrice"
          min="0"
          max="5000000"
          step="10000"
          value={filter.priceRange[0]}
          onChange={(e) => HANDLE_FILTER_CHANGE('priceRange', [Number(e.target.value), filter.priceRange[1]])}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:accent-blue-500"
        />
        {/* Max Price Slider */}
        <input
          type="range"
          id="maxPrice"
          min="0"
          max="5000000"
          step="10000"
          value={filter.priceRange[1]}
          onChange={(e) => HANDLE_FILTER_CHANGE('priceRange', [filter.priceRange[0], Number(e.target.value)])}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:accent-blue-500"
        />
      </div>

      {/* Area Range Filter */}
      <div className="space-y-3">
        <label className="block text-md font-semibold text-gray-800 mb-2">نطاق المساحة (م²)</label>
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>{formatNumber(filter.area[0])} م²</span>
          <span>{formatNumber(filter.area[1])} م²</span>
        </div>
        {/* Min Area Slider */}
        <input
          type="range"
          id="minArea"
          min="0"
          max="1000"
          step="10"
          value={filter.area[0]}
          onChange={(e) => HANDLE_FILTER_CHANGE('area', [Number(e.target.value), filter.area[1]])}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:accent-blue-500"
        />
        {/* Max Area Slider */}
        <input
          type="range"
          id="maxArea"
          min="0"
          max="1000"
          step="10"
          value={filter.area[1]}
          onChange={(e) => HANDLE_FILTER_CHANGE('area', [filter.area[0], Number(e.target.value)])}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:accent-blue-500"
        />
      </div>

      {/* Removed commented out examples */}
    </div>
  );
};

export default FilterSidebar;