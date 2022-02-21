import React from "react";
import { Link } from "react-router-dom";
// Redux
import { useSelector } from "react-redux";
import TableOfFavouriteForks from "../subComponents/TableOfFavouriteForks";

const FavouriteForksPage = () => {
  const githubFavouriteForks = useSelector((state) => state.github.favourtieForks);

  return (
    <div>
      <Link to="/"> Home </Link>
      {Object.keys(githubFavouriteForks).map((value) => (
        <TableOfFavouriteForks value={githubFavouriteForks[value]} />
      ))}
    </div>
  );
};

export default FavouriteForksPage;
