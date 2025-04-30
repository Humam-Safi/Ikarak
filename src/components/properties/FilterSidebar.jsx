import React, { useContext, useState, useEffect } from "react";
import { Filter } from "../../Context/filterContext";

const FilterSidebar = () => {
  const propertyTypes = ["الكل", "شقة", "منزل", "فيلا", "أرض", "تجاري"];
  const bedroomOptions = ["أي", "1", "2", "3", "4", "5+"];
  const bathroomOptions = ["أي", "1", "2", "3", "4+"];
  const [currency, setCurrency] = useState("syp"); 
  const currencyOptions = ["syp", "usd"]; // Default to Syrian Pound
  const { filter, setFilter } = useContext(Filter);

 

  // Price range configurations based on currency
  const priceRanges = {
    syp: {
      min: 0,
      max: 5000000000,
      step: 10000,
    },
    usd: {
      min: 0,
      max: 1000000,
      step: 1000,
    },
  };

  const HANDLE_FILTER_CHANGE = (key, value) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [key]: value,
    }));
  };

  // Set the initial default currency in the filter object
  useEffect(() => {
    HANDLE_FILTER_CHANGE("currency", currency); // Set default currency
    HANDLE_FILTER_CHANGE("priceRange", [
      priceRanges[currency].min,
      priceRanges[currency].max,
    ]); // Set default price range
  }, [currency]); // Trigger whenever `currency` changes

  // Handle currency change
  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
    // Reset price range when currency changes
    HANDLE_FILTER_CHANGE("priceRange", [
      priceRanges[newCurrency].min,
      priceRanges[newCurrency].max / 2,
    ]);
  };

  return (
    <div className="space-y-6 font-arabic">
      {/* Property Type Filter */}
      <div>
        <label
          htmlFor="propertyType"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          نوع العقار
        </label>
        <select
          id="propertyType"
          name="type"
          value={filter.type}
          onChange={(e) => HANDLE_FILTER_CHANGE("type", e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {propertyTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Bedrooms Filter */}
      <div>
        <label
          htmlFor="bedrooms"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          عدد غرف النوم
        </label>
        <select
          id="bedrooms"
          name="bedrooms"
          value={filter.bedrooms}
          onChange={(e) => HANDLE_FILTER_CHANGE("bedrooms", e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {bedroomOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Bathrooms Filter */}
      <div>
        <label
          htmlFor="bathrooms"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          عدد الحمامات
        </label>
        <select
          id="bathrooms"
          name="bathrooms"
          value={filter.bathrooms}
          onChange={(e) => HANDLE_FILTER_CHANGE("bathrooms", e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {bathroomOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Currency Selector */}
      <div>
        <label
          htmlFor="bathrooms"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          العملة 
        </label>
        <select
          id="currency"
          name="currency"
          value={filter.currency}
          onChange={(e) => {
            HANDLE_FILTER_CHANGE("currency", e.target.value)
            handleCurrencyChange(e.target.value)
          }}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <div>
        <label
          htmlFor="minPrice"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          الحد الأدنى للسعر
        </label>
        <input
          type="range"
          id="minPrice"
          min={priceRanges[currency].min}
          max={priceRanges[currency].max - priceRanges[currency].step}
          step={priceRanges[currency].step}
          value={filter.priceRange[0]}
          onChange={(e) =>
            HANDLE_FILTER_CHANGE("priceRange", [
              Number(e.target.value),
              filter.priceRange[1],
            ])
          }
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <span className="text-xs text-gray-500">
          {filter.priceRange[0]} {currency === "syp" ? "ل.س" : "$"}
        </span>
      </div>
      <div>
        <label
          htmlFor="maxPrice"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          الحد الأقصى للسعر
        </label>
        <input
          type="range"
          id="maxPrice"
          min={priceRanges[currency].min + priceRanges[currency].step}
          max={priceRanges[currency].max}
          step={priceRanges[currency].step}
          value={filter.priceRange[1]}
          onChange={(e) =>
            HANDLE_FILTER_CHANGE("priceRange", [
              filter.priceRange[0],
              Number(e.target.value),
            ])
          }
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <span className="text-xs text-gray-500">
          {filter.priceRange[1]} {currency === "syp" ? "ل.س" : "$"}
        </span>
      </div>

      {/* Area Range Filter */}
      <div>
        <label
          htmlFor="minArea"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          الحد الأدنى للمساحة (م²)
        </label>
        <input
          type="range"
          id="minArea"
          min="0"
          max="990" // Max slightly less than absolute max
          step="10"
          value={filter.area[0]}
          onChange={(e) =>
            HANDLE_FILTER_CHANGE("area", [
              Number(e.target.value),
              filter.area[1],
            ])
          }
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <span className="text-xs text-gray-500">{filter.area[0]}</span>
      </div>
      <div>
        <label
          htmlFor="maxArea"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          الحد الأقصى للمساحة (م²)
        </label>
        <input
          type="range"
          id="maxArea"
          min="10" // Min slightly more than absolute min
          max="1000"
          step="10"
          value={filter.area[1]}
          onChange={(e) =>
            HANDLE_FILTER_CHANGE("area", [
              filter.area[0],
              Number(e.target.value),
            ])
          }
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <span className="text-xs text-gray-500">{filter.area[1]}</span>
      </div>
    </div>
  );
};

export default FilterSidebar;
