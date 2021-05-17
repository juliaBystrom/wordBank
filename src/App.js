import { Route } from "react-router-dom";
import "./App.css";
import { WordBankModel } from "./models/wordBankModel";
import { firebaseApp } from "./firebase";
import BankPresenter from "./presenters/bankPresenter";
import { AuthPresenter } from "./presenters/AuthPresenter";
import TranslatePresenter from "./presenters/translatePresenter";
import SidebarPresenter from "./presenters/sidebarPresenter";

import {
  AppWrapper,
  HeaderContainer,
  BottomContainer,
  TopContainer,
} from "./styledComponents";

import { useState } from "react";
import { loadFromFirebase } from "./loadFromFirebase";
import { saveToFirebase } from "./saveToFirebase";

function App() {
  require("dotenv").config();
  window.db = firebaseApp.firestore();
  let model = new WordBankModel();


  firebaseApp.firebase_
    .auth()
    .setPersistence(firebaseApp.firebase_.auth.Auth.Persistence.SESSION);

  firebaseApp.auth().onAuthStateChanged(function (user) {
    if (user) {
      model.loggedIn = false;
      model.loadingData(true)
      loadFromFirebase(model, user.uid)
        .then(() => model.setCurrentUser(user.uid))
        .then(() => {
          saveToFirebase(model);
          model.loggedIn = true;
          model.loadingData(false)
        });
    }
  });

  return (
    <AppWrapper>
      <HeaderContainer>
        <SidebarPresenter model={model} />
      </HeaderContainer>
      <TopContainer>
        <TranslatePresenter model={model} />
      </TopContainer>

      <BottomContainer>
        <Route
          exact
          path="/"
          component={() => <AuthPresenter model={model} />}
        />
        <Route
          exact
          path="/bank"
          component={() => {
            return <BankPresenter model={model} />;
          }}
        />
      </BottomContainer>

    </AppWrapper>
  );
}

export default App;
