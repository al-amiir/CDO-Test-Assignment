import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCX8X_JfZnFtFY1nYbUARNzcrTbdwSAcAk",
  authDomain: "cdo-test-c448c.firebaseapp.com",
  projectId: "cdo-test-c448c",
  storageBucket: "cdo-test-c448c.appspot.com",
  messagingSenderId: "812606156078",
  appId: "1:812606156078:web:47327de42c6356e1a05ebf",
  measurementId: "G-Q36PJKXW4B",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const firestoreForksCollection = collection(db, "forks");

// Functions
// Explain the logic of adding, removing favourite forks from firestore

//////////////////////////////////////////////////////////////////////////////
// Add fork Function
// This function will add data to firestore.
// {
//  id:~~~~,
//  ownerName:~~~~ ,
//  stars:~~~~
//  url:~~~~
// }
export const createFork = async (value) => {
  await addDoc(firestoreForksCollection, {
    id: value.id,
    ownerName: value.owner.login,
    stars: value.stargazers_count,
    url: value.html_url,
  });
};
//////////////////////////////////////////////////////////////////////////////

// I have in redux two arrays firestoreForks: [],  firestoreForksID: [],
// firestoreForks will contain firestore values
// firestoreForksID will contain id of every value in firestore forks

//////////////////////////////////////////////////////////////////////////////
// Get forks function
// This function will fetch firestore data
// Then I will dispatch to redux the values of firestoreForks it will look like
// [
//    {firestoreID:~~~~~, id:~~~~, ownerName:~~~~ ,stars:~~~~, url:~~~~ }
//    {firestoreID:~~~~~, id:~~~~, ownerName:~~~~ ,stars:~~~~, url:~~~~ }
//    {firestoreID:~~~~~, id:~~~~, ownerName:~~~~ ,stars:~~~~, url:~~~~ }
// ]
// NOTE firestoreID is the id recived from firestore, But id is the id of the fork value
//

// then i will dispatch to redux the values of firestoreForksID it will looks like
// [~~~~, ~~~~, ~~~~ ]
export const getForks = async (dispatch, valuesAction, idAction) => {
  const data = await getDocs(firestoreForksCollection);
  dispatch(valuesAction(data.docs.map((doc) => ({ firestoreID: doc.id, ...doc.data() }))));
  dispatch(idAction(data.docs.map((doc) => doc.data().id)));
};

// The Reson OF This Logic IS:
// on every click to add to firestore or delete, this function will fire
// so your redux will update those values immediately
// i need the first array ( firestoreForks ) to later display values in the table in TableOfFavouriteForks.jsx
// i need the second array ( firestoreForksID ) because when click on favourite button in TableOfForks.jsx
//        you need to check if this one already exist as a favourite or not
//        so in this array, I can quickly scan the ids then add or remove them.
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
// Delete Fork Function
// This function will use an id argument to delete from firestore base
// NOTE the id should be firestoreID not id
export const deleteFork = async (id) => {
  const userDoc = doc(db, "forks", id);
  await deleteDoc(userDoc);
};
//////////////////////////////////////////////////////////////////////////////
