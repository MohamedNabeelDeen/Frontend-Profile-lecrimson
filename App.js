import "./App.css";
import Landingpage from "./Components/Landingpage";
import Loginpage from "./Components/Loginpage";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div class="container">
      {/*Creating routes for the pages*/}
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </div>
  );
}

export default App;
