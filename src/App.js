import React from "react";
import Search from "./Search";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Search />
        <Footer />
      </header>
    </div>
  );
}

export default App;
