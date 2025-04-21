import React from 'react';

const FilterSidebar = ({ filters, setFilters }) => {
  const propertyTypes = ['الكل', 'شقة', 'منزل', 'فيلا', 'أرض', 'تجاري'];
  const bedroomOptions = ['أي', '1', '2', '3', '4', '5+'];
  const bathroomOptions = ['أي', '1', '2', '3', '4+'];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-fit">
      <h3 className="text-lg font-bold mb-4">الفلترة</h3>
      
      <div className="space-y-6">
        {/* Property Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            نوع العقار
          </label>
          <select
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            نطاق السعر
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={filters.priceRange[0]}
              onChange={(e) => setFilters({ ...filters, priceRange: [e.target.value, filters.priceRange[1]] })}
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="الحد الأدنى"
            />
            <span>-</span>
            <input
              type="number"
              value={filters.priceRange[1]}
              onChange={(e) => setFilters({ ...filters, priceRange: [filters.priceRange[0], e.target.value] })}
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="الحد الأقصى"
            />
          </div>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            عدد غرف النوم
          </label>
          <select
            value={filters.bedrooms}
            onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {bedroomOptions.map((option) => (
              <option key={option} value={option}>
                {option === 'أي' ? 'أي' : `${option} ${option === '5+' ? 'أو أكثر' : ''}`}
              </option>
            ))}
          </select>
        </div>

        {/* Bathrooms */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            عدد الحمامات
          </label>
          <select
            value={filters.bathrooms}
            onChange={(e) => setFilters({ ...filters, bathrooms: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {bathroomOptions.map((option) => (
              <option key={option} value={option}>
                {option === 'أي' ? 'أي' : `${option} ${option === '4+' ? 'أو أكثر' : ''}`}
              </option>
            ))}
          </select>
        </div>

        {/* Area Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            المساحة (م²)
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={filters.area[0]}
              onChange={(e) => setFilters({ ...filters, area: [e.target.value, filters.area[1]] })}
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="الحد الأدنى"
            />
            <span>-</span>
            <input
              type="number"
              value={filters.area[1]}
              onChange={(e) => setFilters({ ...filters, area: [filters.area[0], e.target.value] })}
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="الحد الأقصى"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;