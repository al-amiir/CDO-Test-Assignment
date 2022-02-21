import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../subComponents/SearchBar";

const HomePage = () => {
  return (
    <div>
      <p>Welcome</p>
      <Link to="/favourite-forks"> Favourties </Link>
      <SearchBar />
    </div>
  );
};

export default HomePage;
