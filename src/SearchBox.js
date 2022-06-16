import React from "react";
import { useGlobalContext } from "./context";

const SearchBox = () => {
  const { query, setQuery, handleSearch } = useGlobalContext();
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleSearch}
      />
    </div>
  );
};

export default SearchBox;
