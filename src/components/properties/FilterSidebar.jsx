import React, { useContext, useMemo } from 'react';
import { FilterContext } from '../../Context/FilterContext';
import { FaThLarge, FaList, FaCheck, FaRedo, FaUndo, FaFilter } from 'react-icons/fa';

const propertyTypes = ['الكل', 'شقة', 'منزل', 'فيلا', 'أرض', 'تجاري'];
const bedroomOptions = ['أي', '1', '2', '3', '4', '5+'];
const bathroomOptions = ['أي', '1', '2', '3', '4+'];
const locationOptions = ['الكل', 'دمشق', 'حلب', 'حمص', 'حماة', 'اللاذقية', 'طرطوس', 'دير الزور', 'الحسكة'];
const statusOptions = ['الكل', 'جديد', 'مستعمل', 'قيد الإنشاء'];
const sortOptions = [
  { value: 'date', label: 'الأحدث' },
  { value: 'price_asc', label: 'السعر: من الأقل للأعلى' },
  { value: 'price_desc', label: 'السعر: من الأعلى للأقل' },
  { value: 'area_asc', label: 'المساحة: من الأقل للأعلى' },
  { value: 'area_desc', label: 'المساحة: من الأعلى للأقل' },
];
const featureOptions = ['مكيف', 'مصعد', 'حديقة', 'موقف سيارات', 'أمن 24/7', 'إنترنت', 'مسبح', 'صالة رياضية'];
const priceRanges = {
  syp: { min: 0, max: 5000000000, step: 1000000 },
  usd: { min: 0, max: 1000000, step: 1000 },
};

const FilterSidebar = () => {
  const { filter, setFilter, resetFilter, undoFilter, canUndo } = useContext(FilterContext);
  const currentRange = useMemo(() => priceRanges[filter.currency], [filter.currency]);

  const handleFilterChange = (key, value) => {
    setFilter(prev => ({ ...prev, [key]: value }));
  };

  const toggleFeature = feature => {
    const newFeatures = filter.features.includes(feature)
      ? filter.features.filter(f => f !== feature)
      : [...filter.features, feature];
    handleFilterChange('features', newFeatures);
  };

  const renderSelect = (label, value, options, key) => (
    <div className="mb-4">
      <label className="block text-base font-bold text-gray-800 mb-2">{label}</label>
      <select
        value={value}
        onChange={e => handleFilterChange(key, e.target.value)}
        className="w-full p-2.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-gray-900 text-sm"
      >
        {options.map(opt => (
          <option key={opt} value={opt} className="text-gray-900">{opt}</option>
        ))}
      </select>
    </div>
  );

  const renderSortSelect = (label, value, options) => (
    <div className="mb-4">
      <label className="block text-base font-bold text-gray-800 mb-2">{label}</label>
      <select
        value={value}
        onChange={e => handleFilterChange('sortBy', e.target.value)}
        className="w-full p-2.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-gray-900 text-sm"
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value} className="text-gray-900">{opt.label}</option>
        ))}
      </select>
    </div>
  );

  return (
    <aside className="p-6 space-y-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <div className="flex justify-between  items-center pb-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <FaFilter className="text-primary-600 text-xl" />
          <h3 className="text-lg font-bold text-gray-800">فلاتر البحث</h3>
        </div>
        <div className="flex gap-2 ">
          {canUndo && (
            <button 
              onClick={undoFilter} 
              className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              title="تراجع عن آخر تغيير"
            >
              <FaUndo />
              <span className="hidden sm:inline">تراجع</span>
            </button>
          )}
          <button 
            onClick={resetFilter}
            className="flex items-center gap-1 px-3 py-1.5 text-sm text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors duration-200"
            title="إعادة تعيين جميع الفلاتر"
          >
            <FaRedo />
            <span className="hidden sm:inline">إعادة تعيين</span>
          </button>
        </div>
      </div>

      <div className="flex text-gray-600 text-center gap-2 p-2 bg-gray-50 rounded-lg">
        {['grid', 'list'].map(mode => (
          <button
            key={mode}
            onClick={() => handleFilterChange('viewMode', mode)}
            className={`flex-1 p-2 rounded-lg transition-all duration-200 ${
              filter.viewMode === mode 
                ? 'bg-primary-600 text-white shadow-md' 
                : 'bg-white hover:bg-gray-100'
            }`}
          >
            {mode === 'grid' ? <FaThLarge /> : <FaList />}
          </button>
        ))}
      </div>

      {renderSortSelect('ترتيب حسب', filter.sortBy, sortOptions)}
      {renderSelect('نوع العقار', filter.type, propertyTypes, 'type')}
      {renderSelect('الموقع', filter.location, locationOptions, 'location')}
      {renderSelect('الحالة', filter.status, statusOptions, 'status')}
      {renderSelect('عدد غرف النوم', filter.bedrooms, bedroomOptions, 'bedrooms')}
      {renderSelect('عدد الحمامات', filter.bathrooms, bathroomOptions, 'bathrooms')}

      <div className="mb-4">
        <label className="block text-base font-bold text-gray-800 mb-2">نطاق السعر</label>
        <div className="mb-3 text-black">
          <select
            value={filter.currency}
            onChange={e => handleFilterChange('currency', e.target.value)}
            className="w-full p-2.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-gray-900 text-sm"
          >
            <option value="syp" className="text-gray-900">ليرة سورية</option>
            <option value="usd" className="text-gray-900">دولار أمريكي</option>
          </select>
        </div>
        {[0,1].map(i => (
          <div key={i} className="mb-3 text-black">
            <input
              type="range"
              min={currentRange.min}
              max={currentRange.max}
              step={currentRange.step}
              value={filter.priceRange[i]}
              onChange={e => {
                const pr = [...filter.priceRange]; pr[i] = +e.target.value;
                handleFilterChange('priceRange', pr);
              }}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
            />
            <div className="text-sm text-gray-600 mt-1">
              {filter.priceRange[i].toLocaleString()} {filter.currency === 'syp' ? 'ل.س' : '$'}
            </div>
          </div>
        ))}
      </div>

      <div>
        <label className="block text-base font-bold text-gray-800 mb-2">المميزات</label>
        <div className="grid grid-cols-2 gap-2">
          {featureOptions.map(f => (
            <button
              key={f}
              onClick={() => toggleFeature(f)}
              className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-200 ${
                filter.features.includes(f) 
                  ? 'bg-primary-50 text-primary-700 border border-primary-200' 
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FaCheck className={`${filter.features.includes(f) ? 'text-primary-600' : 'text-gray-400'}`} />
              {f}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
