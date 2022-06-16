import React from "react";
import { useGlobalContext } from "./context";

const Forecast = () => {
  const { results, dateBuilder, loading } = useGlobalContext();
  if (results.cod === "404") {
    return <h1>{results.message}</h1>;
  }

  if (loading) {
    return <div className="loading">LOAD</div>;
  }
  if (results.main) {
    return (
      <>
        <div>
          <div className="location-box">
            <div className="location">
              {results.name}, {results.sys.country}
            </div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">{Math.round(results.main.temp)}°c</div>
            <div className="weather">{results.weather[0].main}</div>
          </div>
        </div>
      </>
    );
  }
};

export default Forecast;
