import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../subComponents/SearchBar";

const HomePage = () => {
  return (
    <div className="home">
      <p className="home-header">
        <img style={{ filter: "invert(1)", marginRight: "10px" }} src="https://img.icons8.com/ios-filled/55  /000000/github.png" />
        <span>Welcome</span>
      </p>
      <Link to="/favourite-forks" className="links">
        Favourties
      </Link>
      <SearchBar />
    </div>
  );
};

export default HomePage;
