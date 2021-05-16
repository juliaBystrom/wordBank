import React, { useState } from "react";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import * as theme from "./theme";
import { firebaseApp } from "./firebase";
import { WordBankModel } from "./models/wordBankModel";
import { loadFromFirebase } from "./loadFromFirebase";

export const AppWithFirebase = () => {
  require("dotenv").config();
  window.db = firebaseApp.firestore();

  const model = React.useMemo(() => new WordBankModel(), []);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    firebaseApp.firebase_
      .auth()
      .setPersistence(firebaseApp.firebase_.auth.Auth.Persistence.SESSION); // LOCAL
    firebaseApp.auth().onAuthStateChanged(async function (user) {
      if (user) {
        model.setCurrentUser(user.uid);
        await loadFromFirebase(model);
        model.loggedIn = true;
        model.notifyObservers();
        setLoading(false);
      } else {
        alert("YOU HAVE NO ACCOUNT");
      }
    });
  }, [model]);

  if (isLoading) {
    return <div>SPINNER with explaination! about login</div>;
  }
  return <App model={model} />;
};
