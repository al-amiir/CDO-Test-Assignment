import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavouriteFork } from "../../features/githubAPI/githubAPISlice";

const TableOfFavouriteForks = ({ value }) => {
  const dispatch = useDispatch();
  const githubFavouriteForks = useSelector((state) => state.github.favourtieForks);

  return (
    <div>
      <p style={{ fontSize: "31px", color: "white" }}>Table Of Favoutires</p>
      <table style={{ width: "592px" }}>
        <tbody>
          <tr>
            <th>Owner</th>
            <th>Stars</th>
            <th>URL</th>
            <th>Remove from favourite</th>
          </tr>
          {Object.keys(githubFavouriteForks).map((value) => (
            <tr key={value}>
              <td>{githubFavouriteForks[value].owner.login}</td>
              <td>{githubFavouriteForks[value].stargazers_count}</td>
              <td>
                <a target="_blank" rel="noreferrer" href={`${githubFavouriteForks[value].html_url}`}>
                  link
                </a>
              </td>
              <td>
                <button
                  className="button-remove"
                  onClick={() => {
                    dispatch(removeFavouriteFork(githubFavouriteForks[value]));
                  }}
                >
                  <img src="https://img.icons8.com/material-outlined/17/000000/trash--v1.png" alt="trash-icon" />
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableOfFavouriteForks;
