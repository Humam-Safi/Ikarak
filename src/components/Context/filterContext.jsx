import React, { createContext } from 'react';
import { useState } from 'react';

export const Filter = createContext(null);

const FilterContext = ({ children }) => {
    const [fitler, setFitler] = useState([])
    return (
        <Filter.Provider value={{ fitler, setFitler }}>
            {children}
        </Filter.Provider>
    );
}

export default FilterContext;