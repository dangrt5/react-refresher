import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCX7ijcEvnD8aXr-qEzChhKE6CF2HIH3EI",
  authDomain: "react-refresher.firebaseapp.com",
  databaseURL: "https://react-refresher.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
