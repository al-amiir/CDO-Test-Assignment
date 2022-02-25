import React, { useState, useEffect } from "react";
import HomePage from "./components/pages/HomePage";
// React Router
import { Routes, Route } from "react-router-dom";
import FavouriteForksPage from "./components/pages/FavouriteForksPage";
// firestore
import { getForks } from "./firebase-config";
// Redux
import { getFirestoreForks, getFirestoreForksID } from "./features/githubAPI/githubAPISlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getForks(dispatch, getFirestoreForks, getFirestoreForksID);
  }, []);
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
