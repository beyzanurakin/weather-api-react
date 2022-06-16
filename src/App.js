import React from "react";
import Forecast from "./Forecast";
import { useGlobalContext } from "./context";
import SearchBox from "./SearchBox";

function App() {
  const { results } = useGlobalContext();
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
        <SearchBox />
        <Forecast />
      </main>
    </div>
  );
}

export default App;
