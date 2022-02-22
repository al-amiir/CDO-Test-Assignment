import React from "react";
import { useDispatch } from "react-redux";
import { removeFavouriteFork } from "../../features/githubAPI/githubAPISlice";

const TableOfFavouriteForks = ({ value }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{value.owner.login}</td>
      <td>{value.stargazers_count}</td>
      <td>
        <a target="_blank" href={`${value.html_url}`}>
          link
        </a>
      </td>
      <td>
        <button
          className="button-remove"
          onClick={() => {
            dispatch(removeFavouriteFork(value));
          }}
        >
          <img src="https://img.icons8.com/material-outlined/17/000000/trash--v1.png" />
          Remove
        </button>
      </td>
    </tr>
  );
};

export default TableOfFavouriteForks;
