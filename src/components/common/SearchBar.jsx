import React, { useContext, useState } from "react";
import { Search } from "../../Context/searchContext";

const SearchBar = ({ className = "", onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setSearch } = useContext(Search);
  setSearch(searchTerm);

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
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
    </form>
  );
};

export default SearchBar;
