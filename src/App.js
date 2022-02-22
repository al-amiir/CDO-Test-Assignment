import React from "react";
import HomePage from "./components/pages/HomePage";
// React Router
import { Routes, Route } from "react-router-dom";
import FavouriteForksPage from "./components/pages/FavouriteForksPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourite-forks" element={<FavouriteForksPage />} />
      </Routes>
    </div>
  );
};

export default App;
