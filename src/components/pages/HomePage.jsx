import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../subComponents/SearchBar";

const HomePage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <p style={{ color: "white", fontSize: "60px", margin: "20px", display: "flex", alignItems: "center" }}>
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
