import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFirestoreForks, getFirestoreForksID } from "../../features/githubAPI/githubAPISlice";

// firestore
import { getForks, createFork, deleteFork } from "../../firebase-config";

const TableOfForks = ({ data }) => {
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();

  const firestoreForks = useSelector((state) => state.github.firestoreForks);
  const firestoreForksID = useSelector((state) => state.github.firestoreForksID);

  // On every update of add or remove of favourtite to firestore, getforks will fired
  useEffect(() => {
    getForks(dispatch, getFirestoreForks, getFirestoreForksID);
  }, [counter]);

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
                  if (firestoreForksID.includes(value.id)) {
                    let [temp] = firestoreForks.filter((fork) => fork.id === value.id);
                    deleteFork(temp.firestoreID);
                    setCounter((prev) => prev - 1);
                  } else {
                    createFork(value);
                    setCounter((prev) => prev + 1);
                  }
                }}
              >
                {firestoreForksID.includes(value.id) ? <img src="https://img.icons8.com/emoji/15/000000/star-emoji.png" /> : <img src="https://img.icons8.com/windows/15/000000/star--v1.png" />}
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
