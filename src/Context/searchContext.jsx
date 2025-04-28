import { createContext,  useState } from "react";

export const Search = createContext("");

const SearchContext = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <Search.Provider value={{ search, setSearch }}>{children}</Search.Provider>
  );
};

export default SearchContext;
