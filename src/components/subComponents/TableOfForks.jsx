import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavouriteFork, removeFavouriteFork } from "../../features/githubAPI/githubAPISlice";
const TableOfForks = ({ value }) => {
  const githubFavouriteForks = useSelector((state) => state.github.favourtieForks);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{value.full_name}</div>
      <div>{value.owner.login}</div>
      <div>{value.stargazers_count}</div>
      <a target="_blank" href={`${value.html_url}`}>
        link
      </a>
      <div>
        <button
          style={{ width: "90px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
          onClick={() => {
            githubFavouriteForks.hasOwnProperty(value.id) ? dispatch(removeFavouriteFork(value)) : dispatch(addFavouriteFork(value));
          }}
        >
          {githubFavouriteForks.hasOwnProperty(value.id) ? <img src="https://img.icons8.com/emoji/15/000000/star-emoji.png" /> : <img src="https://img.icons8.com/windows/15/000000/star--v1.png" />}
          Favourite
        </button>
      </div>
    </div>
  );
};

export default TableOfForks;
