import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRpMoP4rszSQuEszRczsGFTkZ79y2Pikg",
  authDomain: "wordbank-99cc5.firebaseapp.com",
  projectId: "wordbank-99cc5",
  storageBucket: "wordbank-99cc5.appspot.com",
  messagingSenderId: "206331525710",
  appId: "1:206331525710:web:cd890d231a4e575745611f",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
