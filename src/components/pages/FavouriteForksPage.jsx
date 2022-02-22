import React from "react";
import { Link } from "react-router-dom";
// Redux
import { useSelector } from "react-redux";
import TableOfFavouriteForks from "../subComponents/TableOfFavouriteForks";

const FavouriteForksPage = () => {
  const githubFavouriteForks = useSelector((state) => state.github.favourtieForks);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", paddingTop: "100px" }}>
      <Link to="/" className="links">
        Home
      </Link>
      <p style={{ fontSize: "31px", color: "white" }}>Table Of Favoutires</p>
      <table style={{ width: "592px" }}>
        <tr>
          <th>Owner</th>
          <th>Stars</th>
          <th>URL</th>
          <th>Remove from favourite</th>
        </tr>
        {Object.keys(githubFavouriteForks).map((value) => (
          <TableOfFavouriteForks value={githubFavouriteForks[value]} />
        ))}
      </table>
    </div>
  );
};

export default FavouriteForksPage;
