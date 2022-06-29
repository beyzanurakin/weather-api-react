import React from "react";
import { useEffect } from "react";
import { useWeather } from "./context/weatherContext";
import SearchBox from "./components/SearchBox"
import Card from "./components/Card"


function App() {
  const weather = useWeather()
  console.log(weather)
  useEffect(() => {
    weather.fetchCurrentUserLocationData();
  }, [])
  return (
    <div>
      <main>
        <SearchBox />
        <Card />
      </main>
    </div>
  );
}

export default App;
