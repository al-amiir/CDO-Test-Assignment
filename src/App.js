import React, { useEffect } from "react";
import HomePage from "./components/pages/HomePage";
// React Router
import { Routes, Route, Link } from "react-router-dom";
import FavouriteForksPage from "./components/pages/FavouriteForksPage";

const App = () => {
  return (
    <div style={{ height: "100vh", backgroundColor: "#0D1117" }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourite-forks" element={<FavouriteForksPage />} />
      </Routes>
    </div>
  );
};

export default App;
