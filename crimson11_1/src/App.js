import "./App.css";
import Landingpage from "./Pages/Landingpage";
import Loginpage from "./Pages/Loginpage";
import Aboutus from "./Pages/Aboutus";
import PreferencePage from "./Pages/PreferencePage";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div class="container">
      {/*Creating routes for the pages*/}
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/preference" element={<PreferencePage />} />
      </Routes>
    </div>
  );
}

export default App;
