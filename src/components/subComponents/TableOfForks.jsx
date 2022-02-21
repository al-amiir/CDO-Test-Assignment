import React from "react";

const TableOfForks = ({ value }) => {
  return (
    <div>
      <div>{value.full_name}</div>
      <div>{value.owner.login}</div>
      <div>{value.stargazers_count}</div>
      <a target="_blank" href={`${value.html_url}`}>
        link
      </a>
      <div>
        {/* <button
          style={{ width: "90px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
          onClick={() => {
            favourite.hasOwnProperty(value.id) ? setFavourite(delete favourite[value.id]) : setFavourite((prev) => ({ ...prev, [value.id]: value }));
          }}
        >
          {favourite.hasOwnProperty(value.id) ? <img src="https://img.icons8.com/emoji/15/000000/star-emoji.png" /> : <img src="https://img.icons8.com/windows/15/000000/star--v1.png" />}
          Favourite
        </button> */}
      </div>
    </div>
  );
};

export default TableOfForks;
