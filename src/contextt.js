import React, { useState, useContext, useEffect } from "react";

const api = {
  key: `${process.env.REACT_APP_API_KEY}`,
  base: "https://api.openweathermap.org/data/2.5/",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("milas");
  const [results, setResults] = useState([]);



  const handleSearch = (evt) => {
    setLoading(true);
    const url = `${api.base}weather?q=${query}&units=metric&appid=${api.key}`;
    if (evt.key === "Enter") {
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          setResults(result);
          setQuery("");
          console.log(result);
        });
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        results,
        query,
        setQuery,

        handleSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
