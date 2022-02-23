import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavouriteFork, removeFavouriteFork } from "../../features/githubAPI/githubAPISlice";
const TableOfForks = ({ data }) => {
  const githubFavouriteForks = useSelector((state) => state.github.favourtieForks);
  const dispatch = useDispatch();

  return (
    <table>
      <tbody>
        <tr>
          <th>Owner</th>
          <th>Stars</th>
          <th>URL</th>
          <th>Add to favourite</th>
        </tr>
        {data?.map((value) => (
          <tr key={value.id}>
            <td>{value.owner.login}</td>
            <td>{value.stargazers_count}</td>
            <td>
              <a className="table-link" target="_blank" href={`${value.html_url}`}>
                link
              </a>
            </td>
            <td>
              <button
                className="button-favourite"
                onClick={() => {
                  githubFavouriteForks.hasOwnProperty(value.id) ? dispatch(removeFavouriteFork(value)) : dispatch(addFavouriteFork(value));
                }}
              >
                {githubFavouriteForks.hasOwnProperty(value.id) ? <img src="https://img.icons8.com/emoji/15/000000/star-emoji.png" /> : <img src="https://img.icons8.com/windows/15/000000/star--v1.png" />}
                Favourite
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableOfForks;
