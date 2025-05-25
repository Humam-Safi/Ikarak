import React, { createContext, useState, useCallback } from 'react';

export const FilterContext = createContext(null);

export const defaultFilter = {
    type: 'الكل',
    priceRange: [0, 5000000000],
    bedrooms: 'أي',
    bathrooms: 'أي',
    areaRange: [0, 500],
    location: 'الكل',
    features: [],
    status: 'الكل',
    sortBy: 'date',
    viewMode: 'grid',
    currency: 'syp',
};

const FilterProvider = ({ children }) => {
    const [filter, setFilter] = useState(defaultFilter);
    const [filterHistory, setFilterHistory] = useState([]);

    const updateFilter = useCallback((newFilter) => {
        setFilter(prevFilter => {
            const updatedFilter = typeof newFilter === 'function' ? newFilter(prevFilter) : newFilter;
            setFilterHistory(prev => [...prev, prevFilter]);
            return updatedFilter;
        });
    }, []);

    const resetFilter = useCallback(() => {
        setFilterHistory(prev => [...prev, filter]);
        setFilter(defaultFilter);
    }, [filter]);

    const undoFilter = useCallback(() => {
        if (filterHistory.length > 0) {
            const previousFilter = filterHistory[filterHistory.length - 1];
            setFilterHistory(prev => prev.slice(0, -1));
            setFilter(previousFilter);
        }
    }, [filterHistory]);

    return (
        <FilterContext.Provider value={{ 
            filter, 
            setFilter: updateFilter, 
            resetFilter, 
            undoFilter,
            defaultFilter,
            canUndo: filterHistory.length > 0
        }}>
            {children}
        </FilterContext.Provider>
    );
};

export default FilterProvider;
