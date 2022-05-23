import React, { useEffect, useState } from "react";

import "./App.css";

import MeteoCard from "./Card";

function App() {
  return (
    <div className="App">
      Méteo
      <MeteoCard></MeteoCard>
    </div>
  );
}

export default App;
