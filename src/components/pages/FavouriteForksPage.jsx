import React from "react";
import { Link } from "react-router-dom";
import TableOfFavouriteForks from "../subComponents/TableOfFavouriteForks";

const FavouriteForksPage = () => {
  return (
    <div className="favourite-forks">
      <Link to="/" className="links">
        Home
      </Link>
      <TableOfFavouriteForks />
    </div>
  );
};

export default FavouriteForksPage;
