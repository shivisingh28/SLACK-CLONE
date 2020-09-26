import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyD796iMfugqEZH8UpVdLN4tv96JoqptFTU",
	authDomain: "slack-clone-f0201.firebaseapp.com",
	databaseURL: "https://slack-clone-f0201.firebaseio.com",
	projectId: "slack-clone-f0201",
	storageBucket: "slack-clone-f0201.appspot.com",
	messagingSenderId: "610267647779",
	appId: "1:610267647779:web:2570f9f1b029b3e1928696",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
