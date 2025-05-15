import React, { useContext, useState, useCallback } from "react";
import { Search } from "../../Context/searchContext";

const SearchBar = ({ className = "", onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setSearch } = useContext(Search);
  
  // Debounce search updates
  const handleSearchChange = useCallback((e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSearch(value);
  }, [setSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`}>
      <div className="relative">
        <input
          type="text"
          placeholder="ابحث عن عقارات..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full text-black pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
    </form>
  );
};

export default React.memo(SearchBar);
