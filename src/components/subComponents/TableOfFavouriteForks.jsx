import React from "react";
import { useDispatch } from "react-redux";
import { addFavouriteFork, removeFavouriteFork } from "../../features/githubAPI/githubAPISlice";

const TableOfFavouriteForks = ({ value }) => {
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
            dispatch(removeFavouriteFork(value));
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TableOfFavouriteForks;
