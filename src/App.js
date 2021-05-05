import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import { WordBankModel } from "./models/wordBankModel";
import { firebaseApp } from "./firebase";
import BankPresenter from "./presenters/bankPresenter";
import useModelProp from "./presenters/useModelProp";
import { AuthPresenter } from "./presenters/AuthPresenter";
import { AuthProvider } from "./presenters/AuthProvider";
import TranslatePresenter from "./presenters/translatePresenter";
import SidebarPresenter from "./presenters/sidebarPresenter";
import { useEffect, useState } from "react";
import { loadFromFirebase } from "./loadFromFirebase";

function App() {
  require("dotenv").config();
  window.db = firebaseApp.firestore();
  let model = new WordBankModel();

  firebaseApp.firebase_
    .auth()
    .setPersistence(firebaseApp.firebase_.auth.Auth.Persistence.SESSION);
  firebaseApp.auth().onAuthStateChanged(async function (user) {
    if (user) {
      model.loggedIn = false;
      await loadFromFirebase(model, user.uid);
      model.setCurrentUser(user.uid);
      console.log("Model: ", model);
      model.loggedIn = true;
    }
  });

  return (
    <>
      <TranslatePresenter model={model} />

      <SidebarPresenter model={model} />
      <Route exact path="/" component={() => <AuthPresenter model={model} />} />
      <Route
        exact
        path="/bank"
        component={() => <BankPresenter model={model} />}
      />
    </>
  );
}

export default App;
