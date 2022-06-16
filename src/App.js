import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Forecast from "./Forecast";
const api = {
  key: `${process.env.REACT_APP_API_KEY}`,
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const url = `${api.base}weather?q=${query}&units=metric&appid=${api.key}`;
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setResults(data);
      setQuery("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div
      className={
        typeof results.main != "undefined"
          ? results.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        {loading && <Loading />}
        {!loading && (
          <Forecast
            results={results}
            query={query}
            setQuery={setQuery}
            handleSearch={handleSearch}
          />
        )}
      </main>
    </div>
  );
}

export default App;
