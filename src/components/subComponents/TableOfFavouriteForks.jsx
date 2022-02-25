import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFirestoreForks, getFirestoreForksID } from "../../features/githubAPI/githubAPISlice";
// firestore
import { getForks, deleteFork } from "../../firebase-config";

const TableOfFavouriteForks = () => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);
  const firestoreForks = useSelector((state) => state.github.firestoreForks);

  // On every remove of favorite to firestore, getforks will be fired
  useEffect(() => {
    getForks(dispatch, getFirestoreForks, getFirestoreForksID);
  }, [counter]);
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
          {firestoreForks.map((value) => (
            <tr key={value.id}>
              <td>{value.ownerName}</td>
              <td>{value.stars}</td>
              <td>
                <a target="_blank" rel="noreferrer" href={`${value.url}`}>
                  link
                </a>
              </td>
              <td>
                <button
                  className="button-remove"
                  onClick={() => {
                    let [temp] = firestoreForks.filter((fork) => fork.id === value.id);
                    deleteFork(temp.firestoreID);
                    setCounter((prev) => prev - 1);
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
