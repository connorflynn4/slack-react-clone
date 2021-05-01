import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB_MKhtczLmtFwVudBmEb5jphk-0Xhuh00",
    authDomain: "slack-react-clone-6c90a.firebaseapp.com",
    projectId: "slack-react-clone-6c90a",
    storageBucket: "slack-react-clone-6c90a.appspot.com",
    messagingSenderId: "276702103891",
    appId: "1:276702103891:web:78deee38f9cd4c13c679a6"
  };

//connects front-end to firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider, db };