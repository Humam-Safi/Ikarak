import React, { createContext } from 'react';
import { useState } from 'react';

export const Filter = createContext(null);

const FilterContext = ({ children }) => {
    const [filter, setFilter] = useState({
      type: "الكل",
      priceRange: [5000, 5000000],
      bedrooms: "أي",
      bathrooms: "أي",
      area: [0, 500], // Adjusted max area based on data
    });
    return (
        <Filter.Provider value={{ filter, setFilter }}>
            {children}
        </Filter.Provider>
    );
}

export default FilterContext;