import React, { useState, useRef, useEffect } from "react";

const SearchBar = ({ className = "", onSearch }) => {
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const handleClick = () => setExpanded(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query.trim());
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        if (!query) setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [query]);

  return (
    <form
      onSubmit={handleSubmit}
      ref={inputRef}
      className={`transition-all duration-300 ease-in-out flex items-center ${
        expanded ? "w-full max-w-md" : "w-[42px]"
      } ${className}`}
    >
      <div className="relative w-full">
        {/* Input Field */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ابحث عن عقار..."
          className={`transition-all text-black duration-300 ease-in-out pr-12 pl-4 py-2 rounded-full border border-gray-300 shadow text-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none ${
            expanded
              ? "w-full opacity-100"
              : "w-10 opacity-0 pointer-events-none"
          }`}
        />

        {/* Search Icon Button */}
        <button
          type={expanded ? "submit" : "button"}
          onClick={handleClick}
          className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center bg-indigo-600 text-white rounded-full w-10 h-10 hover:bg-indigo-700 shadow-md transition"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default React.memo(SearchBar);
