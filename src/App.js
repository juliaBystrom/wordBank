import { Route } from "react-router-dom";
import React, { useEffect } from "react";
import "./App.css";
import { Model } from "./model/model";
import { firebaseApp } from "./firebase/firebaseConfig";
import BankPresenter from "./presenters/bankPresenter";
import { AuthPresenter } from "./presenters/authPresenter";
import TranslatePresenter from "./presenters/translatePresenter";
import SidebarPresenter from "./presenters/sidebarPresenter";

import {
  AppWrapper,
  HeaderContainer,
  BottomContainer,
  TopContainer,
} from "./styledComponents";

import { loadFromFirebase } from "./firebase/loadFromFirebase";
import { saveToFirebase } from "./firebase/saveToFirebase";
import useModelProp from "./presenters/useModelProp";

function App() {
  require("dotenv").config();
  window.db = firebaseApp.firestore();

  let model = new Model();

  firebaseApp.firebase_
    .auth()
    .setPersistence(firebaseApp.firebase_.auth.Auth.Persistence.SESSION);

  useEffect(() => {
    return firebaseApp.auth().onAuthStateChanged(function (user) {
      console.log("auth state changed");
      if (user) {
        console.log("user logged in");
        loadFromFirebase(model, user.uid)
          .then(() => model.setCurrentUser(user.uid))
          .then(() => {
            saveToFirebase(model);
            model.loadingData(false);
          });
      }
    });
  }, []);

  return (
    <AppWrapper>
      <HeaderContainer>
        <SidebarPresenter model={model} />
      </HeaderContainer>
      <TopContainer>
        <TranslatePresenter model={model} />
      </TopContainer>

      <BottomContainer>
        <BankPresenter model={model} />

        <AuthPresenter model={model} />

        {/* <Route
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
        /> */}
      </BottomContainer>
    </AppWrapper>
  );
}

export default App;
